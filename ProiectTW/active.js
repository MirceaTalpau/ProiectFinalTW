function contact(){
    $(document).ready(function() {
        $('#nav-placeholder').load('navigation.html', function(){
          $('#contact').addClass('active')
        });
      });
}

function home(){
    $(document).ready(function() {
        $('#nav-placeholder').load('navigation.html', function(){
          $('#home').addClass('active')
        });
      });
}

function portofolio(){
    $(document).ready(function() {
        $('#nav-placeholder').load('navigation.html', function(){
          $('#portofolio').addClass('active')
        });
      });
}

function about(){
    $(document).ready(function() {
        $('#nav-placeholder').load('navigation.html', function(){
          $('#about').addClass('active')
        });
      });
}