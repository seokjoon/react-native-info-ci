import { Platform, StyleSheet } from 'react-native'
import { Colors } from 'react-native-paper'
import Color from 'color'


const ComViewStyle = StyleSheet.create({
  itemsHor: {
    alignItems: 'center',
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
  },

  viewChild: {
    backgroundColor: Color(Colors.grey200).alpha(0.5).lighten(0.5).string(),
    borderColor: Colors.grey400,
    borderStyle: 'solid',
    borderRadius: 20,
    borderWidth: 1,
    height: 400, //'30%',
    margin: '5%',
  },

  viewRoot: {
    backgroundColor: Color.white,
    padding: Platform.select({ android: '5%', ios: '5%', }),
    flex: 1,
  },

  viewRootSafeArea: {
    flex: 1,
  },

  viewSeparator: {
    borderColor: Colors.grey600,
    borderWidth: 1,
  },
})


export default ComViewStyle
