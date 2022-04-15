$(function() {
    $("#txtbox").keyup(function(event) {
            if (event.keyCode === 13) {
                $("#enter").click();
            }
        }
    );
    $("#txtbox").focus();
    $("#txtbox").autocomplete({
        source: keys
    });
	$( function() {
		$( "#dialog" ).dialog({autoOpen:false});
	} );
	nextClue();
});
function showFaqs(){
	$("#dialog").dialog('open');
	
}
var gs = 1;
var tries=0;
function copyToCB(){
	  navigator.clipboard.writeText("Poetle #???: \n"+"\uD83D\uDFE5".repeat(tries-1)+"\uD83D\uDFE9");

}
function valueEntered() {
    if (gs == 6) return;

    var ne = document.getElementById('g' + gs);
    var txtbox = document.getElementById('txtbox');
    if (!keys.includes(txtbox.value)) {
        alert("not a valid poet");
        return;
    }
    ne.textContent = txtbox.value;
    if(txtbox.value==keyNow){
		alert("You got it");
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
			$(".hiddenBox").html("Someone did a fucky yucky uwu ~murr~ The answer was: <b>"+ keyNow+"</b>");
			$(".hiddenBox").css("display","block");
		}
	}
	txtbox.value = "";
    gs += 1;
    txtbox.focus();
   
}