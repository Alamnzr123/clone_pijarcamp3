import ornamentleft from "./../static/images/Ornament_left.svg";
import whatispijar from "./../static/images/what_is_pijarcamp.png";

const Body = () => {
  return (
    <div className="justify-center flex px-5 lg:px-0 md:mt-16">
      <div className="flex flex-col md:grid grid-cols-12 md:py-14 pb-14 pt-4 lg:max-w-screen-lg gap-2">
        <img
          alt=""
          className="absolute -mt-14 left-0 flex md:hidden"
          src={ornamentleft}
        />
        <div className="col-span-6 hidden md:flex">
          <img alt="" src={whatispijar} />
        </div>
        <div className="md:col-start-7 md:col-span-6 col-span-11 md:pl-20 md:pt-36 pt-14 md:text-left text-center">
          <div className="flex md:justify-start justify-center">
            <p className="bg-blue-200 rounded-7xl px-4 py-2 text-blue-700 font-bold text-xs">
              TENTANG PIJAR CAMP
            </p>
          </div>
          <h3 className="md:text-4.5xl text-left text-2.5xl font-bold mb-8 mt-5 flex flex-col md:block">
            Apa itu <span className="text-orange-900">Pijar Camp?</span>
          </h3>
          <p className="text-left">
            Pijar Camp merupakan program bootcamp yang bertujuan untuk membantu
            kamu dalam meningkatkan kompetensi di bidang teknologi. Melalui
            program ini, kamu berkesempatan untuk dilatih langsung dengan mentor
            yang kompeten di bidangnya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
