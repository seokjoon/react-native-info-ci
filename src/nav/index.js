import TestTextCom from '../com/Test/Text/TestTextCom'
import { SafeAreaView, View } from 'react-native'
import TestScrollCom from '../com/Test/Scroll/TestScrollCom'
import ComViewStyle from '../style/Com/ComViewStyle'

const NavIndex: () => Node = () => {


  return (
    <SafeAreaView style={ComViewStyle.viewRootSafeArea}>
      <View style={ComViewStyle.viewRoot}>
        <TestTextCom />
        <TestScrollCom />
      </View>
    </SafeAreaView>
  )
}

export default NavIndex
