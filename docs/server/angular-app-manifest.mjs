
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
    'index.csr.html': {size: 448, hash: 'ae40afaf273de275ba69ed1d51f7817ef0c8be0bc8b4242e4d3f37ae04968ebd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 961, hash: '1f943712cfb3630b95c28a43c74a2460768c4ffeca078cdf650d541584edb90a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 647, hash: '215b045db20245c981fee23b5510c987d8d8d0a77eea9d7ebc65c9be25e1c5d0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
