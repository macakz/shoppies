(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{26:function(e,t,c){},46:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(17),i=c.n(a),r=(c(26),c(8)),o=c(7),l=c.n(o),j=c(18),d=c(5),h=c(19),b=c.n(h),u=(c(46),c(20)),m=c.n(u),O=c(21),p=c(0);var x=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(d.a)(a,2),o=i[0],h=i[1],u=Object(n.useState)(""),x=Object(d.a)(u,2),v=x[0],f=x[1],N=function(){var e=Object(j.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://www.omdbapi.com/?apikey=9ded3126&s=".concat(t));case 2:c=e.sent,n=c.data.Search,h(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=m.a.debounce((function(e){return N(e)}),500),g=function(e){return v.includes(e)||v.length>=5};return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{className:"headingContainer",children:[Object(p.jsx)("h1",{className:"heading",children:"The Shoppies"}),Object(p.jsx)("input",{className:"search",placeholder:"Please enter a movie title...",type:"search",value:c,onChange:function(e){s(e.target.value),w(e.target.value)}})]}),o?Object(p.jsxs)("p",{children:["Results for: ",Object(p.jsxs)("b",{children:['"',c,'"']})]}):Object(p.jsx)("div",{}),v.length>4?Object(p.jsx)("div",{children:Object(p.jsx)("p",{className:"limit",children:"Limit of 5 reached. Please remove one choice if you wish to choose another"})}):null,Object(p.jsxs)("div",{className:"listContainer",children:[Object(p.jsx)("div",{className:"movieSearchList",children:o?o.map((function(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"searchContainer",children:[Object(p.jsxs)("a",{href:"https://www.imdb.com/title/".concat(e.imdbID),children:[Object(p.jsx)("h1",{className:"title",children:e.Title}),Object(p.jsx)("img",{className:"poster",src:e.Poster,alt:"movie poster"})]}),Object(p.jsx)("div",{className:"addButtonContainer",children:Object(p.jsx)("button",{className:"addButton",disabled:g(e),onClick:function(){return function(e){f([].concat(Object(r.a)(v),[e]))}(e)},children:"Nominate"})})]})})})):Object(p.jsx)("div",{})}),Object(p.jsx)("div",{className:"nominationList",children:v?Object(p.jsx)("h1",{children:"test"})&&v.map((function(e,t){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"nominationContainer",children:[Object(p.jsxs)("a",{href:"https://www.imdb.com/title/".concat(e.imdbID),children:[Object(p.jsx)(O.a,{className:"trophyIcon"}),Object(p.jsx)("h1",{className:"title",children:e.Title}),Object(p.jsxs)("h2",{className:"releaseDate",children:[" Released: ",e.Year]})]}),Object(p.jsx)("div",{className:"removeButtonContainer",children:Object(p.jsx)("button",{className:"removeButton",onClick:function(){return function(e,t){var c=Object(r.a)(v);-1!==t&&(c.splice(t,1),f(c))}()},children:"Remove"})})]})})})):Object(p.jsx)("div",{})})]})]})};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.d99726db.chunk.js.map