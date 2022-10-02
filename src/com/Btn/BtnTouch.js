import { Alert, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import inConst from '../../helper/inConst'


const BtnTouch = ({onPress, type}) => {

  onPress = onPress ? onPress : onPressDefault

  let outs = <Text>foo</Text>
  switch (type) {
    case inConst.BTN.TOUCH.TYPE.HIGHLIGHT:
      outs = <TouchableHighlight onPress={onPress}>
        {outs}
      </TouchableHighlight>
      break;
    case inConst.BTN.TOUCH.TYPE.OPACITY:
    default:
      outs = <TouchableOpacity onPress={onPress}>
        {outs}
      </TouchableOpacity>
      break
  }

  return outs
}

const onPressDefault = () => {
  Alert.alert('foo', 'bar')
}


export default BtnTouch
