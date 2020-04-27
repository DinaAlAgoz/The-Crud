var SiteName = document.getElementById("siteName");
var SiteUrl = document.getElementById("siteUrl");
var BookmarkContainer;

var regex1 = /^[A-Z]|[a-z]/;
var regex2 = /^([w]{3})\.([A-z]+)\.([A-z]{2,})/;

if (localStorage.getItem("mybokkmarks") == null)
{

    BookmarkContainer = [];
}

else {

    BookmarkContainer = JSON.parse(localStorage.getItem("mybokkmarks"));
    displaybookmark();
   
   
   
}
SiteName.addEventListener("keyup", function(){

    if(regex1.test (SiteName.value) == false)

    {
        SiteName.classList.remove("is-valid");
        SiteName.classList.add("is-invalid");
        
        
    }

    else {

        
        SiteName.classList.add("is-valid" );
        SiteName.classList.remove("is-invalid");
        
      
    }
});


SiteUrl.addEventListener("keyup", function(){

    if(regex2.test (SiteUrl.value) == false)

    {
        SiteUrl.classList.remove("is-valid");
        SiteUrl.classList.add("is-invalid");
        
        
    }

    else {

        
        SiteUrl.classList.add("is-valid" );
        SiteUrl.classList.remove("is-invalid");
        
      
    }
});



function addbookmark()
{

    if (SiteName.value == "" && SiteUrl.value == "")
    {
        document.getElementById("nameerror").innerHTML =
         `<p class="alert alert-error m-auto">Name Field is required</p>`


         document.getElementById("urlerror").innerHTML = 

         `<p class="alert alert-error m-auto">URL Field is required</p>`

         
        
    }

    else
     {

    var sites =
    {

        name:SiteName.value,
        url: SiteUrl.value,

    }

  BookmarkContainer.push(sites);
  localStorage.setItem("mybokkmarks", JSON.stringify(BookmarkContainer));
  displaybookmark();
  clearform();
  
 

  
     }
}





function displaybookmark()

{

    cartoona = "";

    for( var i=0; i< BookmarkContainer.length; i++)

    {
        cartoona+= `
        <div class="container bigbox" id="Body">
        <div class="BookmarkContainer">
            <div class="box">
            <h3>`+BookmarkContainer[i].name+`</h3>
            <a class="btn btn-primary " href=" https://` + BookmarkContainer[i].url+` " target="_blank">vist</a>
            <button onclick="update(`+i+`)" class="btn btn-warning ">Update</button>
            <button onclick="deletebokmark(`+i+`)" class="btn btn-danger btndelete">Delete</button>
            
            </div>
              </div>
               </div>
        `

        
    }

    document.getElementById("Body").innerHTML  = cartoona;
}



function clearform () {

    SiteName.value = " ";

    SiteUrl.value = " ";

   
}







function update(index) {


    SiteName.value = BookmarkContainer[index].name ;
    SiteUrl.value = BookmarkContainer[index].url ; 
  

   document.getElementById("ADDupdate").innerHTML = 

   `<button onclick="ADDyourUpdate(`+index+`)" type = "submit"
    class=" btn-warning">UpdateNOw</button>`

   var cartoona = " "; 

   for ( var i=0 ; i <BookmarkContainer.length ; i ++)

   {
       cartoona += `<div class="container bigbox" id="Body" >
       <div class="BookmarkContainer">
           <div class="box">
           <h3> `+BookmarkContainer[i].name+ `</h3>
           <a class="btn btn-primary " href=" https://`+ BookmarkContainer[i].url+`" target="_blank">vist</a>
           <button id="ADDupdate"  class="btn btn-warning">Update</button>
           <button onclick="deletebokmark(`+i+`); "class="btn btn-danger btndelete">Delete</button>
           </div>
             </div>
              </div>
        `
   }
   document.getElementById("Body").innerHTML =cartoona ;


}


function ADDyourUpdate(index) {


    BookmarkContainer[index].name = SiteName.value;
    BookmarkContainer[index].url = SiteUrl.value; 
  
    
    localStorage.setItem("mybokkmarks", JSON.stringify(BookmarkContainer));
    document.getElementById("ADDupdate").innerHTML = "";
    displaybookmark();
    clearform();

  
  




}





function deletebokmark(index)  

{
    BookmarkContainer.splice(index,1);
    localStorage.setItem("mybokkmarks", JSON.stringify(BookmarkContainer));
    displaybookmark();


}