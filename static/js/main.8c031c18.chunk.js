(this.webpackJsonpjoker=this.webpackJsonpjoker||[]).push([[0],{35:function(n,e,t){},63:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"fetchJoke",(function(){return h}));t(0);var o,a=t(7),i=t.n(a),c=(t(35),t(3)),d=t(5),s=t(6),p=t(12),u=t.n(p),l=t(25),b=t(26),f=t.n(b);!function(n){n.FETCH_JOKE="FETCH_JOKE",n.FETCH_JOKE_SUCCESS="FETCH_JOKE_SUCCESS",n.FETCH_JOKE_ERROR="FETCH_JOKE_ERROR"}(o||(o={}));var j,x,E,h=function(){return function(){var n=Object(l.a)(u.a.mark((function n(e){var t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:o.FETCH_JOKE}),n.next=4,f.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 4:t=n.sent,setTimeout((function(){return e({type:o.FETCH_JOKE_SUCCESS,payload:t.data.joke})}),700),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),e({type:o.FETCH_JOKE_ERROR,payload:"Can`t remember a joke :("});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},O=Object(s.a)({},r),k=t(8),m=t(9),v=m.a.div(j||(j=Object(k.a)(["\nbackground-color: #1e990e;\nwidth: 80vw;\nheight: 80vh;\ntext-align: center;\nborder-radius: 30px;\nborder: 2px solid #fff;\nposition: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\nword-wrap: break-word;\n"],["\nbackground-color: #1e990e;\nwidth: 80vw;\nheight: 80vh;\ntext-align: center;\nborder-radius: 30px;\nborder: 2px solid #fff;\nposition: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\nword-wrap:\\ break-word;\n"]))),C=m.a.div(x||(x=Object(k.a)(["\nfont-size: 42px;\nmargin-top: 150px;\n@media(max-width:800px){\n    margin-top: 50px;\n};\n@media(max-width:400px){\n    font-size:32px;\n}\n"]))),g=m.a.div(E||(E=Object(k.a)(["\nwidth: 30vw;\nheight: 50px;\nbackground-color: #99170e;\nborder-radius: 20px;\nposition: fixed;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nposition: absolute;\nleft: 50%;\nbottom: 20%;\ntransform: translate(-50%, 0);\nfont-size: 25px;\nborder: 2px solid #fff;\n&:hover{\n  cursor: pointer;\n  background-color: #b50c05;\n  box-shadow: 10px 5px 5px black;\n  transition: .3s linear;\n}\n@media (max-width: 800px) {\n    bottom: 10%;\n}\n"]))),w=t(2),_=function(n){var e=n.data,t=function(){var n=Object(c.b)();return Object(d.b)(O,n)}().fetchJoke;return Object(w.jsxs)(v,{children:[Object(w.jsx)(C,{children:e}),Object(w.jsx)(g,{onClick:function(){return t()},children:"GET A JOKE"})]})},J=c.c;var T=function(){var n=J((function(n){return n})),e=n.joke,t=n.error;return n.loading?Object(w.jsx)(_,{data:"Remember a joke..."}):t?Object(w.jsx)(_,{data:"Can`t remember a joke :("}):Object(w.jsx)(_,{data:e})},K=t(30),R={joke:"Want a joke?)",error:null,loading:!1},y=Object(d.c)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o.FETCH_JOKE:return{joke:"",error:null,loading:!0};case o.FETCH_JOKE_SUCCESS:return{joke:e.payload,error:null,loading:!1};case o.FETCH_JOKE_ERROR:return{joke:"",error:e.payload,loading:!1};default:return n}}),Object(d.a)(K.a));i.a.render(Object(w.jsx)(c.a,{store:y,children:Object(w.jsx)(T,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.8c031c18.chunk.js.map