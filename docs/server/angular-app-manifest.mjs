
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/provaonline/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/provaonline"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 448, hash: '64837859965478c958f8a9d84aeab4707f1ce707afdb9b114c9e5cd49eb9f7b3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 961, hash: 'a7757f2c1f21133fe9477a61b13dd34a637dec607402cb46a71477c08df479a0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21563, hash: '55e8b69dd16185ada11c1a5a2b75781f3bdca94aecd771dfd032f66936931890', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
