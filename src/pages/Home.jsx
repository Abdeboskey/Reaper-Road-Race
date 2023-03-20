import CtaButton from 'components/CtaButton'
import fullLogo from 'assets/color_logo_full.svg'
import heroBG from 'assets/skaters.jpg'

const Home = () => {

  return (
    <main className="">
      <div className="relative w-screen text-white">
        <img className="w-100" src={heroBG} alt="Silhouettes of an inline speed skate"/>
        <img className="absolute inset-x-1/2 -translate-x-1/2 bottom-5 w-11/12 md:w-1/2" src={fullLogo} alt="Carolina Reaper Road Race Logo" />
      </div>
      <div className="md:w-2/3 mx-auto py-10 text-white">
        <h2 className="text-5xl tracking-wide text-center p-4 font-heading">
          The first skating race in Greenville, SC
        </h2>
        <p className="font-body text-4xl text-center p-4">
          Saturday, June 10th, 2023
        </p>
        <div className="flex justify-center align-center font-heading p-4">
          <CtaButton />
        </div>
        <p className="font-body text-xl p-6">
          Once upon a time Mark said he wasn't hungry for pancakes and he regretted that decision later.
          Once upon a time Mark said he wasn't hungry for pancakes and he regretted that decision later.
          Once upon a time Mark said he wasn't hungry for pancakes and he regretted that decision later.
          Once upon a time Mark said he wasn't hungry for pancakes and he regretted that decision later.
          Once upon a time Mark said he wasn't hungry for pancakes and he regretted that decision later.
          Once upon a time Mark said he wasn't hungry for pancakes and he regretted that decision later.
          Once upon a time Mark said he wasn't hungry for pancakes and he regretted that decision later.
          Once upon a time Mark said he wasn't hungry for pancakes and he regretted that decision later.
        </p>
      </div>
    </main>
  )
}

export default Home
