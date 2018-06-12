$(document).ready(function(){
	$("#mostre-mais").hide();
	$("#ler-menos").hide();

	$("#ler-mais").click(function(e){

		$("#mostre-mais").show();
		$(this).hide();
		$("#ler-menos").show();
	});

	$("#ler-menos").click(function(e){
		$("#mostre-mais").hide();
		$(this).hide();
		$("#ler-mais").show();
	});

});

