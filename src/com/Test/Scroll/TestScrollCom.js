import inComm from '../../../helper/inComm'
import UserCreate from '../../../type/UserCreate'
import { SafeAreaView, ScrollView, Text } from 'react-native'

const users = inComm.array(10).map(UserCreate)

const TestScrollCom: () => Node = () => {

  const outs = users.map(user => (<Text key={user.id}>{JSON.stringify(user, null, 2)}</Text>))

  return (
    <SafeAreaView>
      <ScrollView>{outs}</ScrollView>
    </SafeAreaView>
  )
}


export default TestScrollCom
