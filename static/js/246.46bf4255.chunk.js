"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[246],{956:function(e,t,n){var r=n(689),a=n(87),c=n(184);t.Z=function(e){var t=e.films,n=(0,r.TH)();return(0,c.jsx)("ul",{children:t&&t.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:n},children:e.title})},e.id)}))})}},246:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),i=n(956),o=n(256),f=n(321),p=n(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],l=(0,s.useState)(!1),v=(0,a.Z)(l,2),h=v[0],d=v[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,o.Z.fetchTrending();case 4:t=e.sent,c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,d(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{children:"Trending today"}),n&&(0,p.jsx)(i.Z,{films:n}),h&&(0,p.jsx)(f.Z,{})]})}},321:function(e,t,n){var r=n(154),a=n(184);t.Z=function(){return(0,a.jsx)(r.iT,{height:"100",width:"100",color:"pink",ariaLabel:"loading"})}},256:function(e,t,n){var r=n(861),a=n(757),c=n.n(a),u=n(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="cdb4ad63923aa36135ea3e63ffafaaae",i=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={fetchTrending:i,fetchSearchByKeyword:o,fetchMovieDetalis:f,fetchActors:p,fetchReviews:l};t.Z=v}}]);
//# sourceMappingURL=246.46bf4255.chunk.js.map