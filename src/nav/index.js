import TestTextCom from '../com/Test/Text/TestTextCom'
import { SafeAreaView, Text } from 'react-native'
import TestScrollCom from '../com/Test/Scroll/TestScrollCom'

const NavIndex: () => Node = () => {

  //let outs = <TestTextCom />
  let outs = <TestScrollCom />

  outs = <SafeAreaView>{outs}</SafeAreaView>

  return outs
}

export default NavIndex
