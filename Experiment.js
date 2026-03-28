


    window.onload = ()=>{
        let count =0;
        let hi= setInterval(() => {
        
    let content=document.createElement("div");
    content.innerHTML="<p>Hello World!!!!</p>";
    document.body.appendChild(content);
    alert("hi");

    count++;
    if(count>=5){
    clearInterval(hi);
    alert("Interval stopped!")
}

    }, 200);
}




