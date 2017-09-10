var svg = d3.select("svg"),
    width = "100%",
    height = "100%";
    
var projection = d3.geoMercator()
    .center([130, -20])
    .scale(700);
    
var minimumColor = "#BFD3E6", maximumColor = "#88419D";

var color = d3.scaleLinear().domain([0, 0.5]).range([minimumColor, maximumColor]);

var path = d3.geoPath()
    .projection(projection);
    
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(d3.zoom().on("zoom", function () {
    svg.attr("transform", d3.event.transform);
 }))
    .append("g");
    
var legend = d3.legendColor()
    .shapeHeight(10)
    .shapeWidth(50)
    .shapePadding(0)
    .labelFormat(d3.format("%"))
    .orient("horizontal")
    .labelAlign("start")
    .scale(color);
    
d3.select(".legend")
    .call(legend)

d3.json("data/census_lgas_simp.json", function(error, ausData) {
  console.log(ausData);
  var lgas = topojson.feature(ausData, ausData.objects.lgas);
  d3.select("g")
  .attr("class", "lgas")
  .selectAll("path")
  .data(lgas.features )
.enter()
  .append("path")
  .attr("d", path)
  .style("fill", function(d) {
    console.log(d.properties.dens_inc);
    return color(d.properties.dens_inc);
    });
});

