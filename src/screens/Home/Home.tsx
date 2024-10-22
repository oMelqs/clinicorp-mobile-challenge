import {View, ScrollView, Dimensions} from 'react-native'
import styles from './styles'
import {Text, Button, ActivityIndicator, IconButton} from 'react-native-paper'
import React, {useState} from 'react'
import CreateTask from '@/components/Tasks/Features/CreateTask'
import Tasks from '@/components/Tasks'
import {useTasks} from '@/contexts/tasks/Tasks.context'
import {useAuth} from '@/contexts/auth/Auth.context'

const {width} = Dimensions.get('window')

export const Home = () => {
  const {tasks, loading} = useTasks()
  const {logout} = useAuth()
  const [createTaskVisible, setCreateTaskVisible] = useState(false)
  const handleCreate = () => {
    setCreateTaskVisible(true)
  }
  const handleLogout = async () => {
    await logout()
  }

  const getTasksByStatus = (status: number) => {
    return tasks.filter((task) => task.status === status)
  }

  if (loading) {
    return (
      <View style={styles.main}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <View style={styles.main}>
      {tasks.length > 0 ? (
        <>
          <View style={styles.titleContainer}>
            <View style={styles.exitContainer}>
              <Button icon="exit-to-app" mode="text" onPress={handleLogout}>
                Sair
              </Button>
              <Text style={styles.title} variant="titleLarge">
                Tarefas
              </Text>
            </View>
            <Button icon="plus" mode="contained" onPress={handleCreate}>
              Criar
            </Button>
          </View>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}>
            <ScrollView style={[styles.column, {width}]}>
              <Text style={styles.columnTitle} variant="titleLarge">
                To-Do
              </Text>
              {getTasksByStatus(0).map((task, index) => (
                <Tasks key={index} task={task} />
              ))}
            </ScrollView>
            <ScrollView style={[styles.column, {width}]}>
              <Text style={styles.columnTitle} variant="titleLarge">
                Doing
              </Text>
              {getTasksByStatus(1).map((task, index) => (
                <Tasks key={index} task={task} />
              ))}
            </ScrollView>
            <ScrollView style={[styles.column, {width}]}>
              <Text style={styles.columnTitle} variant="titleLarge">
                Done
              </Text>
              {getTasksByStatus(2).map((task, index) => (
                <Tasks key={index} task={task} />
              ))}
            </ScrollView>
          </ScrollView>
        </>
      ) : (
        <View style={styles.container}>
          <Text style={styles.text} variant="titleLarge">
            Você ainda não tem nenhuma tarefa cadastrada! Crie uma tarefa para
            visualizar o quadro.
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              style={styles.button}
              onPress={handleCreate}>
              Criar
            </Button>
            <Button
              mode="contained-tonal"
              style={styles.button}
              onPress={handleLogout}>
              Sair
            </Button>
          </View>
        </View>
      )}
      <CreateTask
        createTaskVisible={createTaskVisible}
        createTaskHide={() => setCreateTaskVisible(false)}
      />
    </View>
  )
}
