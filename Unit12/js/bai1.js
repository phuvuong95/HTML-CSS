$(function(){
	var index = 1;
	$('#button2').on('click',function(){
		
		if(index==1){
			if(checkForm1()){
				$('.form'+index).css('display','none')
				index ++;
				$('.form'+index).css('display','block')
			}
		}
		if(index==2){
			if(checkForm2()){
				$('.form'+index).css('display','none')
				index ++;
				$('.form'+index).css('display','block')
			}
		}
		if(index==3){
			if(checkForm3()){
				$('.form'+index).css('display','none')
				index ++;
				$('.form'+index).css('display','block')
			}
		}
		if (index == 4) {
			if(checkForm4()){
				alert('Da dien thanh cong!')
			}
		}

	})
	$('#button1').on('click',function(){
		if(index==1){
			checkForm1()
		}
		if(index==2){
			if(checkForm2()){
				$('.form'+index).css('display','none')
				index --;
				$('.form'+index).css('display','block')
			}
		}
		if(index==3){
			if(checkForm3()){
				$('.form'+index).css('display','none')
				index --;
				$('.form'+index).css('display','block')
			}
		}
		if (index == 4) {
			if(checkForm4()){
				$('.form'+index).css('display','none')
				index --;
				$('.form'+index).css('display','block')
			}
		}
	})

	function checkForm1(){
		var flag = 1;
		return flag;
	}
	function checkForm2(){
		
	}
	function checkForm3(){
		
	}
	function checkForm4(){
		
	}
})