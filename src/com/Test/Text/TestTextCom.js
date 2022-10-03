import { Text, View } from 'react-native'
import User from '../../../model/User/User'
import BtnTouch from '../../Btn/BtnTouch'
import InputText from '../../Input/InputText'
import inComm from '../../../helper/inComm'
import ComViewStyle from '../../../style/Com/ComViewStyle'


const TestTextCom = () => {

  let outs = [1, 2].map((v) => <Text key={v}>user {v}</Text>)
  const user = User.create()

  outs = [
    ...outs,
    <Text key={user.id}>{JSON.stringify(user, null, 2)}</Text>,
    <InputText key='TestTextComInputText' />,
    <BtnTouch key='TestTextComBtnTouch' />,
    <Text key='TestTextComPlatform'>{inComm.isPlatformIos().toString()}</Text>,
    <Text key='TestTextComDimension'>{JSON.stringify(inComm.getDimension(), null, 2)}</Text>,
  ]

  return (
    <View style={[ComViewStyle.viewChild, {backgroundColor: '#eeeeee'}]}>
      {outs}
    </View>
  )
}

export default TestTextCom
