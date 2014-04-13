  $(function(){

    $('.navbar-default').css('background-color', '#0070cd');
    $('.navbar-brand').css('color', '#fff');


    var dayOfMonth = 1;

    var dayTripUpdater = function(){
      var currentTrips = d3.selectAll('circle')[0].length;
      $('.tripCount').text(currentTrips);
      $('.day').text(dayOfMonth);

    };

    $('.launch').on('click', function(){
        d3.selectAll('circle').remove();
      var gV = ($('.day').val());
      dayOfMonth = gV;
      gV = parseInt(gV, 10);
      generateVis(gV);
      dayTripUpdater();
    });

    var autoAdvance = function(){
      generateVis(dayOfMonth);
      var monthCascade = setInterval(
        function(){

          $('.cancelAdvance').on('click', function(){
            clearInterval(monthCascade);
          });

          generateVis(dayOfMonth);
          dayTripUpdater();
          dayOfMonth++;
          if(dayOfMonth >= 32){
            dayOfMonth = 1;
          }
        }, 4000
      );
    }();

    // );
  });
