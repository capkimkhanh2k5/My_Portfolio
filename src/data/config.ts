const config = {
  title: "Khanh Cap Developer",
  description: {
    long: "I'm Khanh, a Back-End Developer passionate about building robust and scalable systems. I specialize in server-side logic, database management, and API development. Let's build something amazing together!",
    short:
      "Khanh - Back-End Developer specializing in building robust and scalable systems.",
  },
  keywords: [
    "Khanh",
    "Cap Kim Khanh",
    "portfolio",
    "back-end developer",
    "web development",
    "Java",
    "Spring Boot",
    "Node.js",
    "Database",
    "API",
  ],
  author: "Cap Kim Khanh",
  email: "capkimkhanh2k5@gmail.com",
  phone: "0839117789",
  cv: "exampleCV",
  site: "https://capkhanhs.id.vn",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    instagram: "https://www.instagram.com/capkhanhs/",
    facebook: "https://web.facebook.com/capkhanhs",
    github: "https://github.com/capkimkhanh2k5",
    linkedin: "#",
    twitter: "#",
  },
};
export { config };
