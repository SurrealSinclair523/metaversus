import { Footer, Navbar } from '../components';
import {
  Games,
  Explore,
  GetStarted,
  Logo,
  WhatsNew,
  World,
} from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Logo />
    <div className="relative">
      <Games />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative" />
    <Footer />
  </div>
);

export default Page;
