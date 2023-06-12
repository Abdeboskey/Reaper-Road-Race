import { Link, ScrollRestoration } from 'react-router-dom'
import H1 from 'components/markup/H1'
import H2 from 'components/markup/H2'
import H3 from 'components/markup/H3'
import P from 'components/markup/P'
import List from 'components/markup/List'
import Main from 'components/markup/Main'
import Section from 'components/markup/Section'
import CtaButton from 'components/CtaButton'
import CategoryContainer from 'components/CategoryContainer'
import SwampRabbitSocial from 'components/SwampRabbitSocial'
import AddressLink from 'components/AddressLink'

const RaceInfo = () => {
  const linkStyle = "w-fit text-orange-500 underline mx-auto my-3 cursor-pointer"

  const handleClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Main>
      <Section>
      <H1>Race Info</H1>
        <P center>Here you can learn more about:</P>
        <p className={linkStyle} onClick={() => handleClick("course")}>Course Info</p>
        <p className={linkStyle} onClick={() => handleClick("options")}>Event Options & Schedule</p>
        <p className={linkStyle} onClick={() => handleClick("relay")}>Relay Info</p>
        <p className={linkStyle} onClick={() => handleClick("awards")}>Awards</p>
        <p className={linkStyle} onClick={() => handleClick("safety")}>Safety Info</p>
      </Section>
      <Section>
        <H2 id="course">Course Info 📍</H2>
        <iframe className="w-full aspect-[4/5] md:aspect-[4/4] lg:aspect-[4/3]" frameBorder="0" allowtransparency="true" scrolling="no" src="https://strava-embeds.com/route/3081790995408919376"></iframe>
        <P center>Start/Finish/Parking:</P>
        <AddressLink />
        <P>
          All divisions of the race will be held on a 7.2 mile clockwise loop.
          11.5K entrants will complete a single lap of the course, and the
          Moreathon and relay team entrants will complete 4 laps of the course,
          totaling 28.8 miles. The loop is hilly, but each downhill rolls out.
          Skaters must be comfortable controlling their speed downhill, and
          completing a right-hand turn on a downhill slope.
        </P>
        <P>
          The loop has one right-hand turn close to the start/finish line which
          will be monitored by a course marshal. The loop is an open, low
          traffic, road course. Skaters must observe the "yellow line rule", that
          is, they must not cross the yellow line during the event.
        </P>
        <P>
          In approximately the last 200 meters leading up to the start/finish
          line the road splits into 2 lanes. This section of the course is our
          designated relay zone. The left lane will be used by all solo skaters, to
          provide room for the relay skaters to safely make baton hand offs in the
          main traveling lane. Solo skaters will merge back in to the main
          traveling lane before crossing the start/finish line.
        </P>
      </Section>
      <Section>
        <H2 id="options">Event Options & Schedule ⏱️</H2>
        <CategoryContainer />
        <Section>
          <div className="md:flex justify-around">
            <div>
              <H3>Event Schedule</H3>
              <List>
                {[
                  "8:00 am - On-site registration and packet pick-up opens",
                  "9:00 am - On-site registration closes",
                  "9:15 am - On-site packet pick-up closes",
                  "9:30 am - Moreathon & Relay races begin",
                  "9:45 am - 11.5K race begins",
                  "1:30 pm - Awards Ceremony",
                ]}
              </List>
            </div>
            <div>
              <H3>Registration Fees</H3>
              <List>
                {[
                  "11.5K - $40",
                  "Moreathon - $80",
                  "Moreathon Relay Team - $140",
                ]}
              </List>
            </div>
          </div>
        </Section>
        <Section>
          <H3>⚠️</H3>
          <P center>
            <b>
              Online registration will close on Thursday, May 16th, 2024 at 11:59 pm
              EDT.
            </b>
          </P>
          <P center>
            <b>
              On-site registration will be available on Saturday, May 18th, 2024
              from 8:00 am - 9:00 am.
            </b>
          </P>
          <H3>⚠️</H3>
          <CtaButton dark/>
        </Section>
        <Section>
          <SwampRabbitSocial />
        </Section>
      </Section>
      <Section>
        <H2 id="relay">Relay Info 🏁</H2>
        <P center>Team up with your friends to complete the Moreathon!</P>
        <List>
          {[
            "Teams may be comprised of 2, 3, or 4 skaters",
            "Teams may be comprised of same or mixed genders",
            "Teams may be comprised of same or mixed discipline",
          ]}
        </List>
        <P center>The registration fee for a relay team of any size is $140.</P>
        <P>
          The relay team captain will register all members of the relay team.
          Once registered, all members will be sent an email with a link to
          fill out the mandatory liability waiver.
        </P>
      </Section>
      <Section>
        <H2 id="awards">Awards 🏅</H2>
        <P>
          Awards will be held at the conclusion of the event (no later than
          1:30 pm). Skaters must be present to receive prizes.
        </P>
        <P center>The following categories will be recognized:</P>
        <div className="md:flex justify-around">
          <div>
            <H3>Moreathon & 11.5K</H3>
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
      </Section>
      <Section>
        <H2 id="safety">Safety Info ⚠️</H2>
        <P>
          All skaters must attend the mandatory safety briefing at 9:20 am, 10 minutes before
          the Moreathon start.
        </P>
        <P>
          <span className="font-bold">
            Helmets are required for all
            participants
          </span>
          . Wrist guards, knee pads, and elbow pads are
          recommended for added personal safety.
        </P>
        <P>
          This is an open-road course with low to medium traffic. Skaters will
          need to exercise awareness, and prioritize your safety and the
          safety of your fellow competitors.
        </P>
        <P>
          Each event will be led out by a police escort, with additional
          roving course marshals on motorcycles.
        </P>
        <div className="pt-10"/>
        <P center>
          Visit{" "} 
          <Link 
            className={linkStyle}
            to="/travel"
          >
            Getting There
          </Link>
          {" "}for more info on traveling and accommodations during the event weekend.
        </P>
      </Section>
      <ScrollRestoration />
    </Main>
  )
}

export default RaceInfo
