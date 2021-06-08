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
  bullet.addEventListener('collide', shootCollided)
  };

const shootCollided = event => {
  if (event.detail.body.el.id === 'floor') {
    console.log("hit the floor");
    event.detail.target.el.removeEventListener("collide", shootCollided);
    myScene.removeChild(event.detail.target.el);
  } else if (event.detail.body.el.className === 'target-obj') {
    console.log("hit the target")
    event.detail.target.el.removeEventListener("collide", shootCollided);
    myScene.removeChild(event.detail.target.el);
    myScene.removeChild(event.detail.body.el);
  }
  if (document.querySelectorAll('.target-obj').length === 0) {
      console.log('you won')
      location.href= "level3.html"
  }
}


document.onkeydown = (event) => {
    if (event.which == 32) {
      shoot();
    }
  };









