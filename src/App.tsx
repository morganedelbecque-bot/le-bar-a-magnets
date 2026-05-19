import { Hero } from './components/Hero'
import { Concept } from './components/Concept'
import { Steps } from './components/Steps'
import { Gallery } from './components/Gallery'
import { WhyUs } from './components/WhyUs'
import { FAQ } from './components/FAQ'
import { ContactForm } from './components/ContactForm'
import GiftOrder from './components/GiftOrder'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import AnimationMariageToulouse from './pages/AnimationMariageToulouse'
import AnimationBaptemeToulouse from './pages/AnimationBaptemeToulouse'
import AnimationAnniversaireToulouse from './pages/AnimationAnniversaireToulouse'
import AnimationBabyShowerToulouse from './pages/AnimationBabyShowerToulouse'
import AnimationEvenementielleToulouse from './pages/AnimationEvenementielleToulouse'
import BarAMagnetsOccitanie from './pages/BarAMagnetsOccitanie'

const normalizePath = (pathname: string) => pathname.replace(/\/+$|^\/\/$/g, '/')

const routeDefinitions = [
  {
    path: '/animation-mariage-toulouse',
    element: <AnimationMariageToulouse />,
  },
  {
    path: '/animation-bapteme-toulouse',
    element: <AnimationBaptemeToulouse />,
  },
  {
    path: '/animation-anniversaire-toulouse',
    element: <AnimationAnniversaireToulouse />,
  },
  {
    path: '/animation-baby-shower-toulouse',
    element: <AnimationBabyShowerToulouse />,
  },
  {
    path: '/animation-evenementielle-toulouse',
    element: <AnimationEvenementielleToulouse />,
  },
  {
    path: '/bar-a-magnets-occitanie',
    element: <BarAMagnetsOccitanie />,
  },
]

export function App() {
  const currentPath = normalizePath(window.location.pathname)
  const route = routeDefinitions.find((route) => route.path === currentPath)

  return (
    <main className="bg-[#fcf1ec] font-sans text-slate-950">
      <Navbar />
      {route ? (
        route.element
      ) : (
        <>
          <Hero />
          <Concept />
          <Steps />
          <Gallery />
          <WhyUs />
          <FAQ />
          <GiftOrder />
          <ContactForm />
        </>
      )}
      <Footer />
    </main>
  )
}

export default App