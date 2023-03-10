
bold_btn.addEventListener("click",function(){
  
    if(bold_btn.hasAttribute("active")){
        bold_value(false);
    }
    else{
        bold_value(true);
    }  
})
underline_btn.addEventListener('click',function(){
    if(underline_btn.hasAttribute("active")){
        underline_value(false);
    }
    else{
        underline_value(true);
    } 
})
italic_btn.addEventListener('click',function(){
    if(italic_btn.hasAttribute("active")){
        italic_value(false);
    }
    else{
        italic_value(true);
    } 
})
justify_btn.addEventListener('click',function(){
    if(justify_btn.hasAttribute("active")){
        justify_value(false);
    }
    else{
        justify_value(true);
    } 
})
left_btn.addEventListener('click',function(){
    if(left_btn.hasAttribute("active")){
        left_value(false);
    }
    else{
        left_value(true);
    } 
});
right_btn.addEventListener('click',function(){
    if(right_btn.hasAttribute("active")){
        right_value(false);
    }
    else{
        right_value(true);
    } 
})
center_btn.addEventListener('click',function(){
    if(center_btn.hasAttribute("active")){
        center_value(false);
    }
    else{
        center_value(true);
    } 
})
capitalize_btn.addEventListener('click',function(){
    if(capitalize_btn.hasAttribute("active")){
        capitalize_value(false);
    }
    else{
        capitalize_value(true);
    } 
})
//font_size
const fonts=document.getElementById("font_size").value;
document.getElementById('font_size').addEventListener('input',function(event){
    font_bold.style.fontSize=`${event.target.value}px`;
});
// document.getElementById('font_size').addEventListener('click',function(event){
//     font_bold.style.fontSize=`${event.target.value}px`;
// });
//text-color
const color=document.getElementById('favcolor')
color.addEventListener('input',function(){
    font_bold.style.color=color.value;
})