import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMemberCard";

const teamMembers = [
  {
    name: "Jaylord Jan Boladola",
    role: "Design and Content Head",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
    quote: "",
    socialLinks: {
      linkedin: "#",
      github: "#",
      facebook: "#",
    },
  },
  {
    name: "Kurt Ashton Montebon",
    role: "Design Co-Head",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
    quote: "",
    socialLinks: {
      linkedin: "#",
      github: "#",
      facebook: "#",
    },
  },
  {
    name: "Dave Shanna Marie Gigawin",
    role: "Design Co-Head",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
    quote: "",
    socialLinks: {
      linkedin: "#",
      github: "#",
      facebook: "#",
    },
  },
  {
    name: "Arndria Basco",
    role: "Design Co-Head",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
    quote: "",
    socialLinks: {
      linkedin: "#",
      github: "#",
      facebook: "#",
    },
  },
  {
    name: "Elvie May Mara",
    role: "Content Co-Head",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
    quote: "",
    socialLinks: {
      linkedin: "#",
      github: "#",
      facebook: "#",
    },
  },
  {
    name: "Julio Cedrick Maghanoy",
    role: "Content Co-Head",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
    quote: "",
    socialLinks: {
      linkedin: "#",
      github: "#",
      facebook: "#",
    },
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="w-full">
        <section className="relative bg-white px-6 sm:px-12 lg:px-24 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d9ba77265078fd003cc3c5e3f64b2c190fc062a0?width=1166"
            alt=""
            className="absolute top-4 left-0 w-[300px] sm:w-[450px] lg:w-[583px] h-auto opacity-70 pointer-events-none"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d9ba77265078fd003cc3c5e3f64b2c190fc062a0?width=1166"
            alt=""
            className="absolute bottom-4 right-0 w-[300px] sm:w-[450px] lg:w-[583px] h-auto opacity-70 pointer-events-none transform-gpu scale-x-[-1] scale-y-[-1]"
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div>
                <h1 className="font-rethink font-bold text-dsc-maroon text-4xl sm:text-6xl lg:text-[96px] leading-tight mb-8 sm:mb-12">
                  What are We?
                </h1>

                <div className="font-rethink text-lg sm:text-xl lg:text-2xl leading-relaxed space-y-6">
                  <p>
                    The{" "}
                    <span className="font-bold">
                      Developer Student Community (DSC)
                    </span>{" "}
                    is a university-based tech community that empowers students
                    to learn, collaborate, and innovate through technology.
                  </p>
                  <p>
                    Formerly known as the Google Developer Student Clubs (GDSC),
                    DSC continues the same vision of building a space where
                    aspiring developers, designers, and innovators come together
                    to develop solutions for real-world challenges — now with a
                    broader and more inclusive identity.
                  </p>
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
                <svg
                  className="w-[250px] sm:w-[350px] lg:w-[459px] h-auto drop-shadow-[43px_22px_34px_rgba(0,0,0,0.25)]"
                  width="536"
                  height="361"
                  viewBox="0 0 536 361"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_655_1209)">
                    <path
                      d="M88.5198 108.078C88.5198 101.825 94.7706 97.4924 100.643 99.674L215.801 142.46C219.319 143.767 221.652 147.118 221.652 150.863V169.483C221.652 175.694 215.477 180.024 209.621 177.92L94.4623 136.549C90.8969 135.268 88.5198 131.893 88.5198 128.112V108.078Z"
                      fill="url(#paint0_linear_655_1209)"
                    />
                    <path
                      d="M89.0808 190.998C89.0808 187.165 91.5225 183.756 95.1569 182.514L209.644 143.406C215.477 141.414 221.542 145.739 221.542 151.89V170.704C221.542 174.471 219.182 177.837 215.634 179.128L101.147 220.795C95.2846 222.928 89.0808 218.597 89.0808 212.37V190.998Z"
                      fill="url(#paint1_linear_655_1209)"
                    />
                    <path
                      d="M208.669 241.806C208.669 236.854 212.692 232.839 217.655 232.839H327.226C332.19 232.839 336.213 236.854 336.213 241.806V261.979C336.213 266.931 332.19 270.946 327.226 270.946H217.655C212.692 270.946 208.669 266.931 208.669 261.979V241.806Z"
                      fill="url(#paint2_linear_655_1209)"
                    />
                    <path
                      d="M450.687 305L392.497 304.996C387.906 304.996 384.185 301.282 384.185 296.701V282.25C384.185 277.669 387.907 273.955 392.498 273.955H412.615C417.206 273.955 420.928 270.242 420.928 265.661V49.596C420.928 45.0145 417.205 41.3007 412.614 41.3014L397.092 41.304C392.5 41.3047 388.778 37.5909 388.778 33.0094V20.2946C388.778 15.7136 392.5 12 397.091 12H450.687C455.278 12 459 15.7136 459 20.2946V296.705C459 301.287 455.278 305 450.687 305Z"
                      fill="url(#paint3_linear_655_1209)"
                    />
                    <path
                      d="M8.31336 305L66.7275 304.996C71.3182 304.996 75.0396 301.282 75.0396 296.701V282.25C75.0396 277.669 71.3179 273.955 66.7269 273.955H46.4993C41.9083 273.955 38.1866 270.242 38.1866 265.661V49.596C38.1866 45.0145 41.9092 41.3007 46.5007 41.3014L62.1189 41.304C66.7104 41.3047 70.433 37.5909 70.433 33.0094V20.2946C70.433 15.7136 66.7113 12 62.1202 12H8.31278C3.72176 12 0 15.7136 0 20.2946V296.705C0 301.287 3.72211 305 8.31336 305Z"
                      fill="url(#paint4_linear_655_1209)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_655_1209"
                      x="0"
                      y="0"
                      width="536"
                      height="361"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="43" dy="22" />
                      <feGaussianBlur stdDeviation="17" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_655_1209"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_655_1209"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_655_1209"
                      x1="229.5"
                      y1="12"
                      x2="229.5"
                      y2="305"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.236" stopColor="#F71919" />
                      <stop offset="0.821" stopColor="#7C090B" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_655_1209"
                      x1="229.5"
                      y1="12"
                      x2="157.603"
                      y2="305.482"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.0259998" stopColor="#FF0C0C" />
                      <stop offset="0.891" stopColor="#A81010" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_655_1209"
                      x1="0"
                      y1="158.5"
                      x2="459"
                      y2="158.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.241" stopColor="#B81E1E" />
                      <stop offset="1" stopColor="#FF3737" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_655_1209"
                      x1="35.2165"
                      y1="305.001"
                      x2="35.2165"
                      y2="12"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.296" stopColor="#C92222" />
                      <stop offset="1" stopColor="#FF0000" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_655_1209"
                      x1="35.2165"
                      y1="305.001"
                      x2="35.2165"
                      y2="12"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.296" stopColor="#C92222" />
                      <stop offset="1" stopColor="#FF0000" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative bg-gradient-to-b from-red-900 to-red-700 text-white px-6 sm:px-12 lg:px-24 py-12 sm:py-16 lg:py-20 overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute -top-24 -left-48 w-96 h-96 bg-white/10 rounded-full" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-white/5 rounded-full" />
            <div className="absolute top-1/2 -right-48 w-96 h-96 bg-white/10 rounded-full" />
            <div className="absolute bottom-0 -left-32 w-64 h-64 bg-white/5 rounded-full" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10 space-y-12 sm:space-y-16 lg:space-y-20">
            {/* Mission Section */}
            <div>
              <h2 className="font-inter font-bold text-3xl sm:text-4xl lg:text-[50px] leading-tight mb-8 sm:mb-12">
                OUR MISSION
              </h2>
              <p className="font-rethink text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-6xl">
                To empower and inspire students at the University of Southeastern
                Philippines by providing access to diverse technologies and
                fostering a collaborative learning environment. We promote{" "}
                <span className="font-bold">
                  innovation, research, creativity, and technological passion
                </span>{" "}
                while enhancing skills for future careers. By integrating{" "}
                <span className="font-bold">academic excellence</span> with{" "}
                <span className="font-bold">practical application</span>, we
                support our community in addressing real-world challenges and
                making meaningful contributions. Through{" "}
                <span className="font-bold">
                  strategic partnerships and collaborations
                </span>
                , we enable members to play an active role in advancing technology
                and promoting socio-economic progress—positioning them as{" "}
                <span className="font-bold">catalysts for positive change</span>{" "}
                in an ever-evolving digital world.
              </p>
            </div>

            {/* Vision Section */}
            <div>
              <h2 className="font-inter font-bold text-3xl sm:text-4xl lg:text-[50px] leading-tight mb-8 sm:mb-12">
                OUR VISION
              </h2>
              <p className="font-rethink text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-6xl">
                To be a{" "}
                <span className="font-bold">
                  leading student-driven tech community
                </span>{" "}
                that shapes the next generation of innovators and leaders. We aim
                to equip students with the{" "}
                <span className="font-bold">
                  skills, mindset, and opportunities
                </span>{" "}
                needed to thrive in the digital age. Through{" "}
                <span className="font-bold">
                  education, collaboration, and innovation
                </span>
                , we envision a future where our members leave a lasting impact on
                the local and global tech landscape.
              </p>
            </div>

            {/* Core Values Section */}
            <div>
              <h2 className="font-inter font-bold text-3xl sm:text-4xl lg:text-[50px] leading-tight mb-8 sm:mb-12">
                OUR CORE VALUES - WE C.R.E.A.T.E
              </h2>
              <div className="font-rethink text-lg sm:text-xl lg:text-2xl leading-relaxed space-y-6 max-w-6xl">
                <p>
                  <span className="font-bold">C – Collaboration</span> We grow
                  stronger by working together, sharing knowledge, and building
                  meaningful connections.
                </p>
                <p>
                  <span className="font-bold">R – Responsibility</span> We take
                  ownership of our actions, lead with integrity, and uphold our
                  commitment to the community.
                </p>
                <p>
                  <span className="font-bold">E – Excellence</span> We strive for
                  academic and technical excellence by continuously learning and
                  applying our skills effectively.
                </p>
                <p>
                  <span className="font-bold">A – Adaptability</span> We embrace
                  change, learn from challenges, and stay agile in a fast-evolving
                  tech landscape.
                </p>
                <p>
                  <span className="font-bold">T – Tech-Driven Innovation</span> We
                  are passionate about technology and use it as a tool for creative
                  problem-solving and real-world impact.
                </p>
                <p>
                  <span className="font-bold">E – Empowerment</span> We uplift one
                  another, create inclusive spaces, and help students realize their
                  potential as future leaders.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 sm:px-12 lg:px-24 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-rethink font-bold text-dsc-maroon text-center text-4xl sm:text-5xl lg:text-[64px] leading-tight mb-12 sm:mb-16 lg:mb-20">
              The Website Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
