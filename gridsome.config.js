// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Shibata Lanka',
  siteUrl: 'https://nervous-shannon-4c89f1.netlify.app',
  siteDescription: 'Business for People of Sri Lanka & South Asia',
  titleTemplate: '%s | Shibata Lanka',
  // metadata: {
  //   siteOgImage: `ogp.png`,
  // },
  plugins: [
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'ja-JP',
          'en-US'
        ],
        pathAliases: { // path segment alias for each locales
          'ja-JP': 'ja',
          'en-US': 'en'
        },
        fallbackLocale: 'en-US', // fallback language
        defaultLocale: 'en-US', // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        messages: {
          'ja-JP': require('./src/locales/ja-jp.json'), // Messages files
          'en-US': require('./src/locales/en-us.json')
        }
      }
    }
  ],
  chainWebpack: config => {
    config.resolve.alias.set('@image', '@/assets/image')
  },}
