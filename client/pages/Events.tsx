import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventSlider from "@/components/EventSlider";
import PhotoGallery from "@/components/PhotoGallery";
import MilestonesTimeline from "@/components/MilestonesTimeline";

export default function Events() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="w-full">
        <section className="bg-white px-6 sm:px-12 lg:px-24 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            <h1 className="font-rethink font-bold text-dsc-maroon text-4xl sm:text-5xl lg:text-[55px] leading-tight">
              Projects & Initiatives
            </h1>
            <p className="font-inter text-dsc-maroon text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
              Our ongoing and recent work in the community.
            </p>
          </div>

          <div
            className="relative w-full py-10 sm:py-12 lg:py-16"
            style={{
              background: "rgba(128, 24, 23, 0.96)",
            }}
          >
            <div className="px-6 sm:px-8 lg:px-12">
              <EventSlider />
            </div>
          </div>
        </section>

        <div
          className="w-full h-[37px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(239, 79, 31, 0.50) 1.94%, rgba(239, 79, 31, 0.00) 99.88%), #801817",
          }}
        />

        <section
          className="relative px-6 sm:px-12 lg:px-24 py-16 sm:py-20 lg:py-24 overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(239, 79, 31, 0.00) 56.56%, rgba(239, 79, 31, 0.50) 99.88%), #801817",
          }}
        >
          <svg
            className="absolute -left-20 sm:-left-32 lg:-left-48 top-48 sm:top-64 w-[250px] sm:w-[400px] lg:w-[507px] h-auto opacity-30 pointer-events-none"
            width="389"
            height="508"
            viewBox="0 0 389 508"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="128.161"
              cy="254.082"
              rx="253.5"
              ry="261"
              transform="rotate(-100.03 128.161 254.082)"
              fill="#801817"
              fillOpacity="0.3"
            />
          </svg>

          <svg
            className="absolute left-8 sm:left-16 lg:left-24 top-64 sm:top-80 w-[180px] sm:w-[240px] lg:w-[292px] h-auto opacity-25 pointer-events-none"
            width="301"
            height="293"
            viewBox="0 0 301 293"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="150.345"
              cy="146.31"
              rx="146"
              ry="150"
              transform="rotate(-100.03 150.345 146.31)"
              fill="#EF4F1F"
              fillOpacity="0.25"
            />
          </svg>

          <svg
            className="absolute -right-20 sm:-right-32 lg:-right-48 top-[700px] sm:top-[800px] lg:top-[900px] w-[250px] sm:w-[450px] lg:w-[616px] h-auto opacity-30 pointer-events-none"
            width="333"
            height="617"
            viewBox="0 0 333 617"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="316.919"
              cy="308.65"
              rx="307.994"
              ry="317.106"
              transform="rotate(-100.03 316.919 308.65)"
              fill="#801817"
              fillOpacity="0.3"
            />
          </svg>

          <svg
            className="absolute right-4 sm:right-8 lg:right-12 top-[680px] sm:top-[780px] lg:top-[880px] w-[150px] sm:w-[190px] lg:w-[231px] h-auto opacity-25 pointer-events-none"
            width="238"
            height="232"
            viewBox="0 0 238 232"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="118.774"
              cy="116.212"
              rx="115.338"
              ry="118.498"
              transform="rotate(-100.03 118.774 116.212)"
              fill="#EF4F1F"
              fillOpacity="0.25"
            />
          </svg>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="font-rethink font-bold text-dsc-maroon text-4xl sm:text-5xl lg:text-[55px] leading-tight mb-4">
                DSC in Action
              </h2>
              <p className="font-inter text-dsc-maroon text-lg sm:text-xl lg:text-2xl">
                Key achievements and memorable moments.
              </p>
            </div>

            <div className="space-y-0">
              <PhotoGallery direction="left" />
              <PhotoGallery direction="right" />
              <PhotoGallery direction="left" />
            </div>
          </div>
        </section>

        <section className="bg-white px-6 sm:px-12 lg:px-24 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="font-rethink font-bold text-dsc-maroon text-4xl sm:text-5xl lg:text-[55px] leading-tight mb-4">
                Milestones
              </h2>
              <p className="font-inter text-black text-lg sm:text-xl lg:text-2xl">
                Key achievements and memorable moments.
              </p>
            </div>

            <MilestonesTimeline />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
