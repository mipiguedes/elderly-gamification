import{j as Q,r as t,H as w,a as u,B as le,R as de,b as I,c as ge,d as me}from"./vendor.05f70a2d.js";const ue=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}};ue();const e=Q.exports.jsx,l=Q.exports.jsxs,x=Q.exports.Fragment,he=t("div",{backgroundColor:"#D8EFFF",width:"100%",height:"100%",maxWidth:"640px",maxHeight:"100%",fontSize:"14px",position:"relative",overflow:"hidden",length:0,"@media screen and (min-width: 1024px) ":{maxWidth:"1280px",maxHeight:"100%",fontSize:"24px"}}),R=({children:a})=>e(he,{children:a}),pe=t("h1",{fontSize:"1.125em",color:"#D8EFFF",margin:"0"});function P({text:a}){return e(pe,{children:a})}const O=({step:a,totalSteps:o})=>{const s=a*100/o<=100?a*100/o:100,c=t("div",{height:"0.75em",width:"100%",backgroundColor:"#F0F9FF",borderRadius:50,margin:"0.5em"}),r=t("div",{transition:"width 1s ease-in-out",height:"100%",width:`${s}%`,backgroundColor:"#56A486",borderRadius:"inherit",textAlign:"right"}),i=t("span",{padding:5,color:"white",fontWeight:"bold"}),d=s?Number(s):void 0;return e(c,{children:e(r,{"aria-live":"polite",role:"progressbar","aria-valuenow":d,"aria-valuemin":"0","aria-valuemax":"100",children:e(i,{})})})},Ae=t("div",{margin:"1.5em",padding:"1em",backgroundColor:"#FFFFFF",borderRadius:"10px",height:"fit-content",overflowY:"auto",maxHeight:"55vh"}),be=t("div",{display:"flex",alignItems:"center",marginBottom:"1em"}),fe=t("div",{fontSize:"1em",color:"#13274A",p:{lineHeight:1.5}}),xe=t("img",{maxWidth:"4.375em",maxHeight:"4.375em",border:"3px solid #939393",borderRadius:"50%",boxSizing:"border-box",objectFit:"cover",objectPosition:100%0,marginRight:"0.75em"}),Ce=t("h2",{fontSize:"0.9em",fontWeight:500,color:"#13274A",margin:0,lineHeight:1.3});function Te({title:a,content:o,imageUrl:s,imageAlt:c}){return l(Ae,{children:[l(be,{children:[e(xe,{src:`${s}`,alt:`${c}`}),e(Ce,{children:w(a)})]}),e(fe,{children:w(o)})]})}const Je=t("div",{width:"100%",display:"flex",justifyContent:"space-around"}),M=t("button",{backgroundColor:"#FFFFFF",border:0,borderRadius:10,margin:"1em 1.5em",padding:"0.5em",cursor:"pointer",width:"fit-content",height:"fit-content"}),G=t("img",{width:"30%",height:"30%",objectFit:"contain"});function Se({title:a,content:o,imageUrl:s,imageAlt:c,buttonPreviousOnClick:r,imageButtonPrevious:i,buttonNextOnClick:d,imageButtonNext:g}){return l(x,{children:[e(Te,{title:a,content:o,imageUrl:s,imageAlt:c}),l(Je,{children:[e(M,{onClick:r,children:e(G,{src:i,alt:"Seta Voltar"})}),e(M,{onClick:d,children:e(G,{src:g,alt:"Seta Prosseguir"})})]})]})}const Be=t("div",{margin:"1.5em",padding:"0.65em",backgroundColor:"#FFFFFF",borderRadius:"10px",height:"fit-content",overflowY:"auto",maxHeight:"55vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),we=t("img",{maxWidth:"6.25em",maxHeight:"6.25em",border:"3px solid #939393",borderRadius:"50%",boxSizing:"border-box",objectFit:"cover",objectPosition:100%0}),Ee=t("h2",{fontSize:"1em",fontWeight:500,color:"#13274A",margin:"1em",lineHeight:1.3,textAlign:"center"});function y({image:a,imageAlt:o,text:s}){return l(Be,{children:[e(we,{src:a,alt:o}),e(Ee,{children:w(s)})]})}function B({text:a,backgroundColor:o,width:s,onClick:c}){const r=t("button",{width:`${s}`,padding:"0.75em",background:`${o}`,borderRadius:10,border:0,cursor:"pointer",fontSize:"1.125em",fontWeight:800,color:"#D8EFFF"});return e(r,{onClick:c,children:a})}const Fe=t("div",{margin:" 0.5em 1.5em",padding:"0.65em",backgroundColor:"#FFFFFF",borderRadius:"10px",height:"fit-content",overflowY:"auto",maxHeight:"200px",display:"flex",alignItems:"center"}),ke=t("img",{maxWidth:"4.375em",maxHeight:"4.375em",border:"3px solid #939393",borderRadius:"50%",boxSizing:"border-box",objectFit:"cover",objectPosition:100%0,marginRight:"1em"}),ve=t("h2",{fontSize:"1em",fontWeight:500,color:"#13274A",margin:0,lineHeight:1.3});function Ie({question:a,image:o,imageAlt:s}){return e(x,{children:l(Fe,{children:[e(ke,{src:o,alt:s}),e(ve,{children:a})]})})}const ye=t("div",{display:"flex",flexDirection:"column"}),Qe=t("button",{fontSize:"1.125em",fontWeight:500,color:"#13274A",lineHeight:1.3,margin:"0.5em 1.5em",padding:"0.45em",backgroundColor:"#FFFFFF",borderRadius:"10px",minHeight:"53px",overflowY:"auto",maxHeight:"200px",cursor:"pointer",transition:"all .0.4s",border:"3px solid #FFFFFF","&:hover":{backgroundColor:"#ECECEC",border:"3px solid #13274A"},variants:{type:{button:{backgroundColor:"#ECECEC",border:"3px solid #13274A"}}}});function Re({question:a,image:o,imageAlt:s,anwserOptions:c,handleSelectedOption:r,selectedOption:i}){return l(x,{children:[e(Ie,{question:a,image:o,imageAlt:s}),e(ye,{role:"radio",children:c.map((d,g)=>e(Qe,{type:i===g?"button":void 0,onClick:()=>r(g),role:"radio","aria-checked":i===g?"true":"false",children:d.answerText}))})]})}var h=[{question:"Quais s\xE3o os riscos de n\xE3o ter uma boa senha?",answerOptions:[{answerText:"Roubo de mensagens, fotos e demais informa\xE7\xF5es pessoais",isCorrect:!0},{answerText:"Se passar por mim para cometer crimes digitais",isCorrect:!0},{answerText:"Nenhum, n\xE3o tenho nada a esconder, sou um livro aberto!",isCorrect:!1}],image:"duvida.png",imageAlt:"idosa com duvida",feedbacks:{feedbackRight:"<p><b>Par\xE1bens voc\xEA acertou!</b></p><p>Continue para a pr\xF3xima pergunta</p>",imageFeedbackRight:"festejando.png",feedbackWrong:"<p><b>Hum... resposta incorreta, tente novamente!</b></p><p>Voc\xEA est\xE1 quase l\xE1, fa\xE7a mais uma tentativa</p>",imageFeedbackWrong:"mao-na-boca.png"}},{question:"Quais dessas senhas \xE9 considerada segura?",answerOptions:[{answerText:"senha!1234",isCorrect:!1},{answerText:"02101952Abc",isCorrect:!1},{answerText:"%Minha-Senha!6941",isCorrect:!0}],image:"duvida.png",imageAlt:"idosa com duvida",feedbacks:{feedbackRight:"<p><b>Par\xE1bens voc\xEA acertou!</b></p><p>Continue para a pr\xF3xima pergunta</p>",imageFeedbackRight:"festejando.png",feedbackWrong:"<p><b>Hum... resposta incorreta, tente novamente!</b></p><p>Voc\xEA est\xE1 quase l\xE1, fa\xE7a mais uma tentativa</p>",imageFeedbackWrong:"mao-na-boca.png"}},{question:"Quando for criar uma senha \xE9 recomendado utilizar: ",answerOptions:[{answerText:"sequ\xEAncia de n\xFAmeros (01234)",isCorrect:!1},{answerText:"letra mai\xFAscula, letra min\xFAscula, n\xFAmero e caracteres especiais",isCorrect:!0},{answerText:"sequ\xEAncia de letras e n\xFAmeros",isCorrect:!1}],image:"duvida.png",imageAlt:"idosa com duvida",feedbacks:{feedbackRight:"<p><b>Par\xE1bens voc\xEA acertou!</b></p><p>Voc\xEA acertou a recomenda\xE7\xE3o da senha segura!</p><p>Evite senhas f\xE1ceis, como 12345, ABCDEF, data de nascimento ou nome do filho, do neto ou datas de casamento, aquelas mesmas que geralmente voc\xEA comemora nas redes sociais.</p>",imageFeedbackRight:"festejando.png",feedbackWrong:"<p><b>Opa, resposta incorreta...</b></p><p>Esta n\xE3o \xE9 uma recomenda\xE7\xE3o correta</p><p>Evite senhas f\xE1ceis, como 12345, ABCDEF, data de nascimento ou nome do filho, ou datas de casamento, aquelas mesmas que geralmente voc\xEA comemora nas redes sociais.</p><p>Tente Novamente</p>",imageFeedbackWrong:"mao-na-boca.png"}}];const De=t("div",{overflowY:"auto",maxHeight:"calc(100% - 100px)",length:0}),He=t("div",{margin:"1.5em",display:"flex",justifyContent:"center"});function je({currentFeedback:a,currentQuestion:o,selectedOption:s,currentSection:c,questionResult:r,anwserOptions:i,progressBarValue:d,handleSelectedOption:g,handleButtonContinue:C,buttonContinueText:T}){var p,J,b;const A=()=>{window.location.href="/elderly-gamification/medalhas",localStorage.setItem("currentSection","content"),localStorage.setItem("currentContent","0"),localStorage.setItem("progressBarValue","0"),localStorage.setItem("currentQuestion","0")};return console.log("currentFeedback",a),l(De,{children:[c==="question"&&e(x,{children:e(Re,{question:h[o].question,image:`${h[o].image}`,imageAlt:h[o].imageAlt,handleSelectedOption:g,anwserOptions:i,selectedOption:s})}),c==="feedback"&&e(y,{image:`${r===!0?(p=h[a].feedbacks)==null?void 0:p.imageFeedbackRight:h[a].feedbacks.imageFeedbackWrong}`,imageAlt:h[o].imageAlt,text:r===!0?(J=h[a].feedbacks)==null?void 0:J.feedbackRight:(b=h[a].feedbacks)==null?void 0:b.feedbackWrong}),e(He,{children:e(B,{backgroundColor:"linear-gradient(271.96deg, #125BDE -6.04%, #1255CE -6.02%, #13274A 110.71%);",width:"100%",onClick:d===h.length?A:C,text:T})})]})}var f=[{title:"Voc\xEA sabia que \xE9 necess\xE1rio tomar alguns cuidados com o que voc\xEA faz na Internet?",text:"<p>Esse ambiente repleto de informa\xE7\xF5es e oportunidades tamb\xE9m oferece alguns riscos.</p><p>Uma das formas de se proteger na internet \xE9 escolhendo <b>boas senhas</b> para suas contas online.</p><p><b>Vamos conversar sobre boas senhas?</b></p>",image:"com-medo.png",imageAlt:"senhora sorridente"},{title:"",text:"<p>A senha n\xE3o \xE9 importante apenas para restringir acessos. O objetivo da senha \xE9 proteger o usu\xE1rio durante o uso de um servi\xE7o, por isso dizemos que ela \xE9 <b>pessoal</b> e <b>intransfer\xEDvel</b>.</p><p><b>\xC9 necess\xE1rio conhecer quais s\xE3o os riscos de n\xE3o ter boas senhas</b></p>",image:"silencio.png",imageAlt:"senhora fazendo sinal de sil\xEAncio"},{title:"Se voc\xEA n\xE3o possui boas senhas sua seguran\xE7a est\xE1 em jogo!",text:"<p>Os riscos de n\xE3o ter boas senhas s\xE3o:</p><ul><li>Roubo de mensagens, fotos e demais informa\xE7\xF5es pessoais;</li><li>Se passar por voc\xEA para cometer crimes digitais.</li></ul><p><b>Mas afinal, o que \xE9 ter boas senhas?</b></p>",image:"surpresa-mao-no-rosto.png",imageAlt:"senhora surpresa"},{title:"As boas senhas s\xE3o aquelas que s\xE3o indecifr\xE1vel!",text:"<p>Existem malandros por a\xED que sabem que pessoas usam senhas f\xE1ceis, como <b>12345, ABCDEF, data de nascimento</b> ou <b>nome do filho</b>.</p><p>Por isso <b>evite</b> esse tipo de senha.</p><p><b>Agora confira alguns recomenda\xE7\xF5es para cria\xE7\xE3o de senhas seguras</b></p>",image:"joinha.png",imageAlt:"senhora sorrindo"},{title:"Recomenda\xE7\xF5es para cria\xE7\xE3o de senhas seguras",text:"<p>Para a maior seguran\xE7a, utilize senhas com letra <b>mai\xFAscula</b>, letra <b>min\xFAscula</b>, <b>n\xFAmero e caracteres especiais (%, $, *, ...).</b></p><p><b>Muito bem! Espero que tenha gostado do que eu tinha \xE0 lhe falar.</b></p>",image:"no-pc.png",imageAlt:"senhora mexendo no computador"}],qe="data:image/png;base64,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",Ne="data:image/png;base64,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";const Ye=t("div",{backgroundColor:"#060D18",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}),Me=t("header",{backgroundColor:"#13274A",padding:"0.5em 2em",height:"fit-content",minHeight:"6,25em",borderRadius:"0 0 40px 40px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),Ge=t("button",{width:"fit-content",padding:"0.35em 1.5em",background:"#125BDE",borderRadius:10,border:0,cursor:"pointer",fontSize:"1em",fontWeight:800,color:"#D8EFFF",length:0}),Ke=t("div",{width:"100%",height:"fit-content",display:"flex",justifyContent:"space-between",padding:"0.5rem 0"}),K=t("div",{margin:"1.5em",display:"flex",justifyContent:"space-between"});function Ve(){const[a,o]=u.exports.useState(!1),[s,c]=u.exports.useState(!1),[r,i]=u.exports.useState(!1),[d,g]=u.exports.useState(!1),[C,T]=u.exports.useState("question"),[A,p]=u.exports.useState(0),[J,b]=u.exports.useState(0),[S,v]=u.exports.useState(0),[D,U]=u.exports.useState(0),[E,H]=u.exports.useState(0),[j,z]=u.exports.useState(0),[q,W]=u.exports.useState(!1);u.exports.useEffect(()=>{const n=localStorage.getItem("currentSection");n?(n==="content"&&(o(!0),b(f.length)),n==="question"&&(c(!0),b(h.length))):(localStorage.setItem("currentSection","content"),o(!0),b(f.length))}),u.exports.useEffect(()=>{const n=Number(localStorage.getItem("currentContent")),F=Number(localStorage.getItem("currentQuestion")),Y=Number(localStorage.getItem("progressBarValue"));n&&v(n),F&&H(F),Y&&p(Y)});const m=(n,F)=>{localStorage.setItem(n,F)},L=()=>{if(T("question"),q){const n=D+1;n<h.length&&U(n)}},Z=()=>{T("feedback");const n=E+1;X()&&(n<h.length&&(H(n),m("currentQuestion",String(n))),N())},X=()=>{const n=h[E].answerOptions[j].isCorrect;return W(n),n},$=()=>{const n=S+1;n>=f.length?(i(!0),o(!1),m("currentSection","intermediary")):(v(n),m("currentContent",String(n))),N()},_=()=>{const n=S-1;v(n),m("currentContent",String(n)),ae()},ee=()=>{m("currentSection","question"),i(!1),c(!0),p(0),m("progressBarValue",String(0))},te=()=>{m("currentContent","0"),m("progressBarValue","0"),m("currentSection","content"),m("currentQuestion","0"),window.location.href="/"},oe=()=>{const n=localStorage.getItem("currentSection");n==="content"&&(m("currentSection","content"),console.log("aqui"),g(!1),o(!0)),n==="question"&&(m("currentSection","question"),g(!1),c(!0))},ne=()=>{g(!1),o(!1),c(!1),g(!0)},N=()=>{const n=A+1;p(n),m("progressBarValue",String(n))},ae=()=>{const n=A-1;p(n),m("progressBarValue",String(n))},re=()=>{C==="feedback"?L():Z()},ie=a&&d===!1,se=s&&d===!1,ce=r&&d===!1;return e(Ye,{children:l(R,{children:[l(Me,{children:[l(Ke,{children:[e("div",{}),d===!1&&e(Ge,{onClick:ne,children:"sair"})]}),e(P,{text:"senhas seguras na internet"}),d===!1&&e(O,{step:A,totalSteps:J})]}),ie&&e(x,{children:e(Se,{title:f[S].title,content:f[S].text,imageUrl:`${f[S].image}`,imageAlt:f[S].imageAlt,buttonPreviousOnClick:_,buttonNextOnClick:$,imageButtonPrevious:Ne,imageButtonNext:qe})}),ce&&l(x,{children:[e(y,{image:"dedos-cruzados.png",imageAlt:"idosa com dedos cruzados sorrindo",text:"<p><b>Voc\xEA topa colocar esse conte\xFAdo em pr\xE1tica?</b></p><p>Estou torcendo por voc\xEA!</p>"}),e(K,{children:e(B,{text:"Vamos l\xE1",backgroundColor:"linear-gradient(271.96deg, #125BDE -6.04%, #1255CE -6.02%, #13274A 110.71%);",width:"100%",onClick:ee})})]}),se&&e(je,{currentFeedback:D,currentQuestion:E,selectedOption:j,currentSection:C,questionResult:q,anwserOptions:h[E].answerOptions,progressBarValue:A,handleSelectedOption:z,handleButtonContinue:re,buttonContinueText:"Continuar"}),d&&l(x,{children:[e(y,{imageAlt:"idosa com express\xE3o de surpresa",image:"mao-na-boca.png",text:"<p><b>Voc\xEA saiu...</b></p><p>Deseja retornar ao jogo?</p>"}),l(K,{children:[e(B,{text:"Retornar",backgroundColor:"linear-gradient(271.96deg, #125BDE -6.04%, #1255CE -6.02%, #13274A 110.71%);",width:"49%",onClick:oe}),e(B,{text:"Sair",backgroundColor:"#E64E3D",width:"49%",onClick:te})]})]})]})})}const Pe=t("div",{backgroundColor:"#060D18",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",length:0}),Oe=t("div",{backgroundColor:"#13274A",borderRadius:"40px",width:"100%",minHeight:"45%",length:0,marginTop:"-40px",position:"relative",overflow:"hidden"}),Ue=t("div",{padding:"1em 3em",display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"#FFFFFF",borderRadius:"10px",margin:"1.5em"}),ze=t("img",{position:"absolute",bottom:"-10px",left:"10px",length:0,maxWidth:"80%"}),We=t("h2",{fontSize:"1.15em",fontWeight:700,color:"#13274A",margin:"1em 0",lineHeight:1.3,textAlign:"left"}),Le=t("p",{fontSize:"1.05em",fontWeight:500,color:"#13274A",margin:"0.5em 0",lineHeight:1.3,textAlign:"left"}),V=t("p",{fontSize:"1.05em",fontWeight:500,color:"#13274A",lineHeight:1.3,textAlign:"left",margin:"0.5em 0 1em 0"}),Ze=t("div",{margin:"1.5em"}),k=(a,o)=>{localStorage.setItem(a,o)},Xe=()=>{k("currentContent","0"),k("progressBarValue","0"),k("currentSection","content"),k("currentQuestion","0")},$e=()=>{Xe(),window.location.href="/elderly-gamification/jogar"},_e=()=>e(Pe,{children:l(R,{children:[e(Oe,{children:e(ze,{src:"acenando.png",alt:"imagem idosa acenando"})}),l(Ue,{children:[e(We,{children:"Seja bem-vindo(a)!"}),e(Le,{children:"\xC9 um prazer ter voc\xEA aqui!"}),e(V,{children:"N\xE3o precisa ser dif\xEDcil se manter seguro (a) na internet, vou te ensinar!"}),e(V,{children:"Vamos come\xE7ar ent\xE3o?"})]}),e(Ze,{children:e(B,{text:"Come\xE7ar",backgroundColor:"linear-gradient(271.96deg, #125BDE -6.04%, #1255CE -6.02%, #13274A 110.71%)",width:"100%",onClick:$e})})]})});function et({title:a,text:o,image:s,imageAlt:c,imageMedal:r,backgroundColor:i}){const d=t("div",{margin:"1.5em",padding:"0.65em",backgroundColor:"#FFFFFF",borderRadius:"10px",height:"fit-content",display:"flex",flexDirection:"column",justifyContent:"center"}),g=t("div",{p:{margin:"0.45em 0"}}),C=t("div",{overflowY:"auto",maxHeight:"calc(100% - 100px)"}),T=t("div",{margin:"1.5em",padding:"0.65em",backgroundColor:"#E0FFCC",border:"3px solid #56A486",borderRadius:"10px",height:"fit-content",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}),A=t("div",{display:"flex",alignItems:"center"}),p=t("img",{maxWidth:"6.25em",maxHeight:"6.25em",border:"3px solid #939393",borderRadius:"50%",boxSizing:"border-box",objectFit:"cover",objectPosition:100%0}),J=t("img",{maxWidth:"12.5em",maxHeight:"12.5em",objectFit:"cover"}),b=t("h2",{fontSize:"1em",fontWeight:500,color:"#13274A",margin:"1em",lineHeight:1.3,textAlign:"center"});return l(C,{children:[l(d,{children:[l(A,{children:[e(p,{src:s,alt:c}),e(b,{children:w(a)})]}),e(g,{children:w(o)})]}),e(T,{children:e(J,{src:r,alt:"medalha aspirante em seguran\xE7a de senhas na internet"})})]})}const tt=t("header",{backgroundColor:"#13274A",padding:"0.5rem",height:"fit-content",minHeight:"70px",borderRadius:"0 0 40px 40px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),ot=t("div",{height:"fit-content",display:"flex",justifyContent:"space-between"}),nt=({title:a,step:o,totalSteps:s,isExitSectionActive:c=!0,isProgressBarSection:r=!1,onClickButtonExit:i})=>l(tt,{children:[e(ot,{children:c===!1&&e(B,{text:"sair",width:"fit-content",onClick:i,backgroundColor:"#125BDE"})}),e(P,{text:a}),r&&e(O,{step:o,totalSteps:s})]}),at=t("div",{backgroundColor:"#060D18",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}),rt=()=>e(at,{children:l(R,{children:[e(nt,{title:"suas conquistas",isProgressBarSection:!1}),e(et,{title:"Voc\xEA completou o seu aprendizado sobre senhas",text:"<p>Agora voc\xEA sabe como manter suas senhas seguras na internet!</p><p>Acredite, t\xE3o importante quanto n\xE3o compartilhar sua senha com terceiros \xE9 criar senhas bem dif\xEDceis de serem desvendadas.</p><p>Essa \xE9 sua <b>medalha</b> por sua conquista!</p>",image:"festejando.png",imageAlt:"idosa festejando",imageMedal:"emblema.png"})]})}),it=()=>e(le,{children:l(de,{children:[e(I,{path:"/elderly-gamification/",element:e(_e,{})}),e(I,{path:"/elderly-gamification/jogar",element:e(Ve,{})}),e(I,{path:"/elderly-gamification/medalhas",element:e(rt,{})})]})});function st(){return e(it,{})}ge.render(e(me.StrictMode,{children:e(st,{})}),document.getElementById("root"));
