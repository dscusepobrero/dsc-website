import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="relative w-full min-h-[calc(100vh-109px)] overflow-hidden bg-gradient-to-b from-transparent via-transparent to-dsc-maroon/50">
        {/* Animated background overlay */}
        <div 
          className={`absolute inset-0 bg-dsc-maroon/90 transition-all duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
        
        {/* Floating circles with parallax */}
        <div 
          className={`absolute bottom-0 right-0 pointer-events-none transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out, opacity 1s, translate 1s',
          }}
        >
          <svg
            className="w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] lg:w-[507px] lg:h-[522px]"
            width="351"
            height="522"
            viewBox="0 0 351 522"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              animation: 'pulse-circle 3s ease-in-out infinite',
            }}
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

        <div 
          className={`absolute bottom-20 right-10 sm:right-20 lg:right-40 pointer-events-none transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}
          style={{
            transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
            transition: 'transform 0.2s ease-out, opacity 1s 0.2s, translate 1s 0.2s',
          }}
        >
          <svg
            className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[190px] lg:h-[195px]"
            width="190"
            height="195"
            viewBox="0 0 190 195"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              animation: 'pulse-circle 3s ease-in-out infinite 1s',
            }}
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

        {/* Eagle image with zoom-in effect and subtle flying motion */}
        <div
          className={`absolute left-0 top-0 w-full h-full transition-all duration-1500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: `scale(${isLoaded ? 1 : 1.1}) translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
            transition: 'opacity 1.5s, transform 1.5s',
          }}
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/1f2108d1133396a5240d4db939dbdea43d394f55?width=3346"
            alt="Eagle sculpture"
            className="w-full h-full object-cover mix-blend-normal"
            style={{
              objectPosition: 'center 30%',
              animation: 'eagle-float 8s ease-in-out infinite',
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-end justify-center min-h-[calc(100vh-109px)] px-6 sm:px-12 lg:px-24 xl:px-32 py-12 sm:py-20">
          <div className="flex flex-col items-end text-right max-w-full lg:max-w-2xl xl:max-w-3xl">
            {/* Logo with fade + slide from right */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f10f1283fa9eb70525a1165aafcfeebfdf27ee14?width=408"
              alt="DSC bracket logo"
              className={`w-[120px] h-[75px] sm:w-[180px] sm:h-[115px] lg:w-[204px] lg:h-[130px] mb-6 sm:mb-8 lg:mb-10 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              style={{ 
                transitionDelay: '0.3s',
                filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.4))',
                animation: 'logo-glow 3s ease-in-out infinite',
              }}
            />
            
            <div className="flex flex-col items-end">
              {/* "We are" text with fade + slide */}
              <h1 
                className={`font-signature text-white text-[60px] sm:text-[90px] lg:text-[120px] xl:text-[150px] leading-none mb-2 sm:mb-4 transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
                style={{ transitionDelay: '0.5s' }}
              >
                We are
              </h1>
              
              {/* "DSC" text with fade + slide + scale */}
              <h2 
                className={`font-rethink font-bold text-white text-[40px] sm:text-[60px] lg:text-[70px] xl:text-[80px] leading-none mb-6 sm:mb-8 lg:mb-10 transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-90'
                }`}
                style={{
                  transitionDelay: '0.7s',
                  textShadow: '0 0 30px rgba(255,255,255,0.3)',
                }}
              >
                DSC
              </h2>
            </div>

            {/* Description with fade */}
            <p
              className={`font-rethink font-normal text-white text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] mb-6 sm:mb-8 lg:mb-10 max-w-[90%] sm:max-w-md transition-all duration-1000 whitespace-nowrap ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '0.9s' }}
            >
              We are students, we are innovators, we are the future.
            </p>

            {/* Button with fade + scale + hover glow */}
            <Link
              to="/about"
              className={`bg-dsc-orange hover:bg-dsc-orange/90 text-white font-rethink font-semibold text-[16px] sm:text-[18px] lg:text-[20px] px-8 sm:px-10 lg:px-12 py-2.5 sm:py-3 rounded-[20px] transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(255,107,0,0.6)] ${
                isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'
              }`}
              style={{ transitionDelay: '1.1s' }}
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Inline styles for animations */}
        <style>{`
          @keyframes pulse-circle {
            0%, 100% {
              opacity: 0.1;
            }
            50% {
              opacity: 0.2;
            }
          }

          @keyframes eagle-float {
            0%, 100% {
              transform: translate(0, 0) scale(1.005);
            }
            25% {
              transform: translate(0.1%, -0.2%) scale(1.006);
            }
            50% {
              transform: translate(0, -0.3%) scale(1.007);
            }
            75% {
              transform: translate(-0.1%, -0.2%) scale(1.006);
            }
          }

          @keyframes logo-shine {
            0% {
              transform: translateX(-100%) skewX(-15deg);
              opacity: 0;
            }
            40% {
              opacity: 1;
            }
            60% {
              opacity: 1;
            }
            100% {
              transform: translateX(200%) skewX(-15deg);
              opacity: 0;
            }
          }

          @keyframes logo-glow {
            0%, 100% {
              filter: drop-shadow(0 0 8px rgba(255,255,255,0.4));
            }
            50% {
              filter: drop-shadow(0 0 12px rgba(255,255,255,0.6));
            }
          }
        `}</style>
      </main>
    </div>
  );
}