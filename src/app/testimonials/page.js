import Navbar from '../../components/Navbar';
import FooterSection from '../../components/FooterSection';
import TestimonialsSection from '../../components/TestimonialsSection';

export default function TestimonialsPage() {
  return (
    <>
      <Navbar forceSticky={true} />
      <main className="min-h-screen">
        <TestimonialsSection />
      </main>
      <FooterSection />
    </>
  );
}
