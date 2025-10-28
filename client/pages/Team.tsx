import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMemberCard";

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

const teamData: Record<
  string,
  { description?: string; members: TeamMember[] }
> = {
  lead: {
    members: [
      {
        name: "Kent Paulo R. Delgado",
        role: "Lead, DSC",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote:
          "We can't anticipate or even predict our future, but we can begin preparing for it",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
      },
    ],
  },
  adviser: {
    members: [
      {
        name: "Nancy S. Mozo",
        role: "Adviser",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote: "-",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
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
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote: "Stay humble, stay hungry.",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
      },
      {
        name: "Marc Alvienth T. Hernandez",
        role: "Secretary",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote: "Hindi mahalaga ang magwagi, ang mahalaga, ikaw ay nakibahagi",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
      },
      {
        name: "Baberose I. Silmaro",
        role: "Communications Officer",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote: "Don't! Don't! Don't!!!... Don't stoOoOoOP~ Go OooOoonn~",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
      },
      {
        name: "John Marcellin E. Tan",
        role: "Events Officer",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote: "Collect moments, not grudges.",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
      },
      {
        name: "Kimberly S. Bermoy",
        role: "Events Officer",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote: "Thank u, next",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
      },
      {
        name: "Ken Erik Y. Justiniani",
        role: "Technical Officer",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote: "Kapag ang jeep ay lumipad sa tubig, huwag umihi dito.",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
      },
      {
        name: "Ace Jonathan D. Briones",
        role: "Technical Officer",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote: "If there's a will, there's a water",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
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
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote: "1+1=2 kaya't tayo na dalawa pls",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
      },
      {
        name: "Kervy Chrystan G. Caranto",
        role: "Engineering Lead",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote: "There are only two hard problems in Computer Science; cache invalidation, naming things, and off-by-one errors",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
      },
      {
        name: "Dave Shanna Marie E. Gigawin",
        role: "Design Lead",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote: "good things take time",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
      },
      {
        name: "Decyrel P. Dahan",
        role: "Data Science Lead",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote: "HAHAHAHAHAHAHA",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
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
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote: "Ang kabataan ang pag asa ng bayan",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
      },
      {
        name: "John Renan N. Labay",
        role: "Logistics Officer",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote: "Life is easy when you know your priorities",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
      },
      {
        name: "Asher Grey Morial",
        role: "Logistics Officer",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote:
          "Voluntary exposure to that which freezes and terrifies you in measured proportions is curative.",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
      },
      {
        name: "Jayce Lorenz Gulmatico",
        role: "Auditor",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote:
          "すいらゃんがずっと作れないものは半熟のゆで卵。これだけはね、何をどう頑張ってもなぜかずっと作れない。",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
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
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote: "VIVA LA VIDA",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
      },
      {
        name: "Kurt Ashton G. Montebon",
        role: "Branding Officer",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote: "Choose whatever makes your heart happy and your mind stress-free.",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
      },
      {
        name: "Arndria A. Basco",
        role: "Promotion Officer",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote: "Unsaon imung kaugmaon kung dili ka maugmaan",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
      },
      {
        name: "Elvie May P. Mara",
        role: "Promotion Officer",
        image:
          "https.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote: "pwede muparking? sa imong bakante nga kasing-kasing",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
      },
      {
        name: "Julio Cedrick D. Maghanoy",
        role: "Documentation Officer",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote:
          "The ironic tragedy that life is to be lived forward but only makes sense in reverse.",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
      },
      {
        name: "Mcjustin Andrew S. Palen",
        role: "Documentation Officer",
        image:
          "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        quote: "Small progress is still progress",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" },
      },
    ],
  },
};

const TeamSection = ({
  title,
  description,
  members,
  gradient = "left",
  leftGrow = 1,
  rightGrow = 1,
}: {
  title: string;
  description?: string;
  members: TeamMember[];
  gradient?: "left" | "right" | "both";
  leftGrow?: number;
  rightGrow?: number;
}) => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      <div className="relative max-w-full mx-auto">
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          {gradient === "left" || gradient === "both" ? (
            <div
              style={{ flexGrow: leftGrow }}
              className="h-[52px] bg-gradient-to-r from-transparent via-dsc-orange to-dsc-maroon"
            />
          ) : null}
          <h2 className="font-rethink font-bold text-dsc-maroon text-4xl sm:text-5xl lg:text-[50px] text-center px-6 sm:px-8 whitespace-nowrap">
            {title}
          </h2>
          {gradient === "right" || gradient === "both" ? (
            <div
              style={{ flexGrow: rightGrow }}
              className="h-[52px] bg-gradient-to-l from-transparent via-dsc-orange to-dsc-maroon"
            />
          ) : null}
        </div>

        {description && (
          <p className="font-rethink text-black text-lg sm:text-xl lg:text-2xl text-center max-w-4xl mx-auto mb-12 sm:mb-16 leading-10">
            {description}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12">
          {members.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Team() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Header />

      <svg
        className="absolute w-[507px] h-[522px] -left-[203px] top-[268px] pointer-events-none"
        viewBox="0 0 507 522"
        fill="none"
      >
        <ellipse
          cx="253.5"
          cy="261"
          rx="253.5"
          ry="261"
          fill="#EF4F1F"
          fillOpacity="0.5"
        />
      </svg>

      <svg
        className="absolute w-[292px] h-[300px] left-[147px] top-[526px] pointer-events-none"
        viewBox="0 0 292 300"
        fill="none"
      >
        <ellipse
          cx="146"
          cy="150"
          rx="146"
          ry="150"
          fill="#801817"
          fillOpacity="0.3"
        />
      </svg>

      <svg
        className="absolute w-[507px] h-[522px] left-[1030px] top-[451px] pointer-events-none"
        viewBox="0 0 507 522"
        fill="none"
      >
        <ellipse
          cx="253.5"
          cy="261"
          rx="253.5"
          ry="261"
          fill="#EF4F1F"
          fillOpacity="0.4"
        />
      </svg>

      <main className="relative">
        <div className="px-6 sm:px-12 lg:px-24 py-12 sm:py-16 lg:py-20">
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
        </div>

        <div className="flex flex-col">
          <TeamSection
            title="Lead"
            members={teamData.lead.members}
            gradient="both"
            leftGrow={2}
            rightGrow={2}
          />
          <TeamSection
            title="Operations"
            description={teamData.operations.description}
            members={teamData.operations.members}
            gradient="both"
            leftGrow={1}
            rightGrow={2}
          />
          <TeamSection
            title="Technology"
            description={teamData.technology.description}
            members={teamData.technology.members}
            gradient="both"
            leftGrow={2}
            rightGrow={1}
          />
          <TeamSection
            title="Finance"
            description={teamData.finance.description}
            members={teamData.finance.members}
            gradient="both"
            leftGrow={1}
            rightGrow={2}
          />
          <TeamSection
            title="Creatives"
            description={teamData.creatives.description}
            members={teamData.creatives.members}
            gradient="both"
            leftGrow={2}
            rightGrow={1}
          />
          <TeamSection
            title="Adviser"
            members={teamData.adviser.members}
            gradient="both"
            leftGrow={2}
            rightGrow={2}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}