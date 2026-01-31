import { Suspense, lazy, useEffect } from 'react';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Footer } from '@/app/components/Footer';
import { SEO } from '@/app/components/SEO';

// Lazily load non-critical sections so the initial view renders faster
const About = lazy(() =>
  import('@/app/components/About').then((mod) => ({ default: mod.About })),
);
const Services = lazy(() =>
  import('@/app/components/Services').then((mod) => ({ default: mod.Services })),
);
const Portfolio = lazy(() =>
  import('@/app/components/Portfolio').then((mod) => ({ default: mod.Portfolio })),
);
const Contact = lazy(() =>
  import('@/app/components/Contact').then((mod) => ({ default: mod.Contact })),
);

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Suspense
            fallback={
              <div className="py-16 text-center text-sm text-gray-500">
                Loading content&hellip;
              </div>
            }
          >
            <About />
            <Services />
            <Portfolio />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}
