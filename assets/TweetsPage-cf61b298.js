import{g as U,Q as M,n as s,r as w,u as I,a as W,b as G,j as t,c as q,d as A,R as f,e as D,N as H}from"./index-f755edf1.js";const P=e=>e.followersId.followersId,Q=16,F=8;var R={exports:{}},Y="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",V=Y,J=V;function _(){}function L(){}L.resetWarningCache=_;var K=function(){function e(n,a,x,c,d,i){if(i!==J){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function r(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:L,resetWarningCache:_};return o.PropTypes=o,o};R.exports=K();var X=R.exports;const m=U(X);const C=e=>{M.error(`Error! ${e}`,{theme:"colored",autoClose:2e3})},Z=e=>({...e,followers:e.followers+1,status:!0}),ee=e=>({...e,followers:e.followers-1,status:!1}),te=s.li`
  position: relative;
  width: 380px;
  height: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border-radius: 20px;
  overflow: hidden;
  background-image: url("./logo.webp"),
    url("./picture.webp"),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 76px 22px, 308px 168px, cover;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top 20px left 20px, top 28px left 36px, center;
`,oe=s.div`
  position: absolute;
  top: 50%;
  width: 380px;
  height: 8px;
  background-color: ${e=>e.theme.colors.fiolo};
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`,re=s.div`
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
`,B=({user:e})=>{const[r,o]=w.useState(!1),n=I(P),{tweets:a,followers:x,id:c,avatar:d,name:i}=e,p=W(),[j,{isLoading:l}]=G();w.useEffect(()=>{n.includes(c)?o(!0):o(!1)},[c,n]);const g=async b=>{const v=Z(e);try{await j({body:v,id:b}),p(q(b)),o(!0)}catch(T){C(T.message)}},h=async b=>{const v=ee(e);try{await j({body:v,id:b}),p(A(b)),o(!1)}catch(T){C(T.message)}};return t.jsx(t.Fragment,{children:t.jsxs(te,{children:[t.jsx(oe,{}),t.jsx(re,{children:t.jsx(ne,{src:d,alt:i,width:"70"})}),t.jsxs(se,{children:[t.jsxs(ae,{children:[t.jsxs(E,{children:[String(a).replace(/\B(?=(\d{3})+(?!\d))/g,",")," "," ","Tweets"]}),t.jsxs(E,{children:[String(x).replace(/\B(?=(\d{3})+(?!\d))/g,",")," ","Followers"]})]}),r?t.jsx(le,{type:"button",onClick:()=>h(c),disabled:l,children:"Following"}):t.jsx(ie,{type:"button",disabled:l,onClick:()=>g(c),children:"Follow"})]})]})})};B.propTypes={user:m.shape({tweets:m.number.isRequired,followers:m.number.isRequired,id:m.string.isRequired,name:m.string.isRequired,avatar:m.any})};var z={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},O=f.createContext&&f.createContext(z),u=globalThis&&globalThis.__assign||function(){return u=Object.assign||function(e){for(var r,o=1,n=arguments.length;o<n;o++){r=arguments[o];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},u.apply(this,arguments)},ce=globalThis&&globalThis.__rest||function(e,r){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};function N(e){return e&&e.map(function(r,o){return f.createElement(r.tag,u({key:o},r.attr),N(r.child))})}function de(e){return function(r){return f.createElement(pe,u({attr:u({},e.attr)},r),N(e.child))}}function pe(e){var r=function(o){var n=e.attr,a=e.size,x=e.title,c=ce(e,["attr","size","title"]),d=a||o.size||"1em",i;return o.className&&(i=o.className),e.className&&(i=(i?i+" ":"")+e.className),f.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,n,c,{className:i,style:u(u({color:e.color||o.color},o.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),x&&f.createElement("title",null,x),e.children)};return O!==void 0?f.createElement(O.Consumer,null,function(o){return r(o)}):r(z)}function xe(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M5 12l14 0"}},{tag:"path",attr:{d:"M5 12l4 4"}},{tag:"path",attr:{d:"M5 12l4 -4"}}]})(e)}const ue=s.div`
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
`,ge=s.div`
  margin: 30px;
`,$=s.div`
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
`,be=()=>{const[e,r]=w.useState(F),{data:o=[],isLoading:n,isFetching:a,isError:x}=D(e),[c,d]=w.useState([]),i=I(P);w.useEffect(()=>{!n&&d(o)},[n,o]);const p=l=>{let g=[];if(l==="all"){d(o);return}l===!0&&o.forEach(h=>{i.includes(h.id)&&g.push(h)}),l===!1&&o.forEach(h=>{!i.includes(h.id)&&g.push(h)}),d(g)},j=()=>{r(l=>l+F)};return t.jsxs(t.Fragment,{children:[x&&t.jsx($,{style:{margin:"0 auto",minWidth:"500px"},children:t.jsx(S,{children:"Oops... Try refreshing the data after a while."})}),!n&&!x&&t.jsxs(ue,{children:[t.jsxs(fe,{children:[t.jsx(H,{to:"/",children:t.jsxs(y,{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[t.jsx(xe,{}),"Go back"]})}),t.jsxs(me,{children:[t.jsx(k,{children:t.jsx(y,{type:"button",onClick:()=>p("all"),children:"All"})}),t.jsx(k,{children:t.jsx(y,{type:"button",onClick:()=>p(!1),children:"Follow"})}),t.jsx(k,{children:t.jsx(y,{type:"button",onClick:()=>p(!0),children:"Followings"})})]})]}),t.jsx(he,{children:c.map(l=>t.jsx(B,{user:l},l.id))}),o.length>=Q?t.jsx($,{children:t.jsx(S,{children:"You have downloaded all the tweets."})}):t.jsx(ge,{children:t.jsx(y,{type:"button",onClick:()=>j(),isLoading:a,children:"Load more..."})})]})]})},we=()=>t.jsx("main",{children:t.jsx(be,{})});export{we as TweetsPage};
