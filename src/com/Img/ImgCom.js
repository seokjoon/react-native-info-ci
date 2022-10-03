import { Image, ImageBackground } from 'react-native'
import ComViewStyle from '../../style/Com/ComViewStyle'
import ComImgStyle from '../../style/Com/ComImgStyle'
import inFaker from '../../helper/inFaker'

const ImgCom = () => {

  const outs = (
    <ImageBackground
      style={[ComViewStyle.viewChild, ComImgStyle.imgBg]}
      source={require('../../asset/img/misakaImoto.jpg')}
    >
      <Image
        style={ComImgStyle.imgName}
        source={{uri: inFaker.imgName('fo')}}
      />
    </ImageBackground>
  )

  return (
    outs
  )
}


export default ImgCom
