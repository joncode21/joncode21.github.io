document.addEventListener("contextmenu",  function (e) {
   e.preventDefault();
});
    
document.onkeydown = function (e)
{
   if (event.keyCode == 123) 
   {
     return false;
   }
    
   if (e.ctrlkey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) 
   {
     return false;
   }
    
   if (e.ctrlkey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) 
   
   {
     return false;
   }
    
   if (e.ctrlkey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) 
    {
      return false;
    }
       
       
       
   if (e.ctrlkey && e.shiftkey && e.keyCode == "U".charCodeAt (0))                                                             
    {
      return false;
    }
       
}
