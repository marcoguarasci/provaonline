
export default {
  basePath: 'https://marcoguarasci.github.io/provaonline',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
