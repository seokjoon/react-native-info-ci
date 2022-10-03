import { Text } from 'react-native'


const TaskItemCont = ({task}) => {
  return <Text>{JSON.stringify(task, null, 2)}</Text>
}


export default TaskItemCont
