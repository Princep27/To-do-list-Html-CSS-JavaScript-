var b1 = document.getElementById("bt1");
update();
b1.addEventListener("click",function(){
    var titl = document.getElementById("title").value;
    var desc = document.getElementById("description").value;
    
    if(localStorage.getItem('iteamArray')){
        var temp = localStorage.getItem("iteamArray");
        var array = JSON.parse(temp);
        array.push([titl,desc]);
        window.localStorage.setItem("iteamArray",JSON.stringify(array));
    }else{
        var array = [];
        array.push([titl,desc]);
        window.localStorage.setItem("iteamArray",JSON.stringify(array));        
    }
    
    update();
});

document.querySelector("#bt2").addEventListener("click",function(){
    localStorage.clear();
    update();
});



function update(){
    //Adding Table Data
    var str = "";
    if(localStorage.getItem('iteamArray')){
        var temp = localStorage.getItem('iteamArray');
        var array = JSON.parse(temp);

        array.forEach((element,index)=>{
            str += 
            `<tr>
            <td>${index+1}</td>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button onclick="del(${index})" class="btn">Delete</button>
            </tr>`
        });
    }
    document.querySelector("#tbody").innerHTML = str; 
}

function del(index){
    console.log(index);
    if(localStorage.getItem('iteamArray')){
        var temp = localStorage.getItem('iteamArray');
        var Array = JSON.parse(temp);
        console.log(Array[index]);
        Array.splice(index, 1);
        localStorage.setItem('iteamArray',JSON.stringify(Array));
        update();
    }
}