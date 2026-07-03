import Navbar from './Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import AppGallery from './AppGallery';
import ContactFooter from './ContactFooter';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AppGallery />
      <TeamSection />
      <ContactFooter />
    </div>
  );
}

export default App;
