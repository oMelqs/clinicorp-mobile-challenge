import React, {createContext, useContext, useEffect, useState} from 'react'
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {db, storage} from '@/services/firebase'
import {useAuth} from '../auth/Auth.context'

export interface Task {
  id: string
  title: string
  description: string
  status: number
  image: string
}

interface TasksContextProps {
  tasks: Task[]
  createTask: (
    title: string,
    description: string,
    imageUri: string | null,
  ) => Promise<void>
  updateTaskStatus: (taskId: string, status: number) => Promise<void>
  deleteTask: (taskId: string) => Promise<void>
  loading: boolean
}

const TasksContext = createContext<TasksContextProps | undefined>(undefined)

export const useTasks = () => {
  const context = useContext(TasksContext)
  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider')
  }
  return context
}

export const TasksProvider = ({children}: {children: React.ReactNode}) => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const {currentUser} = useAuth()

  const fetchTasks = async () => {
    if (!currentUser) return
    setLoading(true)
    try {
      const q = query(
        collection(db, 'tasks'),
        where('userID', '==', currentUser.email),
      )
      const querySnapshot = await getDocs(q)
      const tasksData: Task[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Task[]
      setTasks(tasksData)
    } catch (error) {
      console.error('Erro ao buscar tasks:', error)
    } finally {
      setLoading(false)
    }
  }

  const createTask = async (
    title: string,
    description: string,
    imageUri: string | null,
  ) => {
    if (!currentUser) return
    try {
      let imageUrl = ''
      if (imageUri) {
        const imageRef = ref(storage, `tasks/${Date.now()}`)
        const response = await fetch(imageUri)
        const blob = await response.blob()
        await uploadBytes(imageRef, blob)
        imageUrl = await getDownloadURL(imageRef)
      }

      await addDoc(collection(db, 'tasks'), {
        title,
        description,
        status: 0,
        userID: currentUser.email,
        image: imageUrl,
      })
    } catch (error) {
      console.error('Erro ao criar task:', error)
    } finally {
      fetchTasks()
    }
  }

  const updateTaskStatus = async (taskId: string, status: number) => {
    if (status < 0 || status > 2) return
    try {
      const taskRef = doc(db, 'tasks', taskId)
      await updateDoc(taskRef, {status})
      fetchTasks()
    } catch (error) {
      console.error('Erro ao atualizar task:', error)
    }
  }

  const deleteTask = async (taskId: string) => {
    try {
      const taskRef = doc(db, 'tasks', taskId)
      await deleteDoc(taskRef)
      fetchTasks()
    } catch (error) {
      console.error('Erro ao excluir task:', error)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [currentUser])

  return (
    <TasksContext.Provider
      value={{tasks, createTask, updateTaskStatus, deleteTask, loading}}>
      {children}
    </TasksContext.Provider>
  )
}
