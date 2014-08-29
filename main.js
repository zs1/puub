// main.js
var client = new ZeroClipboard( document.getElementById("copy-button") );

client.on( "ready", function( readyEvent ) {
  // alert( "ZeroClipboard SWF is ready!" );

  client.on( "aftercopy", function( event ) {
    // `this` === `client`
    // `event.target` === the element that was clicked
    event.target.style.display = "none";
    f=navigator.userAgent.search("Firefox");
    if(f>-1){
    document.getElementById("yesFF").style.display = 'block';
    } else {
    document.getElementById("yes").style.display = 'block';
     }
  } );
} );
