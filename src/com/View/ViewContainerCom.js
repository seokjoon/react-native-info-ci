import { View } from 'react-native'
import { ReactNode } from 'react'
import { FC } from 'react'


type ViewContainerComProps = {
  children?: ReactNode
}


const ViewContainerCom: FC<ViewContainerComProps> = ({children}) => {
  return (
    <View>
      {children}
    </View>
  )
}


export default ViewContainerCom
