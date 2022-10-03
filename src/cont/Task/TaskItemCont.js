import { Text, View } from 'react-native'


const TaskItemCont = ({task}) => {
  return (
    <View>
      <Text>{JSON.stringify(task, null, 2)}</Text>
    </View>
  )
}


export default TaskItemCont
