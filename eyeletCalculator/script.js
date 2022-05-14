let switch_btn_DOM = document.querySelector("#switch"); 
let width_input_value_DOM = document.querySelector(".width-value");
let numberOrMinimumDistance_input_value_DOM = document.querySelector(".eyelet_num-OrMinimumDistance-value");

let width_input_state = false;
let eyelet_num_input_state = false;
let minimum_Distance_input_state = false;

let input_value = "";
let width_input = 0;
let eyeletNumber_input = 0;
let calculated_input = 0;

function activate_WidthField(){
    eyelet_num_input_state = false;
    minimum_Distance_input_state = false;
    width_input_state = true
    width_input_value_DOM.innerHTML="";

}
function activate_numberOrDistance(){
    if(switch_state) activate_EyeletNumberField();
    else activate_MinimumDistanceField();
}
function activate_EyeletNumberField(){
    width_input_state = false;
    eyelet_num_input_state = true;
    numberOrMinimumDistance_input_value_DOM.innerHTML ="";
    
}
function activate_MinimumDistanceField(){
    width_input_state = false;
    minimum_Distance_input_state = true;
    numberOrMinimumDistance_input_value_DOM.innerHTML ="";
}
 type1=()=> input_value +="1";
 type2=()=> input_value +="2";
 type3=()=> input_value +="3";
 type4=()=> input_value +="4";
 type5=()=> input_value +="5";
 type6=()=> input_value +="6";
 type7=()=> input_value +="7";
 type8=()=> input_value +="8";
 type9=()=> input_value +="9";
 typeX=()=> input_value +="*";
 type0=()=> input_value +="0";
 Delete=()=>input_value = input_value.substring(0,input_value.length-1);

 calc_input = ()=>{
     if(input_value.includes("*") == false ) calculated_input=Math.floor(input_value)
     else{ 
        calculated_input = Math.floor(input_value.substring(0,input_value.indexOf("*"))*
        Math.floor(input_value.substring(input_value.indexOf("*")+1,input_value.length)))
    }
    
    };

let switch_state = true;
function switcher(){
    switch_state = !switch_state;

    if(switch_state){ 
        switch_btn_DOM.className= "switch-number";
        minimum_Distance_input_state = false;
    }
    else {
        switch_btn_DOM.className = "switch-minimum";
        eyelet_num_input_state = false;
    }
    numberOrMinimumDistance_input_value_DOM.innerHTML="";
}
