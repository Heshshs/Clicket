function showPage(pageId){

document.querySelectorAll(".page").forEach(page=>{
page.classList.remove("active")
})

document.getElementById(pageId).classList.add("active")

}

function handleLogin(e){
e.preventDefault()
showPage("home")
return false
}

function handleSignupStep1(e){
e.preventDefault()
showPage("home")
return false
}

function toggleLike(btn){

if(btn.style.color==="red"){
btn.style.color="black"
}else{
btn.style.color="red"
}

}