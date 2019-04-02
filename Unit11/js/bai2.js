$(function(){
	$('button').click(function(){
		var check = $(this).html();
		if(check == '<i class="fas fa-plus"></i>'){
			$(this).html('<i class="fas fa-minus"></i>');
			$(this).css('color','#83A529')
			$(this).parent().next().show(1000);
		}else {
			$(this).html('<i class="fas fa-plus"></i>');
			$(this).parent().next().hide(1000);
		}
	})
})