document.addEventListener('DOMContentLoaded', function(event) {

  // nav bar js start

  const hamicon = document.getElementById('hamicon');
  const navbar = document.getElementById('navbar');
  const overlysection = document.getElementById('overlysection');
  const mobilemenuclose = document.getElementById('mobilemenuclose');
  const mobilemenu = document.getElementById('mobilemenu');
  const body = document.getElementById('body');
  const menus = document.getElementById('menus').innerHTML;

  mobilemenu.insertAdjacentHTML('beforeend', menus);

  hamicon.onclick = () => {
    overlysection.classList.add('open')
    body.classList.add('overflowhidden')
    mobilemenu.classList.add('open')
  };
  mobilemenuclose.onclick = () => {
    mobilemenu.classList.remove('open')
    overlysection.classList.remove('open')
    body.classList.remove('overflowhidden')
  };

  overlysection.onclick = (e) => {
    mobilemenu.classList.remove('open')
    e.target.classList.remove('open')
    body.classList.remove('overflowhidden')
  };

  document.addEventListener('scroll', function(e) {

    if (window.pageYOffset > 0) {
      navbar.classList.add('fixed')
    }
    if (window.pageYOffset == 0) {
      navbar.classList.remove('fixed')
    }

  });


  // nav bar js end





























  


})
