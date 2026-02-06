module.exports = {
    ci: {
        collect: {
            url: ['http://localhost:4173/'],
            startServerCommand: 'pnpm run serve',
        },
        upload: {
            target: 'temporary-public-storage',
        },
        assert: { 
            preset: 'lighthouse:recommended',
        }
  },
}