import{d as e,k as t,p as l,b as a,o as s,c as o,a as n,t as i,l as c,v as p,w as r,m as d,n as u,q as m,r as g,g as v,f as b,F as y,s as w}from"./vendor.52301a49.js";import{_ as k}from"./index.e945b648.js";const x=e({name:"InputBlock",props:["step","title","sub","formData"],setup:(e,{emit:l})=>({syncForm:t({get:()=>e.formData,set:e=>l("update:templateData",e)}),openExample:()=>{l("openExample")}})}),f=r();l("data-v-007b30ed");const E={class:"mt-10"},D={class:"title-container"},h={class:"title"},C={class:"sub"};a();const T=f(((e,t,l,a,r,d)=>(s(),o("div",E,[n("section",D,[n("div",null,[n("p",h,[n("strong",null,"STEP "+i(e.step)+". "+i(e.title),1)]),n("p",C,[n("strong",null,i(e.sub),1)])]),n("button",{class:"hint-btn",onClick:t[1]||(t[1]=(...t)=>e.openExample&&e.openExample(...t))},"看範例")]),n("section",null,[c(n("textarea",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.syncForm[`step${e.step}`]=t),placeholder:"請輸入文字..."},null,512),[[p,e.syncForm[`step${e.step}`]]])])]))));x.render=T,x.__scopeId="data-v-007b30ed";const P=e({name:"ExampleDialog",props:["step","titles"],setup:(e,{emit:t})=>({closeDialog:e=>{"dialog-wrapper"===e.target.classList[0]&&t("close")}})}),_=r();l("data-v-7467f7e0");const A={class:"dialog"},I=n("p",{class:"text-xl mb-3 text-teal-400"},"Example 範例",-1),N={key:0},B=n("p",{class:"title"},"期望達到的情況 / 行為 / 目的",-1),O=n("div",{class:"block"}," 我想要讓 Discord Bot 可以正常啟動運行 ",-1),S={key:1},L=n("p",{class:"title"},"實際執行時的情況 / 行為",-1),R=n("div",{class:"block"},"在此資料夾位置打開終端機，並輸入 python bot.py 運行檔案後終端機會報錯: Error [TOKEN_INVALID]: An invalid token was provided.",-1),F={key:2},q=n("p",{class:"title"},"重現步驟 / 過程",-1),K=n("div",{class:"block"},[n("ul",null,[n("li",null,"在桌面建立一個新的資料夾在資料夾裡建立 bot.py 檔"),n("li",null,"打上基本的程式碼 (附上截圖 完整的程式碼)"),n("li",null,"到 Discord Developer 網站登入後，New Application > Create Application"),n("li",null,"選擇剛剛建立的 Application > OAuth2 > CLIENT SECRET > Copy"),n("li",null,"在 bot.py 的 bot.run() 貼上剛剛複製的 TOKEN"),n("li",null,"在此資料夾位置打開終端機，並輸入 python bot.py 運行檔案"),n("li",null,"終端機報錯: : Error [TOKEN_INVALID]: An invalid token was provided. (附上截圖 完整的終端機報錯)")])],-1);a();const V=_(((e,t,l,a,i,c)=>(s(),o("div",{class:"dialog-wrapper",onClick:t[1]||(t[1]=(...t)=>e.closeDialog&&e.closeDialog(...t))},[n("div",A,[I,1===e.step?(s(),o("section",N,[B,O])):d("",!0),2===e.step?(s(),o("section",S,[L,R])):d("",!0),3===e.step?(s(),o("section",F,[q,K])):d("",!0)])]))));P.render=V,P.__scopeId="data-v-7467f7e0";
/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var $=async function(e){try{await async function(e){if(!navigator.clipboard)throw j();return navigator.clipboard.writeText(e)}(e)}catch(t){try{await async function(e){const t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre",t.style.webkitUserSelect="auto",t.style.userSelect="all",document.body.appendChild(t);const l=window.getSelection(),a=window.document.createRange();l.removeAllRanges(),a.selectNode(t),l.addRange(a);let s=!1;try{s=window.document.execCommand("copy")}finally{l.removeAllRanges(),window.document.body.removeChild(t)}if(!s)throw j()}(e)}catch(l){throw l||t||j()}}};function j(){return new DOMException("The request is not allowed","NotAllowedError")}const Q=e({name:"PreviewDialog",props:["data","titles"],components:{TextBlock:k},setup(e,{emit:t}){const l=u(!0);m((()=>{Array.from(document.getElementsByClassName("block")).forEach((e=>{const t=e.scrollHeight;e.style.height=t+"px"}))}));return{closeDialog:e=>{"dialog-wrapper"===e.target.classList[0]&&t("close")},toggle:l,generate:()=>{const t=e.titles;let l="";t.forEach(((t,a)=>{const s=t.title,o=e.data[`step${a+1}`];l+=s+"\n```\n"+o+"\n```\n"})),$(l),alert("已複製到剪貼簿")}}}}),U=r();l("data-v-3f26f201");const G={class:"dialog"},H=v(" 複製後直接至 Discord 貼上即可，截圖請後續自行附上 "),M=n("p",{class:"title"},"期望達到的情況 / 行為 / 目的",-1),z={class:"block",disabled:""},J=n("p",{class:"title"},"實際執行時的情況 / 行為",-1),W={class:"block",disabled:""},X=n("p",{class:"title"},"重現步驟 / 過程",-1),Y={class:"block",disabled:""};a();const Z=U(((e,t,l,a,c,p)=>{const r=g("TextBlock");return s(),o("div",{class:"dialog-wrapper",onClick:t[2]||(t[2]=(...t)=>e.closeDialog&&e.closeDialog(...t))},[n("div",G,[n(r,null,{default:U((()=>[H])),_:1}),n("section",null,[M,n("textarea",z,i(e.data.step1),1)]),n("section",null,[J,n("textarea",W,i(e.data.step2),1)]),n("section",null,[X,n("textarea",Y,i(e.data.step3),1)]),n("button",{class:"primary-btn",onClick:t[1]||(t[1]=(...t)=>e.generate&&e.generate(...t))}," 複製到剪貼簿 ")])])}));Q.render=Z,Q.__scopeId="data-v-3f26f201";var ee=e({name:"QuestionGenerate",components:{InputBlock:x,TextBlock:k,ExampleDialog:P,PreviewDialog:Q},setup(){const e=u(!1),t=u(!1),l=u(1),a=b({step1:"",step2:"",step3:"",step4:""});return{openExample:t,openPreview:e,step:l,prePage:()=>{1!==l.value&&(l.value-=1)},nextPage:()=>{4!==l.value&&(l.value+=1)},preview:()=>{e.value=!0},templateData:a,stepTitle:[{title:"期望達到的情況 / 行為 / 目的",sub:"你最終想實現甚麼樣的功能, 請詳述"},{title:"實際執行時的情況 / 行為",sub:"你最終想實現甚麼樣的功能, 請詳述"},{title:"重現步驟 / 過程",sub:"你實際的操作步驟 / 過程為何"}]}}});const te=r();l("data-v-983f35e6");const le={class:"question-generate"},ae=n("div",{class:"inner-title flex mb-5"},[n("img",{src:"/Question-Template/assets/alert-circle.29342e68.svg",alt:"alert-icon"}),n("p",{class:"ml-3"},[n("strong",null,"圖片與截圖注意事項:")])],-1),se=n("ul",null,[n("li",null,"程式碼截圖請包含行數"),n("li",null,'請截取程式碼完整 "區塊"，而不是單獨某幾行')],-1);a();const oe=te(((e,t,l,a,n,i)=>{const c=g("InputBlock"),p=g("TextBlock"),r=g("ExampleDialog"),u=g("PreviewDialog");return s(),o("div",le,[(s(!0),o(y,null,w(e.stepTitle,((l,a)=>(s(),o(c,{key:l.title,class:{hide:e.step!==a+1},step:e.step,formData:e.templateData,title:l.title,sub:l.sub,onOpenExample:t[1]||(t[1]=t=>e.openExample=!0)},null,8,["class","step","formData","title","sub"])))),128)),4===e.step?(s(),o(p,{key:0},{default:te((()=>[ae,se])),_:1})):d("",!0),e.step>1?(s(),o("button",{key:1,class:"primary-btn w-full mt-3",onClick:t[2]||(t[2]=(...t)=>e.prePage&&e.prePage(...t))}," 上一步 ")):d("",!0),e.step<4?(s(),o("button",{key:2,class:"primary-btn w-full mt-3",onClick:t[3]||(t[3]=(...t)=>e.nextPage&&e.nextPage(...t))}," 下一步 ")):d("",!0),4===e.step?(s(),o("button",{key:3,class:"primary-btn w-full mt-3",onClick:t[4]||(t[4]=(...t)=>e.preview&&e.preview(...t))}," 預覽 ")):d("",!0),e.openExample?(s(),o(r,{key:4,onClose:t[5]||(t[5]=t=>e.openExample=!1),titles:e.stepTitle,step:e.step},null,8,["titles","step"])):d("",!0),e.openPreview?(s(),o(u,{key:5,onClose:t[6]||(t[6]=t=>e.openPreview=!1),data:e.templateData,titles:e.stepTitle},null,8,["data","titles"])):d("",!0)])}));ee.render=oe,ee.__scopeId="data-v-983f35e6";export default ee;