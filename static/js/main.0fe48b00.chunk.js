(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{26:function(e,t,n){},46:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(17),i=n.n(s),o=(n(26),n(8)),r=n(7),l=n.n(r),j=n(18),d=n(5),h=n(19),m=n.n(h),u=(n(46),n(20)),b=n.n(u),O=n(21),v=n(0);var x=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(d.a)(s,2),r=i[0],h=i[1],u=Object(c.useState)(""),x=Object(d.a)(u,2),p=x[0],f=x[1],N=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://www.omdbapi.com/?apikey=9ded3126&s=".concat(t));case 2:n=e.sent,c=n.data.Search,h(c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=b.a.debounce((function(e){return N(e)}),500),g=function(e){alert("".concat(e.Title," has been added to your nomination list")),function(e){f([].concat(Object(o.a)(p),[e]))}(e)},y=function(e,t){alert("".concat(e.Title," has been removed from your nomination list")),function(e){var t=Object(o.a)(p);-1!==e&&(t.splice(e,1),f(t))}(t)},C=function(e){return p.includes(e)||p.length>=5},S=p.length;return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsxs)("div",{className:"headingContainer",children:[Object(v.jsx)("h1",{className:"heading",children:"The Shoppies"}),Object(v.jsxs)("div",{className:"headingSubContainer",children:[Object(v.jsx)("input",{className:"search",placeholder:"Please enter a movie title...",type:"search",value:n,onChange:function(e){a(e.target.value),w(e.target.value)}}),Object(v.jsxs)("p",{className:"nominateCount",children:["Nominations: ",S," / 5"]})]})]}),r?Object(v.jsxs)("p",{children:["Results for: ",Object(v.jsxs)("b",{children:['"',n,'"']})]}):Object(v.jsx)("div",{}),p.length>4?Object(v.jsx)("div",{className:"limitNotification",children:Object(v.jsxs)("p",{className:"limit",children:[void alert("Wohoo you have reached your 5 nominations. If you wish to add anymore you will have to remove a nomination!"),"Limit of 5 reached. Please remove one choice if you wish to choose another"]})}):null,Object(v.jsxs)("div",{className:"listContainer",children:[Object(v.jsx)("div",{className:"movieSearchList",children:r?r.map((function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"searchContainer",children:[Object(v.jsxs)("a",{href:"https://www.imdb.com/title/".concat(e.imdbID),children:[Object(v.jsx)("h1",{className:"title",children:e.Title}),Object(v.jsxs)("h2",{className:"releaseDate",children:[" Released: ",e.Year]}),Object(v.jsx)("div",{className:"poster",children:Object(v.jsx)("img",{src:e.Poster,alt:"movie poster"})})]}),Object(v.jsx)("div",{className:"addButtonContainer",children:Object(v.jsx)("button",{className:"addButton",disabled:C(e),onClick:function(){return g(e)},children:"Nominate"})})]})})})):Object(v.jsx)("div",{})}),Object(v.jsx)("div",{className:"nominationList",children:p?Object(v.jsx)("h1",{children:"test"})&&p.map((function(e,t){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"nominationContainer",children:[Object(v.jsxs)("a",{href:"https://www.imdb.com/title/".concat(e.imdbID),children:[Object(v.jsx)(O.a,{className:"trophyIcon"}),Object(v.jsx)("h1",{className:"title",children:e.Title})]}),Object(v.jsx)("div",{className:"removeButtonContainer",children:Object(v.jsx)("button",{className:"removeButton",onClick:function(){return y(e,t)},children:"Remove"})})]})})})):Object(v.jsx)("div",{})})]})]})};i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(x,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.0fe48b00.chunk.js.map