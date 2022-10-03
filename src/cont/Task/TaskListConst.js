import inTest from '../../helper/inTest'
import User from '../../model/User/User'
import { FlatList } from 'react-native'
import TaskItemCont from './TaskItemCont'
import ComViewStyle from '../../style/Com/ComViewStyle'

const TaskListConst = () => {

  const tasks = inTest.array(10).map(User.create)

  return (
    <FlatList
      data={tasks}
      renderItem={(task) => <TaskItemCont task={task} />}
      style={ComViewStyle.viewChild}
    />
  )
}


export default TaskListConst
