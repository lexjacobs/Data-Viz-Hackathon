//min SFlong: -122.388013
//min SFlat: 37.771058
//max SFlong: -122.418954
//max SFlat: 37.804770

var datasetSize = 0;

var datasetLoader = function(selectedDay){
  result = [];
  for (var i = 0; i < tripData.length; i++) {
    if(tripData[i][4] === selectedDay){  
      result.push(tripData[i]);
    }
  }
  return result;
};

var generateVis = function(selectedDay){

  svg.selectAll('circle')
  .remove();

  var dataset = datasetLoader(selectedDay);

  var xScaler = 17000;
  var yScaler = 17000;  

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
    .attr('cy', function(d){
      if(d[4] === selectedDay || selectedDay === 'all'){
        return (w-latScaler(d[0]))-10;
      }
    })
    .attr('cx', function(d){
      if(d[4] === selectedDay || selectedDay === 'all'){
        return (h-longScaler(d[1]))-10;
      }
    })
    .attr('r', 1);

  circles
    .transition()
    .delay(300)
    .duration(3400)
    .attr('cy', function(d){
      if(d[4] === selectedDay){
        return (w-latScaler(d[2]))-10;
        // return latScaler(d[2])+10;
      }
    })
    .attr('cx', function(d){
      if(d[4] === selectedDay){
        return (h-longScaler(d[3]))-10;
      }
    })
    .attr('r', 1);
};
