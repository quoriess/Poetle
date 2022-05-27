function getCurrentDate() {
  const t = new Date();
  const date = ('0' + t.getUTCDate()).slice(-2);
  const month = ('0' + (t.getUTCMonth() + 1)).slice(-2);
  const year = t.getUTCFullYear();
  return date+"/"+month+"/"+year;
}
var rngGen=new Math.seedrandom(getCurrentDate());
function getRandomInt(min,max) {
  return min+Math.floor(rngGen() * (max-min));
}
var arm=new Math.seedrandom("amogus");
var t1=new Date(2022,3,30);
var nw=new Date();
var utct1=new Date(t1.getUTCFullYear(),t1.getUTCMonth(),t1.getUTCDate());
var utcd=new Date(nw.getUTCFullYear(),nw.getUTCMonth(),nw.getUTCDate())
var dayNo= (Math.floor((utcd-utct1)/(24*3600*1000))+1);
console.log(dayNo);
var shuffledKeys = keys
	  .map(value => ({ value, sort:  arm() }))
	  .sort((a, b) => a.sort - b.sort)
	  .map(({ value }) => value);
var keyNow=shuffledKeys[dayNo%keys.length];
var dt=poetsData[keyNow];
dt.sort(function(a, b) {
    return a.JValue-b.JValue;
});

function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime() - date.getTimezoneOffset()*60*1000);
    return newDate;   
}
function cookieDate(d) {
  function d2(n) { return n < 10 ? '0' + n : n; }
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return '' +
    days[d.getUTCDay()] + ', ' +
    d2(d.getUTCDate()) + '-' +
    months[d.getUTCMonth()] + '-' +
    d.getUTCFullYear() + ' ' +
    d2(d.getUTCHours()) + ':' +
    d2(d.getUTCMinutes()) + ':' +
    d2(d.getUTCSeconds()) + ' GMT';
}
function setCookie(cname, cvalue) {
  var nw=new Date();
  var f=new Date(nw.getUTCFullYear(),nw.getUTCMonth(),nw.getUTCDate()+1);
  let expires = "expires="+f.toString()+" GMT";
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function load(){
	var s=1;
	while(getCookie("g"+s)!=""){
		nextClue();
		var ne = document.getElementById('g' + s);
		ne.textContent=getCookie("g"+s)=="___"?"":getCookie("g"+s);
		if(getCookie("g"+s)==keyNow){
			$("#g"+s).css("background-color","green");
			tries=clueNo-1;
			while(clueNo<=6)nextClue();		
			$(".hiddenBox").html("You guessed it right. Shame! <button style='float:right' onclick='copyToCB()'>Share</button>");
			$(".hiddenBox").css("display","block");
			return;
		}
		$("#g"+s).css("background-color","red");
		if(clueNo==6){
			document.getElementById("enter").disabled = true;
			$(".hiddenBox").html("Congrats, you failed! The answer was: <b>"+ keyNow+"</b>");
			$(".hiddenBox").css("display","block");
		}
		s+=1;
	}
}

var lastSlice=2;
var slice=Math.floor((dt.length-lastSlice)/4);
var frs=[]
for (let i = 0; i < 4; i++) {
  var st=i*slice;
  var end=i==3?dt.length-lastSlice:i*slice+slice;
  var rnm=getRandomInt(i*slice,end);
  console.log(rnm);
  frs.push(dt[rnm].Text)
}
var a=getRandomInt(dt.length-lastSlice,dt.length)
console.log(a);
frs.push(dt[a].Text)
var clueNo=0;
function nextClue(){
	if(clueNo==5)return;
	var ne = document.getElementById('q'+(clueNo+1));
	ne.textContent=frs[clueNo];
	clueNo+=1;
}
