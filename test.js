var moment = require('moment');
var request = require('request');

// var today = moment().format('YYYY-MM-DD');
// var i = 28;
// for (var m = moment(today); i>0; m.subtract(1, 'days')) {
//     var date = m.format('YYYY-MM-DD');
//     console.log(date);
//     // console.log(date.toString());
//     i=i-1;
// }

// var gina = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1MlNQRFMiLCJhdWQiOiIyMjg0WUgiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdzZXQgd2FjdCB3bG9jIiwiZXhwIjoxNDkxMjg5OTIyLCJpYXQiOjE0OTEyNjExMjJ9.A2Z6DO-yuCKrApRwQ0BZr5cftpoCPOk4f1COj2mlcdI'

// var start_time = '6:00';
// var end_time = '22:00';


//   var intradaySteps = {
//     url: 'https://api.fitbit.com/1/user/'+ '52SPDS' +'/activities/steps/date/' + '2017-04-01' + '/1d/1min/time/' + start_time + "/" + end_time + '.json',
//     headers: {
//       'Authorization': 'Bearer ' + gina
//     }
//   }
//   request(intradaySteps, function(err, response, body){
//     console.log(body);
//   });


// for (var item in x["activities-steps-intraday"]["dataset"]){

//   var time = x["activities-steps-intraday"]["dataset"][item]["time"];
//   var value = x["activities-steps-intraday"]["dataset"][item]["value"];

//   var unit = {
//     "steps_all": steps_all,
//     "time": time,
//     "dateTime": dateTime,
//     "steps_value": value
//   }

//   z.push(unit);

// }

// console.log(z);

// x["activities-steps-intraday"]


// console.log(y[0]);

    //
    // var user_id = "52KG66";
    // var start_time = "12:00";
    // var end_time = "19:00";
    // var access_token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1MktHNjYiLCJhdWQiOiIyMjg0WUgiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd3BybyB3bnV0IHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNDkyMjIxNTEwLCJpYXQiOjE0OTIxOTI3MTB9.FD7xj0n97OwryQy32IhLjroSkCylwNe7hJuDfnkfFG8";
    // var today = moment().format('YYYY-MM-DD');
    // var days = 2;
    //
    // var several_days = [];
    // for (var m = moment(today); days > 0; m.subtract(1, 'days')){
    //     days = days-1;
    //     var date = m.format('YYYY-MM-DD');
    //     var intradaySteps = {
    //     url: 'https://api.fitbit.com/1/user/' + user_id + '/activities/steps/date/' + date + '/1d/1min/time/' + start_time + "/" + end_time + '.json',
    //     headers: {
    //         'Authorization': 'Bearer ' + access_token
    //     }
    //     }
    //     several_days.push(intradaySteps);
    // }
    //
    // function callTheData(intradaySteps) {
    //     return new Promise(resolve => {
    //         request(intradaySteps, function(err, res, body) {
    //         //start procesisng the body data
    //         // var data_bucket = db.collection(user_id);
    //         var data = JSON.parse(body);
    //         // data_bucket.update({
    //         //     "activities-steps.dateTime": date
    //         // }, data, {
    //         //     upsert: true
    //         // });
    //         // process one unit
    //         var dateTime = data["activities-steps"][0]["dateTime"];
    //         var steps_all = data["activities-steps"][0]["value"];
    //
    //         // process intraday one day data
    //         var summary_data = [];
    //         for (var item in data["activities-steps-intraday"]["dataset"]) {
    //             var time = data["activities-steps-intraday"]["dataset"][item]["time"];
    //             var value = data["activities-steps-intraday"]["dataset"][item]["value"];
    //             var unit = {
    //             "steps_all": steps_all,
    //             "time": time,
    //             "dateTime": dateTime,
    //             "steps_value": value
    //             }
    //             // console.log(unit);
    //             summary_data.push(unit);
    //         }
    //             resolve(summary_data);
    //         })
    //     })
    // }
    //
    // async function addData(several_days) {
    //     var dataCube = [];
    //     for (i = 0; i<several_days.length; i++) {
    //         dataCube[i] = await callTheData(several_days[i])
    //         // dataCube.push((several_days[i]));
    //     }
    //     return dataCube
    // }
    //
    // addData(several_days)
    // .then(v => {
    //     console.log(v);
    //     console.log(v.length);
    // });



    // for (var m = moment(today); days > 0; m.subtract(1, 'intradaySteps')) {
        // var date = m.format('YYYY-MM-DD');
        // var intradaySteps = {
        // url: 'https://api.fitbit.com/1/user/' + user_id + '/activities/steps/date/' + date + '/1d/1min/time/' + start_time + "/" + end_time + '.json',
        // headers: {
        //     'Authorization': 'Bearer ' + access_token
        // }
        // }

        // var index = days;

        // request(intradaySteps, function (err, res, body) {
        // var data_bucket = db.collection(user_id);
        // var data = JSON.parse(body);
        // data_bucket.update({
        //     "activities-steps.dateTime": date
        // }, data, {
        //     upsert: true
        // });
        // // process one unit
        // // console.log(data);

        // console.log(dateTime + steps_all);

        // var dateTime = data["activities-steps"][0]["dateTime"];
        // var steps_all = data["activities-steps"][0]["value"];

        // // process intraday one day data
        // for (var item in data["activities-steps-intraday"]["dataset"]) {
        //     var time = data["activities-steps-intraday"]["dataset"][item]["time"];
        //     var value = data["activities-steps-intraday"]["dataset"][item]["value"];
        //     var unit = {
        //     "steps_all": steps_all,
        //     "time": time,
        //     "dateTime": dateTime,
        //     "steps_value": value
        //     }
        //     // console.log(unit);
        //     summary_data.push(unit);
        // }
        // // console.log(summary_data);


        // // if(index ==  1){
        //     console.log("index"+index);
        //   console.log(summary_data);
        // //   var summary = db.collection(user_id+'_summary');
        // // summary.update({}, summary_data, {
        // //     upsert: true
        // //   });
        // }


        // });
        // days = days - 1;
        // console.log(days);

    // };

// add1(10).then(v => {
//   console.log(v);  // prints 60 after 2 seconds.
// });



// function resolveAfter2Seconds(x) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(x);
//     }, 2000);
//   });
// }

// async function add1(x) {
//   var a = resolveAfter2Seconds(20);
//   var b = resolveAfter2Seconds(30);
//   return x + await a + await b;
// }

// add1(10).then(v => {
//   console.log(v);  // prints 60 after 2 seconds.
// });

// async function add2(x) {
//   var a = await resolveAfter2Seconds(20);
//   var b = await resolveAfter2Seconds(30);
//   return x + a + b;
// }

// add2(10).then(v => {
//   console.log(v);  // prints 60 after 4 seconds.
// });

// let fn = async () => {
//     try{
//         let response = await Promise.all([call_func(several_days(0), call_func(several_days(1))])
//         console.log(response);
//     }
// }
// request(several_days[0], function(err, res, body) {
//     console.log(body);
// });

// Promise.all([])

// let fn = async () => {
// 	try{
// 		let response = await Promise.all([request1(),request2(),request3()])
// 		console.log(response);
// 		// [res1, res2, res3]
// 	}catch(ex){}
// }

// console.log(several_days);






// var x={
//     "_id": {
//         "$oid": "58e327f614fe266578de4372"
//     },
//     "activities-steps": [
//         {
//             "dateTime": "2017-04-01",
//             "value": "5249"
//         }
//     ],
//     "activities-steps-intraday": {
//         "dataset": [
//             {
//                 "time": "06:00:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:01:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:02:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:03:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:04:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:05:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:06:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:07:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:08:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:09:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:10:00",
//                 "value": 6
//             },
//             {
//                 "time": "06:11:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:12:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:13:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:14:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:15:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:16:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:17:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:18:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:19:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:50:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:51:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:52:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:53:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:54:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:55:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:56:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:57:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:58:00",
//                 "value": 0
//             },
//             {
//                 "time": "06:59:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:00:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:01:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:02:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:03:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:04:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:05:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:06:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:07:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:08:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:09:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:10:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:11:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:12:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:13:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:14:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:15:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:16:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:17:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:18:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:19:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:20:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:21:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:22:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:23:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:24:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:25:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:26:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:27:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:28:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:29:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:30:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:31:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:32:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:33:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:34:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:35:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:36:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:37:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:38:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:39:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:40:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:41:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:42:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:43:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:44:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:45:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:46:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:47:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:48:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:49:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:50:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:51:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:52:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:53:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:54:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:55:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:56:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:57:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:58:00",
//                 "value": 0
//             },
//             {
//                 "time": "07:59:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:00:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:01:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:02:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:03:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:04:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:05:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:06:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:07:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:08:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:09:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:10:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:11:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:12:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:13:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:14:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:15:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:16:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:17:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:18:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:19:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:20:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:21:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:22:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:23:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:24:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:25:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:26:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:27:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:28:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:29:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:30:00",
//                 "value": 19
//             },
//             {
//                 "time": "08:31:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:32:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:33:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:34:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:35:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:36:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:37:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:38:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:39:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:40:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:41:00",
//                 "value": 0
//             },
//             {
//                 "time": "08:42:00",
//                 "value": 0
//             },
//             {
//                 "time": "21:43:00",
//                 "value": 0
//             },
//             {
//                 "time": "21:44:00",
//                 "value": 0
//             },
//             {
//                 "time": "21:45:00",
//                 "value": 0
//             },
//             {
//                 "time": "21:46:00",
//                 "value": 0
//             },
//             {
//                 "time": "21:47:00",
//                 "value": 0
//             },
//             {
//                 "time": "21:48:00",
//                 "value": 0
//             },
//             {
//                 "time": "21:49:00",
//                 "value": 0
//             },
//             {
//                 "time": "21:50:00",
//                 "value": 0
//             },
//             {
//                 "time": "21:51:00",
//                 "value": 0
//             },
//             {
//                 "time": "21:52:00",
//                 "value": 0
//             },
//             {
//                 "time": "21:53:00",
//                 "value": 0
//             },
//             {
//                 "time": "21:54:00",
//                 "value": 0
//             },
//             {
//                 "time": "21:55:00",
//                 "value": 0
//             },
//             {
//                 "time": "21:56:00",
//                 "value": 0
//             },
//             {
//                 "time": "21:57:00",
//                 "value": 0
//             },
//             {
//                 "time": "21:58:00",
//                 "value": 0
//             },
//             {
//                 "time": "21:59:00",
//                 "value": 0
//             },
//             {
//                 "time": "22:00:00",
//                 "value": 0
//             }
//         ],
//         "datasetInterval": 1,
//         "datasetType": "minute"
//     }
// }
//
var y = [{"steps_value": 23, "time": "06:00:00", "steps_all": "0", "dateTime": "2017-02-25"}, {"steps_value": 0, "time": "06:01:00", "steps_all": "0", "dateTime": "2017-02-25"}, {"steps_value": 0, "time": "06:02:00", "steps_all": "0", "dateTime": "2017-02-25"}, {"steps_value": 0, "time": "06:03:00", "steps_all": "0", "dateTime": "2017-02-25"}]
//
var sum = y.reduce((a, b) => a + b["steps_value"], 0);
console.log(sum); // 6
//
// console.log([1,2,3,4,5].reduce((a,b) => a + b, 0 ))

// var allbooks = friends.reduce(function(prev, curr) {
//   return prev+curr.age;
// }, [10]);
//
//
// var maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
// var maxCallback2 = ( max, cur ) => Math.max( max, cur );
//
// // reduce() without initialValue
// [ { x: 22 }, { x: 42 }, { x: 234 }  ].reduce( maxCallback ); // 42
// [ { x: 22 }            ].reduce( maxCallback ); // { x: 22 }
// [                      ].reduce( maxCallback ); // TypeError
//
// // map/reduce; better solution, also works for empty arrays
// [ { x: 22 }, { x: 42 } ].map( el => el.x )
//                         .reduce( maxCallback2, -Infinity );

// var z= []
// var dateTime = x["activities-steps"][0]["dateTime"];
// var steps_all = x["activities-steps"][0]["value"];
