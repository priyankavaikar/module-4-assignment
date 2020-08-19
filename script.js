(function (window)
{
  var name=["John","Sunny","jack","sam","victor","Peter"];
  for(var i in name){
    var firstletter=((name[i]).charAt(0)).toLowerCase();
    if(firstletter==='j')
      window.byeSpeaker.speak(name[i]);
    else
      window.helloSpeaker.speak(name[i]);
    
  }

})(window);