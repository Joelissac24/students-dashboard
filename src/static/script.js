function add() {
    event.preventDefault()
    const name=document.getElementById("name").value
    const age= document.getElementById("age").value
    var inputdata={}
    inputdata={
        "name":name,
        "age":age
    }
    var json=JSON.stringify([inputdata]);
    console.log(json)
    const fetchoptions = {
        "method":"post",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        "body":json
    }
    fetch("http://127.0.0.1:8000/items/",fetchoptions)
    .then((result) => {
    if(result.status!=200) {
        throw new Error("bad server response");
    }
    return result.text();
    })

    .then((Response)=>{
    console.log("success");
    })
    const div=document.querySelector('#addEmployeeModal')
    div.style.display = 'none'
    var table=document.querySelector('#table')
    table.innerHTML='';
    entry();
}

function show() {
    event.preventDefault()
    const id = document.getElementById("id").value
    
    const fetchoptions = {
        "method":"get",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },    
    }
    fetch("http://127.0.0.1:8000/items/".concat(id),fetchoptions)
    .then((result) => {
    if(result.status!=200) {
        throw new Error("Bad Server Response");
    }
    return result.text();
    })

    .then((Response)=>{
    console.log(Response);
    })
    $('#addEmployeeModal').modal('hide')
    
    var table=document.querySelector('#table')
    table.innerHTML='';
    entry();
}
// const bt = document.getElementById('btn3');
// bt.addEventListener('click', () => {
//     const fetchoptions = {
//         "method":"get",
//         "headers": {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },    
//     }
//     fetch("http://127.0.0.1:8000/items/",fetchoptions)
//     .then((result) => {
//     if(result.status!=200) {
//         throw new Error("Bad Server Response");
//     }
//     return result.text();
//     })

//     .then((Response)=>{
//     console.log(Response);
//     })
// });

function edit(){
    
    event.preventDefault()
    const name = document.getElementById("name2").value
    const age = document.getElementById("age2").value
    const data = document.getElementById("id2").value
    var inputdata2={}
    inputdata2={
        "name":name,
        "age": age
    }
    var json=JSON.stringify(inputdata2);
    const fetchoptions = {
        "method":"put",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        "body":json
    }
    fetch("http://127.0.0.1:8000/items/".concat(data),fetchoptions)
    .then((result) => {
        if(result.status!=200) {
            throw new Error("Bad Server Response");
        }
        return result.text();
    })
    
        .then((Response)=>{
        
    })
    $('#editEmployeeModal').modal('hide')
    
    var table=document.querySelector('#table')
    table.innerHTML='';
    entry();
}

function del(){
    event.preventDefault()
    const id= document.querySelector(".close").id;
    console.log(id)
    const fetchoptions = {
        "method":"delete",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },    
    }
    fetch("http://127.0.0.1:8000/items/".concat(id),fetchoptions)
    .then((result) => {
    if(result.status!=200) {
        throw new Error("Bad Server Response");
    }
    return result.text();
    })

    .then((Response)=>{
    $('#deleteEmployeeModal').modal('hide')
    
    var table=document.querySelector('#table')
    table.innerHTML='';
    entry();
    })
}
// const btn5 = document.getElementById('btn5');
// btn5.addEventListener('click', () => {
//     const fetchoptions = {
//         "method":"get",
//         "headers": {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },    
//     }
//     fetch("http://127.0.0.1:8000/items/",fetchoptions)
//     .then((result) => {
//     if(result.status!=200) {
//         throw new Error("Bad Server Response");
//     }
//     return result.text();
//     })

//     .then((Response)=>{
//     console.log(Response);
//     })
// });

// Teacher Details
function addteacher() {
    event.preventDefault()
    const id=document.getElementById("tid").value
    const name= document.getElementById("tname").value
    var inputdata={}
    inputdata={
        "id":id,
        "name":name
    }
    var json=JSON.stringify([inputdata]);
    console.log(json)
    const fetchoptions = {
        "method":"post",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        "body":json
    }
    fetch("http://127.0.0.1:8000/teacher/",fetchoptions)
    .then((result) => {
    if(result.status!=200) {
        throw new Error("bad server response");
    }
    return result.text();
    })

    .then((Response)=>{
    console.log("success");
    })
}
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

// tbtn3.addEventListener('click', () => {
//     const fetchoptions = {
//         "method":"get",
//         "headers": {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },    
//     }
//     fetch("http://127.0.0.1:8000/teacher/",fetchoptions)
//     .then((result) => {
//     if(result.status!=200) {
//         throw new Error("Bad Server Response");
//     }
//     return result.text();
//     })

//     .then((Response)=>{
//     console.log(Response);
//     })
// });

function editteacher(){
    event.preventDefault()
    const name = document.getElementById("tname2").value
    const data = document.getElementById("rid").value
    var inputdata={}
    inputdata={
        "name":name
    }
    var json=JSON.stringify(inputdata);
    const fetchoptions = {
        "method":"put",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        "body":json
    }
    fetch("http://127.0.0.1:8000/teacher/".concat(data),fetchoptions)
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

function deleteteacher(){
    event.preventDefault()
    const id = document.getElementById("tid3").value
    const fetchoptions = {
        "method":"delete",
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
// const tbtn5 = document.getElementById('tbtn5');
// tbtn5.addEventListener('click', () => {
//     const fetchoptions = {
//         "method":"get",
//         "headers": {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },    
//     }
//     fetch("http://127.0.0.1:8000/teacher/",fetchoptions)
//     .then((result) => {
//     if(result.status!=200) {
//         throw new Error("Bad Server Response");
//     }
//     return result.text();
//     })

//     .then((Response)=>{
//     document.write(Response);
//     })
// });

// Mapping Details
function addmapping() {
    event.preventDefault()
    const id1=document.getElementById("mid").value
    const id2= document.getElementById("mid2").value
    var inputdata={}
    inputdata={
        "t_id":id1,
        "s_id":id2
    }
    var json=JSON.stringify([inputdata]);
    const fetchoptions = {
        "method":"post",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        "body":json
    }
    fetch("http://127.0.0.1:8000/mapping/",fetchoptions)
    .then((result) => {
    if(result.status!=200) {
        throw new Error("bad server response");
    }
    return result.text();
    })

    .then((Response)=>{
    console.log("success");
    })
}
function showmapping() {
    event.preventDefault()
    const id = document.getElementById("mid3").value  
    const fetchoptions = {
        "method":"get",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },    
    }
    fetch("http://127.0.0.1:8000/mapping/".concat(id),fetchoptions)
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

// mbtn3.addEventListener('click', () => {
//     const fetchoptions = {
//         "method":"get",
//         "headers": {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },    
//     }
//     fetch("http://127.0.0.1:8000/mapping/",fetchoptions)
//     .then((result) => {
//     if(result.status!=200) {
//         throw new Error("Bad Server Response");
//     }
//     return result.text();
//     })

//     .then((Response)=>{
//     console.log(Response);
//     })
// });

function editmapping(){
    event.preventDefault()
    const id1 = document.getElementById("mid4").value
    const id2 = document.getElementById("mid5").value 
    
    const fetchoptions = {
        "method":"put",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    }
    fetch("http://127.0.0.1:8000/mapping/".concat(id1+"/"+id2),fetchoptions)
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

function deletemapping(){
    event.preventDefault()
    const id = document.getElementById("mid6").value
    const fetchoptions = {
        "method":"delete",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },    
    }
    fetch("http://127.0.0.1:8000/mapping/".concat(id),fetchoptions)
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
// const mbtn5 = document.getElementById('mbtn5');
// mbtn5.addEventListener('click', () => {
//     const fetchoptions = {
//         "method":"get",
//         "headers": {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },    
//     }
//     fetch("http://127.0.0.1:8000/mapping/",fetchoptions)
//     .then((result) => {
//     if(result.status!=200) {
//         throw new Error("Bad Server Response");
//     }
//     return result.text();
//     })

//     .then((Response)=>{
//         // document.querySelector('.output').textContent = Response;
//     console.log(Response);
//     })
// });

//Attendance
function addattendance() {
    event.preventDefault()
    const id1=document.getElementById("aid1").value
    record = document.querySelector('#select1').value
    var inputdata={}
    inputdata={
        "id":id1,
        "attendance":record
    }
    var json=JSON.stringify([inputdata]);
    const fetchoptions = {
        "method":"post",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        "body":json
    }
    fetch("http://127.0.0.1:8000/attendance/",fetchoptions)
    .then((result) => {
    if(result.status!=200) {
        throw new Error("bad server response");
    }
    return result.text();
    })

    .then((Response)=>{
    console.log("success");
    })
}
function showattendance() {
    event.preventDefault()
    const id = document.getElementById("aid2").value  
    const fetchoptions = {
        "method":"get",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },    
    }
    fetch("http://127.0.0.1:8000/attendance/".concat(id),fetchoptions)
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

// abtn3.addEventListener('click', () => {
//     const fetchoptions = {
//         "method":"get",
//         "headers": {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },    
//     }
//     fetch("http://127.0.0.1:8000/attendance/",fetchoptions)
//     .then((result) => {
//     if(result.status!=200) {
//         throw new Error("Bad Server Response");
//     }
//     return result.text();
//     })

//     .then((Response)=>{
//     console.log(Response);
//     })
// });

function editattendance(){
    event.preventDefault()
    const id1=document.getElementById("aid3").value
    const record = document.querySelector('#select2').value
    var inputdata={}
    inputdata={
        "attendance":record
    }
    var json=JSON.stringify(inputdata)
    console.log(json)
    const fetchoptions = {
        "method":"put",
        "headers": {
              "Content-Type": "application/json",
            "Accept": "application/json"
        },
    "body":json
    }
    fetch("http://127.0.0.1:8000/attendance/".concat(id1),fetchoptions)
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

function deleteattendance(){
    event.preventDefault()
    const id = document.getElementById("aid4").value
    const fetchoptions = {
        "method":"delete",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },    
    }
    fetch("http://127.0.0.1:8000/attendance/".concat(id),fetchoptions)
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
// const abtn5 = document.getElementById('abtn5');
// abtn5.addEventListener('click', () => {
//     const fetchoptions = {
//         "method":"get",
//         "headers": {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },    
//     }
//     fetch("http://127.0.0.1:8000/attendance/",fetchoptions)
//     .then((result) => {
//     if(result.status!=200) {
//         throw new Error("Bad Server Response");
//     }
//     return result.text();
//     })

//     .then((Response)=>{
//        const msg=JSON.parse(Response)
//     mbar(msg);
//     })
// });

// function mbar(msg){
//     var bar = document.createElement("div");
//     bar.innerHTML = msg;
//     bar.classList.add("mbar");
//     bar.onclick = () => { bar.remove(); };
//     document.getElementById("mbar").appendChild(bar);
// }

