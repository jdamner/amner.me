module.exports = {
  pageShots: {
    pages: [
      { path: "/", name: "Home" },
      { path: "/404", name: "404" },
      { path: "/chasing-100", name: "Chasing 100" },
      { path: "/full-site-editing-in-wordpress", name: "Full Site Editing in WordPress" },
      { path: "/how-i-publish-this-site", name: "How I Publish This Site" },
      { path: "/ive-lauched-colorbar", name: "I've Launched Colorbar" },
      { path: "/migration-to-firebase", name: "Migration to Firebase" },
      { path: "/new-wp-plugin", name: "New WP Plugin" },
      { path: "/whats-lurking-inside-your-project", name: "What's Lurking Inside Your Project?" },
      { path: "/why-not-wordpress", name: "Why Not WordPress?" },
    ],
    baseUrl: "http://172.17.0.1:3000",
    waitBeforeScreenshot: 5000,
  },
  generateOnly: true,
  failOnDifference: true,
};
