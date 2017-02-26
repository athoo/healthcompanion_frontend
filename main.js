
var data = d3.json("./modified_steps_summary.json", function(error, data) {
	
	var parseDate = d3.time.format("%Y-%m-%d").parse;
	var parseTime = d3.time.format("%H:%M:%S").parse;
	var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	
	data.forEach(function(x) {
		x.steps_value = +x.steps_value;
		x.dateTime = parseDate(x.dateTime);
		x.time = parseTime(x.time);
		x.steps_all = +x.steps_all;
		x.weekDay = x.dateTime.getDay();
	});
	console.log(data);
	
	var exs = crossfilter(data);	
	var dateDim = exs.dimension(function(d) {return d.dateTime;});
	console.log(dateDim);

	
	var exercise_all = dateDim.group().reduceSum(function(d) {return d.steps_value;});

//	var exercise_all = dateDim.group();
	
	console.log(exercise_all.top(4));
	
	var minDate = dateDim.bottom(1)[0].dateTime;
	var maxDate = dateDim.top(1)[0].dateTime;
	
	var exerciseOverview = dc.barChart("#exercise_overview");
	
	var width = document.getElementById('exercise_overview').offsetWidth;
	
	exerciseOverview
	.width(width).height(200)
	.dimension(dateDim)
	.group(exercise_all)
	.x(d3.time.scale().domain([minDate,maxDate]))
	.yAxisLabel("Steps per day")
	.xUnits(function(){return 80;})
	.brushOn(true);

	var weekdayView = dc.rowChart('#weekday_view');
	
	var weekDayDim = exs.dimension(function(d) {return 'day'+'.'+week[d.weekDay];});
	var weekDayGroup = weekDayDim.group().reduceSum(function(d) {return d.steps_value;});
	
	weekdayView
	.width(width).height(300)
	.dimension(weekDayDim)
	.group(weekDayGroup)
	.elasticX(true)
	.label(function(d) {
		return d.key.split('.')[1];
	})
	.xAxis()
	.ticks(4);
	
	var frequencyView = dc.barChart('#frequency_view');
	
	var exerciseDim = exs.dimension(function(d) {return d.steps_all;});
	var exerciseGroup = exerciseDim.group(function(d){
		return Math.floor(d/1000)*1000;
	}).reduceCount();
	
	var minExercise = exerciseDim.bottom(1)[0].steps_all;
	var maxExercise = exerciseDim.top(1)[0].steps_all;
	
	frequencyView
	.width(width).height(400)
	.dimension(exerciseDim)
	.group(exerciseGroup)
//	.gap(1)
	.xUnits(function(){return 50;})
	.xAxisLabel("Steps per day")
	.x(d3.scale.linear().domain([minExercise, maxExercise]));
	
	frequencyView.render();
	weekdayView.render();
	exerciseOverview.render();
});


// var bar_chart = function(chart) {
//        chart
//            .width(400)
//            .height(300)
//            .x(d3.scale.linear().domain([0,105]))
//            .brushOn(false)
//            .yAxisLabel("Steps of the day")
//            .dimension(runDimension)
//            .group(speedSumGroup);
//        return chart;
//    }

//    bar_chart(chart1)
//        .brushOn(true)
//		.on('renderlet', function(chart) {
//				chart.selectAll('rect').on("click", function(d) {
//					console.log("click!", d);
//				});
//
//			var regression = ss.linearRegression(data.map(function(d) {
//				return [+d.no, d.steps];
//			}));
//
//var chart1 = dc.barChart("#test1");
//var chart2 = dc.barChart("#test2");
//
//var parseDate = d3.time.format("%m/%d/%y").parse;
//
//d3.csv("steps_calories_summary.csv", function(error, data) {
//    data.forEach(function(x) {
//        x.steps = +x.steps;
//    });
//    var ndx                 = crossfilter(data),
//        runDimension        = ndx.dimension(function(d) {return +d.no;}),
//        speedSumGroup       = runDimension.group().reduceSum(function(d) {return d.steps;});
//    function bar_chart(chart) {
//        chart
//            .width(400)
//            .height(300)
//            .x(d3.scale.linear().domain([0,105]))
//            .brushOn(false)
//            .yAxisLabel("Steps of the day")
//            .dimension(runDimension)
//            .group(speedSumGroup);
//        return chart;
//    }
//	
//	
//	
//    bar_chart(chart1)
//        .brushOn(true)
//		.on('renderlet', function(chart) {
//				chart.selectAll('rect').on("click", function(d) {
//					console.log("click!", d);
//				});
//
//			var regression = ss.linearRegression(data.map(function(d) {
//				return [+d.no, d.steps];
//			}));
//			console.log(data.length);	
//		
//			k = regression["m"];
//			b = regression["b"];
//			
//			var left_y = k*0+b, right_y = k*data.length+b; // use real statistics here!
//			var extra_data = [{x: chart.x().range()[0], y: chart.y()(left_y)}, {x: chart.x().range()[1], y: chart.y()(right_y)}];
//			var line = d3.svg.line()
//				.x(function(d) { return d.x; })
//				.y(function(d) { return d.y; })
//				.interpolate('linear');
//			var chartBody = chart.select('g.chart-body');
//			var path = chartBody.selectAll('path.extra').data([extra_data]);
//			path.enter().append('path').attr({
//				class: 'extra',
//				stroke: 'red',
//				id: 'extra-line'
//			});
//			path.attr('d', line);
//			// and perhaps you'd like to label it?
//			var text = chartBody.selectAll('text.extra-label').data([0]);
//			text.enter().append('text')
//					.attr('text-anchor', 'middle')
//				.append('textPath').attr({
//					class: 'extra-label',
//					'xlink:href': '#extra-line',
//					startOffset: '50%'
//				});
////				.text('this is a label for the line');
//			
//			
//			});
//    bar_chart(chart2);
//   
//    // this example was inspired by this Stack Overflow question:
//    // http://stackoverflow.com/questions/27445259/dc-js-applying-range-chart-to-multiple-graphs
//    // it would be nice to include the functionality in dc.js proper, but we'd have to deal with the
//    // complementary part of having each focus chart change the range chart when it is zoomed
//    // and that requires more thinking: https://github.com/dc-js/dc.js/issues/820
//    // we need to this helper function out of coordinateGridMixin
//    function rangesEqual(range1, range2) {
//        if (!range1 && !range2) {
//            return true;
//        }
//        else if (!range1 || !range2) {
//            return false;
//        }
//        else if (range1.length === 0 && range2.length === 0) {
//            return true;
//        }
//        else if (range1[0].valueOf() === range2[0].valueOf() &&
//            range1[1].valueOf() === range2[1].valueOf()) {
//            return true;
//        }
//        return false;
//    }
//    // monkey-patch the first chart with a new function
//    // technically we don't even need to do this, we could just change the 'filtered'
//    // event externally, but this is a bit nicer and could be added to dc.js core someday
//    chart1.focusCharts = function (chartlist) {
//        if (!arguments.length) {
//            return this._focusCharts;
//        }
//        this._focusCharts = chartlist; // only needed to support the getter above
//        this.on('filtered', function (range_chart) {
//            if (!range_chart.filter()) {
//                dc.events.trigger(function () {
//                    chartlist.forEach(function(focus_chart) {
//                        focus_chart.x().domain(focus_chart.xOriginalDomain());
//                    });
//                });
//            } else chartlist.forEach(function(focus_chart) {
//                if (!rangesEqual(range_chart.filter(), focus_chart.filter())) {
//                    dc.events.trigger(function () {
//                        focus_chart.focus(range_chart.filter());
//						
//								console.log(range_chart);
//								console.log(focus_chart);
//						
//                    });
//                }
//            });
//        })
//		
//		
//		;
//
//        return this;
//    };
//	
//    chart1.focusCharts([chart2]);
//    dc.renderAll();
//});
//
//
//d3.json("profile.json", function(json){
//	console.log(json);
//	console.log(json['user']['fullName']);
//	profile_list=["fullName", "age", "dateOfBirth", "gender", "memberSince", "strideLengthRunning", "strideLengthWalking", "weight"];
//	json['user']['strideLengthRunning']=json['user']['strideLengthRunning'].toFixed(2);
//	json['user']['strideLengthWalking']=json['user']['strideLengthWalking'].toFixed(2);
//	for (i in profile_list)
//		{
//		 d3.select('#'+profile_list[i]).select("p").text(function(d) {return profile_list[i]+"  "+json['user'][profile_list[i]]});
//		}
//	d3.select('#avatar')
//		.append('img')
//		.attr('src', function(d) {return json['user']['avatar']});
////	, "avatar"
//	
//
//	
//});
//var profile_data = JSON.parse("profile.json");