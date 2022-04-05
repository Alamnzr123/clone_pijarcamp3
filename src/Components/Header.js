import imgleft from "./../static/images/image-left.png";
import Vector from "./../static/images/Vector.png";
import imgright from "./../static/images/image-right.png";

const Header = () => {
  return (
    <div className="justify-center flex px-5 lg:px-0 md:mb-6 bg-black-100">
      <div className="flex flex-col-reverse md:grid grid-cols-12 lg:max-w-screen-xl z-2 gap-0 pb-16">
        <div className="md:col-span-3 col-span-12 hidden md:flex justify-center">
          <img
            alt=""
            className="max-w-1/2 mt-40 absolute"
            src={imgleft}
          />
          <div style={{ marginLeft: '1020px' }}className=" text-center px-4 items-center flex flex-col z-2">
            <h3 className="my-4 font-bold md:text-54px text-3.5xl pt-8 md:pt-28 pb-4 md:leading-60px leading-9">
              Mulai Karir Teknologi 
               <br className="mb-7" />   Bersama           
              <span className="text-orange-900"> Pijar Camp</span>
              <div className="w-full flex md:justify-end justify-center md:pr-20">
                <img
                  alt=""
                  className="md:w-auto w-44"
                  src={Vector}
                />
              </div>
            </h3>
            <p className="pb-8 max-w-lg">
              Ikuti program bootcamp intensif untuk meningkatkan kemampuan
              hingga sukses berkarir di bidang teknologi.
            </p>
            <a style={{ marginRight: '500px' }} className="pb-3 md:pb-14">
              <button style={{ marginLeft: '500px' }}
                className="px-4 mb-7 h-12 hover:bg-blue-800 flex items-center justify-center rounded-lg h-10 md:h-12 text-white bg-primary hover:bg-blue-800"
                type="button"
              >
                <h3>Pelajari Bootcamp</h3>
                <svg
                  fill="none"
                  height="28"
                  viewBox="0 0 28 28"
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  className="pl-1 ml-1"
                >
                  <path
                    d="M12.8333 5.83317V18.8648L7.14001 13.1715C6.68501 12.7165 5.93834 12.7165 5.48334 13.1715C5.02834 13.6265 5.02834 14.3615 5.48334 14.8165L13.1717 22.5048C13.6267 22.9598 14.3617 22.9598 14.8167 22.5048L22.505 14.8165C22.96 14.3615 22.96 13.6265 22.505 13.1715C22.05 12.7165 21.315 12.7165 20.86 13.1715L15.1667 18.8648V5.83317C15.1667 5.1915 14.6417 4.6665 14 4.6665C13.3583 4.6665 12.8333 5.1915 12.8333 5.83317Z"
                    fill="#FFFFFF"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
          <div className="md:col-span-3 col-span-12 hidden md:flex justify-center">
            <img
              alt=""

              className="max-w-1/2 absolute -mt-24"
              src={imgright}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
