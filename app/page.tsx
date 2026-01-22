import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Technologies from '@/components/Technologies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen linear-gradient-bg">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Process />
      <Technologies />
      <Contact />
      <Footer />
    </main>
  );
}
