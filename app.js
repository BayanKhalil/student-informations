'use strict'

function randomeAge(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

let totalTuition=0
let allStudent=[];
let total=document.getElementById('total')
function Student( id,name,email,mobile,age,tuition){
    this.id=id;
    this.name=name;
    this.email=email;
    this.mobile=mobile;
    this.tuition=0;
    this.age=[];
    allStudent.push(this);
    // let name=email.substring(0, email.lastIndexOf("@"));

}

let newStudent1=new Student( 1,'ahmed','ahmad@yahoo.com',455,tuition)

Student.prototype.getAge=function(){
    this.age=randomeAge(18,24);
    console.log(this.age);
}
newStudent1.getAge();
// function calculatId(){
//     for (let i = 0; i < allStudent.length; i++) {
//         this.id=i+1;
//         console.log(this.id);

//     }
// }
// calculatId();
function calculateTotalTuition(){
    totalTuition=0
    for (let i = 0; i < allStudent.length; i++) {
        totalTuition+=allStudent[i].tuition
       console.log(totalTuition);
      
    }
    
    //   return totalTuition
}

calculateTotalTuition();

let parent=document.getElementById('parent');
let table=document.createElement('table');
parent.appendChild(table);

function headerRow(){
    let headerRow=document.createElement('tr');
    table.appendChild(headerRow);
    
    let th1=document.createElement('th');
    headerRow.appendChild(th1);
    th1.textContent="id";

    let th2=document.createElement('th');
    headerRow.appendChild(th2);
    th2.textContent="Name";

    let th3=document.createElement('th');
    headerRow.appendChild(th3);
    th3.textContent="Email";

    let th4=document.createElement('th');
    headerRow.appendChild(th4);
    th4.textContent="Mobile";

    let th5=document.createElement('th');
    headerRow.appendChild(th5);
    th5.textContent="Age";

    let th6=document.createElement('th');
    headerRow.appendChild(th6);
    th6.textContent="Tuition";
}
headerRow();


function middleRow(){
    for (let i = 0; i < allStudent.length; i++) {
        let middleRow=document.createElement('tr');
        table.appendChild(middleRow);
        gettingItems();

        let td1=document.createElement('td');
        middleRow.appendChild(td1);
        td1.textContent= i+1;
    
        
        let td2=document.createElement('td');
        middleRow.appendChild(td2);
        td2.textContent= allStudent[i].name;

        let td3=document.createElement('td');
        middleRow.appendChild(td3);
        td3.textContent= allStudent[i].email;

        let td4=document.createElement('td');
        middleRow.appendChild(td4);
        td4.textContent= allStudent[i].mobile;

        let td5=document.createElement('td');
        middleRow.appendChild(td5);
        td5.textContent= allStudent[i].age;

        let td6=document.createElement('td');
        middleRow.appendChild(td6);
        td6.textContent= allStudent[i].tuition;


    }
}
middleRow();

let studentForm=document.getElementById('studentForm');
studentForm.addEventListener('submit',newStudent);

function newStudent(event){

    let studentEmail=event.target.studentEmail.value;
    let mobileNumber=event.target.mobileNumber.value;
    let tuition=event.target.tuition.value;

    let addStudent= new Student(studentEmail,mobileNumber,tuition)



    headerRow();
    table.textContent="";

    addStudent.getAge();

    middleRow();
    calculateTotalTuition();
    total.textContent= "total :" +totalTuition;
    settingItems();


}
calculateTotalTuition()
    total.textContent= "total:"+totalTuition;



    function settingItems(){
        let data=JSON.stringify(allStudent);
        localStorage.setItem('allStudent',data);
    }

    function gettingItems(){
   let stringData=localStorage.getItem('allStudent');
   let normalData=JSON.parse(stringData)
   if (normalData!==null)
   allStudent=normalData;
    }
    