import { Email } from 'postonents'

const EmailWrapper = ({ children }) => {
  return (
    <Email
      lang='ru'
      title='МИПО - Премия за объем продаж и iPhone 13 PRO'
      headStyles="
    @font-face{
      font-display: swap;
      font-family: Stem;
      src: local(Stem), url(/assets/fonts/stem/Stem-Light.eot);
      src: local(Stem), url(/assets/fonts/stem/Stem-Light.eot?iefix) format('embedded-opentype'), url(/assets/fonts/stem/Stem-Light.ttf) format('truetype'), url(/assets/fonts/stem/Stem-Light.woff) format('woff'), url(/assets/fonts/stem/Stem-Light.woff2) format('woff2');
      font-style: normal;
      font-weight: 300;
    }
    @font-face{
      font-display: swap;
      font-family: Stem;
      src: local(Stem), url(/assets/fonts/stem/Stem-SemiLight.eot);
      src: local(Stem), url(/assets/fonts/stem/Stem-SemiLight.eot?iefix) format('embedded-opentype'), url(/assets/fonts/stem/Stem-SemiLight.ttf) format('truetype'), url(/assets/fonts/stem/Stem-SemiLight.woff) format('woff'), url(/assets/fonts/stem/Stem-SemiLight.woff2) format('woff2');
      font-style: normal;
      font-weight: 400;
    }
    @font-face{
      font-display: swap;
      font-family: Stem;
      src: local(Stem), url(/assets/fonts/stem/Stem-Medium.eot);
      src: local(Stem), url(/assets/fonts/stem/Stem-Medium.eot?iefix) format('embedded-opentype'), url(/assets/fonts/stem/Stem-Medium.ttf) format('truetype'), url(/assets/fonts/stem/Stem-Medium.woff) format('woff'), url(/assets/fonts/stem/Stem-Medium.woff2) format('woff2');
      font-style: normal;
      font-weight: 500;
    }
    @font-face{
      font-display: swap;
      font-family: Stem;
      src: local(Stem), url(/assets/fonts/stem/Stem-Bold.eot);
      src: local(Stem), url(/assets/fonts/stem/Stem-Bold.eot?iefix) format('embedded-opentype'), url(/assets/fonts/stem/Stem-Bold.ttf) format('truetype'), url(/assets/fonts/stem/Stem-Bold.woff) format('woff'), url(/assets/fonts/stem/Stem-Bold.woff2) format('woff2');
      font-style: normal;
      font-weight: 700;
    }
    body { 
      background-color: white; 
    }
  "
      // headLinks={[
      //   {
      //     type: 'link',
      //     props: {
      //       rel: 'stylesheet',
      //       href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,700'
      //     }
      //   }
      // ]}
    >
      {children}
    </Email>
  )
}

export default EmailWrapper
