//============= AJAX XMLHttpRequest ============
var XMLHttpRequest = require('xmlhttprequest')
const http=new XMLHttpRequest()
http.open('https://jsonplaceholder.typicode.com/users','GET');
http.send()
http.onreadystatechange=function(){
    if(http.readyState ==4 && http.status ==200)
    console.log(this.responseText);
    else console.log('error code'-http.status);
}

//============= Fetch APIs ============ not suported by older browser, browser built in api, works only in browser
//first approach
window.fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
    return response.json();
}).then(json=>{    console.log(json)}) //returns promise

//second approach of fetch 
async function getUsers(){
    let response= await fetch('https://jsonplaceholder.typicode.com/users');
    let data=await response.json()
    return data
}
getUsers().then(data=>{
    console.log(data);
})
//============= AXIOS ============ works in browser and nonbrowser, it is build on top of xmlhttp request
const axios=require('axios')
axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
    console.log(response.data);
})
//============= jQuery ============ built on xmlhttp request
$(document).ready(function(){
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/users',
        type:'GET',
        success:function(result){
            console.log(result);
        },
        error:function(err){
            console.log(err);
        }
    })
})
