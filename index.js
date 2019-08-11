  var svg = d3.select("svg"),
            width = svg.attr("width"),
            height = svg.attr("height"),
            radius = Math.min(width, height) / 2;
                  
                  var g = svg.append("g")
                   .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
          
                  var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);
          
                  var pie = d3.pie()
                  .sort(null)
                  .value(function(d) { 
                return d.value; 
            });
          
                  var path = d3.arc()
                     .outerRadius(radius - 10)
                     .innerRadius(0);
          
                  var label = d3.arc()
                      .outerRadius(radius)
                      .innerRadius(radius - 80);
          
                  d3.csv("https://gist.githubusercontent.com/mbostock/a3541c73fdccd432acc8b11bf9f02641/raw/2bd0fce0bf34b020e93c5f6527b5a9d08c33ff06/population-by-age.csv", function(error, data) {
            if (error) {
                throw error;
            }
            var arc = g.selectAll(".arc")
                       .data(pie(data))
                       .enter().append("g")
                       .attr("class", "arc");
          
            arc.append("path")
               .attr("d", path)
               .attr("fill", function(d) { return color(d.data.name); });
                  
            console.log(arc)
                    
            arc.append("text")
               .attr("transform", function(d) { 
                        return "translate(" + label.centroid(d) + ")"; 
                })
               .text(function(d) { return d.data.name; });
            });
          
            svg.append("g")
               .attr("transform", "translate(" + (width / 2 - 120) + "," + 20 + ")")
               .append("text")
               .text("Browser use statistics - Jan 2017")
               .attr("class", "title")
        






  /*  let data = [2, 4, 8, 10, 34, 34 , 34, 34 ,34];
    
 let svg = d3.select("svg")
        width = svg.attr("width"),
        height = svg.attr("height"),
        radius = Math.min(width, height) / 2,
        g = svg.append("g")
        .attr("transform", 
        "translate(" + width / 2 + "," + height / 2 + ")");
 
    var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);
    
       // Generate the arcs
    var arc = d3.arc()
                .innerRadius(20)
                .outerRadius(radius);
 
    // Generate the pie
    var pie = d3.pie();
 
   
 
    //Generate groups
    var arcs = g.selectAll("arc")
                .data(pie(data))
                .enter()
                .append("g")
                
 
    //Draw arc paths
    arcs.append("path")
        .attr("fill", function(d, i) {
        console.log('*********', color(i));
            return color(i);
        })
        .attr("d", arc);  */
 
 
 
 
 
 
 
 
 
 
 
 //  var dataset = [
  //    { label: 'Abulia', count: 10 },
  //    { label: 'Betelgeuse', count: 20 },
  //    { label: 'Cantaloupe', count: 30 },
  //    { label: 'Dijkstra', count: 40 }
  //  ];

  //  var width = 360;
  //  var height = 360;
  //  var radius = Math.min(width, height) / 2;

  //  var color = d3.scaleOrdinal(d3.schemeCategory20b);

  //  var svg = d3.select('svg')
  //    .attr('width', width)
  //    .attr('height', height)
  //    .append('g')
  //    .attr('transform', 'translate(' + (width / 2) +
  //      ',' + (height / 2) + ')');

  //  var arc = d3.arc()
  //    .innerRadius(0)
  //    .outerRadius(radius);

  //  var pie = d3.pie()
  //    .value(function(d) { return d.count; })
  //    .sort(null);

  //  var path = svg.selectAll('path')
  //    .data(pie(dataset))
  //    .enter()
  //    .append('path')
  //    .attr('d', arc)
  //    .attr('fill', function(d) {
  //      return color(d.data.label);
  //    });
















// var svg = d3.select("svg"),
//             width = svg.attr("width"),
//             height = svg.attr("height"),
//             radius = Math.min(width, height) / 2;
        
//          var g = svg.append("g")
//             .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

//          var color = d3.scaleOrdinal([
//             'gray', 'green', 'brown', 'orange', 'yellow', 'red', 'purple'
//          ]);
         
//          var pie = d3.pie().value(function(d) { 
//             return d.value; 
//          });
         
//          var path = d3.arc()
//             .outerRadius(radius - 10).innerRadius(0);
        
//          var label = d3.arc()
//             .outerRadius(radius).innerRadius(radius - 80);
                    
//          d3.csv("https://gist.githubusercontent.com/mbostock/a3541c73fdccd432acc8b11bf9f02641/raw/2bd0fce0bf34b020e93c5f6527b5a9d08c33ff06/population-by-age.csv", function(error, data) {
//             if (error) {
//                throw error;
//             }
//             var arc = g.selectAll(".arc")
//                .data(pie(data))
//                .enter()
//                .append("g")
//                .attr("class", "arc");
            
//             arc.append("path")
//                .attr("d", path)
//                .attr("fill", function(d) { return color(d.data.name); });
        
//             console.log(arc)
        
//             arc.append("text").attr("transform", function(d) { 
//                return "translate(" + label.centroid(d) + ")"; 
//             })
            
//             .text(function(d) { return d.data.name; });
//          });
         
//          svg.append("g")
//             .attr("transform", "translate(" + (width / 2 - 120) + "," + 20 + ")")
//             .append("text").text("Top population states in india")
//             .attr("class", "title")




















// let data = d3.csv("https://gist.githubusercontent.com/mbostock/a3541c73fdccd432acc8b11bf9f02641/raw/2bd0fce0bf34b020e93c5f6527b5a9d08c33ff06/population-by-age.csv", d3.autoType)
// let height = 300, width = 800, padding = 5 ;

// let barWidth = (width/data.length);

// let svg = d3.select('svg')
//           .attr("width", width)
//           .attr("height", height)
//           .attr("viewBox", [-width / 2, -height / 2, width, height]);
// const pie = d3.pie()
//     .sort(null)
//     .value(d => d.value)
// svg.append("g")
//       .attr("stroke", "white")
//     .selectAll("path")
//     .data(arcs)
//     .join("path")
//       .attr("fill", d => color(d.data.name))
//       .attr("d", arc)
//     .append("title")
//       .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

// const arcs = pie(data);      
//   svg.append("g")
//       .attr("font-family", "sans-serif")
//       .attr("font-size", 12)
//       .attr("text-anchor", "middle")
//     .selectAll("text")
//     .data(arcs)
//     .join("text")
//       .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
//       .call(text => text.append("tspan")
//           .attr("y", "-0.4em")
//           .attr("font-weight", "bold")
//           .text(d => d.data.name))
//       .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
//           .attr("x", 0)
//           .attr("y", "0.7em")
//           .attr("fill-opacity", 0.7)
//           .text(d => d.data.value.toLocaleString()));
