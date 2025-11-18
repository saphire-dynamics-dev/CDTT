import Navbar from '../../components/Navbar';
import FooterSection from '../../components/FooterSection';
import CTABannerSection from '../../components/CTABannerSection';

export default function ApplyPage() {
  return (
    <>
      <Navbar forceSticky={true} />
      <main className="min-h-screen">
        <CTABannerSection />
      </main>
      <FooterSection />
    </>
  );
}
