import { Link } from "react-router-dom";
import logo from "./../static/logo/PIJAR_CAMP.svg";

const Nav = () => {
  return (
    <header className="px-2 shadow-md fixed w-full z-20 bg-white">
      <div className="h-20 mx-auto flex items-center lg:max-w-screen-lg">
        <div className="block">
          <a href="/">
            <img
              alt="pijarcamp"
              className="md:mr-12 mr-2 cursor-pointer"
              src={logo}
              width="80"
            />
          </a>
        </div>
        <div className="flex-1 justify-end items-center flex">
          <div className="relative">
            <button
              className="p-2 text-sm hover:bg-black-200 flex items-center justify-center rounded-lg"
              aria-label="menu-btn"
              type="button"
            >
              Bootcamp{" "}
              <svg
                fill="none"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3"
              >
                <path
                  d="M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z"
                  fill="#2F353B"
                ></path>
              </svg>
            </button>
          </div>
          <div className="relative">
            <button
              className="p-2 text-sm mx-5 hover:bg-black-200 flex items-center justify-center rounded-lg"
              aria-label="menu-btn"
              type="button"
            >
              Pendaftaran
              <svg
                fill="none"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3"
              >
                <path
                  d="M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z"
                  fill="#2F353B"
                ></path>
              </svg>
            </button>
          </div>
          <div className="relative">
            <button
              className="p-2 text-sm hover:bg-black-200 flex items-center justify-center rounded-lg"
              aria-label="menu-btn"
              type="button"
            >
              Info Lainnya
              <svg
                fill="none"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3"
              >
                <path
                  d="M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z"
                  fill="#2F353B"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex ml-4 md:ml-10">
            <a
              className="md:w-29 w-16 mr-3"
              href="https://pijarmahir.id/auth/login?to=https%3A%2F%2Fcamp.pijarmahir.id%2F"
            >
              <button
                className="text-primary flex items-center justify-center rounded-lg h-9 text-sm px-2 w-full border hover:bg-blue-200 text-primary"
                type="button"
              >
                Masuk
              </button>
            </a>
            <a
              className="w-29 hidden md:block"
              href="https://pijarmahir.id/auth/register"
            >
              <button
                className="flex items-center justify-center rounded-lg h-9 text-sm px-2 w-full text-white bg-primary hover:bg-blue-800"
                type="button"
              >
                Daftar
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
