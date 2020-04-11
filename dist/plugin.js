!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(
        require('ng.common'),
        require('tslib'),
        require('ng.forms'),
        require('ngx-translate.core'),
        require('wako-app.mobile-sdk'),
        require('ng.core'),
        require('ionic.angular')
      ))
    : 'function' == typeof define && define.amd
    ? define(['ng.common', 'tslib', 'ng.forms', 'ngx-translate.core', 'wako-app.mobile-sdk', 'ng.core', 'ionic.angular'], t)
    : 'object' == typeof exports
    ? (exports.plugin = t(
        require('ng.common'),
        require('tslib'),
        require('ng.forms'),
        require('ngx-translate.core'),
        require('wako-app.mobile-sdk'),
        require('ng.core'),
        require('ionic.angular')
      ))
    : (e.plugin = t(
        e['ng.common'],
        e.tslib,
        e['ng.forms'],
        e['ngx-translate.core'],
        e['wako-app.mobile-sdk'],
        e['ng.core'],
        e['ionic.angular']
      ));
})('undefined' != typeof self ? self : this, function (e, t, n, r, o, i, s) {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 0))
    );
  })({
    0: function (e, t, n) {
      e.exports = n('zUnb');
    },
    '0S4P': function (t, n) {
      t.exports = e;
    },
    '17wl': function (e, n) {
      e.exports = t;
    },
    '3xDq': function (e, t) {
      e.exports = n;
    },
    TGDj: function (e, t) {
      e.exports = r;
    },
    doF0: function (e, t) {
      e.exports = o;
    },
    vOrQ: function (e, t) {
      e.exports = i;
    },
    z1lQ: function (e, t) {
      e.exports = s;
    },
    zUnb: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'PluginModule', function () {
          return Q;
        });
      var r = n('17wl'),
        o = n('0S4P'),
        i = n('z1lQ'),
        s = n('doF0'),
        c = n('TGDj');
      function u() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        Object(s.wakoLog)('plugin.itunes', e);
      }
      var a = n('vOrQ'),
        l = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.translate = t), n;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.initialize = function () {
              u('plugin initialized');
            }),
            (t.prototype.afterInstall = function () {
              u('plugin installed');
            }),
            (t.prototype.afterUpdate = function () {
              u('plugin updated');
            }),
            (t.prototype.setTranslation = function (e, t) {
              this.translate.setDefaultLang(e), this.translate.use(e), this.translate.setTranslation(e, t);
            }),
            (t.prototype.customAction = function (e, t) {}),
            (t.ɵfac = function (e) {
              return new (e || t)(a['\u0275\u0275inject'](c.TranslateService));
            }),
            (t.ɵprov = a['\u0275\u0275defineInjectable']({ token: t, factory: t.ɵfac })),
            t
          );
        })(s.PluginBaseService);
      function p(e) {
        return 'function' == typeof e;
      }
      var f = !1,
        h = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(e) {
            f = e;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return f;
          }
        };
      function d(e) {
        setTimeout(function () {
          throw e;
        }, 0);
      }
      var b = {
          closed: !0,
          next: function (e) {},
          error: function (e) {
            if (h.useDeprecatedSynchronousErrorHandling) throw e;
            d(e);
          },
          complete: function () {}
        },
        y = (function () {
          return (
            Array.isArray ||
            function (e) {
              return e && 'number' == typeof e.length;
            }
          );
        })(),
        m = (function () {
          function e(e) {
            return (
              Error.call(this),
              (this.message = e
                ? e.length +
                  ' errors occurred during unsubscription:\n' +
                  e
                    .map(function (e, t) {
                      return t + 1 + ') ' + e.toString();
                    })
                    .join('\n  ')
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = e),
              this
            );
          }
          return (e.prototype = Object.create(Error.prototype)), e;
        })(),
        v = (function () {
          function e(e) {
            (this.closed = !1), (this._parentOrParents = null), (this._subscriptions = null), e && (this._unsubscribe = e);
          }
          return (
            (e.prototype.unsubscribe = function () {
              var t;
              if (!this.closed) {
                var n,
                  r = this._parentOrParents,
                  o = this._unsubscribe,
                  i = this._subscriptions;
                if (((this.closed = !0), (this._parentOrParents = null), (this._subscriptions = null), r instanceof e)) r.remove(this);
                else if (null !== r) for (var s = 0; s < r.length; ++s) r[s].remove(this);
                if (p(o))
                  try {
                    o.call(this);
                  } catch (a) {
                    t = a instanceof m ? g(a.errors) : [a];
                  }
                if (y(i)) {
                  s = -1;
                  for (var c = i.length; ++s < c; ) {
                    var u = i[s];
                    if (null !== (n = u) && 'object' == typeof n)
                      try {
                        u.unsubscribe();
                      } catch (a) {
                        (t = t || []), a instanceof m ? (t = t.concat(g(a.errors))) : t.push(a);
                      }
                  }
                }
                if (t) throw new m(t);
              }
            }),
            (e.prototype.add = function (t) {
              var n = t;
              if (!t) return e.EMPTY;
              switch (typeof t) {
                case 'function':
                  n = new e(t);
                case 'object':
                  if (n === this || n.closed || 'function' != typeof n.unsubscribe) return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if (!(n instanceof e)) {
                    var r = n;
                    (n = new e())._subscriptions = [r];
                  }
                  break;
                default:
                  throw new Error('unrecognized teardown ' + t + ' added to Subscription.');
              }
              var o = n._parentOrParents;
              if (null === o) n._parentOrParents = this;
              else if (o instanceof e) {
                if (o === this) return n;
                n._parentOrParents = [o, this];
              } else {
                if (-1 !== o.indexOf(this)) return n;
                o.push(this);
              }
              var i = this._subscriptions;
              return null === i ? (this._subscriptions = [n]) : i.push(n), n;
            }),
            (e.prototype.remove = function (e) {
              var t = this._subscriptions;
              if (t) {
                var n = t.indexOf(e);
                -1 !== n && t.splice(n, 1);
              }
            }),
            (e.EMPTY = (function (e) {
              return (e.closed = !0), e;
            })(new e())),
            e
          );
        })();
      function g(e) {
        return e.reduce(function (e, t) {
          return e.concat(t instanceof m ? t.errors : t);
        }, []);
      }
      var _ = (function () {
          return 'function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
        })(),
        x = (function (e) {
          function t(n, r, o) {
            var i = e.call(this) || this;
            switch (
              ((i.syncErrorValue = null), (i.syncErrorThrown = !1), (i.syncErrorThrowable = !1), (i.isStopped = !1), arguments.length)
            ) {
              case 0:
                i.destination = b;
                break;
              case 1:
                if (!n) {
                  i.destination = b;
                  break;
                }
                if ('object' == typeof n) {
                  n instanceof t
                    ? ((i.syncErrorThrowable = n.syncErrorThrowable), (i.destination = n), n.add(i))
                    : ((i.syncErrorThrowable = !0), (i.destination = new w(i, n)));
                  break;
                }
              default:
                (i.syncErrorThrowable = !0), (i.destination = new w(i, n, r, o));
            }
            return i;
          }
          return (
            r.__extends(t, e),
            (t.prototype[_] = function () {
              return this;
            }),
            (t.create = function (e, n, r) {
              var o = new t(e, n, r);
              return (o.syncErrorThrowable = !1), o;
            }),
            (t.prototype.next = function (e) {
              this.isStopped || this._next(e);
            }),
            (t.prototype.error = function (e) {
              this.isStopped || ((this.isStopped = !0), this._error(e));
            }),
            (t.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (t.prototype.unsubscribe = function () {
              this.closed || ((this.isStopped = !0), e.prototype.unsubscribe.call(this));
            }),
            (t.prototype._next = function (e) {
              this.destination.next(e);
            }),
            (t.prototype._error = function (e) {
              this.destination.error(e), this.unsubscribe();
            }),
            (t.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (t.prototype._unsubscribeAndRecycle = function () {
              var e = this._parentOrParents;
              return (
                (this._parentOrParents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parentOrParents = e),
                this
              );
            }),
            t
          );
        })(v),
        w = (function (e) {
          function t(t, n, r, o) {
            var i,
              s = e.call(this) || this;
            s._parentSubscriber = t;
            var c = s;
            return (
              p(n)
                ? (i = n)
                : n &&
                  ((i = n.next),
                  (r = n.error),
                  (o = n.complete),
                  n !== b &&
                    (p((c = Object.create(n)).unsubscribe) && s.add(c.unsubscribe.bind(c)), (c.unsubscribe = s.unsubscribe.bind(s)))),
              (s._context = c),
              (s._next = i),
              (s._error = r),
              (s._complete = o),
              s
            );
          }
          return (
            r.__extends(t, e),
            (t.prototype.next = function (e) {
              if (!this.isStopped && this._next) {
                var t = this._parentSubscriber;
                h.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                  ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, e);
              }
            }),
            (t.prototype.error = function (e) {
              if (!this.isStopped) {
                var t = this._parentSubscriber,
                  n = h.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                  n && t.syncErrorThrowable
                    ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                else if (t.syncErrorThrowable) n ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0)) : d(e), this.unsubscribe();
                else {
                  if ((this.unsubscribe(), n)) throw e;
                  d(e);
                }
              }
            }),
            (t.prototype.complete = function () {
              var e = this;
              if (!this.isStopped) {
                var t = this._parentSubscriber;
                if (this._complete) {
                  var n = function () {
                    return e._complete.call(e._context);
                  };
                  h.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                    ? (this.__tryOrSetError(t, n), this.unsubscribe())
                    : (this.__tryOrUnsub(n), this.unsubscribe());
                } else this.unsubscribe();
              }
            }),
            (t.prototype.__tryOrUnsub = function (e, t) {
              try {
                e.call(this._context, t);
              } catch (n) {
                if ((this.unsubscribe(), h.useDeprecatedSynchronousErrorHandling)) throw n;
                d(n);
              }
            }),
            (t.prototype.__tryOrSetError = function (e, t, n) {
              if (!h.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
              try {
                t.call(this._context, n);
              } catch (r) {
                return h.useDeprecatedSynchronousErrorHandling ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0) : (d(r), !0);
              }
              return !1;
            }),
            (t.prototype._unsubscribe = function () {
              var e = this._parentSubscriber;
              (this._context = null), (this._parentSubscriber = null), e.unsubscribe();
            }),
            t
          );
        })(x),
        S = (function () {
          function e(e, t) {
            (this.project = e), (this.thisArg = t);
          }
          return (
            (e.prototype.call = function (e, t) {
              return t.subscribe(new E(e, this.project, this.thisArg));
            }),
            e
          );
        })(),
        E = (function (e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return (o.project = n), (o.count = 0), (o.thisArg = r || o), o;
          }
          return (
            r.__extends(t, e),
            (t.prototype._next = function (e) {
              var t;
              try {
                t = this.project.call(this.thisArg, e, this.count++);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(t);
            }),
            t
          );
        })(x),
        P = (function () {
          function e() {
            this.baseUrl = 'https://itunes.apple.com';
          }
          return (
            (e.prototype.search = function (e, t) {
              return s.WakoHttpRequestService.get(this.baseUrl + '/search', { term: e.replace(/\s/g, '+'), media: t });
            }),
            (e.prototype.getItem = function (e, t, n, r) {
              return this.search(e, t).pipe(
                ((o = function (t) {
                  if (0 === t.resultCount) return null;
                  r && (e += ' ' + r);
                  var o = e
                      .replace(/[^0-9a-z]/gi, ' ')
                      .split(' ')
                      .join('.*'),
                    i = new RegExp(o, 'ig'),
                    s = null;
                  return (
                    t.results.forEach(function (e) {
                      var t = e.trackName;
                      if (
                        (e.collectionName && e.collectionName !== e.trackName && (t = e.collectionName + ' ' + e.trackName),
                        n && e.releaseDate)
                      ) {
                        var r = e.releaseDate.split('-').shift();
                        if (r && +r !== n) return;
                      }
                      null !== t.match(i) && (s = e);
                    }),
                    s
                      ? {
                          rentalPrice: s.trackRentalPrice && s.trackRentalPrice > 0 ? s.trackRentalPrice : null,
                          buyPrice:
                            s.trackPrice > 0 || s.collectionPrice > 0 ? (s.trackPrice > 0 ? s.trackPrice : s.collectionPrice) : null,
                          preOrder: !(s.trackRentalPrice > 0 || s.trackPrice > 0 || s.collectionPrice > 0),
                          title:
                            s.collectionName && s.collectionName !== s.trackName ? s.collectionName + ' - ' + s.trackName : s.trackName,
                          url: s.trackViewUrl,
                          currency: s.currency
                        }
                      : null
                  );
                }),
                function (e) {
                  return e.lift(new S(o, void 0));
                })
              );
              var o;
            }),
            (e.ɵprov = a['\u0275\u0275defineInjectable']({
              token: e,
              factory: (e.ɵfac = function (t) {
                return new (t || e)();
              })
            })),
            e
          );
        })(),
        k = (function () {
          function e(e) {
            this.callback = e;
          }
          return (
            (e.prototype.call = function (e, t) {
              return t.subscribe(new O(e, this.callback));
            }),
            e
          );
        })(),
        O = (function (e) {
          function t(t, n) {
            var r = e.call(this, t) || this;
            return r.add(new v(n)), r;
          }
          return r.__extends(t, e), t;
        })(x);
      function I(e, t) {
        1 & e &&
          (a['\u0275\u0275elementStart'](0, 'ion-button', 2),
          a['\u0275\u0275elementStart'](1, 'ion-text'),
          a['\u0275\u0275text'](2),
          a['\u0275\u0275pipe'](3, 'translate'),
          a['\u0275\u0275elementEnd'](),
          a['\u0275\u0275elementEnd']()),
          2 & e && (a['\u0275\u0275advance'](2), a['\u0275\u0275textInterpolate'](a['\u0275\u0275pipeBind1'](3, 1, 'searching')));
      }
      function j(e, t) {
        1 & e &&
          (a['\u0275\u0275elementStart'](0, 'span'),
          a['\u0275\u0275text'](1),
          a['\u0275\u0275pipe'](2, 'translate'),
          a['\u0275\u0275elementEnd']()),
          2 & e && (a['\u0275\u0275advance'](1), a['\u0275\u0275textInterpolate1'](' ', a['\u0275\u0275pipeBind1'](2, 1, 'preOrder'), ' '));
      }
      var T = function (e, t) {
        return { price: e, currency: t };
      };
      function C(e, t) {
        if (
          (1 & e &&
            (a['\u0275\u0275elementStart'](0, 'span'),
            a['\u0275\u0275text'](1),
            a['\u0275\u0275pipe'](2, 'translate'),
            a['\u0275\u0275elementEnd']()),
          2 & e)
        ) {
          var n = a['\u0275\u0275nextContext'](3);
          a['\u0275\u0275advance'](1),
            a['\u0275\u0275textInterpolate1'](
              ' ',
              a['\u0275\u0275pipeBind2'](
                2,
                1,
                'rentalPrice',
                a['\u0275\u0275pureFunction2'](4, T, n.result.rentalPrice, n.result.currency)
              ),
              ' '
            );
        }
      }
      function D(e, t) {
        if (
          (1 & e &&
            (a['\u0275\u0275elementStart'](0, 'span'),
            a['\u0275\u0275text'](1),
            a['\u0275\u0275pipe'](2, 'translate'),
            a['\u0275\u0275elementEnd']()),
          2 & e)
        ) {
          var n = a['\u0275\u0275nextContext'](3);
          a['\u0275\u0275advance'](1),
            a['\u0275\u0275textInterpolate1'](
              ' ',
              a['\u0275\u0275pipeBind2'](2, 1, 'buyPrice', a['\u0275\u0275pureFunction2'](4, T, n.result.buyPrice, n.result.currency)),
              ' '
            );
        }
      }
      function M(e, t) {
        if (1 & e) {
          var n = a['\u0275\u0275getCurrentView']();
          a['\u0275\u0275elementStart'](0, 'div', 4),
            a['\u0275\u0275listener']('click', function () {
              a['\u0275\u0275restoreView'](n);
              var e = a['\u0275\u0275nextContext'](2);
              return e.goTo(e.result.url);
            }),
            a['\u0275\u0275template'](1, j, 3, 3, 'span', 1),
            a['\u0275\u0275template'](2, C, 3, 7, 'span', 1),
            a['\u0275\u0275text'](3),
            a['\u0275\u0275template'](4, D, 3, 7, 'span', 1),
            a['\u0275\u0275elementStart'](5, 'em'),
            a['\u0275\u0275element'](6, 'br'),
            a['\u0275\u0275text'](7),
            a['\u0275\u0275elementEnd'](),
            a['\u0275\u0275elementEnd']();
        }
        if (2 & e) {
          var r = a['\u0275\u0275nextContext'](2);
          a['\u0275\u0275advance'](1),
            a['\u0275\u0275property']('ngIf', r.result.preOrder),
            a['\u0275\u0275advance'](1),
            a['\u0275\u0275property']('ngIf', r.result.rentalPrice > 0),
            a['\u0275\u0275advance'](1),
            a['\u0275\u0275textInterpolate1'](' ', r.result.rentalPrice > 0 && r.result.buyPrice > 0 ? '/' : '', ' '),
            a['\u0275\u0275advance'](1),
            a['\u0275\u0275property']('ngIf', r.result.buyPrice > 0),
            a['\u0275\u0275advance'](3),
            a['\u0275\u0275textInterpolate1'](' ', r.result.title, ' ');
        }
      }
      function q(e, t) {
        1 & e &&
          (a['\u0275\u0275elementStart'](0, 'ion-button', 2),
          a['\u0275\u0275elementStart'](1, 'ion-text'),
          a['\u0275\u0275text'](2),
          a['\u0275\u0275pipe'](3, 'translate'),
          a['\u0275\u0275elementEnd'](),
          a['\u0275\u0275elementEnd']()),
          2 & e && (a['\u0275\u0275advance'](2), a['\u0275\u0275textInterpolate1'](' ', a['\u0275\u0275pipeBind1'](3, 1, 'noResults'), ''));
      }
      function N(e, t) {
        if (
          (1 & e &&
            (a['\u0275\u0275elementContainerStart'](0),
            a['\u0275\u0275template'](1, M, 8, 5, 'div', 3),
            a['\u0275\u0275template'](2, q, 4, 3, 'ion-button', 0),
            a['\u0275\u0275elementContainerEnd']()),
          2 & e)
        ) {
          var n = a['\u0275\u0275nextContext']();
          a['\u0275\u0275advance'](1),
            a['\u0275\u0275property']('ngIf', n.result),
            a['\u0275\u0275advance'](1),
            a['\u0275\u0275property']('ngIf', !n.result);
        }
      }
      var F = (function () {
          function e(e) {
            (this.itunesApiService = e), (this.type = 'button'), (this.loading = !0), (this.result = null);
          }
          return (
            (e.prototype.ngOnInit = function () {
              var e = this;
              this.loading = !0;
              var t,
                n = 'movie',
                r = null;
              this.show && ((n = 'tvShow'), (r = this.episode.title)),
                this.itunesApiService
                  .getItem(
                    this.movie ? this.movie.title : this.show.title + ' season ' + this.episode.traktSeasonNumber,
                    n,
                    this.movie ? this.movie.year : null,
                    r
                  )
                  .pipe(
                    ((t = function () {
                      return (e.loading = !1);
                    }),
                    function (e) {
                      return e.lift(new k(t));
                    })
                  )
                  .subscribe(function (t) {
                    e.result = t;
                  });
            }),
            (e.prototype.goTo = function (e) {
              s.BrowserService.open(e),
                'FirebasePlugin' in window && window.FirebasePlugin.logEvent('addon_itunes', { type: this.movie ? 'movie' : 'tv-show' });
            }),
            (e.ɵfac = function (t) {
              return new (t || e)(a['\u0275\u0275directiveInject'](P));
            }),
            (e.ɵcmp = a['\u0275\u0275defineComponent']({
              type: e,
              selectors: [['wk-open-button']],
              inputs: { movie: 'movie', show: 'show', episode: 'episode', type: 'type' },
              decls: 2,
              vars: 2,
              consts: [
                ['color', 'light', 'expand', 'block', 'fill', 'outline', 'disabled', '', 4, 'ngIf'],
                [4, 'ngIf'],
                ['color', 'light', 'expand', 'block', 'fill', 'outline', 'disabled', ''],
                ['class', 'container-button', 3, 'click', 4, 'ngIf'],
                [1, 'container-button', 3, 'click']
              ],
              template: function (e, t) {
                1 & e && (a['\u0275\u0275template'](0, I, 4, 3, 'ion-button', 0), a['\u0275\u0275template'](1, N, 3, 2, 'ng-container', 1)),
                  2 & e &&
                    (a['\u0275\u0275property']('ngIf', t.loading),
                    a['\u0275\u0275advance'](1),
                    a['\u0275\u0275property']('ngIf', !t.loading));
              },
              directives: [o.NgIf, i.IonButton, i.IonText],
              pipes: [c.TranslatePipe],
              styles: [
                '.container-button[_ngcontent-%COMP%]{border:3px solid var(--ion-color-light);background-color:transparent;border-radius:5px;padding:10px 15px;text-align:center;font-size:.8em}.container-button[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-size:.8em}'
              ]
            })),
            e
          );
        })(),
        B = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.setMovie = function (e) {
              this.movie = e;
            }),
            (t.ɵfac = function (e) {
              return U(e || t);
            }),
            (t.ɵcmp = a['\u0275\u0275defineComponent']({
              type: t,
              selectors: [['ng-component']],
              features: [a['\u0275\u0275InheritDefinitionFeature']],
              decls: 1,
              vars: 1,
              consts: [[3, 'movie']],
              template: function (e, t) {
                1 & e && a['\u0275\u0275element'](0, 'wk-open-button', 0), 2 & e && a['\u0275\u0275property']('movie', t.movie);
              },
              directives: [F],
              styles: ['']
            })),
            t
          );
        })(s.MovieDetailBaseComponent),
        U = a['\u0275\u0275getInheritedFactory'](B),
        z = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.setShowEpisode = function (e, t) {
              (this.show = e), (this.episode = t);
            }),
            (t.ɵfac = function (e) {
              return A(e || t);
            }),
            (t.ɵcmp = a['\u0275\u0275defineComponent']({
              type: t,
              selectors: [['ng-component']],
              features: [a['\u0275\u0275InheritDefinitionFeature']],
              decls: 1,
              vars: 2,
              consts: [[3, 'show', 'episode']],
              template: function (e, t) {
                1 & e && a['\u0275\u0275element'](0, 'wk-open-button', 0),
                  2 & e && a['\u0275\u0275property']('show', t.show)('episode', t.episode);
              },
              directives: [F],
              styles: ['']
            })),
            t
          );
        })(s.EpisodeDetailBaseComponent),
        A = a['\u0275\u0275getInheritedFactory'](z),
        H = n('3xDq'),
        R = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.prototype.setShow = function (e) {
              this.show = e;
            }),
            (t.ɵfac = function (e) {
              return V(e || t);
            }),
            (t.ɵcmp = a['\u0275\u0275defineComponent']({
              type: t,
              selectors: [['ng-component']],
              features: [a['\u0275\u0275InheritDefinitionFeature']],
              decls: 1,
              vars: 1,
              consts: [[3, 'show']],
              template: function (e, t) {
                1 & e && a['\u0275\u0275element'](0, 'wk-open-button', 0), 2 & e && a['\u0275\u0275property']('show', t.show);
              },
              directives: [F],
              styles: ['']
            })),
            t
          );
        })(s.ShowDetailBaseComponent),
        V = a['\u0275\u0275getInheritedFactory'](R),
        Q = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.__extends)(t, e),
            (t.pluginService = l),
            (t.movieComponent = B),
            (t.episodeComponent = z),
            (t.showComponent = R),
            (t.ɵmod = a['\u0275\u0275defineNgModule']({ type: t })),
            (t.ɵinj = a['\u0275\u0275defineInjector']({
              factory: function (e) {
                return G(e || t);
              },
              providers: [l, P],
              imports: [[o.CommonModule, H.FormsModule, i.IonicModule.forRoot(), c.TranslateModule.forRoot()]]
            })),
            t
          );
        })(s.PluginBaseModule),
        G = a['\u0275\u0275getInheritedFactory'](Q);
      t.default = Q;
    }
  });
});
