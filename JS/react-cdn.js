//js ke code ko root se attach karna hai to root ko traverse kro
const parent=document.getElementById("root");
const element=React.createElement("h1",{},"This is new Heading");
const root=ReactDOM.createRoot(parent);
    //   root.render(element);
//list banate hai
const h1=React.createElement("h1",{},"Shopping Cart");
      
const item1=React.createElement('li',{},"ITEM-1");
const item2=React.createElement('li',{},"ITEM-2");
const list=React.createElement('ol',{},item1,item2)
const welcome=<h1>This is using JSX</h1>
root.render([h1,element,list]);
