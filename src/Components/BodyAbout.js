import Oval from "./../static/images/Oval.png";
import about from "./../static/images/about.png";

const BodyAbout = () => {
  return (
    <div
      className="justify-center flex px-5 lg:px-0 md:mt-16"
      id="about-program"
    >
      <div className="flex flex-col md:grid grid-cols-12 md:py-14 pb-14 pt-6 lg:max-w-screen-lg gap-2">
        <div className="md:col-span-6 col-span-12 md:pr-28 md:pt-16 pt-10 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <p className="bg-blue-200 rounded-7xl px-4 py-2 text-blue-700 font-bold text-xs">
              TENTANG PROGRAM PIJAR CAMP
            </p>
          </div>
          <img
            alt=""
            style={{ marginLeft: '10px' }}
            className="absolute pt-16 mt-4 hidden md:flex"
            src={Oval}
          />
          <h3 className="md:text-4.5xl text-3xl text-left font-bold mb-8 mt-5 md:leading-5xl mx-3 md:mx-0">
            Program Intensif Bootcamp
          </h3>
          <p style={{ textAlign: 'left' }}>
            Di bootcamp ini, kamu akan mengikuti program komprehensif dan
            pembelajaran yang intensif bersama mentor secara full-time dengan
            kurikulum lengkap. Waktu belajarnya adalah 5 hari kerja dalam satu
            minggu. Kamu juga akan disiapkan untuk berkarir dan dihubungkan
            bergabung dengan perusahaan rekanan.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              className="px-4 mb-7 h-12 mt-8 hover:bg-blue-800 flex items-center justify-center rounded-lg h-10 md:h-12 text-white bg-primary hover:bg-blue-800"
              type="button"
            >
              <h3>Lihat Kelas Bootcamp</h3>
            </button>
          </div>
        </div>
        <div className="col-span-6 md:grid hidden">
          <img alt="" src={about} />
        </div>
      </div>
    </div>
  );
};

export default BodyAbout;
