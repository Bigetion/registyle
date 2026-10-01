import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, Compass, Moon, Sun } from 'lucide-react';
import { Button } from './components/Button.jsx';
import { DestinationCard } from './components/DestinationCard.jsx';

const destinations = [
  {
    name: 'The long way west',
    location: 'Olympic Peninsula, Washington',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Where the land softens',
    location: 'Big Sur, California',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'A cabin among pines',
    location: 'Mount Hood, Oregon',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85',
  },
];

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => document.documentElement.dataset.theme === 'dark');

  function toggleTheme() {
    const nextTheme = isDark ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('morrow-theme', nextTheme);
    setIsDark(!isDark);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}

export default function App() {
  const [isHeaderFloating, setIsHeaderFloating] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsHeaderFloating(window.scrollY > 96);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  return (
    <div className="site-shell">
      <div className="topbar-slot">
        <header className={`topbar${isHeaderFloating ? ' topbar-floating' : ''}`}>
          <div className="topbar-inner">
            <a className="brand" href="#home" aria-label="Morrow home">
              <span className="brand-mark"><Compass size={19} strokeWidth={1.8} /></span>
              <span className="brand-name">morrow</span>
            </a>
            <div className="topbar-actions">
              <nav className="topbar-nav" aria-label="Main navigation">
                <a className="nav-link" href="#places">Places</a>
                <a className="nav-link" href="#journal">Field notes</a>
                <a className="nav-link" href="#about">About</a>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </header>
      </div>

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2200&q=90"
            alt="Sunlight breaking through a forest above a mountain lake"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-eyebrow"><Compass size={14} /> A field guide for the curious</p>
            <h1 className="hero-title" id="hero-title">Find your<br />kind of outside.</h1>
            <p className="hero-copy">Thoughtful places, slower trails, and the small details that make a trip stay with you.</p>
            <Button href="#places">Explore the field guide <ArrowRight size={16} /></Button>
          </div>
          <a className="scroll-cue" href="#places">Scroll to explore <ArrowDown size={14} /></a>
        </section>

        <section className="intro" id="about">
          <p className="intro-kicker">Go a little further.</p>
          <div>
            <h2 className="intro-title">The best plans leave room for the unexpected.</h2>
            <p className="intro-copy">Morrow is an independent field guide to the places that pull you outside. Find considered stays, local paths, and practical notes from people who know the way.</p>
          </div>
        </section>

        <section className="destination-section" id="places">
          <div className="destination-inner">
            <div className="section-heading">
              <div>
                <p className="eyebrow">A few good directions</p>
                <h2 className="section-title" id="journal">Places worth taking your time.</h2>
              </div>
              <Button variant="quiet" href="#journal" className="desktop-only">All field notes <ArrowRight size={15} /></Button>
            </div>
            <div className="destination-grid">
              {destinations.map((destination) => <DestinationCard key={destination.name} {...destination} />)}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2025 Morrow Field Guide</span>
        <span>Made for the days outside.</span>
      </footer>
    </div>
  );
}