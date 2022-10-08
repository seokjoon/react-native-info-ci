import { ReactNode } from 'react'
import { FC } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { ComponentProps } from 'react'
import { StyleProp } from 'react-native'
import { ViewStyle } from 'react-native'


type TouchableOpacityProps = ComponentProps<typeof TouchableOpacity>

//export type TouchableContainerComProps = TouchableOpacityProps
export type TouchableContainerComProps = TouchableOpacityProps & {
  children?: ReactNode,
  viewStyle?: StyleProp<ViewStyle>,
}


const TouchableContainerCom: FC<TouchableContainerComProps> = ({
  children,
  viewStyle,
  ...touchableProps
}) => {
  return (
    <TouchableOpacity {...touchableProps}>
      <View style={[viewStyle]}>
        {children}
      </View>
    </TouchableOpacity>
  )
}


export default TouchableContainerCom
