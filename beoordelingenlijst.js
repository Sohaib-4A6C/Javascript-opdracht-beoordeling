function myFunction() {
    var cijfer = document.getElementById('cijfer').value
    
    if (cijfer >=0 && cijfer <=50){
        document.getElementById('resultaat').innerHTML = 'Het cijfer is ' + cijfer + ' en is dus onvoldoende'
    } 
    
    if  (cijfer >=49 && cijfer <=60){
        document.getElementById('resultaat').innerHTML = 'Het cijfer is ' + cijfer + ' en is dus matig'
    } 
    
    if (cijfer >=59 && cijfer <=75){
        document.getElementById('resultaat').innerHTML = 'Het cijfer is ' + cijfer + ' en is dus voldoende'
    }
    
    if (cijfer >=74 && cijfer <=101){
        document.getElementById('resultaat').innerHTML = 'Het cijfer is ' + cijfer + ' en is dus goed'
    }
}

function myFunction1() {
    var cijfer = document.getElementById('cijfer1').value
    
    if (cijfer >=0 && cijfer <=50){
        document.getElementById('resultaat').innerHTML = 'De beoordeling is ovoldoende want het cijfer is ' + cijfer
    } 
    
    if  (cijfer >=49 && cijfer <=60){
        document.getElementById('resultaat').innerHTML = 'De beoordeling is matig want het cijfer is ' + cijfer
    } 
    
    if (cijfer >=59 && cijfer <=75){
        document.getElementById('resultaat').innerHTML = 'De beoordeling is voldoende want het cijfer is ' + cijfer
    }
    
    if (cijfer >=74 && cijfer <=101){
        document.getElementById('resultaat').innerHTML = 'De beoordeling is goed want het cijfer is ' + cijfer
    }
}