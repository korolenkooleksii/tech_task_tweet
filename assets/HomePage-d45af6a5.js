import{n as t,j as o}from"./index-f755edf1.js";const n=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  padding: 20px 100px;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 15px;
  box-shadow: ${e=>e.theme.shadow.primary},
    ${e=>e.theme.shadow.secondary}, ${e=>e.theme.shadow.third};
  background-color: ${e=>e.theme.colors.green};
`,r=t.p`
  font-size: 36px;
  font-weight: 500;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 2;
  max-width: 500px;
`,s=t.p`
  font-size: 40px;
  font-weight: 600;
  color: ${e=>e.theme.colors.accent};
`,a=()=>o.jsxs(n,{children:[o.jsx(r,{children:"Welcome"}),o.jsx(r,{children:"This is the"}),o.jsx(s,{children:"FollowMe App"})]}),d=()=>o.jsx("main",{children:o.jsx(a,{})});export{d as HomePage};
