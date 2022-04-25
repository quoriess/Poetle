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

var keyNow=keys[getRandomInt(0,keys.length)];

var dt=poetsData[keyNow];
dt.sort(function(a, b) {
    return a.JValue-b.JValue;
});
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
