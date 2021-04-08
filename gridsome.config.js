// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Shibata Lanka',
  plugins: [
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'ja-jp',
          'en-gb'
        ],
        pathAliases: { // path segment alias for each locales
          'ja-jp': 'ja',
          'en-gb': 'en'
        },
        fallbackLocale: 'en-gb', // fallback language
        defaultLocale: 'en-gb', // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        messages: {
          'ja-jp': require('./src/locales/ja-jp.json'), // Messages files
          'en-gb': require('./src/locales/en-gb.json')
        }
      }
    }
  ]
}
