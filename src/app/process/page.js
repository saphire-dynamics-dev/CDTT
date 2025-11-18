import Navbar from '../../components/Navbar';
import FooterSection from '../../components/FooterSection';
import ProcessSection from '../../components/ProcessSection';

export default function ProcessPage() {
  return (
    <>
      <Navbar forceSticky={true} />
      <main className="min-h-screen">
        <ProcessSection />
      </main>
      <FooterSection />
    </>
  );
}
