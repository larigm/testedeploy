
class navbar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
        this.shadowRoot.innerHTML=`
        <style>
           nav-nav{
           background: #20BA61;
           padding: 15px;
           border-radius: 5px;
           color:white;
           border:none;
           }
          nav-nav:hover{
           background: white;
           color: #20BA61;
           }
        </style>
        <button><slot></slot></button>
        `
    }
}
customElements.define('nav-nav', navbar);