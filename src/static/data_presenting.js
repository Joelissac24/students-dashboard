function showteacher() {
    event.preventDefault()
    const id = document.getElementById("tid2").value  
    const fetchoptions = {
        "method":"get",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },    
    }
    fetch("http://127.0.0.1:8000/teacher/".concat(id),fetchoptions)
    .then((result) => {
    if(result.status!=200) {
        throw new Error("Bad Server Response");
    }
    return result.text();
    })

    .then((Response)=>{
    console.log(Response);
    })
}