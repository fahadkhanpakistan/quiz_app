(this.webpackJsonpquiz_app_techstirr=this.webpackJsonpquiz_app_techstirr||[]).push([[0],{130:function(e,t,c){},220:function(e,t,c){},221:function(e,t,c){},222:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(14),r=c.n(a),o=(c(130),c(38)),i=c(108),l=c.n(i),u=c(10),d=s.a.createContext(),j=s.a.createContext(),b=s.a.createContext(),x=s.a.createContext(),O=s.a.createContext(),h=function(e){var t=e.children,c=Object(n.useState)(null),s=Object(o.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)(!0),h=Object(o.a)(i,2),f=h[0],p=h[1],v=Object(n.useState)(0),m=Object(o.a)(v,2),g=m[0],C=m[1],S=Object(n.useState)(0),N=Object(o.a)(S,2),w=N[0],y=N[1],q=Object(n.useState)(!1),P=Object(o.a)(q,2),T=P[0],k=P[1];return Object(n.useEffect)((function(){l.a.get("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple").then((function(e){p(!1),r(e.data.results)})).catch((function(e){return console.log("SOME WENT WRONG!",e)}))}),[]),Object(u.jsx)(d.Provider,{value:{quizQuestions:a,setQuestions:r},children:Object(u.jsx)(j.Provider,{value:f,children:Object(u.jsx)(b.Provider,{value:{score:g,setScore:C},children:Object(u.jsx)(x.Provider,{value:{currentIndex:w,setCurrentIndex:y},children:Object(u.jsx)(O.Provider,{value:{viewScore:T,setViewScore:k},children:t})})})})})},f=c(53),p=c(120),v=c(228),m=c(229),g=c(226),C=c(225),S=c(52),N=c(227),w=c(77),y=c(230),q=c(87),P=c.n(q),T=function(){var e,t,c=s.a.useContext(d),a=c.quizQuestions,r=(c.setQuizQuestions,s.a.useContext(x)),i=r.currentIndex,l=r.setCurrentIndex,j=s.a.useContext(b),h=j.score,f=j.setScore,q=s.a.useContext(O),T=q.viewScore,k=q.setViewScore,z=Object(n.useState)(!0),I=Object(o.a)(z,2),_=(I[0],I[1]);a&&(e=[].concat(Object(p.a)(a[i].incorrect_answers),[a[i].correct_answer]));return a&&(t=function(e){for(var t,c=e.length;0!==c;){t=Math.floor(Math.random()*c),c--;var n=[e[t],e[c]];e[c]=n[0],e[t]=n[1]}return e}(e)),Object(u.jsxs)(v.a,{className:"question-container",justify:"center",children:[a&&Object(u.jsxs)(m.a,{lg:{span:24,offset:0},md:{span:24,offset:0},xs:{span:24,offset:0},sm:{span:24,offset:0},className:"col",children:[Object(u.jsxs)(g.a.Title,{level:2,className:"question-info",children:["Question ",i+1,"/",a.length]}),Object(u.jsx)(g.a.Title,{level:3,className:"question",children:P.a.decode(a[i].question)}),Object(u.jsx)(C.a,{style:{backgroundColor:"#ddd"}}),Object(u.jsx)("div",{className:"option-container",children:t.map((function(e,t){return Object(u.jsx)(S.a,{type:"primary",className:"option",shape:"round",block:!0,size:"large",onClick:function(){return function(e){(i>0||0===i)&&i<a.length-1&&(l(i+1),e===a[i].correct_answer&&f(h+1)),i===a.length-1&&k(!0)}(e)},ellipsis:!0,children:P.a.decode(e)},t)}))})]}),Object(u.jsx)(N.a,{visible:T,closeIcon:Object(u.jsx)(w.a,{style:{color:"#ddd"}}),footer:!1,onCancel:function(){k(!1),_(!1),window.location.reload(!1)},bodyStyle:{backgroundColor:"#333"},centered:!0,width:"600px",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)(g.a.Title,{level:3,children:["You Have Scored"," ",Object(u.jsx)(g.a.Text,{strong:!0,className:"score-rate",children:h})," ","Out Of"," ",Object(u.jsx)(g.a.Text,{strong:!0,className:"score-rate",children:"10"})," "]}),Object(u.jsx)(S.a,{type:"primary",icon:Object(u.jsx)(y.a,{}),onClick:function(){return window.location.reload(!1)},children:"Play Again"})]})})]})};var k=function(){var e=s.a.useContext(j);return Object(u.jsx)("div",{className:"app",children:e?Object(u.jsx)("div",{className:"loading",children:Object(u.jsx)(f.a,{className:"loading-icon"})}):Object(u.jsx)("div",{className:"quiz-card",children:Object(u.jsx)(T,{})})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,231)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};c(219),c(220),c(221);r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(h,{children:Object(u.jsx)(k,{})})}),document.getElementById("root")),z()}},[[222,1,2]]]);
//# sourceMappingURL=main.8b52f964.chunk.js.map