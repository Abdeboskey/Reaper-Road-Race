import P from 'components/markup/P'

const AddressLink = () => {

  return (
    <P center> 
      <a
        className="text-orange-500 underline font-bold"
        href="https://www.google.com/maps/place/198+Perimeter+Rd,+Greenville,+SC+29605/@34.7585998,-82.3836133,17z/data=!3m1!4b1!4m5!3m4!1s0x88582529a634e101:0x7bc26727bda9d7d6!8m2!3d34.7585998!4d-82.3814246"
        target="_blank"
      >
        198 Perimeter Rd, Greenville, SC 29605
      </a>
    </P>
  )
}

export default AddressLink
