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
          <span className="font-bold">Single Spicy Lap</span> entrants will complete a single lap of the course, the
          <span className="font-bold">Moreathon</span> and relay team entrants will complete 4 laps of the course,
          totaling 28.8 miles, and <span className="font-bold">Maximum Reaper</span> entrants will complete 5 laps, 
          totalling 36 miles. The loop is hilly, but each downhill rolls out.
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
          designated relay zone, and will be marked with yellow tape on the
          road. Solo Moreathon skaters will need to be aware of relay hand offs
          in this section, and stay to the left to keep their pace. Merge to
          the right as soon as it is safe so your timing chip can be easily
          read when crossing the start/finish line.
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
                  "7:15 am - On-site registration and packet pick-up opens",
                  "8:25 am - Single Spicy Lap & Maximum Reaper pre-race safety briefing",
                  "8:30 am - Single Spicy Lap & stage 1 of Maximum Reaper races start",
                  "9:25 am - Moreathon & Relay pre-race safety briefing",
                  "9:30 am - Moreathon, Relay, & stage 2 of Maximum Reaper races begin",
                ]}
              </List>
            </div>
            <div>
              <H3>Registration Fees</H3>
              <List>
                {[
                  "Single Spicy Lap - $40",
                  "Moreathon - $80",
                  "Maximum Reaper - $100",
                  "Moreathon Relay Team - $140",
                ]}
              </List>
            </div>
          </div>
          <P center>
            Award ceremonies will follow the completion of each event.
          </P>
        </Section>
        <Section>
          <H3>⚠️</H3>
          <P center>
            <b>
              Online registration will close on Thursday, May 15th, 2025 at 11:59 pm
              EDT.
            </b>
          </P>
          <P center>
            <b>
              On-site registration will be available on Saturday, May 17th, 2025
              starting at 7:15 am.
            </b>
          </P>
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
            "Junior Team members must be 14 years old or younger",
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
          Awards will be held at the conclusion of each the event. The Single Spicy Lap
          time cut off is 10am (90 minutes), and the Moreathon time cut off is
          1pm (3.5 hours). Skaters must be present to receive prizes.
        </P>
        <P center>The following categories will be recognized:</P>
        <div className="md:flex justify-around">
          <div>
            <H3>Moreathon & Single Spicy Lap</H3>
            <List>
              {[
                "Men's & Women's Overall Inline",
                "Men's & Women's Overall Quad",
                "Men's & Women's 12 & Under",
                "Men's & Women's 13-18",
              ]}
            </List>
          </div>
          <div>
            <H3>Moreathon Relay</H3>
            <List>
              {[
                "Top 3 Overall Teams",
                "Top Junior Team",
                "Best Team Name",
              ]}
            </List>
          </div>
          <div>
            <H3>Maximum Reaper</H3>
            <List>
              {[
                "Top 3 Overall Finishers"
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
          All skaters must be present for the mandatory safety briefing 5
          minutes before each race start, 8:25am for the Single Spicy Lap & Maximum Reaper
          and 9:25am for the Moreathon and Relay.
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
