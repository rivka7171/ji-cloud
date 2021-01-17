import "@elements/icon-wparagraph";
import "@elements/homepage-sections/reccomends-section";
 import { IconWTitleWParagraph } from "~/components/icon-wtitle-wparagraph";
 
export default {
  title: 'Homepage Paragraph',
}


const STR_PATH_HEBREW="PinkSmileyV3.jpg";
const STR_TITLE_HEBREW = "Hebrew";
const STR_PARAGRAPH_HEBREW = "1,850 JIGs";
 const STR_DARKGRAY = "#272727";

 const STR_PATH_CHANUKAH="BlueWheel.jpg";
const STR_TITLE_CHANUKAH = "Chanukah";
const STR_PARAGRAPH_CHANUKAH = "355 JIGs";
  
 const STR_PATH_HEBREWAROUNDTHEWORLD="PinkSmileyV3.jpg";
const STR_TITLE_HEBREWAROUNDTHEWORLD = "Hebrew Around the World";
const STR_PARAGRAPH_HEBREWAROUNDTHEWORLD = "World wide program";
  
 const STR_PATH_KIDSINSPACE="YellowSquare.jpg";
const STR_TITLE_KIDSINSPACE = "Kids in Space";
const STR_PARAGRAPH_KIDSINSPACE = "J-Steam"  ;
   
const STR_PATH_HOP="BlueTriangle.jpg";
const STR_TITLE_HOP = "HOP";
const STR_PARAGRAPH_HOP= "Hebrew Series";
 

 const STR_SIZELARGE = "large";


export const reccomendsParagraph = () => {
    return `

    <reccomends-section>
      
    <div slot="icon-title-paragraph">
    <icon-wparagraph path="${STR_PATH_HEBREW}" title="${STR_TITLE_HEBREW}" paragraph="${STR_PARAGRAPH_HEBREW}" color="${STR_DARKGRAY}" >
    </icon-wparagraph>

     </div>
    <div slot="icon-title-paragraph">
    <icon-wparagraph path="${STR_PATH_CHANUKAH}" title="${STR_TITLE_CHANUKAH}" paragraph="${STR_PARAGRAPH_CHANUKAH}" color="${STR_DARKGRAY}" >
    </icon-wparagraph>

 </div>
<div slot="icon-title-paragraph">
<icon-wparagraph path="${STR_PATH_HEBREWAROUNDTHEWORLD}" title="${STR_TITLE_HEBREWAROUNDTHEWORLD}" paragraph="${STR_PARAGRAPH_HEBREWAROUNDTHEWORLD}" color="${STR_DARKGRAY}" >
 </icon-wparagraph>

 </div>
<div slot="icon-title-paragraph">
<icon-wparagraph path="${STR_PATH_KIDSINSPACE}" title="${STR_TITLE_KIDSINSPACE}" paragraph="${STR_PARAGRAPH_KIDSINSPACE}" color="${STR_DARKGRAY}" >
 </icon-wparagraph>
 </div>
<div slot="icon-title-paragraph">
<icon-wparagraph path="${STR_PATH_HOP}" title="${STR_TITLE_HOP}" paragraph="${STR_PARAGRAPH_HOP}" color="${STR_DARKGRAY}" >
 </icon-wparagraph>
 </div>
</reccomends-section>
    `
}