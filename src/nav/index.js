import TestTextCom from '../com/Test/Text/TestTextCom'
import { SafeAreaView } from 'react-native'
import ComViewStyle from '../style/Com/ComViewStyle'
import ImgCom from '../com/Img/ImgCom'
import ViewScrollCom from '../com/View/ViewScrollCom'
import TaskListConst from '../cont/Task/TaskListConst'

const NavIndex: () => Node = () => {

  let outsItems = [
    <TestTextCom key={1} />,
    <ImgCom key={2} />,
    <TaskListConst key={3} />,
  ]

  return (
    <SafeAreaView style={ComViewStyle.viewRootSafeArea}>
      <ViewScrollCom
        items={outsItems}
        style={ComViewStyle.viewRoot}
      />
    </SafeAreaView>
  )
}

export default NavIndex
