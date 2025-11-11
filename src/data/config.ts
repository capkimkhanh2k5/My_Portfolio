const config = {
  title: "Cap Kim Khanh | Back-End Developer",
  description: {
    long: "Explore the portfolio of Khanh, a back-end developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work. Let's build something amazing together!",
    short:
      "Discover the portfolio of Khanh, a back-end developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Khanh",
    "portfolio",
    "back-end developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "web design",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Cap Kim Khanh",
  email: "capkimkhanh@gmail.com",
  site: "https://capkhanhs.id.vn",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    instagram: "https://www.instagram.com/capkhanhs/",
    facebook: "https://www.facebook.com/capkhanhs",
    github: "https://github.com/capkimkhanh2k5",
    linkedin: "#",
    twitter: "#",
  },
};
export { config };
