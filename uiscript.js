var uiKeys=[];
$(function() {
    $("#txtbox").keyup(function(event) {
            if (event.keyCode === 13) {
                $("#enter").click();
            }
        }
    );
    $("#txtbox").focus();
	uiKeys=keys.map((x)=>x);
	uiKeys.push("");
    $("#txtbox").autocomplete({
        source: uiKeys
    });
	$( function() {
		$( "#dialog" ).dialog({autoOpen:false});
	} );
	nextClue();
	//load();
});
function showFaqs(){
	$("#dialog").dialog('open');
	
}
var gs = 1;
var tries=0;
function copyToCB(){
	var t1=new Date(2022,3,26);
	  var s= Math.floor((new Date()-t1)/(24*3600*1000))+1;
	  navigator.clipboard.writeText("Poetle #"+s+": \n"+"\uD83D\uDFE5".repeat(tries-1)+"\uD83D\uDFE9");

}
function valueEntered() {
    if (gs == 6) return;
	console.log(gs)
    var ne = document.getElementById('g' + gs);
    var txtbox = document.getElementById('txtbox');
    if (!uiKeys.includes(txtbox.value)) {
        alert("not a valid poet");
        return;
    }
    ne.textContent = txtbox.value;
	setCookie("g"+clueNo,txtbox.value==""?"___":txtbox.value);
    if(txtbox.value==keyNow){
		tries=gs;
		$("#g"+gs).css("background-color","green");
		while(clueNo<5)nextClue();
		$(".hiddenBox").html("Well done! <button style='float:right' onclick='copyToCB()'>Share</button>");
		$(".hiddenBox").css("display","block");
	}
	else{
		$("#g"+gs).css("background-color","red");
		nextClue();
		if (gs == 5) {
			document.getElementById("enter").disabled = true;
			$(".hiddenBox").html("The answer was: <b>"+ keyNow+"</b>");
			$(".hiddenBox").css("display","block");
		}
	}
	txtbox.value = "";
    gs += 1;
    txtbox.focus();
   
}