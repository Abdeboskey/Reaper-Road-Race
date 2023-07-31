import { ScrollRestoration } from 'react-router-dom'
import H1 from 'components/markup/H1'
import P from 'components/markup/P'
import Main from 'components/markup/Main'

const About = () => {

  return (
    <Main>
      <H1>About</H1>
      <P>
        It is with much excitement that we present the Carolina
        Reaper Road Race, brought to you by Where Are We Skating.
      </P>
      <P>
        Where Are We Skating is a team of lifelong skaters who share a passion
        for the community, adventure, personal challenge, and profound joy that
        skating provides. Our mission is to create events that instill these
        same feelings in others, as we believe skaters everywhere deserve more
        opportunities to come together, make new friends, compete, and
        challenge their own limits.
      </P>
      <P>
        Our team has attended numerous skating events across the country, and
        have been involved in producing a variety of skating experiences
        ranging from local skate nights to long-standing, internationally
        renowned events such as the historic{" "} 
        <a
          className="text-orange-500 underline"
          href="https://www.a2a.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Athens to Atlanta Road Skate
        </a>
        .
      </P>
      <P>
        As skaters, we are always on the lookout for the next beautiful place
        to skate. Greenville, SC is home to the annual Hincapie Spring Series
        for cyclists, and after hearing great things about the Donaldson
        course, we had to check it out for ourselves. Upon sampling this spicy
        7.2-mile loop with our skates, it checked all the right boxes: great
        roads, low traffic, and plenty of hills - both the up and down kind. We
        decided it would be the perfect skating venue, and thus
        the Carolina Reaper Road Race was born.
      </P>
      <P>
        We’re proud to offer this adventurous outdoor inline & roller skating
        race in Greenville. We couldn’t do any of this without you, so thank
        you for joining us on this journey. We look forward to seeing you at
        the start line!
      </P>
      <ScrollRestoration />
    </Main>
  )
}

export default About
