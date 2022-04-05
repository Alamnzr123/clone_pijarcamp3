import react from "react";
import ornamentRight from "./../static/images/Ornament_right.svg";
import benefit_1 from "./../static/icons/benefit_1.svg";
import benefit_2 from "./../static/icons/benefit_2.svg";
import benefit_3 from "./../static/icons/benefit_3.svg";
import benefit_4 from "./../static/icons/benefit_4.png";
import benefit_5 from "./../static/icons/benefit_5.svg";
import arrow_benefit from "./../static/images/arrow_benefit.svg";

const BodyAdvantages = () => {
  return (
    <div className="justify-center flex lg:px-0 bg-black-100 md:bg-primary">
        <img alt="" className="absolute -mt-11 right-0 flex md:hidden" src={ornamentRight}></img>
      <div className="grid grid-cols-12 md:py-12 pt-6 lg:max-w-screen-2xl z-2">
        <div className="mb-4 md:col-span-6 col-span-12 md:pr-12 md:py-14 flex justify-end">
          <div className="max-w-lg text-center md:text-left pt-6 md:pt-0">
            <div className="flex justify-center md:justify-start md:pb-4">
              <p className="bg-blue-200 rounded-7xl px-4 py-2 text-blue-700 font-bold text-xs">
                KEUNTUNGAN GABUNG PIJAR CAMP
              </p>
            </div>
            <h3 className="md:text-4.5xl text-3xl text-left font-bold mb-4 mt-5 px-8 md:leading-5xl flex flex-col md:table-row">
              Kenapa Kamu Wajib Ikut Program
              <span className="text-orange-900 md:leading-5xl">
                Pijar Camp?
              </span>
            </h3>
            <p className="md:pr-24 px-8 md:px-0 text-left">
              Pijar Camp adalah Digital Skill Camp kolaborasi Pijar Mahir dan
              Pijar Camp
            </p>
          </div>
        </div>
        <div className="md:col-span-3 col-span-12 bg-black-100 px-11 py-14 hidden md:grid">
          <img alt="" className="pb-7" src={benefit_1} />
          <p className="text-xl font-semibold pb-3">Bootcamp Berkualitas</p>
          <p>
            Peserta akan belajar coding dengan kurikulum industri secara
            intensif yang diajarkan langsung oleh mentor berkompeten di
            bidangnya.
          </p>
        </div>
        <div className="md:col-span-3 col-span-12 px-11 py-14 hidden md:grid">
          <img alt="" className="pb-7" src={benefit_2} />
          <p className="text-xl font-semibold pb-3">
            Sertifikasi yang Kredibel
          </p>
          <p>
            Peserta akan dibekali dengan bukti sertifikat kredibel yang telah
            diterbitkan oleh pihak yang terpercaya
          </p>
        </div>
        <div className="col-span-3 hidden md:grid"></div>
        <div className="md:col-span-3 col-span-12 px-11 py-14 bg-black-100 hidden md:grid">
          <img
            alt=""
            className="absolute -ml-44 -mt-28"
            src={arrow_benefit}
          />
          <img alt="" className="pb-7" src={benefit_3} />
          <p className="text-xl font-semibold pb-3">Belajar Dulu Baru Bayar</p>
          <p>
            Melalui program ISA (Income Share Agreement) peserta hanya perlu
            membayar biaya pelatihan setelah bekerja dan menerima gaji pertama.
          </p>
        </div>
        <div className="md:col-span-3 col-span-12 px-11 py-14 hidden md:grid">
          <img alt="" className="pb-7" src={benefit_4} />
          <p className="text-xl font-semibold pb-3">Pembekalan Karir</p>
          <p>
            Peserta juga akan dilatih untuk persiapan karir dengan matang, dari
            membuat CV hingga simulasi interview pekerjaan
          </p>
        </div>
        <div className="md:col-span-3 col-span-12 px-11 py-14 bg-black-100 hidden md:grid">
          <img alt="" className="pb-7" src={benefit_5} />
          <p className="text-xl font-semibold pb-3">Disalurkan Kerja</p>
          <p>
            Tidak hanya belajar, kamu juga berkesempatan untuk membangun karir
            dengan 270+ perusahaan rekanan kami
          </p>
        </div>
        <div className="content md:hidden col-span-12 -mb-2">
          <div className="contents">
            <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
              <div
                className="swiper-wrapper"
                style={{ transitionDuration: '500ms' }}
              >
                <div
                  className="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index="4"
                >
                  <div className="bg-blue-10 md:col-span-3 col-span-12 px-11 pt-14 pb-32">
                    <img
                      alt=""
                      className="m-auto pb-5"
                      src={benefit_5}
                    />
                    <p className="text-xl font-semibold pb-3">
                      Disalurkan Kerja
                    </p>
                    <p className="text-black-80" >
                      Tidak hanya belajar, kamu juga berkesempatan untuk
                      membangun karir dengan 270+ perusahaan rekanan kami
                    </p>
                  </div>
                </div>
                <div className="swiper-slide" data-swiper-slide-index="0">
                  <div className="bg-blue-10 md:col-span-3 col-span-12 px-11 pt-14 pb-32">
                    <img
                      alt=""
                      className="m-auto pb-5"
                      src={benefit_1}
                    />
                    <p className="text-xl font-semibold pb-3">
                      Bootcamp Berkualitas
                    </p>
                    <p className="text-black-80" >
                      Peserta akan belajar coding dengan kurikulum industri
                      secara intensif yang diajarkan langsung oleh mentor
                      berkompeten di bidangnya.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide" data-swiper-slide-index="1">
                  <div className="bg-white md:col-span-3 col-span-12 px-11 pt-14 pb-32">
                    <img
                      alt=""
                      className="m-auto pb-5"
                      src={benefit_2}
                    />
                    <p className="text-xl font-semibold pb-3">
                      Sertifikasi yang Kredibel
                    </p>
                    <p className="text-black-80" >
                      Peserta akan dibekali dengan bukti sertifikat kredibel
                      yang telah diterbitkan oleh pihak yang terpercaya
                    </p>
                  </div>
                </div>
                <div className="swiper-slide" data-swiper-slide-index="2">
                  <div className="bg-blue-10 md:col-span-3 col-span-12 px-11 pt-14 pb-32">
                    <img
                      alt=""
                      className="m-auto pb-5"
                      src={benefit_3}
                    />
                    <p className="text-xl font-semibold pb-3">
                      Belajar Dulu Baru Bayar
                    </p>
                    <p className="text-black-80" >
                      Melalui program ISA (Income Share Agreement) peserta hanya
                      perlu membayar biaya pelatihan setelah bekerja dan
                      menerima gaji pertama.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide" data-swiper-slide-index="3">
                  <div className="bg-white md:col-span-3 col-span-12 px-11 pt-14 pb-32">
                    <img
                      alt=""
                      className="m-auto pb-5"
                      src={benefit_4}
                    />
                    <p className="text-xl font-semibold pb-3">
                      Pembekalan Karir
                    </p>
                    <p className="text-black-80" >
                      Peserta juga akan dilatih untuk persiapan karir dengan
                      matang, dari membuat CV hingga simulasi interview
                      pekerjaan
                    </p>
                  </div>
                </div>
                <div className="swiper-slide" data-swiper-slide-index="4">
                  <div className="bg-blue-10 md:col-span-3 col-span-12 px-11 pt-14 pb-32">
                    <img
                      alt=""
                      className="m-auto pb-5"
                      src={benefit_5}
                    />
                    <p className="text-xl font-semibold pb-3">
                      Disalurkan Kerja
                    </p>
                    <p className="text-black-80" >
                      Tidak hanya belajar, kamu juga berkesempatan untuk
                      membangun karir dengan 270+ perusahaan rekanan kami
                    </p>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index="0"
                >
                  <div className="bg-blue-10 md:col-span-3 col-span-12 px-11 pt-14 pb-32">
                    <img
                      alt=""
                      className="m-auto pb-5"
                      src={benefit_1}
                    />
                    <p className="text-xl font-semibold pb-3">
                      Bootcamp Berkualitas
                    </p>
                    <p className="text-black-80" >
                      Peserta akan belajar coding dengan kurikulum industri
                      secara intensif yang diajarkan langsung oleh mentor
                      berkompeten di bidangnya.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="w-full flex justify-center items-center flex-wrap p-2"
                slot="container-end"
              >
                <div className="flex items-center justify-start flex-wrap -mt-20 w-1/2">
                  <div className="pagination_el relative z-2 text-left swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
                </div>
                <div className="flex items-center justify-end flex-wrap w-1/2 -mt-20">
                  <button
                    aria-label="prev-benefit"
                    className="flex cursor-pointer rounded-full bg-blue-700 w-10 h-10 justify-center items-center border-2.5 z-2 mr-2"
                    // style="top:calc(50% - 36px)"
                    type="button"
                  >
                    <svg
                      fill="none"
                      height="24"
                      viewBox="0 0 20 20"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.2676 15.793C11.9677 16.0787 11.493 16.0672 11.2073 15.7672L6.20597 10.5168C5.93004 10.2271 5.93004 9.77187 6.20597 9.4822L11.2073 4.23173C11.493 3.93181 11.9677 3.92028 12.2676 4.20597C12.5676 4.49166 12.5791 4.96639 12.2934 5.26631L7.78483 9.99949L12.2934 14.7327C12.5791 15.0326 12.5676 15.5073 12.2676 15.793Z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </button>
                  <button
                    aria-label="next-benefit"
                    className="flex cursor-pointer rounded-full bg-blue-700 w-10 h-10 justify-center items-center border-2.5 z-2"
                    // style="top:calc(50% - 36px)"
                    type="button"
                  >
                    <svg
                      fill="none"
                      height="24"
                      viewBox="0 0 20 20"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyAdvantages;
