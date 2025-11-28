import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMemberCard";
import { motion, Variants } from "framer-motion";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time delay between each child section
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

interface TeamMember {
  name: string;
  role: string;
  image: string;
  quote: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    facebook?: string;
  };
}

const imageBasePath = "/assets/officer pictures 2025/2025-2026 Officers";

const teamData: Record<
  string,
  { description?: string; members: TeamMember[] }
> = {
  lead: {
    members: [
      {
        name: "Kent Paulo R. Delgado",
        role: "Lead, DSC",
        image: `${imageBasePath}/Lead/Delgado.webp`,
        quote:
          "We can't anticipate or even predict our future, but we can begin preparing for it",
        socialLinks: { linkedin: "http://www.linkedin.com/in/kent-paulo-delgado-ba3591314",
                       github: "https://github.com/Peeeweee",
                       facebook: "https://www.facebook.com/KPD.delgadopaulo/" },
      },
    ],
  },
  adviser: {
    members: [
      {
        name: "Nancy S. Mozo",
        role: "Adviser",
        image: `${imageBasePath}/Adviser/Mozo/Mozo.webp`,
        quote: "-",
        socialLinks: {},
      },
    ],
  },
  operations: {
    description:
      "Oversees day-to-day functions, event management, ad hoc projects, recruitment, and member welfare, ensuring smooth operations and a positive organizational culture.",
    members: [
      {
        name: "Mariel Rossini C. Go",
        role: "Chief Operations Officer",
        image: `${imageBasePath}/Operations/Go/Go.webp`,
        quote: "Stay humble, stay hungry.",
        socialLinks: { facebook: "https://www.facebook.com/rossini.22.02" },
      },
      {
        name: "Marc Alvienth T. Hernandez",
        role: "Secretary",
        image: `${imageBasePath}/Operations/Hernandez/Hernandez.webp`,
        quote: "Hindi mahalaga ang magwagi, ang mahalaga, ikaw ay nakibahagi",
        socialLinks: { linkedin: "http://www.linkedin.com/in/marc-alvienth-hernandez-370382324",
                       github: "https://github.com/Albyent",
                       facebook: "https://www.facebook.com/marcalvienth.hernandez" },
      },
      {
        name: "Baberose I. Silmaro",
        role: "Communications Officer",
        image: `${imageBasePath}/Operations/Silmaro/Silmaro.webp`,
        quote: "Don't! Don't! Don't!!!... Don't stoOoOoOP~ Go OooOoonn~",
        socialLinks: { facebook: "https://www.facebook.com/baberose.silmaro.7" },
      },
      {
        name: "John Marcellin E. Tan",
        role: "Events Officer",
        image: `${imageBasePath}/Operations/Tan/Tan.webp`,
        quote: "Collect moments, not grudges.",
        socialLinks: { linkedin: "http://www.linkedin.com/in/john-marcellin-tan-bb6bb2382",
                       github: "https://github.com/JMarcellin",
                       facebook: "https://www.facebook.com/Marcellin.13" },
      },
      {
        name: "Kimberly S. Bermoy",
        role: "Events Officer",
        image: `${imageBasePath}/Operations/Bermoy/Bermoy.webp`,
        quote: "Thank u, next",
        socialLinks: { facebook: "https://www.facebook.com/kimberlysaromines.bermoy" },
      },
      {
        name: "Ken Erik Y. Justiniani",
        role: "Technical Officer",
        image: `${imageBasePath}/Operations/Justiniani/Justiniani.webp`,
        quote: "Kapag ang jeep ay lumipad sa tubig, huwag umihi dito.",
        socialLinks: { facebook: "https://www.facebook.com/ken.justiniani" },
      },
      {
        name: "Ace Jonathan D. Briones",
        role: "Technical Officer",
        image: `${imageBasePath}/Operations/Briones/Briones.webp`,
        quote: "If there's a will, there's a water",
        socialLinks: { facebook: "https://www.facebook.com/ace.jonathan.367220/" },
      },
    ],
  },
  technology: {
    description:
      "Manages the organization's tech-related affairs, handling tasks that require knowledge of technology and programming.",
    members: [
      {
        name: "Julse M. Merencillo",
        role: "Chief Technology Officer",
        image: `${imageBasePath}/Technology/Merencillo/Merencillo.webp`,
        quote: "1 + 1 = 2 with a parse error at 42",
        socialLinks: { linkedin: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                       github: "https://github.com/julse-merencillo",
                       facebook: "https://www.facebook.com/merencillo.julse" },
      },
      {
        name: "Kervy Chrystan G. Caranto",
        role: "Engineering Lead",
        image: `${imageBasePath}/Technology/Caranto/Caranto.webp`,
        quote: "There are only two hard problems in Computer Science; cache invalidation, naming things, and off-by-one errors",
        socialLinks: { facebook: "https://www.facebook.com/java.lang.System.exit" },
      },
      {
        name: "Dave Shanna Marie E. Gigawin",
        role: "Design Lead",
        image: `${imageBasePath}/Technology/Gigawin/Gigawin.webp`,
        quote: "good things take time",
        socialLinks: { facebook: "https://www.facebook.com/dave.shanna.2024" },
      },
      {
        name: "Decyrel P. Dahan",
        role: "Data Science Lead",
        image: `${imageBasePath}/Technology/Dahan/Dahan.webp`,
        quote: "HAHAHAHAHAHAHA",
        socialLinks: { facebook: "https://www.facebook.com/junjun.panolin.1/" },
      },
    ],
  },
  finance: {
    description:
      "Manages the organization's finances, including budgeting and transactions They prepare financial reports and ensure compliance.",
    members: [
      {
        name: "Lance Marvin Libron",
        role: "Chief Finance Officer",
        image: `${imageBasePath}/Finance/Libron/Libron.webp`,
        quote: "Ang kabataan ang pag asa ng bayan",
        socialLinks: { facebook: "https://www.facebook.com/LanceLibron" },
      },
      {
        name: "John Renan N. Labay",
        role: "Logistics Officer",
        image: `${imageBasePath}/Finance/Labay/Labay.webp`,
        quote: "Life is easy when you know your priorities",
        socialLinks: { facebook: "https://www.facebook.com/johnrenan.labay" },
      },
      {
        name: "Asher Grey Morial",
        role: "Logistics Officer",
        image: `${imageBasePath}/Finance/Morial/Morial.webp`,
        quote:
          "Voluntary exposure to that which freezes and terrifies you in measured proportions is curative.",
        socialLinks: { facebook: "https://www.facebook.com/EnderLocke" },
      },
      {
        name: "Jayce Lorenz Gulmatico",
        role: "Auditor",
        image: `${imageBasePath}/Finance/Gulmatico/Gulmatico.webp`,
        quote:
          "すいらゃんがずっと作れないものは半熟のゆで卵。これだけはね、何をどう頑張ってもなぜかずっと作れない。",
        socialLinks: { facebook: "https://www.facebook.com/jl.gulmatico.2025" },
      },
    ],
  },
  creatives: {
    description:
      "Responsible for creating visual content to convey the organization's message effectively. They design materials for marketing, advertising, and multimedia projects.",
    members: [
      {
        name: "Jaylord Jan A. Boladola",
        role: "Chief Creatives Officer",
        image: `${imageBasePath}/Creatives/Boladola/Boladola.webp`,
        quote: "VIVA LA VIDA",
        socialLinks: { facebook: "https://www.facebook.com/jaylord.jan" },
      },
      {
        name: "Kurt Ashton G. Montebon",
        role: "Branding Officer",
        image: `${imageBasePath}/Creatives/Montebon/Montebon.webp`,
        quote: "Choose whatever makes your heart happy and your mind stress-free.",
        socialLinks: { linkedin: "https://www.linkedin.com/in/kurt-ashton-montebon-827662370/",
                       github: "https://github.com/iinfxnity",
                       facebook: "https://www.facebook.com/kurtashton.montebon" },
      },
      {
        name: "Arndria A. Basco",
        role: "Promotion Officer",
        image: `${imageBasePath}/Creatives/Basco/Basco.webp`,
        quote: "Unsaon imung kaugmaon kung dili ka maugmaan",
        socialLinks: { github: "https://github.com/Drea-rya",
                       facebook: "https://www.facebook.com/arndria.basco" },
      },
      {
        name: "Elvie May P. Mara",
        role: "Promotion Officer",
        image: `${imageBasePath}/Creatives/Mara/Mara.webp`,
        quote: "pwede muparking? sa imong bakante nga kasing-kasing",
        socialLinks: { facebook: "https://www.facebook.com/elvie.mara09" },
      },
      {
        name: "Julio Cedrick D. Maghanoy",
        role: "Documentation Officer",
        image: `${imageBasePath}/Creatives/Maghanoy/Maghanoy.webp`,
        quote:
          "The ironic tragedy that life is to be lived forward but only makes sense in reverse.",
        socialLinks: { facebook: "https://www.facebook.com/juliocedrick" },
      },
      {
        name: "Mcjustin Andrew S. Palen",
        role: "Documentation Officer",
        image: `${imageBasePath}/Creatives/Palen/Palen.webp`,
        quote: "Small progress is still progress",
        socialLinks: { facebook: "https://www.facebook.com/mcjustin.mm/" },
      },
    ],
  },
};

const SectionHeader = ({
  title,
  leftGrow = 1,
  rightGrow = 1,
}: {
  title: string;
  leftGrow?: number;
  rightGrow?: number;
}) => (
  <div className="flex items-center justify-center mb-8 sm:mb-12">
    <div
      style={{ flexGrow: leftGrow }}
      className="h-[52px] bg-gradient-to-r from-transparent via-dsc-orange to-dsc-maroon"
    />
    <h2 className="font-rethink font-bold text-dsc-maroon text-4xl sm:text-5xl lg:text-[50px] text-center px-6 sm:px-8 whitespace-nowrap">
      {title}
    </h2>
    <div
      style={{ flexGrow: rightGrow }}
      className="h-[52px] bg-gradient-to-l from-transparent via-dsc-orange to-dsc-maroon"
    />
  </div>
);

export default function Team() {
  return (
    <div className="min-h-screen bg-white relative">
      <Header />

      {/* Decorative Background Circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top cluster (for header and Lead) */}
        <div className="absolute top-[200px] -left-[200px] w-[400px] h-[400px] bg-dsc-orange/30 rounded-full" />
        <div className="absolute top-[400px] -left-[100px] w-[300px] h-[300px] bg-dsc-maroon/20 rounded-full" />
        <div className="absolute top-[250px] -right-[250px] w-[500px] h-[500px] bg-dsc-orange/30 rounded-full" />
        <div className="absolute top-[500px] -right-[100px] w-[200px] h-[200px] bg-dsc-maroon/20 rounded-full" />

        {/* Operations cluster */}
        <div className="absolute top-[1200px] -right-[200px] w-[450px] h-[450px] bg-dsc-orange/30 rounded-full" />
        <div className="absolute top-[1350px] -right-[150px] w-[300px] h-[300px] bg-dsc-maroon/20 rounded-full" />

        {/* Technology cluster */}
        <div className="absolute top-[2100px] -left-[250px] w-[500px] h-[500px] bg-dsc-orange/20 rounded-full" />
        <div className="absolute top-[2300px] -left-[150px] w-[350px] h-[350px] bg-dsc-maroon/10 rounded-full" />

        {/* Finance cluster */}
        <div className="absolute top-[2900px] -right-[220px] w-[400px] h-[400px] bg-dsc-orange/20 rounded-full" />
        <div className="absolute top-[3100px] -right-[120px] w-[250px] h-[250px] bg-dsc-maroon/10 rounded-full" />

        {/* Creatives cluster */}
        <div className="absolute top-[3800px] -left-[180px] w-[400px] h-[400px] bg-dsc-maroon/20 rounded-full" />
        <div className="absolute top-[4000px] -left-[100px] w-[320px] h-[320px] bg-dsc-orange/15 rounded-full" />
        <div className="absolute top-[4200px] -right-[200px] w-[450px] h-[450px] bg-dsc-orange/20 rounded-full" />
        <div className="absolute top-[4400px] -right-[150px] w-[300px] h-[300px] bg-dsc-maroon/10 rounded-full" />
        <div className="absolute top-[4650px] -left-[220px] w-[380px] h-[380px] bg-dsc-orange/18 rounded-full" />

        {/* Adviser cluster */}
        <div className="absolute top-[5000px] -right-[250px] w-[500px] h-[500px] bg-dsc-orange/22 rounded-full" />
        <div className="absolute top-[5200px] -right-[150px] w-[350px] h-[350px] bg-dsc-maroon/15 rounded-full" />
        <div className="absolute top-[5400px] -left-[200px] w-[420px] h-[420px] bg-dsc-maroon/18 rounded-full" />
        
        {/* Extended bottom clusters */}
        <div className="absolute top-[5700px] -left-[180px] w-[450px] h-[450px] bg-dsc-orange/20 rounded-full" />
        <div className="absolute top-[5900px] -left-[100px] w-[300px] h-[300px] bg-dsc-maroon/15 rounded-full" />
        <div className="absolute top-[6100px] -right-[220px] w-[480px] h-[480px] bg-dsc-orange/25 rounded-full" />
        <div className="absolute top-[6300px] -right-[130px] w-[320px] h-[320px] bg-dsc-maroon/20 rounded-full" />
        <div className="absolute top-[6550px] -left-[200px] w-[400px] h-[400px] bg-dsc-orange/18 rounded-full" />
        <div className="absolute top-[6750px] -right-[180px] w-[380px] h-[380px] bg-dsc-maroon/16 rounded-full" />
        <div className="absolute top-[6950px] -left-[150px] w-[350px] h-[350px] bg-dsc-orange/20 rounded-full" />
        <div className="absolute top-[7150px] -right-[200px] w-[420px] h-[420px] bg-dsc-maroon/18 rounded-full" />
        
        {/* Footer area clusters */}
        <div className="absolute top-[7350px] -left-[180px] w-[400px] h-[400px] bg-dsc-orange/22 rounded-full" />
        <div className="absolute top-[7550px] -right-[160px] w-[360px] h-[360px] bg-dsc-maroon/20 rounded-full" />
        <div className="absolute top-[7750px] -left-[200px] w-[450px] h-[450px] bg-dsc-orange/18 rounded-full" />
        <div className="absolute top-[7950px] -right-[190px] w-[400px] h-[400px] bg-dsc-maroon/15 rounded-full" />
        <div className="absolute bottom-[400px] -left-[220px] w-[500px] h-[500px] bg-dsc-orange/20 rounded-full" />
        <div className="absolute bottom-[200px] -right-[180px] w-[420px] h-[420px] bg-dsc-maroon/18 rounded-full" />
        <div className="absolute bottom-[50px] -left-[150px] w-[350px] h-[350px] bg-dsc-orange/16 rounded-full" />
      </div>

      <motion.main
        className="relative z-0 overflow-x-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="px-6 sm:px-12 lg:px-24 py-12 sm:py-16 lg:py-20"
          variants={itemVariants}
        >
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              <h1 className="font-rethink font-bold text-dsc-maroon text-4xl sm:text-5xl lg:text-[50px]">
                Meet The
              </h1>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/496a8f77ab491076996423686e64c818772ec873?width=466"
                alt="DSC Logo"
                className="w-[120px] sm:w-[180px] lg:w-[233px] h-auto"
              />
              <h1 className="font-rethink font-bold text-dsc-maroon text-4xl sm:text-5xl lg:text-[50px]">
                Team
              </h1>
            </div>

            <p className="font-rethink text-black text-lg sm:text-xl lg:text-2xl leading-10 max-w-3xl mx-auto">
              Meet the amazing individuals behind DSC USeP Obrero, dedicated to
              establishing and nurturing a thriving tech community.
            </p>

            <div className="inline-flex items-center justify-center bg-dsc-maroon rounded-lg px-6 py-2">
              <span className="font-rethink font-bold text-white text-xl sm:text-2xl">
                &lt; 2025-2026 &gt;
              </span>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col">
          {/* Lead Section */}
          <motion.section
            className="relative py-12 sm:py-16 lg:py-20"
            variants={itemVariants}
          >
            <SectionHeader title="Lead" leftGrow={2} rightGrow={2} />
            <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12">
              {teamData.lead.members.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </motion.section>

          {/* Operations Section */}
          <motion.section
            className="relative py-12 sm:py-16 lg:py-20"
            variants={itemVariants}
          >
            <SectionHeader title="Operations" leftGrow={1} rightGrow={2} />
            {teamData.operations.description && (
              <p className="font-rethink text-black text-lg sm:text-xl lg:text-2xl text-center max-w-4xl mx-auto mb-12 sm:mb-16 leading-10">
                {teamData.operations.description}
              </p>
            )}
            <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
              <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12">
                {teamData.operations.members
                  .slice(0, 3)
                  .map((member, index) => (
                    <TeamMemberCard key={index} {...member} />
                  ))}
              </div>
              <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12">
                {teamData.operations.members
                  .slice(3, 5)
                  .map((member, index) => (
                    <TeamMemberCard key={index + 3} {...member} />
                  ))}
              </div>
              <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12">
                {teamData.operations.members
                  .slice(5, 7)
                  .map((member, index) => (
                    <TeamMemberCard key={index + 5} {...member} />
                  ))}
              </div>
            </div>
          </motion.section>

          {/* Technology Section */}
          <motion.section
            className="relative py-12 sm:py-16 lg:py-20"
            variants={itemVariants}
          >
            <SectionHeader title="Technology" leftGrow={2} rightGrow={1} />
            {teamData.technology.description && (
              <p className="font-rethink text-black text-lg sm:text-xl lg:text-2xl text-center max-w-4xl mx-auto mb-12 sm:mb-16 leading-10">
                {teamData.technology.description}
              </p>
            )}
            <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
              <TeamMemberCard {...teamData.technology.members[0]} />
              <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12">
                {teamData.technology.members
                  .slice(1)
                  .map((member, index) => (
                    <TeamMemberCard key={index} {...member} />
                  ))}
              </div>
            </div>
          </motion.section>

          {/* Finance Section */}
          <motion.section
            className="relative py-12 sm:py-16 lg:py-20"
            variants={itemVariants}
          >
            <SectionHeader title="Finance" leftGrow={1} rightGrow={2} />
            {teamData.finance.description && (
              <p className="font-rethink text-black text-lg sm:text-xl lg:text-2xl text-center max-w-4xl mx-auto mb-12 sm:mb-16 leading-10">
                {teamData.finance.description}
              </p>
            )}
            <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
              <TeamMemberCard {...teamData.finance.members[0]} />
              <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12">
                {teamData.finance.members.slice(1).map((member, index) => (
                  <TeamMemberCard key={index} {...member} />
                ))}
              </div>
            </div>
          </motion.section>

          {/* Creatives Section */}
          <motion.section
            className="relative py-12 sm:py-16 lg:py-20"
            variants={itemVariants}
          >
            <SectionHeader title="Creatives" leftGrow={2} rightGrow={1} />
            {teamData.creatives.description && (
              <p className="font-rethink text-black text-lg sm:text-xl lg:text-2xl text-center max-w-4xl mx-auto mb-12 sm:mb-16 leading-10">
                {teamData.creatives.description}
              </p>
            )}
            <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
              <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12">
                {teamData.creatives.members
                  .slice(0, 3)
                  .map((member, index) => (
                    <TeamMemberCard key={index} {...member} />
                  ))}
              </div>
              <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12">
                {teamData.creatives.members
                  .slice(3, 6)
                  .map((member, index) => (
                    <TeamMemberCard key={index + 3} {...member} />
                  ))}
              </div>
            </div>
          </motion.section>

          {/* Adviser Section */}
          <motion.section
            className="relative py-12 sm:py-16 lg:py-20"
            variants={itemVariants}
          >
            <SectionHeader title="Adviser" leftGrow={2} rightGrow={2} />
            <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12">
              {teamData.adviser.members.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </motion.section>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
}
