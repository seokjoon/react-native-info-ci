import inComm from '../../../helper/inComm'
import { ScrollView } from 'react-native'
import User from '../../../model/User/User'
import UserCont from '../../../cont/User/UserCont'

const users = inComm.array(10).map(User.create)

const TestScrollCom = () => {

  const outs = users.map(user => (<UserCont key={user.id} user={user} />))

  return <ScrollView>{outs}</ScrollView>
}


export default TestScrollCom
