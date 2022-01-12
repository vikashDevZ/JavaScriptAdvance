//attribute >>
//   <input type="text"></input> here type is attribute //everything in light blue color
// selector
// querySelector and querySelectorAll
// getEleementByid and getElementByClassName
//getAttribute
// const link=document.querySelector("a")
// console.log(link.getAttribute("href"));
// console.log(link.setAttribute("href","https://google.com"));

// //styling elemenet
// const styling=document.querySelector(".Heading-two");
// console.log(styling.style.color="red","______");
// styling.style.fontSize="32px";

//selecting and parsing throw multiple element



// //nodes selector
// const node=document.getRootNode();
// console.log(node,"_______");
// childs=node.childNodes[1];
// console.dir(childs);
// //will select htmls 3rd child
// const body=childs.childNodes[2]
// //parent nodes
// console.log(body.parentNode,'______');
// //sibling nodes 
// console.log(body.childNodes[2].nextSibling)

// //by default browser changes the white spaces of html elements

// //to get the elements without those undefined text siblings
// console.log(body.childNodes[2].nextElementSibling); 

// //to get child node of head element
// const head=node.childNodes[1];
// console.log(head);
// console.log(head.childNodes);

const rootNode= document.getRootNode();
console.log(rootNode)

console.log(rootNode.childNodes);

let htmlNode=rootNode.childNodes[1];
console.log(htmlNode)

//html childs
console.log(htmlNode.childNodes);
console.log(Array.isArray(htmlNode.childNodes));   //returns in array format but not array


//
const headElement=htmlNode.childNodes[0];
const textElement=htmlNode.childNodes[1];
const bodyElement=htmlNode.childNodes[2];
console.log(headElement,textElement,bodyElement);

//
console.log(headElement.parentElement);
console.log(headElement.nextSibling);   //will reuturn nest text node
console.log(headElement.nextElementSibling);    //will return next element

const heading=document.querySelector('.logo');
heading.parentNode.style.color="blue";

//
const head=document.querySelector("head")
console.log(head)
const title=document.querySelector("title");
console.log(title);

// childer to skip the blankspace element in sub elements
const div=document.querySelector('.headline');
console.log(div.childNodes);        //shows the new line and space
console.log(div.children);          // only show the child elements
