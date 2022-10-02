const btn = document.getElementById('clickable');
const form = document.getElementById('nn1');

btn.addEventListener('click', () => {
  setTimeout(function(){
    if (form.style.display === 'none') {
      //  this SHOWS the form
      form.style.display = 'block';
    } else {
      //  this HIDES the form
      form.style.display = 'none';
      
    }
},100);
  
});