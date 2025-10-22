import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMemberCard";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    facebook?: string;
  };
}

const teamData: Record<string, { description?: string; members: TeamMember[] }> = {
  lead: {
    members: [
      {
        name: "Kent Paulo R. Delgado",
        role: "Lead\nBSCS\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      }
    ]
  },
  operations: {
    description: "Oversees day-to-day functions, event management, ad hoc projects, recruitment, and member welfare, ensuring smooth operations and a positive organizational culture.",
    members: [
      {
        name: "Mariel Rossini C. Go",
        role: "Chief Operations Officer\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      },
      {
        name: "Marc Alvienth T. Hernandez",
        role: "Secretary\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      },
      {
        name: "Baberose I. Silmaro",
        role: "Communications Officer\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      },
      {
        name: "John Marcellin E. Tan",
        role: "Events Officer\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      },
      {
        name: "Kimberly S. Bermoy",
        role: "Events Officer\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      },
      {
        name: "Ken Erik Y. Justiniani",
        role: "Technical Officer\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      },
      {
        name: "Ace Jonathan D. Briones",
        role: "Technical Officer\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      },
      {
        name: "John Renan N. Labay",
        role: "Logistics Officer\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      },
      {
        name: "Asher Grey Morial",
        role: "Logistics Officer\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      },
      {
        name: "Jayce Lorenz Gulmatico",
        role: "Auditor\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      }
    ]
  },
  technology: {
    description: "Manages the organization's tech-related affairs, handling tasks that require knowledge of technology and programming.",
    members: [
      {
        name: "Julse M. Merencillo",
        role: "Chief Technology Officer\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      },
      {
        name: "Kervy Chrystan G. Caranto",
        role: "Engineering Lead\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      },
      {
        name: "Dave Shanna Marie E. Gigawin",
        role: "Design Lead\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      },
      {
        name: "Decyrel P. Dahan",
        role: "Data Science Lead\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      }
    ]
  },
  finance: {
    description: "Manages the organization's finances, including budgeting and transactions They prepare financial reports and ensure compliance.",
    members: [
      {
        name: "Lance Marvin Libron",
        role: "Chief Finance Officer\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      }
    ]
  },
  creatives: {
    description: "Responsible for creating visual content to convey the organization's message effectively. They design materials for marketing, advertising, and multimedia projects.",
    members: [
      {
        name: "Jaylord Jan A. Boladola",
        role: "Chief Creatives Officer\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      },
      {
        name: "Kurt Ashton G. Montebon",
        role: "Branding Officer\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      },
      {
        name: "Arndria A. Basco",
        role: "Promotion Officer\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      },
      {
        name: "Elvie May P. Mara",
        role: "Promotion Officer\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      },
      {
        name: "Julio Cedrick D. Maghanoy",
        role: "Documentation Officer\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      },
      {
        name: "Mcjustin Andrew S. Palen",
        role: "Documentation Officer\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      }
    ]
  },
  adviser: {
    members: [
      {
        name: "Nancy S. Mozo",
        role: "Adviser\n\n*insert quote?",
        image: "https://api.builder.io/api/v1/image/assets/TEMP/adad03e7a0496ac3a0afd2a1d18afd1b3e862ef0?width=596",
        socialLinks: { linkedin: "#", github: "#", facebook: "#" }
      }
    ]
  }
};

const TeamSection = ({ title, description, members, gradient = "left" }: { 
  title: string; 
  description?: string; 
  members: TeamMember[];
  gradient?: "left" | "right" | "both";
}) => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-6 sm:px-12 lg:px-24">
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          {gradient === "left" || gradient === "both" ? (
            <div className="flex-1 h-[52px] bg-gradient-to-r from-transparent via-[rgba(239,79,31,0.5)] to-[#801817]" />
          ) : null}
          <h2 className="font-rethink font-bold text-dsc-maroon text-4xl sm:text-5xl lg:text-[50px] text-center px-6 sm:px-8 whitespace-nowrap">
            {title}
          </h2>
          {gradient === "right" || gradient === "both" ? (
            <div className="flex-1 h-[52px] bg-gradient-to-l from-transparent via-[rgba(239,79,31,0.5)] to-[#801817]" />
          ) : null}
        </div>

        {description && (
          <p className="font-rethink text-black text-lg sm:text-xl lg:text-2xl text-center max-w-4xl mx-auto mb-12 sm:mb-16 leading-10">
            {description}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {members.map((member, index) => (
            <div key={index} className="flex justify-center">
              <TeamMemberCard {...member} />
            </div>
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

      <svg className="absolute w-[507px] h-[522px] -left-[203px] top-[268px] pointer-events-none" viewBox="0 0 507 522" fill="none">
        <ellipse cx="253.5" cy="261" rx="253.5" ry="261" fill="#EF4F1F" fillOpacity="0.5"/>
      </svg>

      <svg className="absolute w-[292px] h-[300px] left-[147px] top-[526px] pointer-events-none" viewBox="0 0 292 300" fill="none">
        <ellipse cx="146" cy="150" rx="146" ry="150" fill="#801817" fillOpacity="0.3"/>
      </svg>

      <svg className="absolute w-[507px] h-[522px] left-[1030px] top-[451px] pointer-events-none" viewBox="0 0 507 522" fill="none">
        <ellipse cx="253.5" cy="261" rx="253.5" ry="261" fill="#EF4F1F" fillOpacity="0.4"/>
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
              Meet the amazing individuals behind DSC USeP Obrero, dedicated to establishing and nurturing a thriving tech community.
            </p>

            <div className="inline-flex items-center justify-center bg-dsc-maroon rounded-lg px-6 py-2">
              <span className="font-rethink font-bold text-white text-xl sm:text-2xl">
                &lt; 2025-2026 &gt;
              </span>
            </div>
          </div>
        </div>

        <TeamSection 
          title="Lead" 
          members={teamData.lead.members}
          gradient="right"
        />

        <div className="relative">
          <svg className="absolute w-[507px] h-[522px] right-0 top-0 pointer-events-none" viewBox="0 0 507 522" fill="none">
            <ellipse cx="253.5" cy="261" rx="253.5" ry="261" fill="#EF4F1F" fillOpacity="0.5"/>
          </svg>
          
          <svg className="absolute w-[292px] h-[300px] right-[100px] top-[250px] pointer-events-none" viewBox="0 0 292 300" fill="none">
            <ellipse cx="146" cy="150" rx="146" ry="150" fill="#801817" fillOpacity="0.3"/>
          </svg>

          <TeamSection 
            title="Operations" 
            description={teamData.operations.description}
            members={teamData.operations.members}
            gradient="both"
          />
        </div>

        <div className="relative">
          <svg className="absolute w-[101px] h-[103px] right-[100px] top-0 pointer-events-none" viewBox="0 0 101 103" fill="none">
            <ellipse cx="50.5" cy="51.5" rx="50.5" ry="51.5" fill="#801817" fillOpacity="0.3"/>
          </svg>

          <TeamSection 
            title="Technology" 
            description={teamData.technology.description}
            members={teamData.technology.members}
            gradient="both"
          />
        </div>

        <div className="relative">
          <svg className="absolute w-[507px] h-[522px] -left-[173px] top-[100px] pointer-events-none" viewBox="0 0 507 522" fill="none">
            <ellipse cx="253.5" cy="261" rx="253.5" ry="261" fill="#801817" fillOpacity="0.3"/>
          </svg>

          <svg className="absolute w-[292px] h-[300px] left-[137px] top-[350px] pointer-events-none" viewBox="0 0 292 300" fill="none">
            <ellipse cx="146" cy="150" rx="146" ry="150" fill="#EF4F1F" fillOpacity="0.25"/>
          </svg>

          <TeamSection 
            title="Finance" 
            description={teamData.finance.description}
            members={teamData.finance.members}
            gradient="both"
          />
        </div>

        <div className="relative">
          <svg className="absolute w-[616px] h-[634px] right-0 top-0 pointer-events-none" viewBox="0 0 616 634" fill="none">
            <ellipse cx="308" cy="317" rx="308" ry="317" fill="#801817" fillOpacity="0.3"/>
          </svg>

          <svg className="absolute w-[231px] h-[237px] right-[50px] top-0 pointer-events-none" viewBox="0 0 231 237" fill="none">
            <ellipse cx="115.5" cy="118.5" rx="115.5" ry="118.5" fill="#EF4F1F" fillOpacity="0.25"/>
          </svg>

          <TeamSection 
            title="Creatives" 
            description={teamData.creatives.description}
            members={teamData.creatives.members}
            gradient="both"
          />
        </div>

        <div className="relative">
          <svg className="absolute w-[616px] h-[634px] -left-[285px] top-0 pointer-events-none" viewBox="0 0 616 634" fill="none">
            <ellipse cx="308" cy="317" rx="308" ry="317" fill="#EF4F1F" fillOpacity="0.25"/>
          </svg>

          <svg className="absolute w-[231px] h-[237px] left-[3px] top-0 pointer-events-none" viewBox="0 0 231 237" fill="none">
            <ellipse cx="115.5" cy="118.5" rx="115.5" ry="118.5" fill="#801817" fillOpacity="0.4"/>
          </svg>

          <TeamSection 
            title="Adviser" 
            members={teamData.adviser.members}
            gradient="both"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
