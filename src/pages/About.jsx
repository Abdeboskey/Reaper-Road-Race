import { ScrollRestoration } from 'react-router-dom'
import H1 from 'components/markup/H1'
import P from 'components/markup/P'
import Main from 'components/markup/Main'

const About = () => {

  return (
    <Main>
      <H1>About</H1>
      <P>
        Where Are We Skating is excited to present the Carolina Reaper Road
        Race.
      </P>
      <P>
        Where Are We Skating was formed to create events that instill the
        passion for community, adventure, personal challenge, and profound joy
        that skating can provide. Skaters everywhere deserve more opportunities
        to come together, make new friends, compete, and challenge their own
        limits.
      </P>
      <P>
        Greenville, SC is home to the annual Hincapie Spring Series for
        cyclists, and upon sampling this spicy 7.2-mile loop with our skates,
        it checked all the right boxes: great roads, low traffic, and plenty of
        hills - both the up and down kind. We decided it would be the perfect
        skating venue, and thus the Carolina Reaper Road Race was born.
      </P>
      <P>
        Where Are We Skating is proud to offer this outdoor inline
        & roller skating race in Greenville. We couldn’t do any of this without
        you, so thank you for joining us on this journey. We look forward to
        seeing you at the start line!
      </P>
      <P>
        Sincerely,
      </P>
      <P>
        Where Are We Skating, LLC<br/>
        Together is our destination
      </P>
      <ScrollRestoration />
    </Main>
  )
}

export default About
