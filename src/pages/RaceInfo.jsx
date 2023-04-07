import H1 from 'components/markup/H1'
import H2 from 'components/markup/H2'
import H3 from 'components/markup/H3'
import P from 'components/markup/P'
import List from 'components/markup/List'
import Main from 'components/markup/Main'
import CtaButton from 'components/CtaButton'
import CategoryContainer from 'components/CategoryContainer'

const RaceInfo = () => {
  const aStyle = "text-orange-400 underline"

  return (
    <Main>
      <H1>Race Info</H1>
      <P center>Here you can learn more about:</P>
      <P center><a href="#course" className={aStyle}>Course Info</a></P>
      <P center><a href="#safety" className={aStyle}>Safety Info</a></P>
      <P center><a href="#options" className={aStyle}>Event Options & Schedule</a></P>
      <P center><a href="#relay" className={aStyle}>Relay Info</a></P>
      <P center><a href="#awards" className={aStyle}>Awards</a></P>
      <H2 id="course">Course Info 📍</H2>
      {/* Insert Course Map Here */}
      {/* <div className="strava-embed-placeholder h-20" data-embed-type="route" data-embed-id="3072288653653574332" data-full-width="true"></div> */}
      <iframe className="w-100" frameborder="0" allowtransparency="true" scrolling="no" src="https://www.strava.com/routes/3072288653653574332/embed"></iframe>
      <P center>
        198 Perimeter Rd, Greenville, SC 29605
      </P>
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
        traveling lane before crossing the start/finish line. (see diagram
        below for more info on the relay zone).
      </P>
      {/* Insert relay-zone diagram here */}
      <H2 id="safety">Safety Info ⚠️</H2>
      <P>
        All skaters must attend the mandatory safety briefing at 9:20am, 10 minutes before
        the Moreathon start.
      </P>
      <P>
        <span className="font-bold">
          Helmets are required for all
          participants
        </span>
        . Additional PPE (wrist guards, knee pads, and elbow pads) are
        recommended for added personal safety.
      </P>
      <P>
        Each event will be led out by a police squad car, with additional
        roving course marshals on motorcycles.
      </P>
      <P>
        This is an open-road course with low to medium traffic. Skaters will
        need to exercise awareness, and prioritize your safety and the
        safety of your fellow competitors.
      </P>
      <P>
        Race numbers should be affixed to the right hip with the safety pins
        provided in your registration packet.
      </P>
      <H2 id="options">Event Options & Schedule ⏱️</H2>
      <CategoryContainer />
      <div className="md:flex justify-around">
        <div>
          <H3>Event Schedule</H3>
          <List>
            {[
              "8:00am - On-site registration and packet pick-up opens",
              "9:00am - On-site registration closes",
              "9:15am - On-site packet pick-up closes",
              "9:30am - Moreathon & Relay races begin",
              "9:40am - 11.5K race begins",
              "12:30pm - Awards Ceremony",
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
      <P center>
        Online registration will close on Thursday, June 8th, 2023 at 11:59pm
        EDT.
      </P>
      <P center>
        On-site registration will be available on Saturday, June 10th, 2023
        from 8:00am - 9:00am and will cost an additional
        $10 per category.
      </P>
      <CtaButton dark/>
      <H2 id="relay">Relay Info 🏁</H2>
      <P center>Team up with your friends to complete the Moreathon!</P>
      <List>
        {[
          "Teams may be comprised of 2, 3, or 4 skaters.",
          "Teams may be comprised of same or mixed genders.",
          "Teams may be comprised of same or mixed discipline.",
        ]}
      </List>
      <P center>The registration fee for a relay team is $140</P>
      <P>
        The team captain can register for the whole team, however each member
        will need to sign a waiver.
      </P>
      <P center>OR</P>
      <P>
        The team captain can register first for the team, and then receive a
        specific discount code to register the remainder of their team. Please
        ensure to select the same team name for the remainder of your team.
        Each team member will be prompted to sign a waiver.
      </P>
      <H3>Relay Zone</H3>
      <P>
        The relay zone will be marked by //INSERT MARKING HERE//. Skaters will
        relay in the right-hand traveling lane on the final straight leading up
        to the start/finish line. Relay skaters will need to use caution and
        judgement to avoid stepping out in front of another skater, and must use
        caution when exiting the course after a hand-off.
      </P>
      {/* Insert map of relay zone/3-lane area */}
      <H2 id="awards">Awards 🏅</H2>
      <P>
        Awards will be held at the conclusion of the event (at approximately
        12:30 PM). Skaters must be present to receive prizes.
      </P>
      <P center>The following categories will be recognized:</P>
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
    </Main>
  )
}

export default RaceInfo
