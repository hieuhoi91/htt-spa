import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Services from '@/components/Services';
import Whysochoose from '@/components/Whysochoose';
import MissionVision from '@/components/MissionVision';

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <About />
      <MissionVision />
      <Whysochoose />
      <Services />
      <Gallery />
    </div>
  );
}
