import { Image, ImageBackground } from 'react-native'
import ComViewStyle from '../../style/Com/ComViewStyle'
import inFaker from '../../helper/inFaker'

const ImgCom = () => {

  const outs = (
    <ImageBackground
      style={[ComViewStyle.viewChild, ComViewStyle.imgBg]}
      source={require('../../asset/img/misakaImoto.jpg')}
    >
      <Image
        style={ComViewStyle.imgName}
        source={{uri: inFaker.imgName('fo')}}
      />
    </ImageBackground>
  )

  return (
    outs
  )
}


export default ImgCom
