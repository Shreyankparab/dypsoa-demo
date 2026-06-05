export const siteConfig = {
  name: "Dr. D. Y. Patil School of Architecture",
  shortName: "DYPSOA",
  dteCode: "6245",
  contact: {
    phone1: "+91 20 2740 6262",
    phone2: "+91 20 2740 6263",
    email: "info.arch@dypvp.edu.in",
  },
  erpLogin: "https://dyparch.dyptcmis.com/",
  mainNav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    {
      title: "Programs",
      href: "/programs",
      isMegaMenu: true,
      items: [
        {
          title: "B.Arch",
          href: "/programs/barch",
          description: "Bachelor of Architecture (5 Years)",
        },
        {
          title: "M.Arch",
          href: "/programs/march",
          description: "Environmental Architecture (2 Years)",
        },
      ],
    },
    {
      title: "Student Work",
      href: "/student-work",
      isMegaMenu: true,
      items: [
        {
          title: "Projects",
          href: "/student-work/projects",
          description: "Academic & Studio Projects",
        },
        {
          title: "Competitions",
          href: "/student-work/competitions",
          description: "National & International Competitions",
        },
      ],
    },
    { title: "Faculty", href: "/faculty" },
    { title: "Admissions", href: "/admissions", highlight: true },
    { title: "Placements", href: "/placements" },
    { title: "Contact", href: "/contact" },
  ],
};
