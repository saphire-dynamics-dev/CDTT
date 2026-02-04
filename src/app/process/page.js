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
export default function ProcessVideo() {
  return (
    <section style={styles.process}>
      <h2 style={styles.heading}>Our Process</h2>

      <video
        controls
        preload="metadata"
        style={styles.video}
      >
        <source src="/CDTT 2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

const styles = {
  process: {
    maxWidth: '900px',
    margin: '80px auto',
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#0f172a',
  },
  video: {
    width: '100%',
    maxHeight: '500px',
    borderRadius: '16px',
    backgroundColor: '#000',
    boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
  },
};
