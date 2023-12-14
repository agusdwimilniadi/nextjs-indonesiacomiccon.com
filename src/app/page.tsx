import Navbar from '@/components/molecules/Navbar';
import GuestStar from '@/components/organism/Home/GuestStar';
import Jumbotron from '@/components/organism/Home/Jumbotron/Jumbotron';
import MarbleSpinner from '@/components/organism/Home/MarbleSpinner/MarbleSpinner';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://indonesiacomiccon.com/_nuxt/img/icc-2023-bg-pattern.38380c4.svg')",
        backgroundColor: 'rgba(0, 0, 0, 1)',
      }}
      className="bg-contain bg-no-repeat h-full "
    >
      <div className="bg-gradient-to-b from-custom-black-primary/90 to-custom-black-primary  h-fit">
        <Navbar />
        <Jumbotron />
        <MarbleSpinner />
      </div>
      <div className="bg-custom-black-primary text-white">
        <GuestStar />
      </div>
    </div>
  );
}
