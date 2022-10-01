import { Text } from 'react-native'
import UserCreate from '../../../type/UserCreate'


const TestTextCom: () => Node = () => {

  let outs = [1, 2].map((v) => <Text key={v}>user {v}</Text>)
  const user = UserCreate()

  outs = [
    ...outs,
    <Text key={user.id}>{JSON.stringify(user, null, 2)}</Text>,
  ]

  return outs
}

export default TestTextCom
