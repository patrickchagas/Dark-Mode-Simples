document.addEventListener("DOMContentLoaded", function(e){

  let btnDark = document.getElementById('btn-dark-mode');
  let arquivoCss =  document.querySelector('[data-css]');
  let storageValue = localStorage.getItem('dark-mode');
  
  btnDark.addEventListener('click', function() {

     let storageValue = localStorage.getItem('dark-mode'); 
     

     if(storageValue === 'true'){
        
        localStorage.setItem('dark-mode', 'false');
        arquivoCss.setAttribute('href', 'styles.css');

     }else{
              
        localStorage.setItem('dark-mode', 'true');
        arquivoCss.setAttribute('href', 'styles-dark.css');

     }

  });
   
  if(storageValue === 'true'){
      arquivoCss.setAttribute('href', 'styles-dark.css');
  }else{
      arquivoCss.setAttribute('href', 'styles.css');
  }

});