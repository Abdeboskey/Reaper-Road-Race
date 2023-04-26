import H1 from 'components/markup/H1'
import P from 'components/markup/P'
import Main from 'components/markup/Main'

const About = () => {

  return (
    <Main>
      <H1>About</H1>
      <P>
        Welcome to the first annual Carolina Reaper Road Race, presented by
        Where Are We Skating!
      </P>
      <P>
        We’re thrilled to bring you this exciting celebration of skating and
        the South Carolina community, uniting skaters from all over the country
        for a thrilling race along the scenic roads of the Palmetto State. But
        where did it all begin?
      </P>
      <P>
        It all started with Where Are We Skating: a newly-forged skate event
        production company based in Colorado, dedicated to creating
        unforgettable experiences for skaters of all levels. While this is our
        first Carolina Reaper Road Race, we have experience organizing a variety of
        acclaimed events in the past, ranging from local skate nights to national
        competitions (such as the famed{" "} 
        <a
          className="text-orange-500 underline"
          href="https://www.a2a.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Athens to Atlanta Road Skate
        </a>
        ).
      </P>
      <P>
        The idea for the Carolina Reaper Road Race came about as we were
        brainstorming ways to showcase the beauty of South Carolina while
        providing a challenging and exciting skating experience. We wanted to
        create a race that would test skaters’ skills and endurance while also
        highlighting the state’s rich history and culture. After months of
        planning, we’re proud to present the first-ever outdoor inline & roller
        skating race in South Carolina.
      </P>
      <P>
        We’re very excited to see skaters from all over the country come
        together to compete, make new friends, and enjoy the South Carolina
        hospitality. We hope this event will become a must-attend for inline &
        roller skating enthusiasts and we can’t wait to share it with you.
      </P>
      <P>
        Thank you for joining us on this journey - we look forward to seeing
        you at the start line on June 10th in Greenville!
      </P>
    </Main>
  )
}

export default About
