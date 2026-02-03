// app/page.js or wherever you want the video
import Navbar from './../components/Navbar';
import FooterSection from './../components/FooterSection';
import ProcessSection from './../components/ProcessSection';
import VideoPlayer from './../components/VideoPlayer';
import './../styles/globals.css'; // Make sure to import your CSS

export default function ProcessPage() {
  return (
    <>
      <Navbar forceSticky={true} />
      <main className="min-h-screen">
        <ProcessSection />
        
        {/* Add Video Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
              Watch Our Training Video
            </h2>
            <p className="text-center text-gray-600 mb-8">
              See what makes our training program special
            </p>
            
            <VideoPlayer 
              src="/CDTT 2.mp4"
              poster="/training.jpg" // Optional thumbnail
              autoPlay={false}
              controls={true}
              loop={false}
            />
            
            <div className="mt-6 text-center text-gray-500 text-sm">
              <p>Video file: <code className="bg-gray-100 px-2 py-1 rounded">CDTT 2.mp4</code></p>
              <p className="mt-2">Make sure the video is in your <code className="bg-gray-100 px-2 py-1 rounded">public</code> folder</p>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
