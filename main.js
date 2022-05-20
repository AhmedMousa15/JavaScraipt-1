let inp=document.querySelectorAll('#inputtask');
let btn=document.querySelector('#btnadd');
let notask=document.querySelector('#notask');
let task=document.querySelector('#task');
let validin =document.getElementById('validin')
let closevaild=document.querySelector('#closevaild')
let addmodal =document.querySelector('#addmodal')
let btncard= document.querySelector('#btncard')
let closecard=document.querySelector('#closecard')
let closecard2=document.querySelector('#closecard2')




let addtask = (name , phone ,job, image)=>{
    // data = inp[0].value;
    //     inp[0].value = '';
        notask.classList.add('none');
        task.innerHTML +=`
        
        
        <div class="card col-lg-4 col-md-6"> 
        <img src="${image}">
        <div class="card-body">
        <h5> Your Name : ${name} </h2>
        <h5> Your Job : ${job} </h2>
        <h5> Your Phone : ${phone} </h2>
        

        </div>
        <i class="removetask fa-regular fa-rectangle-xmark btn btn-danger"></i>
        </div>
        `
    btncardfunction();
     

    }
    


let randertask = ()=> {
    PersonName= inp[0].value;
    PersonPhone=inp[1].value;
    PersonJob=inp[2].value;
    PersonImage=inp[3].value;

    let person ={
        name : PersonName,
        phone : PersonPhone,
        job : PersonJob,
        image : PersonImage
    }
    addtask(person.name, person.job,person.phone,person.image);
    
    
}
let colsevalidbtn = function () { 
    validin.classList.remove('none')
}

btn.addEventListener('click' , randertask);
closevaild.addEventListener('click' ,colsevalidbtn)

validin.addEventListener('click', function (a) {
    if (a.target.classList.contains('rmvmasseg')) {  
       a.target.parentElement.classList.add('none');
    }

})

let notaskShow = function (){
    if(task.childElementCount == 0){
        notask.classList.remove('none');
    }

}

task.addEventListener('click', function (a){
    if(a.target.classList.contains('removetask')){
        a.target.parentElement.remove();
        notaskShow();
    }
})

let btncardfunction = function(){
    addmodal.classList.toggle('block');

}

btncard.addEventListener('click' , btncardfunction )
closecard.addEventListener('click' , btncardfunction )
closecard2.addEventListener('click' , btncardfunction )