$(function(){
	$('#add').on('click',function(){
		var input = $('#input').val()
		$('#content').append(`
				<tr>
					<td class="checkbox"></td>
					<td class="ip">`+input+`</td>
					<td class="btn"><i class="fa fa-times" aria-hidden="true"></i></td>
				</tr>`)	
		$('#input').val('')	
	})

	// $('.btn').click(function(){
	// 	$(this).parent().remove();
	// })


	$('body').on('click','.btn',function(){
		$(this).parent().remove();
	})



	$('body').on('click','tr',function(){
		var check = $(this).children('.checkbox').html()
		if (check == ''){
			$(this).children('.checkbox').html('<i class="fa fa-check" aria-hidden="true"></i>')
			$(this).css('background','#888888')
			$(this).css('color','white')
			$(this).css('text-decoration','line-through')
		}else{
			$(this).children('.checkbox').html('')
			$(this).css('background','white')
			$(this).css('color','black')
			$(this).css('text-decoration','none')
		}
	})
})