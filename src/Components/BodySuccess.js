import company from "./../static/images/company.png";

const BodySuccess = () => {
  return (
    <div className="justify-center flex md:flex-row flex-col px-5 lg:px-0">
      <div className="grid grid-cols-12 md:py-28 py-4 lg:max-w-screen-lg text-left">
        <div className="md:col-span-7 col-span-12 my-4 md:my-0">
          <div className="flex">
            <p className="bg-blue-200 rounded-7xl px-4 py-2 text-blue-700 font-bold text-xs hidden md:grid">
              KISAH SUKSES
            </p>
            <p className="bg-blue-200 rounded-7xl px-4 py-2 text-blue-700 font-bold text-xs md:hidden grid">
              PENCAPAIAN PIJAR CAMP
            </p>
          </div>
          <p className="text-3.5xl font-bold mt-4 max-w-lg pr-4">
            Bekerjasama dengan perusahaan terbaik di Indonesia
          </p>
          <p className="mt-4 pr-5 md:pr-28 text-black-700 text-lg md:pb-0 pb-10">
            Tidak hanya belajar, kamu juga berkesempatan untuk membangun karir
            di perusahaan impian.
          </p>
          <img
            alt=""
            className="flex md:hidden"
            src={company}
          />
          <div className="grid md:grid-flow-row grid-cols-12 md:mt-16 mt-0">
            <div className="w-1 h-12 bg-orange-900 rounded-lg"></div>
            <div className="md:col-span-5 col-span-11 md:-ml-5 -ml-3">
              <p className="text-4.5xl font-bold text-orange-900">270+</p>
              <p className="mt-3 text-2xl font-semibold">Perusahaan Rekanan</p>
              <p className="mt-2 text-lg text-black-700 pr-8 pb-9">
                Kamu berkesempatan <br className="hidden md:grid" /> bekerja di
                perusahaan terbaik di Indonesia
              </p>
            </div>
            <div className="w-1 h-12 bg-orange-900 rounded-full"></div>
            <div className="md:col-span-5 col-span-11 md:-ml-5 -ml-3">
              <p className="text-4.5xl font-bold text-orange-900">760+</p>
              <p className="mt-3 text-2xl font-semibold">Lulusan Terbaik</p>
              <p className="mt-2 text-lg text-black-700 pr-8">
                Kamu akan menjadi programmer dengan kemampuan yang mumpuni
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-5 hidden md:grid">
          <img
            alt=""
            className="absolute w-5/12 max-w-xl -ml-12"
            src={company}
          />
        </div>
      </div>
    </div>
  );
};

export default BodySuccess;
