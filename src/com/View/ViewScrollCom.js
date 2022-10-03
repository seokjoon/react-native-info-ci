import { ScrollView } from 'react-native'

const ViewScrollCom = ({items, style}) => {

  return (
    <ScrollView style={style ?? ''}>
      {items}
    </ScrollView>
  )
}


export default ViewScrollCom
