/* PLEASE DO NOT COPY AND PASTE THIS CODE. */ ;
(function () {
  var w = window,
    C = '___grecaptcha_cfg',
    cfg = (w[C] = w[C] || {}),
    N = 'grecaptcha'
  var E = 'enterprise',
    a = (w[N] = w[N] || {}),
    gr = (a[E] = a[E] || {})
  gr.ready =
    gr.ready ||
    function (f) {
      ;(cfg['fns'] = cfg['fns'] || []).push(f)
    }
  w['__recaptcha_api'] = 'https://www.recaptcha.net/recaptcha/enterprise/'
  ;(cfg['enterprise'] = cfg['enterprise'] || []).push(true)
  ;(cfg['enterprise2fa'] = cfg['enterprise2fa'] || []).push(true)
  ;(cfg['render'] = cfg['render'] || []).push('6LdLc4gdAAAAAFNjKQtyrDorNRhPnayEajdsRS90')
  ;(cfg['onload'] = cfg['onload'] || []).push('onloadCallback')
  w['__google_recaptcha_client'] = true
  var d = document,
    po = d.createElement('script')
  po.type = 'text/javascript'
  po.async = true
  po.charset = 'utf-8'
  var v = w.navigator,
    m = d.createElement('meta')
  m.httpEquiv = 'origin-trial'
  m.content =
    'A7uxtj3+hJmOcZFooFT0Ps276PuOqGnM1jfoPbFvxWp73VC60LnYGzayHVvcFeEiF0qrwy7fQAL+gGVXU+f9IQcAAACTeyJvcmlnaW4iOiJodHRwczovL3JlY2FwdGNoYS5uZXQ6NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZzIiLCJleHBpcnkiOjE3NDIzNDIzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9'
  if (v && v.cookieDeprecationLabel) {
    v.cookieDeprecationLabel.getValue().then(function (l) {
      if (l !== 'treatment_1.1' && l !== 'treatment_1.2' && l !== 'control_1.1') {
        d.head.prepend(m)
      }
    })
  } else {
    d.head.prepend(m)
  }
  var m = d.createElement('meta')
  m.httpEquiv = 'origin-trial'
  m.content =
    '3NNj0GXVktLOmVKwWUDendk4Vq2qgMVDBDX+Sni48ATJl9JBj+zF+9W2HGB3pvt6qowOihTbQgTeBm9SKbdTwYAAABfeyJvcmlnaW4iOiJodHRwczovL3JlY2FwdGNoYS5uZXQ6NDQzIiwiZmVhdHVyZSI6IlRwY2QiLCJleHBpcnkiOjE3MzUzNDM5OTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0='
  d.head.prepend(m)
  po.src = 'https://www.gstatic.com/recaptcha/releases/hfUfsXWZFeg83qqxrK27GB8P/recaptcha__pt.js'
  po.crossOrigin = 'anonymous'
 // po.integrity = 'sha384-v3Q3sAixyjr92Mu8qAKqITPg1ZSilJ9JjviAhAaZ3G/uKq41P7USVN9xmRT5VA33'
  var e = d.querySelector('script[nonce]'),
    n = e && (e['nonce'] || e.getAttribute('nonce'))
  if (n) {
    po.setAttribute('nonce', n)
  }
  var s = d.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(po, s)
})()
