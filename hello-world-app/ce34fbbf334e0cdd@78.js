function _1(md){return(
md`# Hello World Application`
)}

function _2(md){return(
md`## Draw with Data`
)}

function _3(d3)
{
  const svg = d3.create("svg")
    .attr("width",500)
    .attr("height",100)
  const circle = svg
    .selectAll("circle")
    .data([1,2,3])
    .enter()
    .append("circle")
  circle.attr("cx", function(d, i) {
    return (i * 50) + 25; 
  })
  .attr("cy",50)
  .attr("r",function(d) {
    return d * 10;
  })
  .attr("fill","yellow")
  .attr("stroke","orange")
  .attr("stroke-width",function(d) {
    return d/2;
  });
  return svg.node(); 
}


function _4(d3)
{
  var data = [];
  for(var i = 0; i < 20; i++){
    var x = Math.floor(20 * Math.random());
    data.push(x);
  }
  const svg = d3.create("svg")
    .attr("width",500)
    .attr("height",250);
  const bars = svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x",function(d, i) {
      return i*21;
    })
    .attr("y",0)
    .attr("width",500/data.length - 10)
    .attr("height",function(d) {
      return d * 10;
    })
    .attr("fill","teal");
    return svg.node();
}


function _5(d3)
{
  var data = [];
  for(var i = 0; i < 20; i++){
    var x = Math.floor(20 * Math.random());
    data.push(x);
  }
  const svg = d3.create("svg")
    .attr("width",500)
    .attr("height",250);
  const bars = svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x",function(d, i) {
      return i * (500/data.length);
    })
    .attr("y",function(d){return 250 - d*10;})
    .attr("width",500/data.length - 10)
    .attr("height",function(d) {
      return d * 10;
    })
    .attr("fill",function(d) {
      return "rgb(0,0," + Math.round(d * 10) + ")";
    });

    svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(function(d) {
        return d;
      })
      .attr("x",function(d, i) {
        return i * (500/data.length) + (500 / data.length - 10) / 2;
      })
      .attr("y",function(d) {
        return 250 - (d * 10) + 15;
      })
      .attr("font-family","sans-serif")
      .attr("font-size","10px")
      .attr("fill","white")
      .attr("text-anchor", "middle");
    return svg.node();
}


function _6()
{
  var dataset = [];
  for(var i=0; i<20; i++){
    var tt = [];
    tt.push(Math.floor(Math.random() * 500));
    tt.push(Math.floor(Math.random() * 500));
    dataset.push(tt);
  }
  return dataset;
}


function _7(d3)
{
  var dataset = [];
  for(var i=0; i<50; i++){
    var tt = [];
    tt.push(Math.floor(Math.random() * 500));
    tt.push(Math.floor(Math.random() * 500));
    dataset.push(tt);
  }
  var w = 500;
  var h = 500;
  var padding = 20;
  var xScale = d3.scaleLinear()
    .domain([0,d3.max(dataset, function(d){return d[0];})])
    .range([padding,w-padding*2]);
  var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function (d) {return d[1];})])
    .range([padding, h-padding]);
  var rScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d){return d[1];})])
    .range([2, 5]);
  const svg = d3.create("svg")
    .attr("width",w)
    .attr("height",h);
  const scatters = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function(d) {
      return xScale(d[0]);
    })
    .attr("cy", function(d) {
      return yScale(d[1]);
    })
    .attr("r", function(d){return rScale(d[1]);});

  svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
      return d[0] + ", " + d[1];
    })
    .attr("x", function(d) {
      return xScale(d[0]);
    })
    .attr("y", function(d) {
      return yScale(d[1]);
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "red");

    
    return svg.node();
}


function _8(md){return(
md`## Scaling`
)}

function _9(d3)
{
  var dataset = [100,200,300,400,500];
  var scale = d3.scaleLinear(); 
  scale.domain([100, 500]);
  scale.range([10,350]);
}


export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["d3"], _3);
  main.variable(observer()).define(["d3"], _4);
  main.variable(observer()).define(["d3"], _5);
  main.variable(observer()).define(_6);
  main.variable(observer()).define(["d3"], _7);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer()).define(["d3"], _9);
  return main;
}
