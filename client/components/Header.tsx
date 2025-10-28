import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Events", path: "/events" },
    { label: "Our Team", path: "/team" },
    { label: "Reach Us", path: "/contact" },
  ];

  return (
    <header className="w-full h-[109px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <svg
            className="w-[60px] h-[42px] sm:w-[89px] sm:h-[62px] flex-shrink-0"
            width="89"
            height="62"
            viewBox="0 0 89 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_659_4010)">
              <path
                opacity="0.999"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.13952 -0.0128021C4.92225 -0.0128021 8.70499 -0.0128021 12.4877 -0.0128021C13.0982 0.153229 13.4781 0.571342 13.6272 1.24153C13.6429 2.47027 13.6429 3.69901 13.6272 4.92774C13.4608 5.66378 13.034 6.08616 12.3468 6.19488C11.0458 6.19542 9.74573 6.21246 8.44654 6.24607C7.81088 6.46927 7.46237 6.94285 7.401 7.6668C7.38533 23.0943 7.38533 38.5217 7.401 53.9492C7.48798 54.7607 7.89915 55.2427 8.6345 55.3955C10.193 55.404 11.7515 55.4127 13.3101 55.4211C13.9637 55.5445 14.367 55.9585 14.5201 56.6627C14.5357 58.0194 14.5357 59.3761 14.5201 60.7329C14.3709 61.403 13.9911 61.8211 13.3805 61.9872C9.30019 61.9872 5.21987 61.9872 1.13952 61.9872C0.528641 61.8165 0.144886 61.3984 -0.0117493 60.7329C-0.0117493 40.9023 -0.0117493 21.072 -0.0117493 1.24153C0.144886 0.575967 0.528641 0.157856 1.13952 -0.0128021Z"
                fill="#801817"
              />
              <path
                opacity="0.999"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M76.4888 -0.0128021C80.2715 -0.0128021 84.0543 -0.0128021 87.837 -0.0128021C88.4479 0.157856 88.8315 0.575967 88.9883 1.24153C88.9883 21.072 88.9883 40.9023 88.9883 60.7329C88.8315 61.3984 88.4479 61.8165 87.837 61.9872C83.7566 61.9872 79.6764 61.9872 75.596 61.9872C74.9853 61.8211 74.6056 61.403 74.4564 60.7329C74.4407 59.3846 74.4407 58.0366 74.4564 56.6883C74.5962 55.9812 74.9917 55.5589 75.643 55.4211C77.2094 55.4127 78.7756 55.404 80.342 55.3955C81.0774 55.2427 81.4886 54.7607 81.5755 53.9492C81.5912 38.5217 81.5912 23.0943 81.5755 7.6668C81.5139 6.94264 81.1653 6.46906 80.53 6.24607C79.2307 6.21246 77.9307 6.19542 76.6298 6.19488C75.9418 6.08521 75.5149 5.66283 75.3493 4.92774C75.3335 3.69901 75.3335 2.47027 75.3493 1.24153C75.4985 0.571342 75.8781 0.153229 76.4888 -0.0128021Z"
                fill="#801817"
              />
              <path
                opacity="0.997"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.8314 17.8551C19.1701 17.8241 19.499 17.871 19.8182 17.9959C27.0921 20.9533 34.3679 23.9057 41.6453 26.853C42.3255 27.1761 42.7367 27.7349 42.8788 28.5297C42.9169 29.9371 42.9246 31.3451 42.9023 32.7535C42.8426 33.6989 42.416 34.3601 41.6218 34.7374C34.3834 37.608 27.1469 40.4835 19.9122 43.3642C18.9086 43.6824 18.1058 43.3795 17.5039 42.4554C17.3449 42.1718 17.2509 41.8646 17.222 41.5339C17.2063 40.0747 17.2063 38.6156 17.222 37.1565C17.329 36.3063 17.7401 35.7048 18.4555 35.3518C22.6249 33.802 26.7914 32.2449 30.955 30.68C26.7625 29.0166 22.5646 27.3655 18.3615 25.7267C17.6717 25.3968 17.2527 24.8293 17.1045 24.0244C17.0889 22.5823 17.0889 21.1402 17.1045 19.6982C17.3138 18.6723 17.8894 18.058 18.8314 17.8551Z"
                fill="#801817"
              />
              <path
                opacity="0.999"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.0682 46.0392C49.1796 46.0349 56.2906 46.0392 63.4019 46.052C64.1437 46.1946 64.6646 46.6426 64.9644 47.3959C65.0029 47.5132 65.0344 47.6325 65.0583 47.7543C65.0971 49.2552 65.1049 50.7571 65.0818 52.2597C64.951 53.0678 64.5398 53.6354 63.8483 53.962C63.7024 54.0168 63.5537 54.0593 63.4019 54.09C56.2906 54.1072 49.1796 54.1072 42.0682 54.09C41.3265 53.9474 40.8056 53.4994 40.5058 52.7461C40.4673 52.6288 40.4358 52.5095 40.4118 52.3877C40.3731 50.8868 40.3653 49.385 40.3883 47.8823C40.5192 47.0742 40.9304 46.5067 41.6218 46.18C41.7724 46.1286 41.9212 46.0815 42.0682 46.0392Z"
                fill="#801817"
              />
            </g>
            <defs>
              <clipPath id="clip0_659_4010">
                <rect width="89" height="62" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="hidden md:flex flex-col">
            <div className="text-dsc-maroon font-rethink text-[18px] lg:text-[25px] font-bold leading-tight">
              Developer Student Community
            </div>
            <div className="text-dsc-maroon font-rethink text-[14px] lg:text-[20px] font-normal leading-tight">
              University of Southeastern Philippines
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-rethink text-[20px] font-normal transition-colors ${
                location.pathname === item.path
                  ? "text-dsc-maroon"
                  : "text-gray-400 hover:text-dsc-maroon"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          title="Open mobile menu"
        >
          <span className="w-6 h-0.5 bg-dsc-maroon"></span>
          <span className="w-6 h-0.5 bg-dsc-maroon"></span>
          <span className="w-6 h-0.5 bg-dsc-maroon"></span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[109px] left-0 right-0 bg-white shadow-md z-40">
          <nav className="flex flex-col items-center gap-4 p-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-rethink text-[20px] font-normal transition-colors ${
                  location.pathname === item.path
                    ? "text-dsc-maroon"
                    : "text-gray-400 hover:text-dsc-maroon"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
