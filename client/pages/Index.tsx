import { Link } from "react-router-dom";
import Header from "@/components/Header";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="relative w-full min-h-[calc(100vh-109px)] overflow-hidden bg-gradient-to-b from-transparent via-transparent to-dsc-maroon/50">
        <div className="absolute inset-0 bg-dsc-maroon/90"></div>
        
        <div className="absolute bottom-0 right-0 pointer-events-none">
          <svg
            className="w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] lg:w-[507px] lg:h-[522px]"
            width="351"
            height="522"
            viewBox="0 0 351 522"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="253.5"
              cy="261"
              rx="253.5"
              ry="261"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
          </svg>
        </div>

        <div className="absolute bottom-20 right-10 sm:right-20 lg:right-40 pointer-events-none">
          <svg
            className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[190px] lg:h-[195px]"
            width="190"
            height="195"
            viewBox="0 0 190 195"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="95"
              cy="97.5"
              rx="95"
              ry="97.5"
              fill="#D9D9D9"
              fillOpacity="0.15"
            />
          </svg>
        </div>

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/1f2108d1133396a5240d4db939dbdea43d394f55?width=3346"
          alt="Eagle sculpture"
          className="absolute left-0 top-0 w-full h-full object-cover opacity-100 mix-blend-normal"
          style={{
            objectPosition: 'left center',
          }}
        />

        <div className="relative z-10 flex flex-col items-end justify-center min-h-[calc(100vh-109px)] px-6 sm:px-12 lg:px-24 xl:px-32 py-12 sm:py-20">
          <div className="flex flex-col items-end text-right max-w-full lg:max-w-2xl xl:max-w-3xl">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f10f1283fa9eb70525a1165aafcfeebfdf27ee14?width=408"
              alt="DSC bracket logo"
              className="w-[120px] h-[75px] sm:w-[180px] sm:h-[115px] lg:w-[204px] lg:h-[130px] mb-6 sm:mb-8 lg:mb-10"
            />
            
            <div className="flex flex-col items-end">
              <h1 className="font-signature text-white text-[60px] sm:text-[90px] lg:text-[120px] xl:text-[150px] leading-none mb-2 sm:mb-4">
                We are
              </h1>
              
              <h2 className="font-rethink font-bold text-white text-[40px] sm:text-[60px] lg:text-[70px] xl:text-[80px] leading-none mb-6 sm:mb-8 lg:mb-10">
                DSC
              </h2>
            </div>

            <p className="font-rethink font-normal text-white text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] mb-6 sm:mb-8 lg:mb-10 max-w-[90%] sm:max-w-md">
              We are students, we are innovators, we are the future.
            </p>

            <Link
              to="/about"
              className="bg-dsc-orange hover:bg-dsc-orange/90 text-white font-rethink font-semibold text-[16px] sm:text-[18px] lg:text-[20px] px-8 sm:px-10 lg:px-12 py-2.5 sm:py-3 rounded-[20px] transition-all hover:scale-105 active:scale-95"
            >
              About Us
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
