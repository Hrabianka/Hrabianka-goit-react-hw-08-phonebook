"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[642],{642:(e,n,t)=>{t.r(n),t.d(n,{default:()=>F});var o=t(1529);const i=o.Ay.h2`
  margin-top: 20px;
  font-family: sans-serif;
  font-size: 30px;
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-align: center;
  color: #dcdcdc; 
`;var a=t(579);const d=e=>{let{title:n,children:t}=e;return(0,a.jsxs)("section",{children:[(0,a.jsx)(i,{children:n}),t]})},r=o.Ay.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.15;
`,s=o.Ay.input`
  width: 95%;
  display: flex;
  border: 2px solid black;
  margin: 10px auto;
  padding: 15px;
  font-size: 20px;
  color: #dcdcdc; 

  &:focus-visible {
    border-radius: 4px;
    border: 3px solid lightblue;
  }
`;var c=t(5173),l=t.n(c),p=t(3003),x=t(719);const f=()=>{const e=(0,p.wA)();return(0,a.jsx)(r,{children:(0,a.jsx)(s,{type:"text",name:"filter",placeholder:"Find contacts by name",onChange:n=>{e((0,x.N)(n.currentTarget.value))}})})};r.propTypes={filter:l().string};const h=o.Ay.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`,m=o.Ay.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  line-height: 1.15;
  padding: 10px 0;
  letter-spacing: 0.05em;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-left: 32px;
    padding-right: 32px;
    font-size: 25px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 40px;
    padding-right: 40px;
    font-size: 32px;
  }
`,g=o.Ay.button`
  box-shadow: inset 0px 0px 12px 3px #ffffff;
  background: linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
  background-color: #ededed;
  border-radius: 4px;
  border: 2px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #212121;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  padding: 16px 16px;
  text-decoration: none;

  &:hover {
    background: linear-gradient(to bottom, #212121 5%, #ededed 100%);
    background-color: #212121;
    color: #ffffff;
  }
`;var u=t(6977);const b=e=>{let{contacts:n}=e;const t=(0,p.wA)();return(0,a.jsx)(h,{children:n.map(e=>{let{id:n,name:o,number:i}=e;return(0,a.jsxs)(m,{children:[o,": ",i,(0,a.jsx)(g,{type:"button",onClick:()=>t((0,u.MO)(n)),children:"Delete"})]},n)})})};h.propTypes={contacts:l().arrayOf(l().exact({id:l().string.isRequired,name:l().string.isRequired,phone:l().number.isRequired}))};var y=t(3892),w=t(899);const j=(0,o.Ay)(y.lV)`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color:rgb(81 62 34 / 64%);
`,k=(o.Ay.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 50%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`,(0,o.Ay)(y.Kw)`
  color: tomato;
`),A=o.Ay.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.15;
  color: #dcdcdc; 
`,v=(0,o.Ay)(y.D0)`
  all: unset;
  display: flex;
  border: 2px solid black;
  margin: 10px 0;
  padding: 15px;
  font-size: 20px;
  color: #dcdcdc;

  &:focus-visible {
    border-radius: 4px;
    border: 3px solid lightblue;
  }
`,z=o.Ay.button`
  box-shadow: inset 0px 0px 12px 3px #ffffff;
  background: linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
  background-color: #ededed;
  border-radius: 4px;
  border: 2px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #212121;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  padding: 16px 37px;
  text-decoration: none;
  margin: 10px 0;

  &:hover {
    background: linear-gradient(to bottom, #212121 5%, #ededed 100%);
    background-color: #212121;
    color: #ffffff;
  }
`,C=RegExp(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{1,3}\\)[ \\-]*)|([0-9]{1,4})[ \\-]*)*?[0-9]{1,4}?[ \\-]*[0-9]{1,9}?$/),S=w.Ik().shape({name:w.Yj().required().matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),phone:w.Yj().required().matches(C,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")}),L={name:"",phone:""},T=e=>{let{handleSubmit:n}=e;return(0,a.jsx)(y.l1,{initialValues:L,onSubmit:n,validationSchema:S,children:(0,a.jsxs)(j,{autoComplete:"off",children:[(0,a.jsxs)(A,{children:["Name",(0,a.jsx)(v,{type:"text",name:"name"}),(0,a.jsx)(k,{component:"div",name:"name"})]}),(0,a.jsxs)(A,{children:["Number",(0,a.jsx)(v,{type:"tel",name:"phone"}),(0,a.jsx)(k,{component:"div",name:"phone"})]}),(0,a.jsx)(z,{type:"submit",children:"Add contact"})]})})},q=o.Ay.div`
  margin: 0 auto;
  padding: 0 15px;
`,I=e=>e.phonebook.contacts.items,V=e=>e.phonebook.contacts.isLoading,N=e=>e.phonebook.contacts.error,R=e=>{const n=I(e),t=(e=>e.filter)(e);return n.filter(e=>e.name.toLowerCase().includes(t.toLowerCase()))};var _=t(5043);function F(){const e=(0,p.wA)(),n=(0,p.d4)(I),t=(0,p.d4)(V),o=(0,p.d4)(N),i=(0,p.d4)(R);return(0,_.useEffect)(()=>{e((0,u.oe)())},[e]),(0,a.jsxs)(q,{children:[(0,a.jsx)(T,{handleSubmit:(t,o)=>{let{resetForm:i}=o;var a;a=t,n.find(e=>e.name.toLowerCase()===a.name.toLowerCase())?alert(`${a.name} is already in contacts`):e((0,u.IP)(a)),i()}}),(0,a.jsx)(f,{}),(0,a.jsxs)(d,{title:"Contacts list",children:[t&&(0,a.jsx)("p",{children:"Loading contacts..."}),o&&(0,a.jsx)("p",{children:o}),n.length>0&&(0,a.jsx)(b,{contacts:i})]})]})}}}]);
//# sourceMappingURL=642.b010eec7.chunk.js.map