import{g as M,Q as W,n as h,r as w,a as R,b as q,c as A,j as t,d as D,e as G,R as f,f as H,N as Q}from"./index-4346da45.js";import{a as k,I as F,T as Y,F as V,B as y,b as J,c as C,L as K,d as X}from"./ListTweets.styled-c7ac1ca8.js";const _=e=>e.followersId.followersId,E=16,O=8;var B={exports:{}},Z="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ee=Z,te=ee;function L(){}function N(){}N.resetWarningCache=L;var re=function(){function e(n,s,p,a,c,i){if(i!==te){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function o(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:N,resetWarningCache:L};return r.PropTypes=r,r};B.exports=re();var oe=B.exports;const g=M(oe);const S=e=>{W.error(`Error! ${e}`,{theme:"colored",autoClose:2e3})},ne=e=>({...e,followers:e.followers+1,status:!0}),se=e=>({...e,followers:e.followers-1,status:!1}),ae=h.li`
  position: relative;
  width: 380px;
  height: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border-radius: 20px;
  overflow: hidden;
  background-image: url("./logo.webp"), url("./picture.webp"),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 76px 22px, 308px 168px, cover;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top 20px left 20px, top 28px left 36px, center;

  :before {
    content: "";
    position: absolute;
    top: 50%;
    width: 380px;
    height: 8px;
    background-color: ${e=>e.theme.colors.fiolo};
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;
  }

  :after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    border: 8px solid ${e=>e.theme.colors.fiolo};
    border-radius: 50%;
    background-image: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;
  }
`,ie=h.div`
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
`,le=h.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ce=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,de=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 26px;
`,I=h.p`
  font-size: 20px;
  line-height: 1.1;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.fiolo};
`,pe=h.button`
  width: 196px;
  padding: 14px 0;
  margin-bottom: 36px;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  transition: all 250ms ease-in-out;
  background-color: ${e=>e.theme.colors.fiolo};
  color: ${e=>e.theme.colors.secondary};

  :hover {
    background-color: ${e=>e.theme.colors.green};
  }
`,ue=h.button`
  min-width: 196px;
  padding: 14px 0;
  margin-bottom: 36px;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  border: none;
  box-shadow: ${e=>e.theme.shadow.button};
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  transition: all 250ms ease-in-out;
  background-color: ${e=>e.theme.colors.green};
  color: ${e=>e.theme.colors.secondary};

  :hover {
    background-color: ${e=>e.theme.colors.fiolo};
  }
`,z=({user:e})=>{const[o,r]=w.useState(!1),n=R(_),{tweets:s,followers:p,id:a,avatar:c,name:i}=e,d=q(),[j,{isLoading:l}]=A();w.useEffect(()=>{n.includes(a)?r(!0):r(!1)},[a,n]);const m=async b=>{const v=ne(e);try{await j({body:v,id:b}),d(D(b)),r(!0)}catch(T){S(T.message)}},x=async b=>{const v=se(e);try{await j({body:v,id:b}),d(G(b)),r(!1)}catch(T){S(T.message)}};return t.jsx(t.Fragment,{children:t.jsxs(ae,{children:[t.jsx(ie,{children:t.jsx(le,{src:c,alt:i,width:"70"})}),t.jsxs(ce,{children:[t.jsxs(de,{children:[t.jsxs(I,{children:[String(s).replace(/\B(?=(\d{3})+(?!\d))/g,",")," "," ","Tweets"]}),t.jsxs(I,{children:[String(p).replace(/\B(?=(\d{3})+(?!\d))/g,",")," ","Followers"]})]}),o?t.jsx(ue,{type:"button",onClick:()=>x(a),disabled:l,children:"Following"}):t.jsx(pe,{type:"button",disabled:l,onClick:()=>m(a),children:"Follow"})]})]})})};z.propTypes={user:g.shape({tweets:g.number.isRequired,followers:g.number.isRequired,id:g.string.isRequired,name:g.string.isRequired,avatar:g.any})};var U={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},P=f.createContext&&f.createContext(U),u=globalThis&&globalThis.__assign||function(){return u=Object.assign||function(e){for(var o,r=1,n=arguments.length;r<n;r++){o=arguments[r];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e},u.apply(this,arguments)},he=globalThis&&globalThis.__rest||function(e,o){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)o.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};function $(e){return e&&e.map(function(o,r){return f.createElement(o.tag,u({key:r},o.attr),$(o.child))})}function xe(e){return function(o){return f.createElement(fe,u({attr:u({},e.attr)},o),$(e.child))}}function fe(e){var o=function(r){var n=e.attr,s=e.size,p=e.title,a=he(e,["attr","size","title"]),c=s||r.size||"1em",i;return r.className&&(i=r.className),e.className&&(i=(i?i+" ":"")+e.className),f.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,a,{className:i,style:u(u({color:e.color||r.color},r.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),p&&f.createElement("title",null,p),e.children)};return P!==void 0?f.createElement(P.Consumer,null,function(r){return o(r)}):o(U)}function ge(e){return xe({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M5 12l14 0"}},{tag:"path",attr:{d:"M5 12l4 4"}},{tag:"path",attr:{d:"M5 12l4 -4"}}]})(e)}const me=()=>{const[e,o]=w.useState(O),{data:r=[],isLoading:n,isFetching:s,isError:p}=H(e),[a,c]=w.useState([]),i=R(_);w.useEffect(()=>{!n&&c(r)},[n,r]);const d=l=>{let m=[];if(l==="all"){c(r);return}l===!0&&r.forEach(x=>{i.includes(x.id)&&m.push(x)}),l===!1&&r.forEach(x=>{!i.includes(x.id)&&m.push(x)}),c(m)},j=()=>{o(l=>l+O)};return t.jsxs(t.Fragment,{children:[p&&t.jsx(k,{style:{margin:"0 auto",minWidth:"500px"},children:t.jsx(F,{children:"Oops... Try refreshing the data after a while."})}),!n&&!p&&t.jsxs(Y,{children:[t.jsxs(V,{children:[t.jsx(Q,{to:"/",children:t.jsxs(y,{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[t.jsx(ge,{}),"Go back"]})}),t.jsxs(J,{children:[t.jsx(C,{children:t.jsx(y,{type:"button",onClick:()=>d("all"),children:"All"})}),t.jsx(C,{children:t.jsx(y,{type:"button",onClick:()=>d(!1),children:"Follow"})}),t.jsx(C,{children:t.jsx(y,{type:"button",onClick:()=>d(!0),children:"Followings"})})]})]}),t.jsx(K,{children:a.map(l=>t.jsx(z,{user:l},l.id))}),r.length>=E&&a.length>0&&t.jsx(k,{children:t.jsx(F,{children:"You have downloaded all the tweets."})}),r.length<E&&a.length>0&&t.jsx(X,{children:t.jsx(y,{type:"button",onClick:()=>j(),isLoading:s,children:"Load more..."})}),a.length===0&&t.jsx(k,{children:t.jsx(F,{children:"There are no such tweets."})})]})]})},we=()=>t.jsx("main",{children:t.jsx(me,{})});export{we as TweetsPage};
