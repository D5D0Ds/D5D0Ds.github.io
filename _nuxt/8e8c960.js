(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    223: function (t, e, n) {
      t.exports = n.p + "img/iphone.91e9283.jpg";
    },
    224: function (t, e, n) {
      t.exports = n.p + "img/laptop.67d6575.jpg";
    },
    225: function (t, e, n) {
      t.exports = n.p + "img/person.460f816.jpg";
    },
    268: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(222),
        o = n(223),
        l = n.n(o),
        c = n(224),
        f = n.n(c),
        x = n(225),
        m = n.n(x),
        h = {
          data: function () {
            return {
              projects: [
                { image: { url: l.a }, title: "IPHONE" },
                { image: { url: f.a }, title: "LAPTOP" },
                { image: { url: m.a }, title: "Person" },
                { image: { url: l.a }, title: "IPHONE" },
                { image: { url: f.a }, title: "LAPTOP" },
                { image: { url: m.a }, title: "Person" },
              ],
            };
          },
          mounted: function () {
            r.a.to(this.$refs.title, {
              opacity: 1,
              duration: 1.5,
              y: 0,
              ease: "expo",
            }),
              r.a.to(this.$refs.projects, {
                opacity: 1,
                duration: 1.5,
                stagger: 0.1,
                x: 0,
                ease: "expo",
                delay: 0.2,
              });
          },
        },
        d = n(43),
        component = Object(d.a)(
          h,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", { staticClass: "bg-black h-screen px-6 py-12" }, [
              n(
                "h2",
                {
                  ref: "title",
                  staticClass: "text-white font-exo text-5xl opacity-0",
                  staticStyle: { transform: "translateY(30px)" },
                },
                [t._v("\n    MY WORK\n  ")]
              ),
              t._v(" "),
              n(
                "div",
                { staticClass: "flex space-x-4" },
                t._l(t.projects, function (e) {
                  return n(
                    "div",
                    {
                      ref: "projects",
                      refInFor: !0,
                      staticClass: "w-full opacity-0",
                      staticStyle: { transform: "translateX(30px)" },
                    },
                    [
                      n("nuxt-link", { attrs: { to: "/" } }, [
                        n("img", {
                          staticClass: "object-cover",
                          staticStyle: { height: "70vh" },
                          attrs: { src: e.image.url, alt: "iPhone" },
                        }),
                        t._v(" "),
                        n(
                          "p",
                          {
                            staticClass: "text-white font-space-mono text-sm",
                          },
                          [t._v(t._s(e.title))]
                        ),
                      ]),
                    ],
                    1
                  );
                }),
                0
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
  },
]);
