import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <div className='relative min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      {/* Background */}
      <div className='fixed inset-0 -z-10'>
        <div className='absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>
      </div>

      {/* Content */}
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <WorkExperience />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
};

export default App;
