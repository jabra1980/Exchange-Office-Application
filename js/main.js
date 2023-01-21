document.addEventListener('DOMContentLoaded',()=>{

var cad_1 = 'CAD';

var usa_1 = '1.00 US Dollar = 1.27 Canadian Dollars';
var usa_2 = '1.00 Canadian Dollar = 0.78 US Dollars';
var usa_3 = 'US';
var usa_4 = 'US - CAD';
var usa_5 = 'CAD - US';

var usaToCad = 1.27;
var cadToUsa = 0.78;

var UK_1 = '1.00 British Pound = 1.56 Canadian Dollars';
var UK_2 = '1.00 Canadian Dollar = 0.63 British Pound';
var UK_3 = 'Pound';
var UK_4 = 'Pound - CAD';
var UK_5 = 'CAD - Pound';

var ukToCad = 1.56;
var cadToUk = 0.63;

var fr_1 = '1.00 Euro = 1.32 Canadian Dollars';
var fr_2 = '1.00 Canadian Dollar = 0.75 Euro';
var fr_3 = 'Euro';
var fr_4 = 'Euro - CAD';
var fr_5 = 'CAD - Euro';

var frToCad = 1.32;
var cadToFr = 0.75;

var in1 = document.getElementById('A');
var in2 = document.getElementById('B');
var in3 = document.getElementById('AA');
var in4 = document.getElementById('BB');

var radi_1 = document.getElementsByClassName('AA');
console.log(radi_1);
var radi_2 = document.getElementsByClassName('BB');

var in5 = document.getElementById('AAA');
var in6 = document.getElementById('BBB');

var btn_1 = document.getElementById('CCC');

var in7 = document.getElementById('AAA_1');
var in8 = document.getElementById('BBB_1');

var btn_2 = document.getElementById('CCC_1');

var inArry = [in1,in2,in3,in4,in5,in6,in7,in8];
var in1Arry = [in5,in6,in7,in8];


var jo = document.getElementById('jojo1');

jo.addEventListener('change',function(){

    var ro = jo.options[jo.selectedIndex].text;
    if(ro === 'USA'){
        in1.value = usa_1;
        in2.value = usa_2;
        in3.value = usa_4;
        in4.value = usa_5;
        for(let i = 0; i < in1Arry.length; i++){
            in1Arry[i].value = '';
        }
        btn_1.style.color = 'lightgrey';
        radi_1[0].checked = '';
        radi_2[0].checked = '';     
    }else if(ro === 'UK'){
        in1.value = UK_1;
        in2.value = UK_2;
        in3.value = UK_4;
        in4.value = UK_5;
        for(let i = 0; i < in1Arry.length; i++){
            in1Arry[i].value = '';
        }
        btn_1.style.color = 'lightgrey';
        radi_1[0].checked = '';
        radi_2[0].checked = '';
    }else if(ro === 'FR'){
        in1.value = fr_1;
        in2.value = fr_2;
        in3.value = fr_4;
        in4.value = fr_5;
        for(let i = 0; i < in1Arry.length; i++){
            in1Arry[i].value = '';
        }
        btn_1.style.color = 'lightgrey';
        radi_1[0].checked = '';
        radi_2[0].checked = '';
    }else{
        for(let i = 0; i < inArry.length; i++){
            inArry[i].value = '';
        }
        
        btn_1.style.color = 'lightgrey';
        radi_1[0].checked = '';
        radi_2[0].checked = '';
    }


})


radi_1[0].addEventListener('click', ()=>{
    var ro = jo.options[jo.selectedIndex].text;
    if(ro === 'USA'){
        in6.value = usa_3;
        in7.value = cad_1;
        btn_1.style.color = '#000';
        in5.value='';
        in8.value='';
    }else if(ro === 'UK'){
        in6.value = UK_3;
        in7.value = cad_1;
        btn_1.style.color = '#000';
        in5.value='';
        in8.value='';
    }else if(ro === 'FR'){
        in6.value = fr_3;
        in7.value = cad_1;
        btn_1.style.color = '#000';
        in5.value='';
        in8.value='';
    }
    
})
radi_2[0].addEventListener('click', ()=>{
    var ro = jo.options[jo.selectedIndex].text;
    if(ro === 'USA'){
        in6.value = cad_1;
        in7.value = usa_3;
        btn_1.style.color = '#000';
        in5.value='';
        in8.value='';    
    }else if(ro === 'UK'){
        in6.value = cad_1;
        in7.value = UK_3;
        btn_1.style.color = '#000';
        in5.value='';
        in8.value='';     
    }else if(ro === 'FR'){
        in6.value = cad_1;
        in7.value = fr_3;
        btn_1.style.color = '#000';
        in5.value='';
        in8.value='';     
    }
    
})

btn_1.addEventListener('click', ()=>{
    let ro = jo.options[jo.selectedIndex].text;
     
    if(ro === 'USA' && radi_1[0].checked === true){
        in8.value = (in5.value * usaToCad).toFixed(2);
    }else if(ro === 'USA' && radi_2[0].checked === true){
        in8.value = (in5.value * cadToUsa).toFixed(2);
    }else if(ro === 'UK' && radi_1[0].checked === true){
        in8.value = (in5.value * ukToCad).toFixed(2);
    }else if(ro === 'UK' && radi_2[0].checked === true){
        in8.value = (in5.value * cadToUk).toFixed(2);
    }else if(ro === 'FR' && radi_1[0].checked === true){
        in8.value = (in5.value * frToCad).toFixed(2);
    }else if(ro === 'FR' && radi_2[0].checked === true){
        in8.value = (in5.value * cadToFr).toFixed(2);
    }
})
btn_2.addEventListener('click', ()=>{
    in5.value='';
    in8.value='';
})


})