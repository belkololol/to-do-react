(this["webpackJsonpto-do-list-react"]=this["webpackJsonpto-do-list-react"]||[]).push([[0],{20:function(t,e,a){},26:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a(3),c=a.n(s),o=a(14),i=a.n(o),r=(a(20),a(2)),l=a(13),u=a(5),b=a(6),j=a(8),k=a(7),d=a(12),O=a(11),p=function(t){Object(j.a)(a,t);var e=Object(k.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).onKeyDown=function(e){var a=t.props,n=a.task,s=a.editTask;"Enter"===e.key&&s(Object(r.a)(Object(r.a)({},n),{},{task:e.target.value}));"Escape"===e.key&&s(n)},t}return Object(b.a)(a,[{key:"render",value:function(){var t=this.props,e=t.task,a=t.editTask,s=t.deleteTask,c=t.doneTask;return Object(n.jsxs)("li",{className:"list-group-item",children:[e.contentEditable?Object(n.jsx)("input",{className:"task active",autoFocus:!0,defaultValue:e.task,onKeyDown:this.onKeyDown}):Object(n.jsx)("p",{className:"task ".concat(e.isDone?"done":""),onClick:function(){c(e)},children:e.task}),Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)("button",{className:"btn btn-outline-primary border-0 button-edit",onClick:function(){a(e)},children:Object(n.jsx)(O.a,{icon:d.a})}),Object(n.jsx)("button",{className:"btn btn-outline-danger border-0 button-delete",onClick:function(){s(e)},children:Object(n.jsx)(O.a,{icon:d.b})})]})]})}}]),a}(c.a.Component),f=a(28),h=function(t){Object(j.a)(a,t);var e=Object(k.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state=JSON.parse(localStorage.getItem("taskInputState"))||{tasks:[],newTask:""},t.handleKeyDown=function(e){if("Enter"===e.key){var a={tasks:[].concat(Object(l.a)(t.state.tasks),[{task:t.state.newTask,id:Object(f.a)(),contentEditable:!1,isDone:!1}]),newTask:""};t.setState(a),localStorage.setItem("taskInputState",JSON.stringify(a))}},t.onNewTaskChange=function(e){var a=e.target.value,n={tasks:Object(l.a)(t.state.tasks),newTask:a};t.setState(n),localStorage.setItem("taskInputState",JSON.stringify(n))},t.deleteTask=function(e){var a=Object(r.a)(Object(r.a)({},t.state),{},{tasks:t.state.tasks.filter((function(t){return t.id!==e.id}))});t.setState(a),localStorage.setItem("taskInputState",JSON.stringify(a))},t.editTask=function(e){var a=Object(r.a)(Object(r.a)({},t.state),{},{tasks:t.state.tasks.map((function(t){return t.id===e.id?Object(r.a)(Object(r.a)({},e),{},{contentEditable:!e.contentEditable}):Object(r.a)(Object(r.a)({},t),{},{contentEditable:!1})}))});t.setState(a),localStorage.setItem("taskInputState",JSON.stringify(a))},t.doneTask=function(e){var a=Object(r.a)(Object(r.a)({},t.state),{},{tasks:t.state.tasks.map((function(t){return t.id===e.id?Object(r.a)(Object(r.a)({},e),{},{isDone:!e.isDone}):t}))});t.setState(a),localStorage.setItem("taskInputState",JSON.stringify(a))},t}return Object(b.a)(a,[{key:"render",value:function(){var t=this,e=this.state,a=e.tasks,s=e.newTask;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{className:"text-muted",children:"\u041c\u043e\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b"}),Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443...",onChange:this.onNewTaskChange,onKeyDown:this.handleKeyDown,value:s}),Object(n.jsx)("ul",{className:"list-group",children:a.map((function(e){return Object(n.jsx)(p,{task:e,deleteTask:t.deleteTask,editTask:t.editTask,doneTask:t.doneTask},e.id)}))})]})}}]),a}(c.a.Component),m=function(){return Object(n.jsx)(h,{})};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.16ebdee7.chunk.js.map