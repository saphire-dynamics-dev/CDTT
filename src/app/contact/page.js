import Navbar from '../../components/Navbar';
import FooterSection from '../../components/FooterSection';

export default function ContactPage() {
  return (
    <>
      <Navbar forceSticky={true} />
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Contact Page</h1>
        <FooterSection />
      </main>
      <FooterSection />
    </>
  );
}
