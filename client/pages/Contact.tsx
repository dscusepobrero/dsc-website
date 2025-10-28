import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 py-12 sm:py-16 lg:py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="font-rethink font-bold text-[#FE1B1B] text-3xl sm:text-4xl lg:text-[45px] mb-2">
              CONNECT WITH US!
            </h1>
            <p className="font-inter text-[#717171] text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Ready to partner with us or learn more about what we do? Contact us today for event information, sponsorship opportunities, or collaboration discussions.
            </p>
          </div>

          {/* Main Contact Container */}
          <div className="relative bg-dsc-maroon rounded-[15px] shadow-[0_0_60px_30px_rgba(0,0,0,0.03)] overflow-hidden">
            {/* Background Eagle Image */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6baeeaab227fea6423f62cc9113eadbb79a8e205?width=1384"
              alt=""
              className="absolute left-[-80px] top-[30px] w-[692px] h-[487px] object-cover opacity-20 pointer-events-none hidden lg:block"
              style={{ filter: "drop-shadow(0 0 4px rgba(0, 0, 0, 0.75))" }}
            />

            {/* Decorative Circles */}
            <svg
              className="absolute right-0 bottom-0 w-[247px] h-[245px] pointer-events-none hidden lg:block"
              width="173"
              height="277"
              viewBox="0 0 173 277"
              fill="none"
            >
              <ellipse
                cx="166.963"
                cy="158.612"
                rx="102.5"
                ry="102"
                transform="rotate(-9.66119 166.963 158.612)"
                fill="white"
                fillOpacity="0.12"
              />
              <circle
                cx="72.9361"
                cy="93.2424"
                r="63.2226"
                transform="rotate(-9.66119 72.9361 93.2424)"
                fill="#FFF9F9"
                fillOpacity="0.13"
              />
            </svg>

            <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 sm:p-12 lg:p-16">
              {/* Left Side - Info Section */}
              <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-8">
                {/* Logo */}
                <div className="flex items-center gap-4">
                  <svg
                    className="w-[60px] h-[42px] sm:w-[89px] sm:h-[62px] flex-shrink-0"
                    width="89"
                    height="62"
                    viewBox="0 0 89 62"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_contact)">
                      <path
                        opacity="0.999"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.13955 -0.0128021C4.92228 -0.0128021 8.70502 -0.0128021 12.4878 -0.0128021C13.0983 0.153229 13.4781 0.571342 13.6273 1.24153C13.6429 2.47027 13.6429 3.69901 13.6273 4.92774C13.4608 5.66378 13.034 6.08616 12.3468 6.19488C11.0458 6.19542 9.74576 6.21246 8.44657 6.24607C7.81091 6.46927 7.4624 6.94285 7.40103 7.6668C7.38536 23.0943 7.38536 38.5217 7.40103 53.9492C7.48801 54.7607 7.89918 55.2427 8.63453 55.3955C10.193 55.404 11.7516 55.4127 13.3101 55.4211C13.9637 55.5445 14.3671 55.9585 14.5201 56.6627C14.5358 58.0194 14.5358 59.3761 14.5201 60.7329C14.3709 61.403 13.9911 61.8211 13.3806 61.9872C9.30022 61.9872 5.2199 61.9872 1.13955 61.9872C0.528672 61.8165 0.144916 61.3984 -0.0117188 60.7329C-0.0117188 40.9023 -0.0117188 21.072 -0.0117188 1.24153C0.144916 0.575967 0.528672 0.157856 1.13955 -0.0128021Z"
                        fill="white"
                      />
                      <path
                        opacity="0.999"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M76.489 -0.0128021C80.2717 -0.0128021 84.0544 -0.0128021 87.8372 -0.0128021C88.4481 0.157856 88.8317 0.575967 88.9884 1.24153C88.9884 21.072 88.9884 40.9023 88.9884 60.7329C88.8317 61.3984 88.4481 61.8165 87.8372 61.9872C83.7568 61.9872 79.6766 61.9872 75.5962 61.9872C74.9855 61.8211 74.6058 61.403 74.4566 60.7329C74.4409 59.3846 74.4409 58.0366 74.4566 56.6883C74.5964 55.9812 74.9919 55.5589 75.6431 55.4211C77.2096 55.4127 78.7758 55.404 80.3422 55.3955C81.0776 55.2427 81.4888 54.7607 81.5757 53.9492C81.5914 38.5217 81.5914 23.0943 81.5757 7.6668C81.5141 6.94264 81.1655 6.46906 80.5302 6.24607C79.2309 6.21246 77.9309 6.19542 76.6299 6.19488C75.942 6.08521 75.5151 5.66283 75.3494 4.92774C75.3337 3.69901 75.3337 2.47027 75.3494 1.24153C75.4986 0.571342 75.8783 0.153229 76.489 -0.0128021Z"
                        fill="white"
                      />
                      <path
                        opacity="0.997"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.8314 17.8551C19.1701 17.8241 19.499 17.871 19.8182 17.9959C27.0921 20.9533 34.3679 23.9057 41.6453 26.853C42.3255 27.1761 42.7367 27.7349 42.8788 28.5297C42.9169 29.9371 42.9246 31.3451 42.9023 32.7535C42.8426 33.6989 42.416 34.3601 41.6218 34.7374C34.3834 37.608 27.1469 40.4835 19.9122 43.3642C18.9086 43.6824 18.1058 43.3795 17.5039 42.4554C17.3449 42.1718 17.2509 41.8646 17.222 41.5339C17.2063 40.0747 17.2063 38.6156 17.222 37.1565C17.329 36.3063 17.7401 35.7048 18.4555 35.3518C22.6249 33.802 26.7914 32.2449 30.955 30.68C26.7625 29.0166 22.5646 27.3655 18.3615 25.7267C17.6717 25.3968 17.2527 24.8293 17.1045 24.0244C17.0889 22.5823 17.0889 21.1402 17.1045 19.6982C17.3138 18.6723 17.8894 18.058 18.8314 17.8551Z"
                        fill="white"
                      />
                      <path
                        opacity="0.999"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M42.0683 46.0392C49.1796 46.0349 56.2907 46.0392 63.402 46.052C64.1437 46.1946 64.6646 46.6426 64.9644 47.3959C65.003 47.5132 65.0344 47.6325 65.0584 47.7543C65.0972 49.2552 65.1049 50.7571 65.0819 52.2597C64.951 53.0678 64.5399 53.6354 63.8484 53.962C63.7025 54.0168 63.5538 54.0593 63.402 54.09C56.2907 54.1072 49.1796 54.1072 42.0683 54.09C41.3266 53.9474 40.8057 53.4994 40.5059 52.7461C40.4673 52.6288 40.4359 52.5095 40.4119 52.3877C40.3731 50.8868 40.3654 49.385 40.3884 47.8823C40.5193 47.0742 40.9304 46.5067 41.6219 46.18C41.7725 46.1286 41.9212 46.0815 42.0683 46.0392Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_contact">
                        <rect width="89" height="62" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="flex flex-col">
                    <div className="text-white font-rethink text-[18px] sm:text-[25px] font-bold leading-tight">
                      Developer Student Community
                    </div>
                    <div className="text-white font-rethink text-[14px] sm:text-[20px] font-normal leading-tight">
                      University of Southeastern Philippines
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white font-inter text-sm sm:text-base text-center lg:text-left max-w-md leading-7">
                  DSC USeP is a student-driven community for developers passionate about technology, learning, and collaboration.
                </p>

                {/* Tagline */}
                <p className="text-white font-inter text-sm sm:text-base font-bold italic text-center lg:text-left">
                  We are students. We are innovators. We are the future. We are DSC.
                </p>

                {/* CTA Button */}
                <button className="w-full sm:w-auto px-6 py-2 rounded-lg bg-gradient-to-r from-[#9A0000] via-[#AA2B2B] to-[#BA5656] text-white font-rethink font-bold text-sm shadow-[0_0_4px_0_rgba(0,0,0,0.75)] hover:opacity-90 transition-opacity">
                  Be a DSC member
                </button>

                {/* Social Links & Contact Info */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-4">
                  <a
                    href="https://www.facebook.com/DSCUSePObrero"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                    aria-label="Facebook"
                  >
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <g clipPath="url(#clip0_fb)">
                        <path
                          d="M27.8855 29.4846C28.7683 29.4846 29.4842 28.7686 29.4842 27.8857V2.11488C29.4842 1.23173 28.7684 0.516052 27.8855 0.516052H2.11447C1.2313 0.516052 0.515625 1.23184 0.515625 2.115V27.8858C0.515625 28.7687 1.23119 29.4847 2.11447 29.4847H27.8855V29.4846Z"
                          fill="white"
                        />
                        <path
                          d="M20.5037 29.4846V18.2664H24.2693L24.833 13.8945H20.5037V11.1021C20.5037 9.83624 20.8552 8.97365 22.6703 8.97365L24.9854 8.97253V5.06245C24.5852 5.00917 23.2109 4.89014 21.6121 4.89014C18.2742 4.89014 15.989 6.92757 15.989 10.6692V13.8931H12.2139V18.2652H15.9889V29.4835H20.5019L20.5037 29.4846Z"
                          fill="#801817"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_fb">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>

                  <a
                    href="https://linkedin.com/company/dscusepobrero"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                    aria-label="LinkedIn"
                  >
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <g clipPath="url(#clip0_li)">
                        <path
                          d="M4.83057 5.21204H25.0426V25.2966H4.83057V5.21204Z"
                          fill="#801817"
                        />
                        <path
                          d="M6 24V11.43H9.84V24H6ZM9.96 7.95C9.99 9.03 9.18 9.9 7.89 9.9C6.69 9.9 5.91 9.03 5.91 7.95C5.91 6.84 6.72 6 7.95 6C9.18 6 9.96 6.84 9.96 7.95ZM20.04 24V17.04C20.04 15.42 19.5 14.31 18.09 14.31C17.04 14.31 16.41 15.06 16.11 15.78C16.02 16.05 15.99 16.41 15.99 16.77V24H12.15V15.45C12.15 13.89 12.09 12.57 12.06 11.43H15.39L15.57 13.2H15.63C16.14 12.36 17.4 11.16 19.47 11.16C21.99 11.16 23.91 12.87 23.91 16.59V24H20.04ZM30 2.64C30 1.2 28.8 0 27.36 0H2.64C1.2 0 0 1.2 0 2.64V27.36C0 28.8 1.2 30 2.64 30H27.36C28.8 30 30 28.8 30 27.36V2.64Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_li">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>

                  <a
                    href="mailto:dsc@usep.edu.ph"
                    className="hover:opacity-70 transition-opacity"
                    aria-label="Email"
                  >
                    <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                      <g clipPath="url(#clip0_gmail)">
                        <path
                          d="M37.3178 29.9374H2.52406C1.175 29.9374 0.0390625 28.8481 0.0390625 27.4777V2.60025C0.0389063 1.26495 1.13937 0.140564 2.52406 0.140564H37.3178C38.6669 0.140564 39.8031 1.22984 39.8031 2.60025V27.4777C39.8031 28.8481 38.7025 29.9374 37.3178 29.9374Z"
                          fill="#E3E3E3"
                        />
                        <path
                          opacity="0.1"
                          d="M5.00928 29.9373L19.8854 18.0959L19.9919 17.4634L4.65428 6.53564L4.61865 29.4103L5.00928 29.9373Z"
                          fill="#231F20"
                        />
                        <path
                          d="M2.52422 29.9374C1.13953 29.9374 0.0390625 28.8481 0.0390625 27.4777V2.56502C0.0390625 1.19476 1.13953 0.94873 2.52422 0.94873C3.90891 0.94873 5.00953 1.22986 5.00953 2.56502V29.9374H2.52422Z"
                          fill="#801817"
                        />
                        <path
                          d="M37.3178 29.9374H34.8325V2.49481C34.8325 1.1244 35.9331 0.94873 37.3178 0.94873C38.7025 0.94873 39.8031 1.1244 39.8031 2.49481V27.513C39.8031 28.8481 38.7025 29.9374 37.3178 29.9374Z"
                          fill="#801817"
                        />
                        <path
                          d="M19.8854 18.0958L1.10381 4.60296C0.0031804 3.79482 -0.316351 2.24873 0.500212 1.15945C1.31709 0.070176 2.91459 -0.1757 4.05068 0.632444L19.921 12.0522L35.8974 0.491722C36.998 -0.316422 38.5602 -0.070391 39.3768 1.05399C40.1933 2.14327 39.9449 3.68935 38.8087 4.4975L19.8852 18.0957L19.8854 18.0958Z"
                          fill="#801817"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_gmail">
                          <rect width="40" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 text-white font-inter text-xs italic font-bold text-center lg:text-left">
                  <span>USeP - Developer Student Community</span>
                  <span>dsc@usep.edu.ph</span>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="w-full px-4 py-3 rounded border border-[rgba(235,235,245,0.6)] bg-transparent text-white placeholder:text-[rgba(235,235,245,0.6)] font-inter text-sm focus:outline-none focus:border-white transition-colors"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="w-full px-4 py-3 rounded border border-[rgba(235,235,245,0.6)] bg-transparent text-white placeholder:text-[rgba(235,235,245,0.6)] font-inter text-sm focus:outline-none focus:border-white transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded border border-[rgba(235,235,245,0.6)] bg-transparent text-white placeholder:text-[rgba(235,235,245,0.6)] font-inter text-sm focus:outline-none focus:border-white transition-colors"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={6}
                    className="w-full px-4 py-3 rounded border border-[rgba(235,235,245,0.6)] bg-transparent text-white placeholder:text-[rgba(235,235,245,0.6)] font-inter text-sm focus:outline-none focus:border-white transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded bg-white text-black font-rethink font-bold text-sm hover:bg-gray-100 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
