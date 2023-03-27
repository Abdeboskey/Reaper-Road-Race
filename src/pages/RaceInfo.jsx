import H1 from 'components/markup/H1'
import H2 from 'components/markup/H2'
import H3 from 'components/markup/H3'
import P from 'components/markup/P'
import List from 'components/markup/List'
import Main from 'components/markup/Main'
import CtaButton from 'components/CtaButton'

const RaceInfo = () => {
  return (
    <Main>
      <H1>Race Info</H1>
      <H2>Course Info</H2>
      {/* Insert Course Map Here */}
      <P>
        198 Perimeter Rd, Greenville, SC 29605
      </P>
      <P>
        All races will be held on a 7.2 mile loop, traveling clockwise. The
        loop is hilly, but each hill has roll-out. Skaters must be comfortable
        controlling their speed on a downhill, and completing a righ-hand turn on
        a downhill. <span className="font-bold">Helmets are required for all
        participants</span>.
      </P>
      <P>
        The loop has one right-hand turn close to the start/finish line which
        will be monitored by a course marshal. The loop is an open-road,
        low-traffic course. Skaters must observe the "yellow line rule", i.e.
        must not cross the yellow line while completing the event.
      </P>
      <P>
        In the last approx. 200m leading up to the start/finish the road splits
        into 3 lanes. This section of the course is our designated relay-zone.
        The left-most lane will remian closed for oncoming traffic, the middle
        lane is for solo-skaters, and the right-hand lane is for relaying
        skaters (see diagram below for more info on the relay zone).
      </P>
      {/* Insert relay-zone diagram here */}
      <H2>Safety Info</H2>
      <P>
        Each event will be led out by a police squad car, with additional
        roving course marshals on motorcycles.
      </P>
      <H2>Event Options & Schedule</H2>
      {/* Insert event category cards here */}
      <H3>Event Schedule</H3>
      <List>
        {[
          "8:00am - On-site registration and packet pick-up opens",
          "9:00am - On-site registration closes",
          "9:15am - On-site packet pick-up closes",
        ]}
      </List>
      <P>
        Race numbers should be affixed to the right hip with the safety pins
        provided in your registration packet.
      </P>
      <H3>Registration Fees</H3>
      <List>
        {[
          "11.5K - $40",
          "Moreathon - $80",
          "Moreathon Relay Team - $140",
        ]}
      </List>
      <P>
        Online registration will close on Thursday, June 8th, 2023 at 11:59pm EDT.
      </P>
      <P>
        On-site registration will be available on Saturday, June 10th, 2023
        from 8:00am - 9:00am. On-site registration fees will cost an additional $10 as listed below:
      </P>
      <List>
        {[
          "11.5K On-Site - $50",
          "Moreathon On-Site - $90",
          "Moreathon Relay Team On-Site - $150",
        ]}
      </List>
      <CtaButton />
      <H2>Relay Info</H2>
      <P>Team up with your friends to complete the Moreathon!</P>
      <List>
        {[
          "Teams may be comprised of 2, 3, or 4 skaters.",
          "Teams may be comprised of same or mixed genders.",
          "Teams may be comprised of same or mixed discipline.",
        ]}
      </List>
      <P>
        The registration fee for a relay team is $140. The team captain will
        register for the whole team, however each member will need to sign a
        waiver.
      </P>
      <P>OR</P>
      <P>
        The registration fee for a relay team is $140. The team captain will
        register first for the team, and then receive a specific discount code
        to register the remainder of their team. Please ensure to select the
        same team name for the remainder of your team. Each team member will be
        prompted to sign a waiver.
      </P>
      <H3>Relay Zone</H3>
      <P>
        The relay zone will be marked by //INSERT MARKING HERE//. Skaters will
        relay in the right-hand most lane. Skaters will need to use caution and
        judgement to avoid stepping out in front of another skater, and must use
        caution when exiting the course after a hand-off.
      </P>
      <H3>Handing Off</H3>
      <P>//BATON INFORMATION//</P>
      {/* Insert map of relay zone/3-lane area */}
      <H2>Race Bibs & Chip Timing</H2>
      <H2>Awards</H2>
      <P>
        Awards will be held at the conclusion of the event (at approximately X
        time). Skaters must be present to receive prizes.
      </P>
      <P>The following categories will be recognized:</P>
      <List>
        {[
          "11.5K & Moreathon",
          "Men's & Women's Overall Inline",
          "Men's & Women's Overall Quad",
          "Men's & Women's 12 & Under",
          "Men's & Women's 13-18"
        ]}
      </List>
      <P>
        * Age categories are determined by age of participant on race day. *
      </P>
      <H3>Moreathon Relay</H3>
      <P>
        Top 3 Overall Teams
      </P>
    </Main>
  )
}

export default RaceInfo