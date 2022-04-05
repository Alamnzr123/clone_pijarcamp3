import testimoni_1 from "./../static/images/testimoni-1.png";
import alodokter from "./../static/logo/Alodokter.svg";
import tokopedia from "./../static/logo/Tokopedia.svg";
import telkom from "./../static/logo/Telkom Indonesia.svg";
import testimoni_2 from "./../static/images/testimoni-2.png";
import testimoni_3 from "./../static/images/testimoni-3.png";





const BodyTestimonial = () => {
  return (
    <div className="justify-center flex px-5 lg:px-0 styles_bg_blue__g8y_l">
      <div className="md:py-24 py-4 lg:max-w-screen-lg z-2">
        <div className="text-center md:mb-12 mb-7 text-white flex flex-col items-center md:mx-0 mx-6">
          <div className="flex">
            <p className="bg-orange-800 rounded-7xl px-4 py-2 tracking-wider font-bold text-xs">
              TESTIMONI ALUMNI
            </p>
          </div>
          <h3 className="md:text-4.5xl text-3xl font-bold mb-4 mt-4 md:leading-5xl">
            Cerita mereka dari <br className="md:hidden" /> para alumni
          </h3>
          <p>
            Kamu akan menjadi programmer dengan kemampuan yang mumpuni bersama
            <br className="hidden md:grid" />
            760+ lulusan terbaik Pijar Camp
          </p>
        </div>
        <div className="px-4 md:px-0 md:grid grid-cols-12 hidden">
          <div className="px-8 rounded-2xl col-span-4 text-center flex flex-col items-center">
            <div className="z-2 bg-white p-1 -mb-10 rounded-full shadow-2xl">
              <img
                alt=""
                className="rounded-full"
                src={testimoni_1}
              />
            </div>
            <div className="mt-2 bg-white rounded-lg p-7 flex flex-col items-center md:h-auto h-96">
              <p className="pt-4 ">
                “Pijar Camp membantu saya belajar programming dari 0 dengan
                penyampaian materi sesuai kebutuhan industri serta lingkungan
                belajar yang sangat kekeluargaan”
              </p>
              <p className="font-semibold text-lg pt-8">Hilmi Khoirullah</p>
              <div className="rounded-full pt-3">
                <img
                  alt=""
                  className="max-h-screen"
                  src={alodokter}
                />
              </div>
            </div>
          </div>
          <div className="px-8 rounded-2xl col-span-4 text-center flex flex-col items-center">
            <div className="z-2 bg-white p-1 -mb-10 rounded-full shadow-2xl">
              <img
                alt=""
                className="rounded-full"
                src={testimoni_2}
              />
            </div>
            <div className="mt-2 bg-white rounded-lg p-7 flex flex-col items-center md:h-auto h-96">
              <p className="pt-4 ">
                “Perjanjian income sharing yang ditawarkan Pijar Camp bisa
                dibilang menarik &amp; menjadi sesuatu yang baru saat itu,
                karena bootcamp lain belum menerapkan hal tersebut.”
              </p>
              <p className="font-semibold text-lg pt-8">Setiawan Restu Aji</p>
              <div className="rounded-full pt-3">
                <img
                  alt=""
                  className="max-h-screen"
                  src={tokopedia}
                />
              </div>
            </div>
          </div>
          <div className="px-8 rounded-2xl col-span-4 text-center flex flex-col items-center">
            <div className="z-2 bg-white p-1 -mb-10 rounded-full shadow-2xl">
              <img
                alt=""
                className="rounded-full"
                src={testimoni_3}
              />
            </div>
            <div className="mt-2 bg-white rounded-lg p-7 flex flex-col items-center md:h-auto h-96">
              <p className="pt-4 ">
                Pijar Camp sangat membatu saya untuk belajar. Baik dari
                tempatnya yang nyaman &amp; teman-teman yang kompetitif. Dan
                sangat menarik karena tidak dipungut biaya tentunya.”
              </p>
              <p className="font-semibold text-lg pt-8">Mahardika</p>
              <div className="rounded-full pt-3">
                <img
                  alt=""
                  className="max-h-screen"
                  src={telkom}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 md:hidden">
          <div className="col-span-12">
            <div className="relative">
              <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                <div
                  className="swiper-wrapper"
                //   style="transition-duration: 500ms;"
                >
                  <div
                    className="swiper-slide swiper-slide-duplicate"
                    data-swiper-slide-index="2"
                  >
                    <div className="px-3 rounded-2xl col-span-4 text-center flex flex-col items-center">
                      <div className="z-2 bg-white p-1 -mb-10 rounded-full shadow-2xl">
                        <img
                          alt=""
                          className="rounded-full"
                          src={testimoni_3}
                        />
                      </div>
                      <div className="mt-2 bg-white rounded-xl p-7 flex flex-col items-center pb-24">
                        <p className="pt-4 ">
                          Pijar Camp sangat membatu saya untuk belajar. Baik
                          dari tempatnya yang nyaman &amp; teman-teman yang
                          kompetitif. Dan sangat menarik karena tidak dipungut
                          biaya tentunya.”
                        </p>
                        <p className="font-semibold text-lg pt-6">Mahardika</p>
                        <img
                          alt=""
                          className="pt-1 -mb-2"
                          src={telkom}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" data-swiper-slide-index="0">
                    <div className="px-3 rounded-2xl col-span-4 text-center flex flex-col items-center">
                      <div className="z-2 bg-white p-1 -mb-10 rounded-full shadow-2xl">
                        <img
                          alt=""
                          className="rounded-full"
                          src={testimoni_1}
                        />
                      </div>
                      <div className="mt-2 bg-white rounded-xl p-7 flex flex-col items-center pb-24">
                        <p className="pt-4 ">
                          “Pijar Camp membantu saya belajar programming dari 0
                          dengan penyampaian materi sesuai kebutuhan industri
                          serta lingkungan belajar yang sangat kekeluargaan”
                        </p>
                        <p className="font-semibold text-lg pt-6">
                          Hilmi Khoirullah
                        </p>
                        <img
                          alt=""
                          className="pt-3"
                          src={alodokter}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" data-swiper-slide-index="1">
                    <div className="px-3 rounded-2xl col-span-4 text-center flex flex-col items-center">
                      <div className="z-2 bg-white p-1 -mb-10 rounded-full shadow-2xl">
                        <img
                          alt=""
                          className="rounded-full"
                          src={testimoni_2}
                        />
                      </div>
                      <div className="mt-2 bg-white rounded-xl p-7 flex flex-col items-center pb-24">
                        <p className="pt-4 ">
                          “Perjanjian income sharing yang ditawarkan Pijar Camp
                          bisa dibilang menarik &amp; menjadi sesuatu yang baru
                          saat itu, karena bootcamp lain belum menerapkan hal
                          tersebut.”
                        </p>
                        <p className="font-semibold text-lg pt-6">
                          Setiawan Restu Aji
                        </p>
                        <img
                          alt=""
                          className="pt-3"
                          src={tokopedia}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" data-swiper-slide-index="2">
                    <div className="px-3 rounded-2xl col-span-4 text-center flex flex-col items-center">
                      <div className="z-2 bg-white p-1 -mb-10 rounded-full shadow-2xl">
                        <img
                          alt=""
                          className="rounded-full"
                          src={testimoni_3}
                        />
                      </div>
                      <div className="mt-2 bg-white rounded-xl p-7 flex flex-col items-center pb-24">
                        <p className="pt-4 ">
                          Pijar Camp sangat membatu saya untuk belajar. Baik
                          dari tempatnya yang nyaman &amp; teman-teman yang
                          kompetitif. Dan sangat menarik karena tidak dipungut
                          biaya tentunya.”
                        </p>
                        <p className="font-semibold text-lg pt-6">Mahardika</p>
                        <img
                          alt=""
                          className="pt-1 -mb-2"
                          src={telkom}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide swiper-slide-duplicate"
                    data-swiper-slide-index="0"
                  >
                    <div className="px-3 rounded-2xl col-span-4 text-center flex flex-col items-center">
                      <div className="z-2 bg-white p-1 -mb-10 rounded-full shadow-2xl">
                        <img
                          alt=""
                          className="rounded-full"
                          src={testimoni_1}
                        />
                      </div>
                      <div className="mt-2 bg-white rounded-xl p-7 flex flex-col items-center pb-24">
                        <p className="pt-4 ">
                          “Pijar Camp membantu saya belajar programming dari 0
                          dengan penyampaian materi sesuai kebutuhan industri
                          serta lingkungan belajar yang sangat kekeluargaan”
                        </p>
                        <p className="font-semibold text-lg pt-6">
                          Hilmi Khoirullah
                        </p>
                        <img
                          alt=""
                          className="pt-3"
                          src={alodokter}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="w-full flex items-center justify-around px-4 absolute bottom-10 z-2"
                  slot="container-end"
                >
                  <button
                    aria-label="prev"
                    className="flex cursor-pointer rounded-full bg-blue-700 w-10 h-10 justify-center items-center flex-wrap z-2"
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
                  <div className="justify-center flex">
                    <div className="pagination_el relative swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
                  </div>
                  <button
                    aria-label="next"
                    className="flex cursor-pointer rounded-full bg-blue-700 w-10 h-10 justify-center items-center z-2"
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

export default BodyTestimonial;
