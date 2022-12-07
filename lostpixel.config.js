let viewport = {
  width: 1920,
  height: 2480,
}

module.exports = {
  pageShots: {
    pages: [
      { path: "/", name: "Home", viewport },
      { path: "/404", name: "404", viewport },
      { path: "/chasing-100", name: "Chasing 100", viewport },
      { path: "/full-site-editing-in-wordpress", name: "Full Site Editing in WordPress", viewport },
      { path: "/how-i-publish-this-site", name: "How I Publish This Site", viewport },
      { path: "/ive-lauched-colorbar", name: "I've Launched Colorbar", viewport },
      { path: "/migration-to-firebase", name: "Migration to Firebase", viewport },
      { path: "/new-wp-plugin", name: "New WP Plugin", viewport },
      { path: "/whats-lurking-inside-your-project", name: "What's Lurking Inside Your Project?", viewport },
      { path: "/why-not-wordpress", name: "Why Not WordPress?", viewport },
    ],
    baseUrl: "http://172.17.0.1:3000",
  },
  generateOnly: true,
  failOnDifference: true,
  waitBeforeScreenshot: 15000,
};
