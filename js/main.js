$(document).ready(function(){

	$('#bt1').click(function(){
	$b =$( "#boneco");
	position=$b.position();
	newpleft=position.left+10;
	if (newpleft >900) {
	newpleft =900;
	}
	$b.css('left',newpleft+'px');
	})


	$('#bt2').click(function(){
	$b =$( "#boneco");
	position=$b.position();
	newpleft = position.left-30;
	 if (newpleft <40){
	 newleft=40;
	 }
	$b.css('left',newpleft+'px');
	})

	$('#bt3').click(function(){
	$b =$( "#boneco");
	position=$b.position();
	newpleft=position.top-30;
	if(newpleft < 40){
	newpleft=40;
	}
	$b.css('top',newpleft+'px');
	})

	$('#bt4').click(function(){
	$b =$( "#boneco");
	position=$b.position();
	newpleft=position.top+30;
	if(newpleft > 250){
	newpleft= 250;
	}
	$b.css('top',newpleft+'px');
	})
	});
