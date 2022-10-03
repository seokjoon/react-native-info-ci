import inTest from '../../helper/inTest'
import User from '../../model/User/User'
import { FlatList, View } from 'react-native'
import TaskItemCont from './TaskItemCont'
import ComViewStyle from '../../style/Com/ComViewStyle'
import ViewSeparatorCom from '../../com/View/ViewSeparatorCom'

const TaskListConst = () => {

  const tasks = inTest.array(10).map(User.create)

  return (
    <FlatList
      data={tasks}
      renderItem={(task) => <TaskItemCont task={task} />}
      style={ComViewStyle.viewChild}
      ItemSeparatorComponent={() => <ViewSeparatorCom />}
    />
  )
}


export default TaskListConst
