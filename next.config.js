module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['ko', 'en'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'ko',
    localeDetection: true, // Browser Language로 대체하면 SEO에 문제가 생김
  },
};
