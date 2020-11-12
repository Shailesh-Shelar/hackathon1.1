var form =document.getElementById("myform");
var form1=document.getElementById("myform1") ;

form.addEventListener("submit",function(e){
    e.preventDefault()

    var search=document.getElementById("search").value
    
    var name=search.split(' ').join('')
    fetch("https://api.github.com/users/"+name)
    .then((resuilt)=>{
        return resuilt.json()
    })
    .then((responce)=>{
        console.log(responce)
        var row=document.createElement("div")
        row.setAttribute("class","row")

        var div=document.createElement("div")
        div.setAttribute("class","col-md-12 col-sm-12")
        div.id="result"

        var div1=document.createElement("div")
        div1.setAttribute("class","offset-3 col-md-6 col-sm-12")
        div1.id="link"
        div1.style.margin="20px"

        var row1 = document.createElement("div");
        row1.setAttribute("class", "row");


        var div2 = document.createElement("div");
        div2.setAttribute("class", "offset-3 col-md-6 col-sm-12");
        div2.id="name"
          div2.style.margin = "20px";

        var div3 = document.createElement("div");
        div3.setAttribute("class", "offset-3 col-md-6 col-sm-12");
        div3.id="repos"
          div3.style.margin = "20px";
        
        row1.append(div2,div3)
        row.append(div,div1)
        document.body.append(row,row1)

        document.getElementById("result").innerHTML =`<h2 style="font-family:'Playfair Display', serif">Avtar Image is:-</h2><br> <img src="${responce.avatar_url}"/>`;
        document.getElementById(
          "link"
        ).innerHTML = `<h2 style="font-family:'Playfair Display', serif">User Name is:</h2><br> <h4>${responce["login"]}</h4>`;
        
        var img=document.getElementById("result")
        img.style.margin="20px"



        document.getElementById(
          "name"
        ).innerHTML = `<h2 style="font-family:'Playfair Display', serifs"> For Github Profile</h2><a href="https://www.github.com/${name}"> Click Here </a>`;

    })
    .catch((error)=>{
        console.log(error)
    })
})

form1.addEventListener("submit", function (e)
 {
  e.preventDefault();


  var repo = document.getElementById("searchr").value
  
  var searchr=repo.split(" ").join("")
  fetch("https://api.github.com/search/repositories?q="+searchr)
    .then((resuilt) => {
      return resuilt.json();
    })
    .then((result)=>{
        console.log(result)
        var title=document.createElement("h2")
        title.innerHTML=`Total Number of Repositories Matches:-  ${result["total_count"]}`
        var cont =document.createElement("div")
        cont.setAttribute("class","container")

        var row = document.createElement("div");
        row.setAttribute("class", "row");
        for (const i of result["items"]) 
        {
            
            var col=document.createElement("div")
            col.setAttribute("class","col-sm-4")

            var div=document.createElement("div")
            div.setAttribute("class","card","width","18rem")
            div.style.margin="10px"
            div.style.margin="20px"
            div.style.height="100%"

            var div2=document.createElement("div")
            div2.setAttribute("class","card-body")
           
            var div1 = document.createElement("h5");
            div1.setAttribute("class", "card-header");
            div1.innerHTML = `<b>Name of repository:-</b> ${i["full_name"]}
            <b> <br>Description of Repository:-</b> <br> ${i["description"]}<br>
           <b> Link For HTML Repository</b> <a href="${i["html_url"]}"><br>Click Here</a>
            `;

            
             
            div.append(div1)
            col.append(div)
            row.append(col)
            title.append(row);
            cont.append(title)
        }
        document.body.append(cont)
        
    })
    .catch((error) => {
    console.log(error);
    });
});

