(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),s=n.n(c),o=n(11),i=n(4),u=n(5),b=n(7),h=n(6),l=n(2),d=n(8),m=n(3),j=n(0),p=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.nameId=Object(l.a)(),e.numberId=Object(l.a)(),e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(m.a)({},a,r.toLowerCase()))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("label",{htmlFor:this.nameId,children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:this.nameId,value:t,onChange:this.handleChange}),Object(j.jsx)("label",{htmlFor:this.numberId,children:"Number"}),Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:this.numberId,value:n,onChange:this.handleChange}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:d,filter:""},e.setContact=function(t){var n=t.name,a=t.number,r=Object(l.a)();e.setState((function(e){return Object(o.a)({contacts:d.push({id:r,name:n,number:a})},e)})),console.log(e.state),console.log(d)},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(p,{onSubmit:this.setContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)("ul",{})]})}}]),n}(a.Component);n(17);s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse("[]")}},[[18,1,2]]]);
//# sourceMappingURL=main.2fbfa647.chunk.js.map