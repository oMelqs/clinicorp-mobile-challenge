import React, {useState} from 'react'
import {Modal, Text, Button, TextInput, IconButton} from 'react-native-paper'
import {Alert, Pressable, View} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import styles from './styles'
import {Image} from 'expo-image'
import {useTasks} from '@/contexts/tasks/Tasks.context'

interface CreateTaskProps {
  createTaskVisible: boolean
  createTaskHide: () => void
}

export const CreateTask = ({
  createTaskVisible,
  createTaskHide,
}: CreateTaskProps) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<string | null>(null)
  const {createTask} = useTasks()

  const handleAddImgGallery = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync()
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })
    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const handleAddImgCamera = async () => {
    await ImagePicker.requestCameraPermissionsAsync()
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    })
    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const handleAddImg = async () => {
    Alert.alert(
      'Escolher imagem',
      'De onde você gostaria de buscar sua imagem?',
      [
        {
          text: 'Cancelar',
        },
        {
          text: 'Câmera',
          onPress: handleAddImgCamera,
          style: 'cancel',
        },
        {text: 'Galeria', onPress: handleAddImgGallery},
      ],
    )
  }

  const handleCreateTask = async () => {
    await createTask(
      {
        title,
        description,
      },
      image,
    )
    createTaskHide()
  }

  return (
    <Modal
      visible={createTaskVisible}
      onDismiss={createTaskHide}
      contentContainerStyle={styles.container}
      style={styles.modal}>
      <View style={styles.titleContainer}>
        <Text style={styles.title} variant="titleLarge">
          Criar tarefa
        </Text>
        <IconButton icon="close" onPress={createTaskHide} />
      </View>
      <Text variant="labelLarge">Imagem</Text>
      {image ? (
        <Pressable onPress={handleAddImg}>
          <Image
            style={styles.imageContainer}
            alt="cover"
            source={{uri: image}}
            contentFit="contain"
          />
        </Pressable>
      ) : (
        <Pressable style={styles.imageContainer} onPress={handleAddImg}>
          <IconButton icon="image" />
        </Pressable>
      )}

      <Text variant="labelLarge">Título</Text>
      <TextInput
        mode="outlined"
        label="Digite o título da tarefa"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <Text variant="labelLarge">Descrição</Text>
      <TextInput
        mode="outlined"
        label="Digite uma breve descrição da tarefa"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Button style={styles.button} mode="contained" onPress={handleCreateTask}>
        Criar tarefa
      </Button>
    </Modal>
  )
}
