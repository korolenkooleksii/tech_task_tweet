import{n as e}from"./index-3452235e.js";const r=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
`,n=e.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  color: ${o=>o.theme.colors.aqua};
`,s=e.div`
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
`,a=e.ul`
  display: flex;
  gap: 15px;
`,i=e.li``,d=e.button`
  padding: 5px 20px;
  border: 1px solid ${o=>o.theme.colors.primary};
  border-radius: 6px;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: ${o=>o.theme.shadow.button};
  color: ${o=>o.theme.colors.primary};
  background-color: transparent;
  transition: all 250ms ease-in-out;

  :hover {
    background-color: ${o=>o.theme.colors.transGreen};
    border: 1px solid ${o=>o.theme.colors.transGreen};
  }

  :focus {
    background-color: ${o=>o.theme.colors.transGreen};
    border: 1px solid ${o=>o.theme.colors.transGreen};
  }
`,c=e.div`
  margin: 30px;
`,l=e.div`
  display: flex;
  justify-content: center;
  max-width: 450px;
  margin: 30px 30px;
  padding: 10px 20px;
  border: 1px solid transparent;
  border-radius: 15px;
  box-shadow: ${o=>o.theme.shadow.primary},
    ${o=>o.theme.shadow.secondary}, ${o=>o.theme.shadow.third};
  background-color: ${o=>o.theme.colors.green};
`,p=e.p`
  font-size: 24px;
  font-weight: 500;
  color: ${o=>o.theme.colors.secondary};
`;export{d as B,s as F,p as I,n as L,r as T,l as a,a as b,i as c,c as d};
