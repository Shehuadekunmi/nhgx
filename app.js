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