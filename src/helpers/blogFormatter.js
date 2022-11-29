
import parse from "html-react-parser"
import { dateTimeFormat } from "./formatter"


const blogFormatter=(blog)=>{
  const {content,published}=blog
  let imgStartWith = content.indexOf("\u003cdiv class=\"separator")
  const paragraph=content.slice(0,imgStartWith);
  var href = content.match(/href="([^"]*)/)[1];
  return {
    ...blog,
    content:parse(paragraph),
    published:dateTimeFormat(published),
    imglink:href
  }


}

export default blogFormatter