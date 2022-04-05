import logo from "./../static/logo/PIJAR_CAMP.svg";
import vector from "./../static/images/VectorWhite.png";
import titik from "./../static/images/Titik-titik.png";
import ctabanner from "./../static/images/CTA_Banner.png";


const BodyBanner = () => {
  return (
    <div className="justify-center flex px-5 lg:px-0 pt-20">
      <div className="lg:max-w-screen-lg w-full grid grid-cols-12 items-center rounded-3xl bg-blue-darkslate">
        <div className="md:col-span-7 col-span-12 md:pl-20 pl-7 md:pr-40 pr-7">
          <img
            alt=""
            className="mb-4 md:pt-0 pt-5"
            src={logo}
          />
          <p className="relative md:text-4xl text-2xl font-semibold mb-4 text-white max-w-xl w-64 md:w-auto">
            Mulai Karirmu Bersama
            <span className="text-orange-800">Pijar Camp</span>
            <img
              alt=""
              className="absolute md:right-16 md:w-auto right-8 w-29 hidden md:flex"
              src={vector}
            />
          </p>
          <a href="https://pijarmahir.id/auth/login?to=https%3A%2F%2Fcamp.pijarmahir.id%2F">
            <button
              className="px-4 my-8 bg-white flex items-center justify-center rounded-lg h-10 md:h-12 border hover:bg-blue-200 text-primary"
              type="button"
            >
              Daftar Sekarang
            </button>
          </a>
        </div>
        <div className="md:col-span-5 col-span-12 md:pt-12 md:pr-12 flex justify-end">
          <img
            alt=""
            className="h-32 absolute"
            src={titik}
          />
          <img
            alt=""
            className="md:h-72 h-auto z-2 pr-6"
            src={ctabanner}
          />
        </div>
      </div>
    </div>
  );
};

export default BodyBanner;
