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





  const section2 = document.getElementById('section2');
  const explorebtn = document.getElementById('explorebtn');
  const documentationbtn = document.getElementsByClassName('documentationbtn')[0];
  const documentationbtnmobile = document.getElementsByClassName('documentationbtn')[1];

  explorebtn.onclick = (e) => {
    jumpto('section2')
  };
  documentationbtn.onclick = (e) => {
    jumpto('documentationsection')
  };
  documentationbtnmobile.onclick = (e) => {
    mobilemenu.classList.remove('open')
    overlysection.classList.remove('open')
    body.classList.remove('overflowhidden')
    jumpto('documentationsection')
  };

  function jumpto(sectionId) {
    const yOffset = -150;
    const element = document.querySelector('#' + sectionId);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }




























})
