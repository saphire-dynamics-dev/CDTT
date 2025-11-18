import Navbar from '../../components/Navbar';
import FooterSection from '../../components/FooterSection';
import FeaturesSection from '../../components/FeaturesSection';

export default function FeaturesPage() {
  return (
    <>
      <Navbar forceSticky={true} />
      <main className="min-h-screen">
        <FeaturesSection />
      </main>
      <FooterSection />
    </>
  );
}
