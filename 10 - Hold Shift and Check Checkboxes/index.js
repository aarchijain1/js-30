const checkboxes=document.querySelectorAll('.inbox input[type=checkbox]');
  let lastChecked;
  // console.log(Array.from(checkboxes))

  function handleChange(e){
     let inBetween=false;

     if(e.shiftKey && this.checked){
     checkboxes.forEach((checkbox)=>
     {
      console.log(checkbox)
    if(checkbox === this || checkbox=== lastChecked ){
      inBetween=!inBetween;
      console.log("inBetween")
     }
     if(inBetween){
    checkbox.checked=true;
   }
    })
   
     
     }
     lastChecked=this;
  }
  
  checkboxes.forEach((checkbox)=>{
    checkbox.addEventListener('click', handleChange)
  })