import { ScrollRestoration } from 'react-router-dom'
import Main from 'components/markup/Main'
import H1 from 'components/markup/H1'
import H2 from 'components/markup/H2'
import P from 'components/markup/P'

import instagram from 'assets/instagram-icon.svg'
import facebook from 'assets/facebook-icon.svg'
import strava from 'assets/strava-icon.svg'

const Contact = () => {
  const iconStyle = "h-8 m-3"
  const socialDivStyle = "flex justify-center items-center bg-orange-400 rounded-xl w-fit drop-shadow-lg px-2 mt-6 mx-auto"

  return (
    <Main>
      <H1>Contact</H1>
      <P>
        Do you have questions?
      </P>
      <P>
        Are you interested in sponsoring the Carolina Reaper Road Race?
      </P>
      <P>
        Would you like to volunteer for the event?
      </P>
      <P>
        Would you like to learn more about Where Are We Skating?
      </P>
      <P>
        If so, please contact us at{" "}
        <a
          className="text-orange-500 underline"
          href="mailto:whereareweskating@gmail.com"
        >
          whereareweskating@gmail.com
        </a>
        {" "}or send us a message on any of our social media profiles and we'll get
        back to you as quickly as we can.
      </P>
      <div className={socialDivStyle}> 
        <a href="https://www.instagram.com/reaperroadrace/" target="_blank">
          <img className={iconStyle} src={instagram} alt="Instagram icon" />
        </a>
        <a href="https://www.facebook.com/reaperroadrace" target="_blank">
          <img className={iconStyle} src={facebook} alt="Facebook icon" />
        </a>
        <a href="https://www.strava.com/clubs/1121972" target="_blank">
          <img className={iconStyle} src={strava} alt="Strava icon" />
        </a>
      </div>
      <ScrollRestoration />
    </Main>
  )
}

export default Contact
