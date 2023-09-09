


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




let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]
console.log(weekday);
document.getElementById('day').innerHTML = weekday;
