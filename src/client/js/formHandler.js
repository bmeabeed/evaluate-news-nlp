function returnRow(varName,value){
    return "<tr><td>"+varName+"</td><td>"+value+"</td></tr>"
}

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field is valied URL
    let url = document.getElementById('url').value
   if(!Client.validateUrl(url)){
       alert("Invaled Url");
       return;
   }
   document.getElementById('nlpRender').innerHTML="loading"
  
   // Fetch NLP json for the given url
   fetch('http://localhost:8080/nlp?url='+url)
    .then(res => res.json())
  .then(function(res) {
   
   
    let returnData="<table>"




    returnData+=returnRow("score_tag",res.score_tag)
    returnData+=returnRow("confidence",res.confidence)
    returnData+=returnRow("subjectivity",res.subjectivity)
    returnData+=returnRow("agreement",res.agreement)
    returnData+=returnRow("irony",res.irony)

    returnData+="</table>"

   //alert(returnData)

    //render the return NLP json object inside html  TEXTAREA tag nlpRender
     document.getElementById('nlpRender').innerHTML= returnData;
    
   
    
 })

}
export{
    handleSubmit
}


