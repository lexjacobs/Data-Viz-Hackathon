//min SFlong: -122.388013
//min SFlat: 37.771058
//max SFlong: -122.418954
//max SFlat: 37.804770

// var dataset = testData;

var datasetSize = 0;

var datasetLoader = function(selectedDay){
  result = [];
  for (var i = 0; i < tripData.length; i++) {
    if(tripData[i][4] === selectedDay){  
      result.push(tripData[i]);
    }
  }
  // console.log('dataset length: ', result.length);
  return result;
};

var generateVis = function(selectedDay){

  svg.selectAll('circle')
  .remove();

  var dataset = datasetLoader(selectedDay);

  var xScaler = 28000;
  var yScaler = 18500;

  var latScaler = function(n){
    return (n - 37.771058) * xScaler;
  };

  var longScaler = function(n){
    return (Math.abs(n) - 122.388013) * yScaler;
  };

   svg.selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle');


  circles = svg.selectAll('circle')
    .attr('cx', function(d){
      // console.log('selectedDay: ', selectedDay);
      if(d[4] === selectedDay || selectedDay === 'all'){
        return latScaler(d[0])+10;
      }
    })
    .attr('cy', function(d){
      // console.log('latd1', longScaler(d[1]));
      if(d[4] === selectedDay || selectedDay === 'all'){
        // console.log(d[4]);
        return longScaler(d[1])+10;
      }
    })
    .attr('r', 1);
    // .attr('fill', 'rgb(2,111,204)');

  circles
    .transition()
    .delay(300)
    .duration(3400)
    .attr('cx', function(d){
      // console.log('latd2', latScaler(d[2]));
      // console.log(d[4]);
      if(d[4] === selectedDay){
        return latScaler(d[2])+10;
      }
    })
    .attr('cy', function(d){
      // console.log('latd3', longScaler(d[3]));
      // console.log(d[4]);
      if(d[4] === selectedDay){
        return longScaler(d[3])+10;
      }
    })
    .attr('r', 1);

    // console.log("num circles", d3.selectAll('circle').length);

  // TODO: figure out exit/remove 
  // http://bost.ocks.org/mike/join/
  // http://stackoverflow.com/questions/14574364/on-click-event-d3-js-only-works-first-time

  /*  circles
      .exit()
      .remove();
*/
    // console.log('done in generateVis');
};
