import CakeList from '../Cake/CakeList';
import SpareCart from '../Cart/SpareCart';
import TotalCart from '../Cart/TotalCart';

const Section = () => {
  return (
    <main>
      <section className="section1">
        <CakeList />
        <SpareCart />
      </section>
      <section className="section2">
        <TotalCart />
      </section>
    </main>
  );
};

export default Section;
