import { Text } from 'react-native'

const UserCont = ({user}) => {
  return <Text>{JSON.stringify(user, null, 2)}</Text>
}

export default UserCont
