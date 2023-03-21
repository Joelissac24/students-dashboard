const b = document.getElementById("button");
b.addEventListener("click", function xyz() {
    const div = document.getElementById("mydiv");
    show_hide(div);
});

function show_hide(a){
  const div = document.getElementById("mydiv")
  const div2 = document.getElementById("mydiv2")
  const div3 = document.getElementById("mydiv3")
  const div4 = document.getElementById("mydiv4")
  const arr=[div,div2,div3,div4];
  arr.forEach(element => {
    if (a===element){
      element.style.display ="block";
    }else{
      element.style.display="none";
    }
   })
}
function stud(a){
  const form = document.getElementById("addform")
  const form2 = document.getElementById("showform")
  const form3 = document.getElementById("editform")
  const form4 = document.getElementById("deleteform")
  const arr=[form,form2,form3,form4];
  arr.forEach(element =>{
    if(a===element){
      element.style.display="block";
    }else{
      element.style.display= "none";
    }
  })
}

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  const form = document.getElementById('addform');
  stud(form);
});

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
  const form2 = document.getElementById('showform');

  stud(form2);
});

const btn3 = document.getElementById("btn3");
btn3.addEventListener('click', () => {
  const form3 = document.getElementById("editform");
  stud(form3);
});

const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => {
  const form4 = document.getElementById('deleteform');
  stud(form4);
});

// Teacher Details

const b2 = document.getElementById("button2");
b2.addEventListener("click", () => {
    const div2 = document.getElementById("mydiv2");
    show_hide(div2);
});

function teach(a){
  const tform1=document.getElementById("addform2");
  const tform2 = document.getElementById("showform2");
  const tform3= document.getElementById("editform2");
  const tform4 = document.getElementById("deleteform2");
  const arr=[tform1,tform2,tform3,tform4];
  arr.forEach(element =>{
    if(a===element){
      element.style.display="block";
    }else{
      element.style.display= "none";
    }
  })
}

const tbtn1 = document.getElementById("tbtn1")
tbtn1.addEventListener("click",() => {
  const tform1=document.getElementById("addform2");
  teach(tform1);
});

const tbtn2 = document.getElementById("tbtn2")
tbtn2.addEventListener("click",() => {
  const tform2=document.getElementById("showform2");
  teach(tform2);
});

const tbtn3 = document.getElementById("tbtn3");
tbtn3.addEventListener('click', () => {
  const tform3 = document.getElementById("editform2");
  teach(tform3);
});

const tbtn4 = document.getElementById('tbtn4');
tbtn4.addEventListener('click', () => {
  const tform4 = document.getElementById('deleteform2');
  teach(tform4)
});

// Mapping Details
const b3 = document.getElementById("button3");
b3.addEventListener("click", () => {
    const div3 = document.getElementById("mydiv3");
    show_hide(div3);
});

const mbtn1 = document.getElementById("mbtn1")
mbtn1.addEventListener("click",() => {
  const mform1=document.getElementById("addform3");
  if(mform1.style.display === "block"){
    mform1.style.display ="none";
  }else{
    mform1.style.display = "block";
  }
});

const mbtn2 = document.getElementById("mbtn2")
mbtn2.addEventListener("click",() => {
  const mform2=document.getElementById("showform3");
  if(mform2.style.display === "block"){
    mform2.style.display ="none";
  }else{
    mform2.style.display = "block";
  }
});

const mbtn3 = document.getElementById("mbtn3");
mbtn3.addEventListener('click', () => {
  const mform3 = document.getElementById("editform3");
  if (mform3.style.display ==="block"){
    mform3.style.display = 'none';
  }else{
    mform3.style.display='block';
  }
});

const mbtn4 = document.getElementById('mbtn4');
mbtn4.addEventListener('click', () => {
  const mform4 = document.getElementById('deleteform3');

  if(mform4.style.display === 'block'){
    mform4.style.display = 'none';
  } else {
    mform4.style.display = 'block';
  }
});

//Attendance:
const b4 = document.getElementById("button4");
b4.addEventListener("click", () => {
    const div4 = document.getElementById("mydiv4");
    show_hide(div4);
});


const abtn1 = document.getElementById("abtn1")
abtn1.addEventListener("click",() => {
  const aform1=document.getElementById("addform4");
  if(aform1.style.display === "block"){
    aform1.style.display ="none";
  }else{
    aform1.style.display = "block";
  }
});

const abtn2 = document.getElementById("abtn2")
abtn2.addEventListener("click",() => {
  const aform2=document.getElementById("showform4");
  if(aform2.style.display === "block"){
    aform2.style.display ="none";
  }else{
    aform2.style.display = "block";
  }
});

const abtn3 = document.getElementById("abtn3");
abtn3.addEventListener('click', () => {
  const aform3 = document.getElementById("editform4");
  if (aform3.style.display ==="block"){
    aform3.style.display = 'none';
  }else{
    aform3.style.display='block';
  }
});

const abtn4 = document.getElementById('abtn4');
abtn4.addEventListener('click', () => {
  const aform4 = document.getElementById('deleteform4');

  if(aform4.style.display === 'block'){
    aform4.style.display = 'none';
  } else {
    aform4.style.display = 'block';
  }
});

