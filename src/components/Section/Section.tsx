import SpareCart from '../Cart/SpareCart';
import TotalCart from '../Cart/TotalCart';
import Slider from '../Slider/Slider';

const Section = () => {
  return (
    <main>
      <section className="section1">
        <Slider />
        <SpareCart />
      </section>
      <section className="section2">
        <TotalCart />
      </section>
    </main>
  );
};

export default Section;
