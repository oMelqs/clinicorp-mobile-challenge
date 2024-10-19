import {View} from 'react-native'
import {Card, Checkbox, Text} from 'react-native-paper'
import styles from './styles'

interface TasksProps {
  task: {
    title: string
    description: string
    image?: string
  }
}

export const Tasks = ({task}: TasksProps) => {
  return (
    <Card style={styles.card} mode="contained">
      <Card.Content style={styles.cardContent}>
        <Checkbox status="unchecked" />
        <View style={styles.cardTexts}>
          <Text variant="titleMedium">{task.title}</Text>
          <Text variant="bodyMedium">{task.description}</Text>
        </View>
      </Card.Content>
      {task.image && (
        <Card.Cover style={styles.cardCover} source={{uri: task.image}} />
      )}
    </Card>
  )
}
