import{g as U,Q as W,n as s,r as w,u as I,a as G,b as M,j as t,c as q,d as A,R as f,e as D,N as H}from"./index-70175012.js";const P=e=>e.followersId.followersId,Q=16,F=8;var R={exports:{}},Y="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",V=Y,J=V;function _(){}function L(){}L.resetWarningCache=_;var K=function(){function e(n,a,x,c,d,i){if(i!==J){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function o(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:L,resetWarningCache:_};return r.PropTypes=r,r};R.exports=K();var X=R.exports;const m=U(X);const C=e=>{W.error(`Error! ${e}`,{theme:"colored",autoClose:2e3})},Z=e=>({...e,followers:e.followers+1,status:!0}),ee=e=>({...e,followers:e.followers-1,status:!1}),te=s.li`
  position: relative;
  width: 380px;
  height: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border-radius: 20px;
  overflow: hidden;
  background-image: url("/logo.webp"),
    url("/picture.webp"),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 76px 22px, 308px 168px, cover;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top 20px left 20px, top 28px left 36px, center;
`,re=s.div`
  position: absolute;
  top: 50%;
  width: 380px;
  height: 8px;
  background-color: ${e=>e.theme.colors.fiolo};
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`,oe=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border: 8px solid ${e=>e.theme.colors.fiolo};
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`,ne=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,se=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,ae=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 26px;
`,E=s.p`
  font-size: 20px;
  line-height: 1.1;
  text-transform: uppercase;
  color: ${e=>e.theme.colors.fiolo};
`,ie=s.button`
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
  background-color: ${e=>e.theme.colors.fiolo};
  color: ${e=>e.theme.colors.secondary};
`,le=s.button`
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
  background-color: ${e=>e.theme.colors.green};
  color: ${e=>e.theme.colors.secondary};
`,B=({user:e})=>{const[o,r]=w.useState(!1),n=I(P),{tweets:a,followers:x,id:c,avatar:d,name:i}=e,p=G(),[j,{isLoading:l}]=M();w.useEffect(()=>{n.includes(c)?r(!0):r(!1)},[c,n]);const g=async b=>{const v=Z(e);try{await j({body:v,id:b}),p(q(b)),r(!0)}catch(T){C(T.message)}},h=async b=>{const v=ee(e);try{await j({body:v,id:b}),p(A(b)),r(!1)}catch(T){C(T.message)}};return t.jsx(t.Fragment,{children:t.jsxs(te,{children:[t.jsx(re,{}),t.jsx(oe,{children:t.jsx(ne,{src:d,alt:i,width:"70"})}),t.jsxs(se,{children:[t.jsxs(ae,{children:[t.jsxs(E,{children:[String(a).replace(/\B(?=(\d{3})+(?!\d))/g,",")," "," ","Tweets"]}),t.jsxs(E,{children:[String(x).replace(/\B(?=(\d{3})+(?!\d))/g,",")," ","Followers"]})]}),o?t.jsx(le,{type:"button",onClick:()=>h(c),disabled:l,children:"Following"}):t.jsx(ie,{type:"button",disabled:l,onClick:()=>g(c),children:"Follow"})]})]})})};B.propTypes={user:m.shape({tweets:m.number.isRequired,followers:m.number.isRequired,id:m.string.isRequired,name:m.string.isRequired,avatar:m.any})};var z={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},O=f.createContext&&f.createContext(z),u=globalThis&&globalThis.__assign||function(){return u=Object.assign||function(e){for(var o,r=1,n=arguments.length;r<n;r++){o=arguments[r];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},u.apply(this,arguments)},ce=globalThis&&globalThis.__rest||function(e,o){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)o.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function N(e){return e&&e.map(function(o,r){return f.createElement(o.tag,u({key:r},o.attr),N(o.child))})}function de(e){return function(o){return f.createElement(pe,u({attr:u({},e.attr)},o),N(e.child))}}function pe(e){var o=function(r){var n=e.attr,a=e.size,x=e.title,c=ce(e,["attr","size","title"]),d=a||r.size||"1em",i;return r.className&&(i=r.className),e.className&&(i=(i?i+" ":"")+e.className),f.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,c,{className:i,style:u(u({color:e.color||r.color},r.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),x&&f.createElement("title",null,x),e.children)};return O!==void 0?f.createElement(O.Consumer,null,function(r){return o(r)}):o(z)}function xe(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M5 12l14 0"}},{tag:"path",attr:{d:"M5 12l4 4"}},{tag:"path",attr:{d:"M5 12l4 -4"}}]})(e)}const ue=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
`,he=s.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  color: ${e=>e.theme.colors.aqua};
`,fe=s.div`
  position: fixed;
  top: 70px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 5;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
`,me=s.ul`
  display: flex;
  gap: 15px;
`,k=s.li``,y=s.button`
  padding: 5px 20px;
  border: 1px solid ${e=>e.theme.colors.primary};
  border-radius: 6px;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: ${e=>e.theme.shadow.button};
  color: ${e=>e.theme.colors.primary};
  background-color: transparent;
  transition: all 250ms ease-in-out;

  :hover {
    background-color: ${e=>e.theme.colors.transGreen};
    border: 1px solid ${e=>e.theme.colors.transGreen};
  }

  :focus {
    background-color: ${e=>e.theme.colors.transGreen};
    border: 1px solid ${e=>e.theme.colors.transGreen};
  }
`;s.div`
  margin: 30px 30px;
`;const $=s.div`
  display: flex;
  justify-content: center;
  max-width: 450px;
  margin: 30px 30px;
  padding: 10px 20px;
  border: 1px solid transparent;
  border-radius: 15px;
  box-shadow: ${e=>e.theme.shadow.primary},
    ${e=>e.theme.shadow.secondary}, ${e=>e.theme.shadow.third};
  background-color: ${e=>e.theme.colors.green};
`,S=s.p`
  font-size: 24px;
  font-weight: 500;
  color: ${e=>e.theme.colors.secondary};
`,ge=()=>{const[e,o]=w.useState(F),{data:r=[],isLoading:n,isFetching:a,isError:x}=D(e),[c,d]=w.useState([]),i=I(P);w.useEffect(()=>{!n&&d(r)},[n,r]);const p=l=>{let g=[];if(l==="all"){d(r);return}l===!0&&r.forEach(h=>{i.includes(h.id)&&g.push(h)}),l===!1&&r.forEach(h=>{!i.includes(h.id)&&g.push(h)}),d(g)},j=()=>{o(l=>l+F)};return t.jsxs(t.Fragment,{children:[!x&&t.jsx($,{style:{margin:"0 auto",minWidth:"500px"},children:t.jsx(S,{children:"Oops... Try refreshing the data after a while."})}),!n&&x&&t.jsxs(ue,{children:[t.jsxs(fe,{children:[t.jsx(H,{to:"/",children:t.jsxs(y,{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[t.jsx(xe,{}),"Go back"]})}),t.jsxs(me,{children:[t.jsx(k,{children:t.jsx(y,{type:"button",onClick:()=>p("all"),children:"All"})}),t.jsx(k,{children:t.jsx(y,{type:"button",onClick:()=>p(!1),children:"Follow"})}),t.jsx(k,{children:t.jsx(y,{type:"button",onClick:()=>p(!0),children:"Followings"})})]})]}),t.jsx(he,{children:c.map(l=>t.jsx(B,{user:l},l.id))}),r.length>=Q?t.jsx(Loaded,{children:t.jsx(S,{children:"You have downloaded all the tweets."})}):t.jsx($,{children:t.jsx(y,{type:"button",onClick:()=>j(),isLoading:a,children:"Load more..."})})]})]})},ye=()=>t.jsx("main",{children:t.jsx(ge,{})});export{ye as TweetsPage};
