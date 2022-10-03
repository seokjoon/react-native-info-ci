import { Platform, StyleSheet } from 'react-native'
import { Colors } from 'react-native-paper'
import Color from 'color'


const ComViewStyle = StyleSheet.create({
  imgName: {
    alignSelf: 'center',
    height: 100,
    width: 100,
  },

  imgBg: {
    flex: 1,
  },

  itemsHor: {
    alignItems: 'center',
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
  },

  textAlignCenter: {
    textAlign: 'center',
  },

  textBold: {
    fontWeight: 'bold',
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
})


export default ComViewStyle
