(window.webpackJsonp = window.webpackJsonp || []).push([
  [ 5 ], {
    269 : function(e, t, n) {
      "use strict";
      n.r(t);
      n(226), n(17), n(228), n(234), n(236), n(237), n(238), n(241), n(242),
          n(243), n(244), n(245), n(246), n(247), n(248), n(250), n(251),
          n(252), n(253), n(254), n(255), n(256), n(257), n(262), n(263),
          n(264);
      var r = n(222), o = n(220), c = n(265), d = n.n(c), l = {
        mounted : function() {
          var e = {
            width : 400,
            height : 400,
            widthSegments : 50,
            heightSegments : 50
          };
          var t = new o.Raycaster, n = new o.Scene,
              c = new o.PerspectiveCamera(75, innerWidth / innerHeight, .1,
                                          1e3),
              l = new o.WebGLRenderer({canvas : this.$refs.canvas});
          l.setSize(innerWidth, innerHeight), l.setPixelRatio(devicePixelRatio),
              new d.a(c, l.domElement), c.position.z = 50;
          var h = new o.PlaneGeometry(e.width, e.height, e.widthSegments,
                                      e.heightSegments),
              m = new o.MeshPhongMaterial({
                side : o.DoubleSide,
                flatShading : o.FlatShading,
                vertexColors : !0
              }),
              f = new o.Mesh(h, m);
          n.add(f), function() {
            f.geometry.dispose(),
                f.geometry = new o.PlaneGeometry(
                    e.width, e.height, e.widthSegments, e.heightSegments);
            for (var t = f.geometry.attributes.position.array, n = [], i = 0;
                 i < t.length; i++) {
              if (i % 3 == 0) {
                var r = t[i], c = t[i + 1], d = t[i + 2];
                t[i] = r + 3 * (Math.random() - .5),
                t[i + 1] = c + 3 * (Math.random() - .5),
                t[i + 2] = d + 3 * (Math.random() - .5)
              }
              n.push(Math.random() * Math.PI * 2)
            }
            f.geometry.attributes.position.randomValues = n,
            f.geometry.attributes.position.originalPosition =
                f.geometry.attributes.position.array;
            for (var l = [], h = 0; h < f.geometry.attributes.position.count;
                 h++)
              l.push(0, .19, .4);
            f.geometry.setAttribute(
                "color", new o.BufferAttribute(new Float32Array(l), 3))
          }();
          var y = new o.DirectionalLight(16777215, 1);
          y.position.set(0, -1, 1), n.add(y);
          var v = new o.DirectionalLight(16777215, 1);
          v.position.set(0, 0, -1), n.add(v);
          for (var w = new o.BufferGeometry,
                   x = new o.PointsMaterial({color : 16777215}), S = [], i = 0;
               i < 1e4; i++) {
            var M = 2e3 * (Math.random() - .5), _ = 2e3 * (Math.random() - .5),
                P = 2e3 * (Math.random() - .5);
            S.push(M, _, P)
          }
          w.setAttribute("position", new o.Float32BufferAttribute(S, 3));
          var W = new o.Points(w, x);
          n.add(W);
          var k = {x : void 0, y : void 0}, Y = 0;
          !function animate() {
            requestAnimationFrame(animate), l.render(n, c),
                t.setFromCamera(k, c), Y += .01;
            for (var e = f.geometry.attributes.position, o = e.array,
                     d = e.originalPosition, h = e.randomValues, m = 0;
                 m < o.length; m += 3)
              o[m] = d[m] + .01 * Math.cos(Y + h[m]),
              o[m + 1] = d[m + 1] + .001 * Math.sin(Y + h[m + 1]);
            f.geometry.attributes.position.needsUpdate = !0;
            var y = t.intersectObject(f);
            if (y.length > 0) {
              var v = y[0].object.geometry.attributes.color;
              v.setX(y[0].face.a, .1), v.setY(y[0].face.a, .5),
                  v.setZ(y[0].face.a, 1), v.setX(y[0].face.b, .1),
                  v.setY(y[0].face.b, .5), v.setZ(y[0].face.b, 1),
                  v.setX(y[0].face.c, .1), v.setY(y[0].face.c, .5),
                  v.setZ(y[0].face.c, 1),
                  y[0].object.geometry.attributes.color.needsUpdate = !0;
              var w = {r : 0, g : .19, b : .4}, x = {r : .1, g : .5, b : 1};
              r.a.to(x, {
                r : w.r,
                g : w.g,
                b : w.b,
                duration : 1,
                onUpdate : function() {
                  v.setX(y[0].face.a, x.r), v.setY(y[0].face.a, x.g),
                      v.setZ(y[0].face.a, x.b), v.setX(y[0].face.b, x.r),
                      v.setY(y[0].face.b, x.g), v.setZ(y[0].face.b, x.b),
                      v.setX(y[0].face.c, x.r), v.setY(y[0].face.c, x.g),
                      v.setZ(y[0].face.c, x.b), v.needsUpdate = !0
                }
              })
            }
            W.rotation.x += 5e-4
          }(),
              addEventListener("mousemove", (function(e) {
                                 k.x = e.clientX / innerWidth * 2 - 1,
                                 k.y = -e.clientY / innerHeight * 2 + 1
                               })),
              r.a.to("#name",
                     {opacity : 1, duration : 1.5, y : 0, ease : "expo"}),
              r.a.to("#oneWithAn", {
                opacity : 1,
                duration : 1.5,
                delay : .3,
                y : 0,
                ease : "expo"
              }),
              r.a.to("#liner", {
                opacity : 1,
                duration : 2,
                delay : .9,
                y : 0,
                ease : "expo"
              }),
              r.a.to("#viewWorkBtn", {
                opacity : 1,
                duration : 1.5,
                delay : .6,
                y : 0,
                ease : "expo"
              }),
              document.querySelector("#viewWorkBtn")
                  .addEventListener(
                      "click", (function(e) {
                        e.preventDefault(), r.a.to("#container", {opacity : 0}),
                            r.a.to(
                                c.position,
                                {z : 25, ease : "power3.inOut", duration : 2}),
                            r.a.to(c.rotation, {
                              x : 1.57,
                              ease : "power3.inOut",
                              duration : 2
                            }),
                            r.a.to(c.position, {
                              y : 1e3,
                              ease : "power3.in",
                              duration : 1,
                              delay : 2,
                              onComplete : function() {
                                location.assign("https://github.com/D5D0Ds")
                              }
                            })
                      })),
              addEventListener("resize", (function() {
                                 c.aspect = innerWidth / innerHeight,
                                 c.updateProjectionMatrix(),
                                 l.setSize(innerWidth, innerHeight)
                               }))
        }
      },
          h = n(43),
          component = Object(h.a)(
              l, (function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div",
                         [ n("canvas", {ref : "canvas"}), e._v(" "), e._m(0) ])
              }),
              [ function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n(
                    "div", {
                      staticClass :
                          "absolute text-white text-center w-full max-w-2xl px-6",
                      staticStyle : {
                        top : "50%",
                        transform : "translate(-50%, -50%)",
                        left : "50%"
                      },
                      attrs : {id : "container"}
                    },
                    [
                      n("h1", {
                        staticClass :
                            "font-space-mono text-4xl uppercase tracking-wide opacity-0",
                        staticStyle : {transform : "translateY(30px)"},
                        attrs : {id : "name"}
                      },
                        [
                          e._v(
                              "\n      🙋‍♂️Hi! I'm Madhav Choudhary👨‍💻\n    ")
                        ]),
                      e._v(" "), n("hr", {
                        staticClass : "border-white border-2 opacity-0",
                        staticStyle : {transform : "translateY(30 px)"},
                        attrs : {id : "liner"}
                      }),
                      e._v(" "), n("br"), e._v(" "),
                      n("p", {
                        staticClass : "font-exo text-xl opacity-0",
                        staticStyle : {transform : "translateY(30px)"},
                        attrs : {id : "oneWithAn"}
                      },
                        [
                          e._v(
                              "\n      Every line of code used to make this website speaks my story...\n    ")
                        ]),
                      e._v(" "),
                      n("a", {
                        staticClass :
                            "\n        border\n        px-4\n        py-2\n        rounded-lg\n        text-sm\n        font-space-mono\n        uppercase\n        mt-8\n        hover:bg-white hover:text-gray-800\n        inline-block\n        opacity-0\n      ",
                        staticStyle : {transform : "translateY(30px)"},
                        attrs : {
                          id : "viewWorkBtn",
                          href : "https://github.com/d5d0ds/"
                        }
                      },
                        [ e._v("\n      Let's View My Work 👆\n    ") ])
                    ])
              } ],
              !1, null, null, null);
      t.default = component.exports
    }
  }
]);