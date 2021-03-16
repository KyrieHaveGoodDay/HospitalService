new Vue({
el:"#content",
data:{
    datas:null
},
mounted(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","./datas.json");
    xhr.send();
    xhr.onload= () => {
        var obj= JSON.parse(xhr.responseText);
        console.log(obj);
        this.datas = obj.users;
    }
}
});