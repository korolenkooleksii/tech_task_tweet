import{g as z,Q as N,n as s,r as y,u as O,a as U,b as M,j as o,c as G,d as W,R as f,e as q,N as A}from"./index-b2c4ea76.js";const S=e=>e.followersId.followersId,D=16,C=8;var I={exports:{}},H="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Q=H,Y=Q;function L(){}function P(){}P.resetWarningCache=L;var V=function(){function e(n,a,x,c,d,i){if(i!==Y){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function r(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:P,resetWarningCache:L};return t.PropTypes=t,t};I.exports=V();var J=I.exports;const m=z(J);const F=e=>{N.error(`Error! ${e}`,{theme:"colored",autoClose:2e3})},K=e=>({...e,followers:e.followers+1,status:!0}),X=e=>({...e,followers:e.followers-1,status:!1}),Z=s.li`
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
`,ee=s.div`
  position: absolute;
  top: 50%;
  width: 380px;
  height: 8px;
  background-color: ${e=>e.theme.colors.fiolo};
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`,te=s.div`
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
`,oe=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,re=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,ne=s.div`
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
`,se=s.button`
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
`,ae=s.button`
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
`,R=({user:e})=>{const[r,t]=y.useState(!1),n=O(S),{tweets:a,followers:x,id:c,avatar:d,name:i}=e,p=U(),[v,{isLoading:l}]=M();y.useEffect(()=>{n.includes(c)?t(!0):t(!1)},[c,n]);const g=async b=>{const j=K(e);try{await v({body:j,id:b}),p(G(b)),t(!0)}catch(T){F(T.message)}},h=async b=>{const j=X(e);try{await v({body:j,id:b}),p(W(b)),t(!1)}catch(T){F(T.message)}};return o.jsx(o.Fragment,{children:o.jsxs(Z,{children:[o.jsx(ee,{}),o.jsx(te,{children:o.jsx(oe,{src:d,alt:i,width:"70"})}),o.jsxs(re,{children:[o.jsxs(ne,{children:[o.jsxs(E,{children:[String(a).replace(/\B(?=(\d{3})+(?!\d))/g,",")," "," ","Tweets"]}),o.jsxs(E,{children:[String(x).replace(/\B(?=(\d{3})+(?!\d))/g,",")," ","Followers"]})]}),r?o.jsx(ae,{type:"button",onClick:()=>h(c),disabled:l,children:"Following"}):o.jsx(se,{type:"button",disabled:l,onClick:()=>g(c),children:"Follow"})]})]})})};R.propTypes={user:m.shape({tweets:m.number.isRequired,followers:m.number.isRequired,id:m.string.isRequired,name:m.string.isRequired,avatar:m.any})};var _={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$=f.createContext&&f.createContext(_),u=globalThis&&globalThis.__assign||function(){return u=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},u.apply(this,arguments)},ie=globalThis&&globalThis.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};function B(e){return e&&e.map(function(r,t){return f.createElement(r.tag,u({key:t},r.attr),B(r.child))})}function le(e){return function(r){return f.createElement(ce,u({attr:u({},e.attr)},r),B(e.child))}}function ce(e){var r=function(t){var n=e.attr,a=e.size,x=e.title,c=ie(e,["attr","size","title"]),d=a||t.size||"1em",i;return t.className&&(i=t.className),e.className&&(i=(i?i+" ":"")+e.className),f.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:i,style:u(u({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),x&&f.createElement("title",null,x),e.children)};return $!==void 0?f.createElement($.Consumer,null,function(t){return r(t)}):r(_)}function de(e){return le({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M5 12l14 0"}},{tag:"path",attr:{d:"M5 12l4 4"}},{tag:"path",attr:{d:"M5 12l4 -4"}}]})(e)}const pe=s.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`,ue=s.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  color: ${e=>e.theme.colors.aqua};
`,xe=s.div`
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
`,he=s.ul`
  display: flex;
  gap: 15px;
`,k=s.li``,w=s.button`
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
`,fe=s.div`
  margin: 30px 30px;
`,me=s.div`
  display: inline-block;
  margin: 30px 30px;
  padding: 10px 20px;
  border: 1px solid transparent;
  border-radius: 15px;
  box-shadow: ${e=>e.theme.shadow.primary},
    ${e=>e.theme.shadow.secondary}, ${e=>e.theme.shadow.third};
  background-color: ${e=>e.theme.colors.green};
`,ge=s.p`
  font-size: 24px;
  font-weight: 500;
  color: ${e=>e.theme.colors.secondary};
`,be=()=>{const[e,r]=y.useState(C),{data:t=[],isLoading:n,isFetching:a,isError:x}=q(e),[c,d]=y.useState([]),i=O(S);y.useEffect(()=>{!n&&d(t)},[n,t]);const p=l=>{let g=[];if(l==="all"){d(t);return}l===!0&&t.forEach(h=>{i.includes(h.id)&&g.push(h)}),l===!1&&t.forEach(h=>{!i.includes(h.id)&&g.push(h)}),d(g)},v=()=>{r(l=>l+C)};return!n&&!x&&o.jsxs(pe,{children:[o.jsxs(xe,{children:[o.jsx(A,{to:"/",children:o.jsxs(w,{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[o.jsx(de,{}),"Go back"]})}),o.jsxs(he,{children:[o.jsx(k,{children:o.jsx(w,{type:"button",onClick:()=>p("all"),children:"All"})}),o.jsx(k,{children:o.jsx(w,{type:"button",onClick:()=>p(!1),children:"Follow"})}),o.jsx(k,{children:o.jsx(w,{type:"button",onClick:()=>p(!0),children:"Followings"})})]})]}),o.jsx(ue,{children:c.map(l=>o.jsx(R,{user:l},l.id))}),t.length>=D?o.jsx(me,{children:o.jsx(ge,{children:"You have downloaded all the tweets."})}):o.jsx(fe,{children:o.jsx(w,{type:"button",onClick:()=>v(),isLoading:a,children:"Load more..."})})]})},ye=()=>o.jsx("main",{children:o.jsx(be,{})});export{ye as TweetsPage};
