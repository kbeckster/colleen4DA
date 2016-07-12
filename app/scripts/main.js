console.log('\'Allo \'Allo!');


function fixnavbar() {
  if (screen && screen.width < 480) {
    $('.nav a').on('click', function() {
      $('.navbar-toggle').click(); //bootstrap 3.x by Richard
    });
  }
}

fixnavbar();
