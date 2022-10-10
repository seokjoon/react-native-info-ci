import inTest from '../../helper/inTest'
import { ScrollView, View } from 'react-native'
import User from '../../model/User/User'
import UserCont from '../../cont/User/UserCont'
import ComViewStyle from '../../style/Com/ComViewStyle'
import { useMemo } from 'react'


const users = inTest.array(10).map(User.create)

const TestScrollCom = () => {

  const outs = useMemo(() => (
    users.map(user => (<UserCont key={user.id} user={user} />))
  ), [])

  return (

    <ScrollView style={ComViewStyle.viewChild}>
      {outs}
    </ScrollView>
  )
}


export default TestScrollCom
