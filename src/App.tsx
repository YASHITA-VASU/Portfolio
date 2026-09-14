import { About } from "./components/About"
import { Achievements } from "./components/Achievements"
import { Background } from "./components/Background"
import { Contact } from "./components/Contact"
import { Education } from "./components/Education"
import { Experience } from "./components/Experience"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Journey } from "./components/Journey"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"
import { Resume } from "./components/Resume"
import { Skills } from "./components/Skills"

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-foam focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Journey />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
