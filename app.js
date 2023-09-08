var date = new Date (Date.UTC (
    new Date ().getUTCFullYear (),
    new Date ().getUTCMonth (),
    new Date ().getUTCDate (),
    new Date ().getUTCHours (),
    new Date ().getUTCMinutes (),
    new Date ().getUTCSeconds ()
  ));
  var utcTime = date.toUTCString ();  
  document.getElementById ("cut").innerHTML = utcTime;



  // const timeZoneTransformer = (stringDate, timeZone = "Africa/Lagos") => {
  //   const now = new Date();
  //   const serverDate = new Date(stringDate);
  //   const utcDate = new Date(
  //     Date.UTC(
  //       serverDate.getFullYear(),
  //       serverDate.getMonth(),
  //       serverDate.getDate(),
  //       serverDate.getHours(),
  //       serverDate.getMinutes(),
  //       serverDate.getSeconds()
  //     )
  //   );
  //   const invdate = new Date(
  //     serverDate.toLocaleString("en-AF", {
  //       timeZone,
  //     })
  //   );
  //   const diff = now.getTime() - invdate.getTime();
  //   const adjustedDate = new Date(now.getTime() - diff);
  //   return {
  //     toUtc: utcDate,
  //     fromUtc: adjustedDate,
  //   };
  // };
  // const fromUtc = timeZoneTransformer("2022-09-08T23:23:23.000").fromUtc;
  // console.log(fromUtc);
  // const toUtc = timeZoneTransformer(fromUtc).toUtc;
  // console.log(toUtc);
  // document.getElementById('tz').innerHTML = fromUtc

  
  var date = new Date(); 
  var now_utc =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
  date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
  var dt = new Date(now_utc);
  let utcDate = new Date(dt.toLocaleString('en-NG', { timeZone: "UTC" }));
  let tzDate = new Date(dt.toLocaleString('en-NG', { timeZone: "Africa/Lagos" }));
  let offset1 = utcDate.getTime() - tzDate.getTime();
  let offset2 = offset1/60000;
  let o1 = Math.abs(offset2);
  // console.log(offset2)
  var offsetValue1 =  (offset2 < 0 ? "+" : "-") + ("00" + Math.floor(o1 / 60)).slice(-2) + ("00" + (o1 % 60)).slice(-2);
  // console.log(offsetValue1)
  dt.setTime(dt.getTime() - offset1);
  console.log(dt.toISOString());
  console.log(dt.toISOString().slice(0,-1)+offsetValue1);
 document.getElementById('tz').innerHTML = dt.toISOString().slice(0,-1)




let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()]
console.log(weekday);
document.getElementById('day').innerHTML = weekday;
