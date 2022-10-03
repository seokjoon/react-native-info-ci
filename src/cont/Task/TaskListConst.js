import inTest from '../../helper/inTest'
import User from '../../model/User/User'
import { View } from 'react-native'
import TaskItemCont from './TaskItemCont'
import ComViewStyle from '../../style/Com/ComViewStyle'

const TaskListConst = () => {

  const tasks = inTest.array(10).map(User.create)

  const outs = tasks.map(task => (<TaskItemCont key={task.id} task={task} />))

  return (
    <View style={ComViewStyle.viewChild}>
      {outs}
    </View>
  )

}


export default TaskListConst
