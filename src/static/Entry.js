entry();
function entry(){
    
    const fetchoptions = {
        "method":"get",
        "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },    
    }
    fetch("http://127.0.0.1:8000/items/",fetchoptions)
    .then((result) => {
    if(result.status!=200) {    
        throw new Error("Bad Server Response");
    }
    return result.text();
    })

    .then((Response)=>{
        data=JSON.parse(Response);
        convertJsonToBootstrapTable();
        function convertJsonToBootstrapTable(){
        //Get the headers from JSON data
        var headers = ["Student ID","Student name","Student Age"];
         
        //Prepare html header
        var headerRowHTML='<tr>';
        for(var i=0;i<headers.length;i++){
            headerRowHTML+='<th>'+headers[i]+'</th>';
        }

        headerRowHTML+='<th>Action</th></tr>';       
         
        //Prepare all the employee records as HTML
        var allRecordsHTML='';
        for(var i=0;i<data.length;i++){
            data[i][1].trim();
            //Prepare html row
            allRecordsHTML+='<tr>';
            allRecordsHTML+='<td class="s-id">'+data[i][0]+'</td>';
            allRecordsHTML+='<td class="name">'+data[i][1]+'</td>';
            allRecordsHTML+='<td class="age">'+data[i][2]+'</td>';
            data[i][1].trim();
            const edit='<td><a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>'
			const del='<a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a></td>'
            allRecordsHTML+=edit+del;
            allRecordsHTML+='</tr>';
             
        }
         
        //Append the table header and all records
        var table=document.getElementById("table");
        table.innerHTML=headerRowHTML + allRecordsHTML;
        }
    
    collection2();
    collection();  
    })
    
}



function collection(){
    const bt = document.getElementsByClassName("edit")
    const arr=[];

    for(let i=0;i<bt.length;i++){
        arr.push(bt[i]);     
    }
    arr.forEach(element =>
        element.addEventListener('click',(event) =>{
            const a=event.target.closest('tr');
            const id=a.querySelector('.s-id').innerText;
            const name=a.querySelector('.name').innerText;
            const age=a.querySelector('.age').innerText;

            const dt1=document.querySelector('#name2');
            dt1.setAttribute('value',name)
            const dt2=document.querySelector('#age2');
            dt2.setAttribute('value',age);
            const dt3 =document.querySelector("#id2");
            dt3.setAttribute('value',id); 
        })   
    )
}



function collection2(){
    const bt2 = document.getElementsByClassName("delete")
    const arr2=[];
    for(let i=0;i<bt2.length;i++){
        bt2[i].addEventListener('click',(event) =>{
            const a=event.target.closest('tr');
            const id =a.querySelector(".s-id").innerText;
            document.querySelector(".close").setAttribute("id",id);
        })
    }
}