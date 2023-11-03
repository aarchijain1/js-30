const image = document.querySelector('.pic');
    const blurRange = document.querySelector('#blur');
    const base = document.querySelector('#base');
    const JS = document.querySelector('.h1');
    let background= document.querySelector('.bg');

    blurRange.addEventListener('change', function () {
      let blurValue = blurRange.value;
      console.log(blurValue);
      image.style.filter = `blur(${blurValue}px)`;
    })

    function colorHandler(){
      let color= base.value;
      console.log(color);
      JS.style.color= color;  
      background.style.backgroundColor= color;
    }
    base.addEventListener('change', colorHandler);
    base.addEventListener('click', colorHandler);
    
