import { Link } from 'react-router-dom'
import H1 from 'components/markup/H1'
import H2 from 'components/markup/H2'
import H3 from 'components/markup/H3'
import P from 'components/markup/P'
import Main from 'components/markup/Main'
import List from 'components/markup/List'
import CtaButton from 'components/CtaButton'
import CategoryContainer from 'components/CategoryContainer'

import fullLogo from 'assets/color_logo_full.svg'
import heroBG from 'assets/skaters.jpg'

const Home = () => {

  return (
    <div>
      <div className="relative w-screen text-white">
        <img
          className="h-[45vh] object-cover md:h-auto md:w-screen overflow-hidden"
          src={heroBG}
          alt="Inline skaters standing next to each other on a road"
        />
        <img
          className="absolute inset-x-1/2 -translate-x-1/2 inset-y-1/2 -translate-y-1/2 w-11/12 md:w-1/2"
          src={fullLogo}
          alt="Carolina Reaper Road Race Logo"
        />
      </div>
      <Main>
        <H1>
          The first skating race in Greenville, SC
        </H1>
        <H3>
          Saturday, June 10th, 2023
        </H3>
        <div className="text-center">
          <Link
            className="text-orange-500 underline"
            to="https://www.google.com/maps/place/198+Perimeter+Rd,+Greenville,+SC+29605/@34.7585998,-82.3836133,17z/data=!3m1!4b1!4m5!3m4!1s0x88582529a634e101:0x7bc26727bda9d7d6!8m2!3d34.7585998!4d-82.3814246"
          >
            198 Perimeter Rd, Greenville, SC 29605
          </Link>
        </div>
        <P center>
          Start your skates a'sizzlin at the first
          annual Carolina Reaper Road Race.
        </P>
        <H2>Distance Options</H2>
        <CategoryContainer />
        <CtaButton dark/>
        <H2>Registration Fees</H2>
        <List>
          {[
            "11.5K - $40",
            "Moreathon - $80",
            "Moreathon Relay Team - $140",
          ]}
        </List>
        <P>
          Pre-Register by May 26, 2023 to guarantee your t-shirt size.
        </P>
        <P>
          Online Registration closes on June 8, 2023.
        </P>
        <P>
          On-Site registration will be available on June 10, 2023, from 8:00 AM
          - 9:00 AM for an additional $10 per category.
        </P>
        <H2>Categories</H2>
        <div className="md:flex justify-around">
          <div>
            <H3>11.5K & Moreathon</H3>
            <List>
              {[
                "Men's & Women's Overall Inline",
                "Men's & Women's Overall Quad",
                "Men's & Women's 12 & Under",
                "Men's & Women's 13-18"
              ]}
            </List>
          </div>
          <div>
            <H3>Moreathon Relay</H3>
            <List>
              {[
                "Top 3 Overall Teams",
                "Best Team Name",
              ]}
            </List>
          </div>
        </div>
        <P center>
          * Age categories are determined by age of participant on race day. *
        </P>
        <CtaButton dark/>
      </Main>
    </div>
  )
}

export default Home
