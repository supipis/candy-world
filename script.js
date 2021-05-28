const shoot = () => {
    let pos = myCamera.getAttribute('position');
    let bullet = document.createElement('a-sphere');
    bullet.setAttribute('position', pos);
    bullet.setAttribute('velocity', getDirection(myCamera, 30));
    bullet.setAttribute('dynamic-body', true);
    bullet.setAttribute('radius', 0.5);
    bullet.setAttribute('color', '#2684AA');
    bullet.setAttribute('src','cane.glb')
    myScene.appendChild(bullet);
  };
  
 /*  document.onkeydown = (event) => {
    if (event.which == 32) {
      shoot();
    }
  };
  
  document.addEventListener('updateButtons', () => {
    if (isPressed('RT')) {
      shoot();
    }
  }); */