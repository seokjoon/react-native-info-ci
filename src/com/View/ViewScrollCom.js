import { ScrollView } from 'react-native'

const ViewScrollCom = ({horizontal, items, style}) => {

  return (
    <ScrollView horizontal={(horizontal ?? false)} style={style ?? ''}>
      {items}
    </ScrollView>
  )
}


export default ViewScrollCom
