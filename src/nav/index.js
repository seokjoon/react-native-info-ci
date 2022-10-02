import TestTextCom from '../com/Test/Text/TestTextCom'
import { SafeAreaView, Text, View } from 'react-native'
import TestScrollCom from '../com/Test/Scroll/TestScrollCom'

const NavIndex: () => Node = () => {
  return <SafeAreaView>
    <TestTextCom />
    <TestScrollCom />
  </SafeAreaView>
}

export default NavIndex
