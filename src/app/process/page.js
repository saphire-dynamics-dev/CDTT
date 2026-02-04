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
export default function Page() {
  return (
    <main style={{ padding: '40px' }}>
      <h1>Our Process</h1>

      <video controls preload="metadata" style={{ width: '100%', borderRadius: '16px' }}>
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
