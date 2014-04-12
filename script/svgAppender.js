var w = 1000;
var h = 600;
var xScale;
var yScale;

  // generateVis(2);

  $(function(){

    $('body').append(
'<a href="http://hackreactor.com"> \
<div style="z-index: -5"><img style="position: fixed; top: 0; right: 0; border: 0;" \
src="http://i.imgur.com/x86kKmF.png" \
alt="Built at Hack Reactor"></div> \
</a>');

    $('.navbar').css('z-index', -1);

    var dayOfMonth = 1;

    var dayTripUpdater = function(){
      var currentTrips = d3.selectAll('circle')[0].length;
      console.log('currentTrips',currentTrips);
      $('.tripCount').text(currentTrips);
      $('.day').val(dayOfMonth);

    };

    $('.launch').on('click', function(){
        d3.selectAll('circle').remove();
      // console.log("day val", $('.day').val());
      var gV = ($('.day').val());
      dayOfMonth = gV;
      // console.log("gV", gV);
      // cicles.remove();
      gV = parseInt(gV, 10);
      generateVis(gV);
      dayTripUpdater();
      // console.log(currentTrips);

    });

    $('.wholeMonth').on('click', function(){
      generateVis(dayOfMonth);
      var monthCascade = setInterval(
        function(){

          $('.cancelAdvance').on('click', function(){
            clearInterval(monthCascade);
          });


          generateVis(dayOfMonth);
          dayTripUpdater();
          dayOfMonth++;
          console.log('dayOfMonth',dayOfMonth);
          if(dayOfMonth >= 32){
            dayOfMonth = 1;
          }
        }, 3000
      );
    });
  });
