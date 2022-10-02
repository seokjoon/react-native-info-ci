import { Text } from 'react-native'
import User from '../../../model/User/User'
import BtnTouch from '../../Btn/BtnTouch'
import InputText from '../../Input/InputText'


const TestTextCom = () => {

  let outs = [1, 2].map((v) => <Text key={v}>user {v}</Text>)
  const user = User.create()

  outs = [
    ...outs,
    <Text key={user.id}>{JSON.stringify(user, null, 2)}</Text>,
    <InputText key='TestTextComInputText' />,
    <BtnTouch key='TestTextComBtnTouch' />,
  ]

  return outs
}

export default TestTextCom
