import { headerLogoStyles as stls } from './headerLogoStyles'
import {
  Header,
} from 'postonents'

const HeaderLogo = () => {
  return (
    <Header
      logo='https://res.cloudinary.com/mipinstitute/image/upload/v1629971752/temp%20ipo%20email/logo_yclf1h.png'
      title={
        <>
          Московский институт <br /> профессионального образования
        </>
      }
      logoHeight={68}
      style={stls.container}></Header>
  )
}

export default HeaderLogo
