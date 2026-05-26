import { Analytics } from '@vercel/analytics/react'
import { Hero } from './components/Hero'
import { Concept } from './components/Concept'
import { Steps } from './components/Steps'
import { Gallery } from './components/Gallery'
import { WhyUs } from './components/WhyUs'
import { FAQ } from './components/FAQ'
import { ContactForm } from './components/ContactForm'
import { AudioVideoGuestBook } from './components/AudioVideoGuestBook'
import GiftOrder from './components/GiftOrder'
import { PricingCards } from './components/PricingCards'
import { Navbar } from './components/Navbar'
import { TechnicalNeeds } from './components/TechnicalNeeds'
import { Footer } from './components/Footer'
import { SEO } from './components/SEO'
import AnimationMariageToulouse from './pages/AnimationMariageToulouse'
import AnimationBaptemeToulouse from './pages/AnimationBaptemeToulouse'
import AnimationAnniversaireToulouse from './pages/AnimationAnniversaireToulouse'
import AnimationBabyShowerToulouse from './pages/AnimationBabyShowerToulouse'
import AnimationEvenementielleToulouse from './pages/AnimationEvenementielleToulouse'
import BarAMagnetsOccitanie from './pages/BarAMagnetsOccitanie'
import LivreDorAudioMariageToulouse from './pages/LivreDorAudioMariageToulouse'

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
  {
    path: '/livre-dor-audio-mariage-toulouse',
    element: <LivreDorAudioMariageToulouse />,
  },
]

export function App() {
  const currentPath = normalizePath(window.location.pathname)
  const route = routeDefinitions.find((route) => route.path === currentPath)

  return (
    <main className="bg-[#fcf1ec] font-sans text-slate-950">
      <SEO />
      <Navbar />
      {route ? (
        route.element
      ) : (
        <>
          <Hero />
          <Concept />
          <Steps />
          <WhyUs />
          <GiftOrder />
          <TechnicalNeeds />
          <PricingCards />
          <Gallery />
          <AudioVideoGuestBook />
          <ContactForm />
          <FAQ />
        </>
      )}
      <Footer />
      <Analytics />
    </main>
  )
}

export default App
