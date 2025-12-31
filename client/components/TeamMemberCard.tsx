import { useState } from "react";

interface TeamMemberCardProps {
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

const SocialLink = ({
  href,
  children,
  ariaLabel,
}: {
  href?: string;
  children: React.ReactNode;
  ariaLabel: string;
}) => {
  const isValidLink = href && href !== "#";
  if (isValidLink) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition-all duration-200 hover:-translate-y-1"
        aria-label={ariaLabel}
        // Prevents the card from toggling when you click a social icon
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </a>
    );
  }
  return <span className="cursor-default" aria-label={ariaLabel}>{children}</span>;
};

export default function TeamMemberCard({
  name,
  role,
  image,
  quote,
  socialLinks,
}: TeamMemberCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // 1. Handle Desktop Hover: Only trigger if the pointer is a mouse
  const handlePointerEnter = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse') setIsExpanded(true);
  };

  const handlePointerLeave = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse') setIsExpanded(false);
  };

  // 2. Handle Mobile Tap: Toggles state regardless of pointer type
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // 3. Visibility Classes (Removed 'group-hover' to stop sticky hover)
  const overlayClasses = isExpanded
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none";

  const defaultClasses = isExpanded
    ? "opacity-0"
    : "opacity-100";

  // Shared animation logic for text/icons
  const animateIn = isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

  return (
    <div
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={handleToggle}
      className="group relative flex-shrink-0 w-[320px] max-w-[calc(100vw-2rem)] mx-auto h-[482px] rounded-lg overflow-hidden shadow-[13px_13px_6.2px_0_rgba(239,79,31,0.25)] hover:shadow-[15px_15px_8px_0_rgba(239,79,31,0.3)] transition-all duration-300 ease-in-out hover:-translate-y-2 cursor-pointer"
    >
      {/* Default State */}
      <div className={`absolute inset-0 flex flex-col bg-white transition-opacity duration-300 ease-in-out ${defaultClasses}`}>
        <div className="w-full h-[247px] bg-gray-100 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-rethink font-bold text-2xl text-gray-900 mb-2">{name}</h3>
          <p className="font-rethink text-base text-gray-600 mb-4 whitespace-pre-line">{role}</p>
          <p className="font-rethink text-sm text-gray-500 italic mb-6 h-20 overflow-y-auto">"{quote}"</p>
          <div className="flex items-center gap-4 mt-auto">
            {socialLinks.linkedin && (
              <SocialLink href={socialLinks.linkedin} ariaLabel="LinkedIn">
                <svg
                  width="39"
                  height="35"
                  viewBox="0 0 39 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26 11.6667C28.5859 11.6667 31.0658 12.5886 32.8943 14.2296C34.7228 15.8705 35.75 18.0961 35.75 20.4167V30.6251H29.25V20.4167C29.25 19.6432 28.9076 18.9013 28.2981 18.3544C27.6886 17.8074 26.862 17.5001 26 17.5001C25.138 17.5001 24.3114 17.8074 23.7019 18.3544C23.0924 18.9013 22.75 19.6432 22.75 20.4167V30.6251H16.25V20.4167C16.25 18.0961 17.2772 15.8705 19.1057 14.2296C20.9342 12.5886 23.4141 11.6667 26 11.6667Z"
                    stroke="#801817"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 13.1251H3.25V30.6251H9.75V13.1251Z"
                    stroke="#801817"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.5 8.75008C8.29493 8.75008 9.75 7.44425 9.75 5.83341C9.75 4.22258 8.29493 2.91675 6.5 2.91675C4.70507 2.91675 3.25 4.22258 3.25 5.83341C3.25 7.44425 4.70507 8.75008 6.5 8.75008Z"
                    stroke="#801817"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </SocialLink>
            )}
            {socialLinks.github && (
              <SocialLink href={socialLinks.github} ariaLabel="GitHub">
                <svg
                  width="39"
                  height="35"
                  viewBox="0 0 39 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_655_1461)">
                    <path
                      d="M14.625 27.7083C6.5 29.8958 6.5 24.0624 3.25 23.3333M26 32.0833V26.4395C26.061 25.7441 25.9563 25.0451 25.6929 24.3888C25.4295 23.7325 25.0135 23.1341 24.4725 22.6333C29.575 22.1228 34.9375 20.3874 34.9375 12.4249C34.9371 10.3888 34.0644 8.43084 32.5 6.95618C33.2408 5.17483 33.1884 3.20586 32.3537 1.45826C32.3537 1.45826 30.4363 0.947846 26 3.6166C22.2755 2.71071 18.3495 2.71071 14.625 3.6166C10.1887 0.947846 8.27125 1.45826 8.27125 1.45826C7.43661 3.20586 7.38423 5.17483 8.125 6.95618C6.54896 8.44178 5.67535 10.4175 5.6875 12.4687C5.6875 20.3728 11.05 22.1083 16.1525 22.677C15.6179 23.1728 15.2056 23.7641 14.9424 24.4123C14.6792 25.0606 14.5711 25.7513 14.625 26.4395V32.0833"
                      stroke="#801817"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_655_1461)">
                      <rect width="39" height="35" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </SocialLink>
            )}
            {socialLinks.facebook && (
              <SocialLink href={socialLinks.facebook} ariaLabel="Facebook">
                <svg
                  width="39"
                  height="35"
                  viewBox="0 0 39 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.25 2.91675H24.375C22.2201 2.91675 20.1535 3.68497 18.6298 5.05243C17.106 6.41988 16.25 8.27454 16.25 10.2084V14.5834H11.375V20.4167H16.25V32.0834H22.75V20.4167H27.625L29.25 14.5834H22.75V10.2084C22.75 9.82164 22.9212 9.45071 23.226 9.17722C23.5307 8.90373 23.944 8.75008 24.375 8.75008H29.25V2.91675Z"
                    stroke="#801817"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </SocialLink>
            )}
          </div>
        </div>
      </div>

      {/* Hover State */}
       <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 bg-dsc-maroon/80 transition-opacity duration-300 ease-in-out ${overlayClasses}`}>
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-700 ease-in-out
            ${isExpanded ? 'scale-125 blur-[2px]' : 'scale-100 blur-0'}`}
        />
        <div className="relative text-center text-white flex flex-col h-full w-full">
          <div className="flex-1 flex flex-col items-center justify-center">
            <h3 className={`font-rethink font-bold text-3xl mb-1 transform transition-all duration-300 ease-in-out delay-75 ${animateIn}`}>
              {name}
            </h3>
            <p className={`font-rethink text-lg mb-4 transform transition-all duration-300 ease-in-out delay-150 ${animateIn}`}>
              {role}
            </p>
            <p className={`font-rethink text-base italic max-w-xs transform transition-all duration-300 ease-in-out delay-200 ${animateIn}`}>
              "{quote}"
            </p>
          </div>
          <div className="flex items-center justify-center gap-8 pb-8 transform transition-all duration-300 ease-in-out delay-300 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0">
            {socialLinks.linkedin && (
              <SocialLink href={socialLinks.linkedin} ariaLabel="LinkedIn">
                <svg
                  width="39"
                  height="35"
                  viewBox="0 0 39 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26 11.6667C28.5859 11.6667 31.0658 12.5886 32.8943 14.2296C34.7228 15.8705 35.75 18.0961 35.75 20.4167V30.6251H29.25V20.4167C29.25 19.6432 28.9076 18.9013 28.2981 18.3544C27.6886 17.8074 26.862 17.5001 26 17.5001C25.138 17.5001 24.3114 17.8074 23.7019 18.3544C23.0924 18.9013 22.75 19.6432 22.75 20.4167V30.6251H16.25V20.4167C16.25 18.0961 17.2772 15.8705 19.1057 14.2296C20.9342 12.5886 23.4141 11.6667 26 11.6667Z"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 13.1251H3.25V30.6251H9.75V13.1251Z"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.5 8.75008C8.29493 8.75008 9.75 7.44425 9.75 5.83341C9.75 4.22258 8.29493 2.91675 6.5 2.91675C4.70507 2.91675 3.25 4.22258 3.25 5.83341C3.25 7.44425 4.70507 8.75008 6.5 8.75008Z"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </SocialLink>
            )}
            {socialLinks.github && (
              <SocialLink href={socialLinks.github} ariaLabel="GitHub">
                <svg
                  width="39"
                  height="35"
                  viewBox="0 0 39 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_hover_github)">
                    <path
                      d="M14.625 27.7083C6.5 29.8958 6.5 24.0624 3.25 23.3333M26 32.0833V26.4395C26.061 25.7441 25.9563 25.0451 25.6929 24.3888C25.4295 23.7325 25.0135 23.1341 24.4725 22.6333C29.575 22.1228 34.9375 20.3874 34.9375 12.4249C34.9371 10.3888 34.0644 8.43084 32.5 6.95618C33.2408 5.17483 33.1884 3.20586 32.3537 1.45826C32.3537 1.45826 30.4363 0.947846 26 3.6166C22.2755 2.71071 18.3495 2.71071 14.625 3.6166C10.1887 0.947846 8.27125 1.45826 8.27125 1.45826C7.43661 3.20586 7.38423 5.17483 8.125 6.95618C6.54896 8.44178 5.67535 10.4175 5.6875 12.4687C5.6875 20.3728 11.05 22.1083 16.1525 22.677C15.6179 23.1728 15.2056 23.7641 14.9424 24.4123C14.6792 25.0606 14.5711 25.7513 14.625 26.4395V32.0833"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_hover_github">
                      <rect width="39" height="35" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </SocialLink>
            )}
            {socialLinks.facebook && (
              <SocialLink href={socialLinks.facebook} ariaLabel="Facebook">
                <svg
                  width="39"
                  height="35"
                  viewBox="0 0 39 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.25 2.91675H24.375C22.2201 2.91675 20.1535 3.68497 18.6298 5.05243C17.106 6.41988 16.25 8.27454 16.25 10.2084V14.5834H11.375V20.4167H16.25V32.0834H22.75V20.4167H27.625L29.25 14.5834H22.75V10.2084C22.75 9.82164 22.9212 9.45071 23.226 9.17722C23.5307 8.90373 23.944 8.75008 24.375 8.75008H29.25V2.91675Z"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </SocialLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
