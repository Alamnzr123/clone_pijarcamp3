import logo from "./../static/logo/PIJAR_CAMP.svg";
import telkom from "./../static/logo/TELKOM_INDONESIA.svg";
import instagram from "./../static/icons/instagram_clean.svg";
import linkedin from "./../static/icons/linkedin_clean.svg";
import facebook from "./../static/icons/facebook_clean.svg";
import twitter from "./../static/icons/twitter_clean.svg";

const Footer = () => {
  return (
    <div className="flex justify-center w-full border-t px-2">
      <div className="w-full pb-10 pt-8 md:max-w-screen-md lg:max-w-screen-lg">
        <div className="absolute md:right-44 right-8 -mt-14"></div>
        <div className="flex items-center flex-col border-b border-black-300 pb-10">
          <div className="w-full">
            <img
              alt="logo pijarmahir"
              className="cursor-pointer"
              height="77"
              src={logo}
              width="128"
              href="/"
            />
            <div className="flex items-center">
              <p className="text-xs font-medium text-black-500 mr-2">
                Powered By
              </p>
              <img
                alt="logo pijarmahir"
                height="54"
                src={telkom}
                width="80px"
              />
            </div>
          </div>
          <div className="w-full flex flex-wrap flex-col md:flex-row mt-8">
            <div className="flex justify-start flex-col w-full md:w-1/4 mb-4 pb-4 pr-2 border-b border-black-300 md:border-none">
              <h3 className="font-semibold font-heading text-black-800 mb-4">
                Produk
              </h3>
              <div className="w-full mb-2">
                <a
                  className="hover:underline font-heading text-center md:text-left w-full md:w-1/3 text-black-800 py-2"
                  href="/class"
                >
                  Bootcamp Full Time
                </a>
              </div>
              <div className="w-full mb-2">
                <a
                  className="hover:underline font-heading text-center md:text-left w-full md:w-1/3 text-black-800 py-2"
                  href="https://pijarmahir.id"
                >
                  Pijar Mahir
                </a>
              </div>
            </div>
            <div className="flex justify-start flex-col w-full md:w-1/4 mb-4 pb-4 pr-2 border-b border-black-300 md:border-none">
              <h3 className="font-semibold font-heading text-black-800 mb-4">
                Support
              </h3>
              <div className="w-full mb-2">
                <a
                  className="hover:underline font-heading text-center md:text-left w-full md:w-1/3 text-black-800 py-2"
                  href="/help/about-us"
                >
                  Tentang Pijar Camp
                </a>
              </div>
              <div className="w-full mb-2">
                <a
                  className="hover:underline font-heading text-center md:text-left w-full md:w-1/3 text-black-800 py-2"
                  href="/help/faq"
                >
                  FAQ
                </a>
              </div>
              <div className="w-full mb-2">
                <a
                  className="hover:underline font-heading text-center md:text-left w-full md:w-1/3 text-black-800 py-2"
                  href="/help/contact-us"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
            <div className="flex justify-start flex-col w-full md:w-1/4 mb-4 pb-4 pr-2 border-b border-black-300 md:border-none">
              <h3 className="font-semibold font-heading text-black-800 mb-4">
                Info Lainnya
              </h3>
              <div className="w-full mb-2">
                <a
                  className="hover:underline font-heading text-center md:text-left w-full md:w-1/3 text-black-800 py-2"
                  href="/info-admission"
                >
                  Info Penerimaan
                </a>
              </div>
              <div className="w-full mb-2">
                <a
                  className="hover:underline font-heading text-center md:text-left w-full md:w-1/3 text-black-800 py-2"
                  href="/job-connect"
                >
                  Job Connect
                </a>
              </div>
              <div className="w-full mb-2">
                <a
                  className="hover:underline font-heading text-center md:text-left w-full md:w-1/3 text-black-800 py-2"
                  href="/isa-payment"
                >
                  Income Share Agreement
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-start flex-col flex-wrap mb-2 md:mb-0 md:w-1/4 pr-2">
              <h3 className="w-full font-semibold font-heading text-black-800 mb-4">
                Ikuti Kami di
              </h3>
              <div className="flex flex-wrap">
                <a
                  className="w-auto mb-4 mr-4"
                  href="https://www.instagram.com/pijarmahir.id/"
                  rel="nopoper noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="instagram"
                    src={instagram}
                  />
                </a>
                <a
                  className="w-auto mb-4 mr-4"
                  href="https://www.linkedin.com/company/pijar-mahir"
                  rel="nopoper noopener noreferrer"
                  target="_blank"
                >
                  <img alt="linkedin" src={linkedin} />
                </a>
                <a
                  className="w-auto mb-4 mr-4"
                  href="https://www.facebook.com/pijarmahir.id/"
                  rel="nopoper noopener noreferrer"
                  target="_blank"
                >
                  <img alt="facebook" src={facebook} />
                </a>
                <a
                  className="w-auto mb-4 mr-4"
                  href="https://twitter.com/pijarmahir"
                  rel="nopoper noopener noreferrer"
                  target="_blank"
                >
                  <img alt="twitter" src={twitter} />
                </a>
              </div>
            </div>
          </div>
        </div>






        <div className="flex flex-col md:flex-row pt-6">
                        <div className="flex items-center"><a className="hover:underline text-sm text-center md:text-left text-black-800 py-2" href="/help/privacy-policy">Kebijakan Privasi</a>
                            <p className="mx-2">•</p><a className="hover:underline text-sm text-left text-black-800 py-2" href="/help/term-condition">Syarat dan Ketentuan</a></div>
                        <p className="text-sm flex-1 text-left md:text-right text-gray-700 py-2" style={{ marginLeft: '520px' }} >©2020-
                            2022
                            Pijar Mahir. All Right Reserved
                        </p>
                    </div>










        
      </div>
    </div>
  );
};

export default Footer;
