import { Hero } from './components/Hero'
import { Concept } from './components/Concept'
import { Steps } from './components/Steps'
import { Gallery } from './components/Gallery'
import { WhyUs } from './components/WhyUs'
import { FAQ } from './components/FAQ'
import { ContactForm } from './components/ContactForm'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import AnimationMariageToulouse from './pages/AnimationMariageToulouse'
import { AnimationPlaceholderPage } from './pages/AnimationPlaceholderPage'

const normalizePath = (pathname: string) => pathname.replace(/\/+$|^\/\/$/g, '/')

const routeDefinitions = [
  {
    path: '/animation-mariage-toulouse',
    element: <AnimationMariageToulouse />,
  },
  {
    path: '/animation-bapteme-toulouse',
    element: (
      <AnimationPlaceholderPage
        title="Animation baptême Toulouse"
        subtitle="Bientôt disponible"
        description="Découvrez notre univers premium pour baptêmes à Toulouse, avec des animations souvenirs à la fois élégantes et personnalisées."
        eventTypes={['Baptême', 'Mariage', 'Anniversaire', 'Baby shower', 'Événement privé']}
      />
    ),
  },
  {
    path: '/animation-anniversaire-toulouse',
    element: (
      <AnimationPlaceholderPage
        title="Animation anniversaire Toulouse"
        subtitle="Bientôt disponible"
        description="Un concept unique pour anniversaires et fêtes privées à Toulouse, avec un bar à magnets haut de gamme et des souvenirs instantanés."
        eventTypes={['Anniversaire', 'Baby shower', 'Événement privé', 'Soirée d’entreprise']}
      />
    ),
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
          <ContactForm />
        </>
      )}
      <Footer />
    </main>
  )
}

export default App