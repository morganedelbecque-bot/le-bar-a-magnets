import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Concept } from './components/Concept'
import { Steps } from './components/Steps'
import { Gallery } from './components/Gallery'
import { WhyUs } from './components/WhyUs'
import { FAQ } from './components/FAQ'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

function App() {
  return (
    <main className="bg-[#fcf1ec] font-sans text-slate-950">
      <Navbar />
      <Hero />
      <Concept />
      <Steps />
      <Gallery />
      <WhyUs />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default App