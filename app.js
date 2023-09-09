// var date = new Date (Date.UTC (
//     new Date ().getUTCFullYear (),
//     new Date ().getUTCMonth (),
//     new Date ().getUTCDate (),
//     new Date ().getUTCHours (),
//     new Date ().getUTCMinutes (),
//     new Date ().getUTCSeconds ()
//   ));
//   var utcTime = date.toUTCString ();  
//   document.getElementById ("cut").innerHTML = utcTime;


  var date = new Date(); 
  var now_utc =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
  date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
  var dt = new Date(now_utc);
  let utcDate = new Date(dt.toLocaleString('en-NG', { timeZone: "UTC" }));
  let tzDate = new Date(dt.toLocaleString('en-NG', { timeZone: "Africa/Lagos" }));
  let offset1 = utcDate.getTime() - tzDate.getTime();
  dt.setTime(dt.getTime() - offset1);
  console.log(dt.toISOString());
 document.getElementById('tz').innerHTML = dt.toISOString().slice(0, 19)+'Z'




let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()]
console.log(weekday);
document.getElementById('day').innerHTML = weekday;
