
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://marcoguarasci.github.io/provaonline/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/provaonline"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 479, hash: 'e2b2e6059458f7b627a740386e34993f295fea806d0ef369fd6f60951a4c9dce', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 992, hash: 'e036d90ae9f1ca288e173642729f5f6437343bbed4a68028e59f5bb0a348280b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 684, hash: '3a054c20cada3fedd429e6ee4c9f8320369f5c4c9eaa693b2257b3d26d004bec', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
