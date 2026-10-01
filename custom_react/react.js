

function customRendor(reactelement, mainContainer){
    // const  domELement = document.createElement(reactelement.type)
    // domELement.innerHTML= reactelement.children
    // domELement.setAttribute('href' , reactelement.props.href)
    // domELement.setAttribute('target' , reactelement.props.target)

 // another best way of approach 
  
  const domElement = document.createElement(reactelement.type)
    domElement.innerHTML = reactelement.children
    for(const prop in reactelement.props){
        if (prop === 'children ') continue
        domElement.setAttribute(prop, reactelement.props[prop])
    }
 


    mainContainer.appendChild(domElement)
}

const reactelement= {
    type : 'a',
    props : {
        href: "https://google.com",
        target : '_blank'

    },
    children : 'click me to visit google '


}
 

const mainContainer=  document.querySelector("#root")

customRendor(reactelement, mainContainer)
