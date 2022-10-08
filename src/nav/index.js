import TestTextCom from '../com/Test/Text/TestTextCom'
import { SafeAreaView, Text, View } from 'react-native'
import ComViewStyle from '../style/Com/ComViewStyle'
import ImgCom from '../com/Img/ImgCom'
import ViewScrollCom from '../com/View/ViewScrollCom'
import TaskListConst from '../cont/Task/TaskListConst'
import ViewContainerCom from '../com/View/ViewContainerCom'
import TouchableContainerCom from '../com/Touchable/TouchableContainerCom'


const NavIndex: () => Node = () => {

  let outsItems = [
    <TestTextCom key={1} />,
    <ImgCom key={2} />,
  ]

  return (
    <SafeAreaView style={ComViewStyle.viewRootSafeArea}>
      <View style={ComViewStyle.viewRoot}>

        <ViewScrollCom
          items={outsItems}
          style={ComViewStyle.viewChild}
        />

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
