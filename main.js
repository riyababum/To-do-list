
    function getvalue(callback){
    let uname = document.getElementById("uname").value;
    let pwd = document.getElementById("pwd").value;
    if(uname == "admin" && pwd == 12345){
        callback(newpage);
        }
    else{
        alert ("Enter correct username and password!");
        }
    }
 
    function newpage(){
        window.open("todo.html");   
    }
      
function todolist(){
        let xhttp= new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState==4 && this.status==200){
                let response=JSON.parse(this.responseText);
                let output="";
 
                for(i=0;i<response.length;i++){

                    if(response[i].completed==true)
                    {
                        output+=`<li><input type='checkbox' checked disabled> &nbsp; <span class='done'>${response[i].title}</span> &nbsp; <i onclick='dlt(this)' class="fa fa-trash-alt"></i></li>`
                    }
                    else if(response[i].completed==false)
                    {
                        output+=`<li><input id='box' onclick='check()' type='checkbox'> &nbsp; <span class='strike'>${response[i].title}</span> &nbsp; <i onclick='dlt(this)' class="fa fa-trash-alt"></i></li>`
                    }
                }
                document.querySelector(".list").innerHTML=output;
            }
        }

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos" , true);
    xhttp.send();
}
function check(){
    let box=Array.from(document.querySelectorAll("#box"));
    let span=Array.from(document.querySelectorAll(".strike"));
    let count=0;
    for(i=0;i<box.length;i++){
        if(box[i].checked==true)
        {
            span[i].classList.add("done");
            count++;
        }
        else if(box[i].checked == false){
            span[i].classList.remove("done");
        }
    }
    if(count==5){
        alert("Congrats! 5 Tasks have been Successfully Completed.");
    }
}
function dlt(litem){
    let list = document.querySelector(".list");
    let item = litem.parentNode;
    list.removeChild(item);
}