import { Text, View } from 'react-native'
import User from '../../../model/User/User'
import BtnTouchCom from '../../Btn/BtnTouchCom'
import InputTextCom from '../../Input/InputTextCom'
import inComm from '../../../helper/inComm'
import ComViewStyle from '../../../style/Com/ComViewStyle'
import ComTextStyle from '../../../style/Com/ComTextStyle'


const TestTextCom = () => {

  let outs = [1, 2].map((v) => <Text key={v}>user {v}</Text>)
  const user = User.create()

  outs = [
    ...outs,
    <View key='TestTextComItemsHor' style={ComViewStyle.itemsHor}>
      <Text> a | b | c </Text>
    </View>,
    <Text key={user.id}>{JSON.stringify(user, null, 2)}</Text>,
    <InputTextCom key='TestTextComInputText' />,
    <BtnTouchCom key='TestTextComBtnTouch' />,
    <Text key='TestTextComPlatform' style={[
      ComTextStyle.textBold,
      ComTextStyle.textAlignCenter,
    ]}>{inComm.isPlatformIos().toString()}</Text>,
    <Text key='TestTextComDimension'>{JSON.stringify(inComm.getDimension(), null, 2)}</Text>,
  ]

  return (
    <View style={[ComViewStyle.viewChild, {backgroundColor: '#eeeeee'}]}>
      {outs}
    </View>
  )
}

export default TestTextCom
