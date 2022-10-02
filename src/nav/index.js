import TestTextCom from '../com/Test/Text/TestTextCom'
import { SafeAreaView, StyleSheet } from 'react-native'
import TestScrollCom from '../com/Test/Scroll/TestScrollCom'
import ComViewStyle from '../style/Com/ComViewStyle'

const NavIndex: () => Node = () => {


  return (
    <SafeAreaView style={[ComViewStyle.foo, {backgroundColor: '#eeeeee'}]}>
      <TestTextCom />
      <TestScrollCom />
    </SafeAreaView>
  )
}

export default NavIndex
