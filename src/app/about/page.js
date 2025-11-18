import Navbar from '../../components/Navbar';
import FooterSection from '../../components/FooterSection';
import AboutSection from '../../components/AboutSection';

export default function AboutPage() {
  return (
    <>
      <Navbar forceSticky={true} />
      <main className="min-h-screen">
        <AboutSection />
      </main>
      <FooterSection />
    </>
  );
}
