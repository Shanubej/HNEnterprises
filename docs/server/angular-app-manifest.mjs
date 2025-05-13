
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/HNEnterprises/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/HNEnterprises"
  },
  {
    "renderMode": 2,
    "route": "/HNEnterprises/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6923, hash: 'e86b8536c4a864677d5d3652521b5624852a6c58c1d7712a792b954ccf67063c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2853, hash: '545e14d7938291d0373a051e0a0ff04df2549b6e4e6e85a699413f29b82fc07d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 57014, hash: '0688c373ca6a47e36388df2acbdfd92a96719d6c0541d59dcb43cedb025b0c7a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 57086, hash: '3f268044c73da0ba466640b22fc91e578c211e5c6831e3dcaa3989085bcee391', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-QC77J5KI.css': {size: 234891, hash: 'HT1cdaq2hU0', text: () => import('./assets-chunks/styles-QC77J5KI_css.mjs').then(m => m.default)}
  },
};
