import Main from 'components/markup/Main'
import Section from 'components/markup/Section'
import H1 from 'components/markup/H1'
import H2 from 'components/markup/H2'
import P from 'components/markup/P'
import AddressLink from 'components/AddressLink'

const GettingThere = () => {

  return (
    <Main>
      <Section>
        <H1>Getting There</H1>
        <H2>Event Location</H2>
        <AddressLink />
        <P>
          Use the above address to navigate to the event location. Parking,
          start/finish line, relay zone, on-site registration & packet pick-up,
          and all race operations will be held at this address.
        </P>
        <P>
          On-site parking will be available. Note: some parking will be in grass
          - plan accordingly for putting on skates. Surrounding roads will be
          available for warming up, but please keep an eye out for traffic.
        </P>
      </Section>
      <Section>
        <H2>Staying in Greenville</H2>
        <P center>
          Hotel Deals:
        </P>
        <P center>
          // INSERT HOTEL INFORMATION //
        </P>
      </Section>
      <Section>
        <H2>Flying to Greenville</H2>
        <P>
          Fly in to the Greenville-Spartanburg International (GSP) airport. The
          airport is approximately X from the local hotels.
        </P>
      </Section>
      <Section>
        <H2>Things to Do in Greenville</H2>
        <P center>
          Check out our local partners:
        </P>
        <P center>
          // INSERT LOCAL PARTNERS //
        </P>
        <P center>
          Stay in town on Sunday to join us for a fun social skate on the scenic
          Swamp Rabbit Trail!
        </P>
      </Section>
    </Main>
  )
}

export default GettingThere
