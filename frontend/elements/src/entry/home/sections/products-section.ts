import { MEDIA_UI } from '@utils/path';
import "@elements/core/lists/column-list";
import "@elements/entry/home/social-networks";
import { LitElement, html, css, customElement, property } from 'lit-element';
@customElement('products-section')
export class _ extends LitElement {
  static get styles() {
    return [css`
    h3{
      font-family: Poppins;
      font-size: 20px;
      font-weight: 800;   
      color:#ffffff;
    
    }
   main{
     
   }
   
   ul{
    list-style-type: none;
    margin:0;
    padding:0;
   }

 
 

  .list{
    display:block;
    margin-top:8px;
 }
  

    `];
  }


 
 

  render() {

     const STR_TITLE="Product"; 
    const STR_LINE1="Manage";
    const STR_LINE2="Classroom";
    const STR_LINE3="Create activities";
    const STR_LINE4="Go pro";


    return html`
    <main>
    <h3>${STR_TITLE} </h3>
    <ul>
    <column-list text_line="${STR_LINE1}" color="white" class="list" ></column-list>
    <column-list text_line="${STR_LINE2}" color="white" class="list" ></column-list>
    <column-list text_line="${STR_LINE3}" color="white" class="list" ></column-list>
    <column-list text_line="${STR_LINE4}" color="white" class="list" ></column-list>
    </ul>
    </main>
  `;
  }
}