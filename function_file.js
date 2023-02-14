const font_bold=document.getElementById("text");
//bold
const bold_btn=document.getElementById('bold');
function bold_value(bool){
    if(bool==true){
        bold_btn.setAttribute('active',"true");
        font_bold.classList.remove('font-normal');
        font_bold.classList.add('font-bold','text-black-300');
        bold_btn.classList.add('text-gray-500','bg-slate-300');
    }
    else{
        bold_btn.removeAttribute('active',"true");
        font_bold.classList.add('font-normal','text-gray-300');
        font_bold.classList.remove('font-bold','text-gray-300');
        bold_btn.classList.remove('text-gray-500','bg-slate-300');
    }
}
//underline
const underline_btn=document.getElementById('underline');

function underline_value(bool){
    if(bool==true){
        underline_btn.setAttribute('active',"true");
       
        font_bold.classList.add('underline');
        underline_btn.classList.add('text-gray-500','bg-yellow-300');
    }
    else{
        underline_btn.removeAttribute('active',"true");
        font_bold.classList.remove('underline');
        underline_btn.classList.remove('text-gray-500','bg-yellow-300');
    }
}
//italic
const italic_btn=document.getElementById('italic');
function italic_value(bool){
    if(bool==true){
        italic_btn.setAttribute('active',"true");
       
        font_bold.classList.add('italic');
        italic_btn.classList.add('text-gray-500','bg-red-300');
    }
    else{
        italic_btn.removeAttribute('active',"true");
        font_bold.classList.remove('italic');
        italic_btn.classList.remove('text-gray-500','bg-red-300');
    }
}
//justify
const justify_btn=document.getElementById('text-justify');
function justify_value(bool){
    if(bool==true){
        justify_btn.setAttribute('active',"true");
       
        font_bold.classList.add('text-justify');
        font_bold.classList.remove('text-right','text-center','text-left');
        right_btn.classList.remove('text-gray-500');
        left_btn.classList.remove('text-gray-500');
        center_btn.classList.remove('text-gray-500');
        justify_btn.classList.add('text-gray-500',);
    }
    else{
        justify_btn.removeAttribute('active',"true");
        font_bold.classList.remove('text-justify');
        justify_btn.classList.remove('text-gray-500',);
    } 
}
//left button
const left_btn=document.getElementById('left');
function left_value(bool){
    if(bool==true){
        left_btn.setAttribute('active',"true");
        right_btn.setAttribute('disable','true');
        font_bold.classList.add('text-left');
        font_bold.classList.remove('text-right','text-center','text-justify');
        left_btn.classList.add('text-gray-500',);
        right_btn.classList.remove('text-gray-500');
       center_btn.classList.remove('text-gray-500');
        justify_btn.classList.remove('text-gray-500');
    }
    else{
        left_btn.removeAttribute('active',"true");
        font_bold.classList.remove('text-left');
        left_btn.classList.remove('text-red-500',);
    } 
}
//right
const right_btn=document.getElementById('right');
function right_value(bool){
    if(bool==true){
        right_btn.setAttribute('active',"true");
       
        font_bold.classList.add('text-right');
        font_bold.classList.remove('text-left','text-center','text-justify');
       center_btn.classList.remove('text-gray-500');
        left_btn.classList.remove('text-gray-500');
        justify_btn.classList.remove('text-gray-500');
        right_btn.classList.add('text-gray-500',);
    }
    else{
        right_btn.removeAttribute('active',"true");
        font_bold.classList.remove('text-right');
        right_btn.classList.remove('text-gray-500',);
    } 
}
//center
const center_btn=document.getElementById('center');

function center_value(bool){
    if(bool==true){
        center_btn.setAttribute('active',"true");
       
        font_bold.classList.add('text-center');
        font_bold.classList.remove('text-right','text-left','text-justify');
        right_btn.classList.remove('text-gray-500');
       left_btn.classList.remove('text-gray-500');
       justify_btn.classList.remove('text-gray-500');
        center_btn.classList.add('text-gray-500');
    }
    else{
        center_btn.removeAttribute('active',"true");
        font_bold.classList.remove('text-center');
        center_btn.classList.remove('text-gray-500',);
    } 
}
const capitalize_btn=document.getElementById('capitalize');
function capitalize_value(bool){
    if(bool==true){
        capitalize_btn.setAttribute('active',"true");
       
        font_bold.classList.add('capitalize');
        capitalize_btn.classList.add('text-gray-500',);
    }
    else{
        capitalize_btn.removeAttribute('active',"true");
        font_bold.classList.remove('capitalize');
        capitalize_btn.classList.remove('text-gray-500',);
    } 
}
