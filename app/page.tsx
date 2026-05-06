import SplashScreen from '@/components/SplashScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import MediaShowcase from '@/components/MediaShowcase';
import Features from '@/components/Features';
import WhyChoose from '@/components/WhyChoose';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-stone-950">
      <SplashScreen />
      <Navbar />
      <Hero />
      <Stats />
      <MediaShowcase />
      <Features />
      <WhyChoose />
      <Process />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
