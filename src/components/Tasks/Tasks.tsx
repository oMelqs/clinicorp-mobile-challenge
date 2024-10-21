import {View} from 'react-native'
import {Card, Checkbox, Text} from 'react-native-paper'
import styles from './styles'
import {Task, useTasks} from '@/contexts/tasks/Tasks.context'
import {useState} from 'react'

interface TasksProps {
  task: Task
}

export const Tasks = ({task}: TasksProps) => {
  const [checked, setChecked] = useState(false)
  const {updateTaskStatus} = useTasks()

  const handleUpdateStatus = async () => {
    setChecked(true)
    if (task.status === 0 || task.status === 1) {
      await updateTaskStatus(task.id, task.status + 1)
      setChecked(false)
    }
  }

  return (
    <Card style={styles.card} mode="contained">
      <Card.Content style={styles.cardContent}>
        {task.status !== 2 && (
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={handleUpdateStatus}
            testID={`checkbox-${task.title}`}
          />
        )}
        <View style={styles.cardTexts}>
          <Text
            variant="titleMedium"
            style={
              task.status === 2 ? {textDecorationLine: 'line-through'} : {}
            }>
            {task.title}
          </Text>
          <Text
            variant="bodyMedium"
            style={
              task.status === 2 ? {textDecorationLine: 'line-through'} : {}
            }>
            {task.description}
          </Text>
        </View>
      </Card.Content>
      {task.image && (
        <Card.Cover
          style={styles.cardCover}
          source={{uri: task.image}}
          testID="image"
        />
      )}
    </Card>
  )
}
