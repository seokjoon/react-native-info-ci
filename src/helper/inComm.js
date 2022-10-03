import { Dimensions, Platform } from 'react-native'

const inComm = {

  getDimension: () => Dimensions.get('window'),

  isPlatformAndroid: () => Platform.OS === 'android',

  isPlatformIos: () => Platform.OS === 'ios',
}


export default inComm
