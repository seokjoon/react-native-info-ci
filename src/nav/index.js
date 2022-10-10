import TestTextCom from '../com/Test/TestTextCom'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import ComViewStyle from '../style/Com/ComViewStyle'
import ImgCom from '../com/Img/ImgCom'
import ViewScrollCom from '../com/View/ViewScrollCom'
import TaskListConst from '../cont/Task/TaskListConst'
import ViewContainerCom from '../com/View/ViewContainerCom'
import TouchableContainerCom from '../com/Touchable/TouchableContainerCom'
import TestClockCom from '../com/Test/TestClockCom'


const NavIndex: () => Node = () => {

  const outsItems = [
    <TestClockCom key={1} />,
    <TestTextCom key={2} />,
    <ImgCom key={3} />,
  ]

  return (
    <SafeAreaView style={ComViewStyle.viewRootSafeArea}>
      <View style={ComViewStyle.viewRoot}>

        <ViewScrollCom items={outsItems} style={ComViewStyle.viewChild} />

        <ViewScrollCom horizontal items={<Text>fooooooooooooooo</Text>} />

        <ViewContainerCom>
          <TouchableContainerCom>
            <Text>foo</Text>
          </TouchableContainerCom>
        </ViewContainerCom>

        <TaskListConst key={3} style={ComViewStyle.viewChild} />

      </View>
    </SafeAreaView>
  )
}


export default NavIndex
