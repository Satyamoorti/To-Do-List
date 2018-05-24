(function(){
  
  var list = document.querySelector('#list'),
      form = document.querySelector('form'),
      item = document.querySelector('#item');
  
  form.addEventListener('submit',function(e){
    e.preventDefault();
    list.innerHTML += '<li>' + item.value + '</li>';
     window.localStorage.myitems = list.innerHTML;
    item.value = "";
  },false)
  
  list.addEventListener('click',function(e){
    var t = e.target;
    if(t.classList.contains('checked')){
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('checked');
    }
         window.localStorage.myitems = list.innerHTML;
  },false)
  

  
  function getValues() {
    var storedValues = window.localStorage.myitems;
   
      list.innerHTML = storedValues;
  }
  getValues();
})();

  function showDiv() {
   document.getElementById('addDiv').style.display = "block";
   document.getElementById('show_button').style.display = "none";

}
