import { TextInput } from 'react-native'

const InputTextCom = ({defaultValue}) => {

  let outs = <TextInput
    defaultValue={defaultValue ?? ''}
    onBlur={() => console.log('onBlur')}
    onChangeText={(val: string) => console.log(val)}
    onEndEditing={() => console.log('onEndEditing')}
    onFocus={() => console.log('onFocus')}
    placeholder='placeholder'
  >

  </TextInput>

  return outs
}


export default InputTextCom
