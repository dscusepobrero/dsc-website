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
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <Header />

      {/* Decorative Background Circles */}
      <div className="absolute inset-0 pointer-events-none">
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
        <div className="absolute top-[4200px] -right-[200px] w-[450px] h-[450px] bg-dsc-orange/20 rounded-full" />
        <div className="absolute top-[4300px] -right-[150px] w-[300px] h-[300px] bg-dsc-maroon/10 rounded-full" />

        {/* Adviser cluster */}
        <div className="absolute top-[5500px] -right-[250px] w-[500px] h-[500px] bg-dsc-orange/20 rounded-full" />
        <div className="absolute top-[5600px] -right-[150px] w-[300px] h-[300px] bg-dsc-maroon/10 rounded-full" />
      </div>

      <main className="relative z-0">
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
          {/* Lead Section */}
          <section className="relative py-12 sm:py-16 lg:py-20">
            <SectionHeader title="Lead" leftGrow={2} rightGrow={2} />
            <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12">
              {teamData.lead.members.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </section>

          {/* Operations Section */}
          <section className="relative py-12 sm:py-16 lg:py-20">
            <SectionHeader title="Operations" leftGrow={1} rightGrow={2} />
            {teamData.operations.description && (
              <p className="font-rethink text-black text-lg sm:text-xl lg:text-2xl text-center max-w-4xl mx-auto mb-12 sm:mb-16 leading-10">
                {teamData.operations.description}
              </p>
            )}
            <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
              <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12">
                {teamData.operations.members.slice(0, 3).map((member, index) => (
                  <TeamMemberCard key={index} {...member} />
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12">
                {teamData.operations.members.slice(3, 5).map((member, index) => (
                  <TeamMemberCard key={index + 3} {...member} />
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12">
                {teamData.operations.members.slice(5, 7).map((member, index) => (
                  <TeamMemberCard key={index + 5} {...member} />
                ))}
              </div>
            </div>
          </section>
          
          {/* Technology Section */}
          <section className="relative py-12 sm:py-16 lg:py-20">
            <SectionHeader title="Technology" leftGrow={2} rightGrow={1} />
            {teamData.technology.description && (
                <p className="font-rethink text-black text-lg sm:text-xl lg:text-2xl text-center max-w-4xl mx-auto mb-12 sm:mb-16 leading-10">
                {teamData.technology.description}
                </p>
            )}
            <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
                <TeamMemberCard {...teamData.technology.members[0]} />
                <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12">
                    {teamData.technology.members.slice(1).map((member, index) => (
                        <TeamMemberCard key={index} {...member} />
                    ))}
                </div>
            </div>
          </section>

          {/* Finance Section */}
          <section className="relative py-12 sm:py-16 lg:py-20">
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
          </section>
          
          {/* Creatives Section */}
          <section className="relative py-12 sm:py-16 lg:py-20">
            <SectionHeader title="Creatives" leftGrow={2} rightGrow={1} />
            {teamData.creatives.description && (
              <p className="font-rethink text-black text-lg sm:text-xl lg:text-2xl text-center max-w-4xl mx-auto mb-12 sm:mb-16 leading-10">
                {teamData.creatives.description}
              </p>
            )}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12">
              {teamData.creatives.members.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </section>

          {/* Adviser Section */}
          <section className="relative py-12 sm:py-16 lg:py-20">
            <SectionHeader title="Adviser" leftGrow={2} rightGrow={2} />
            <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12">
              {teamData.adviser.members.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
