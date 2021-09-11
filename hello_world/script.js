$(function(){
	$('h1').click(function(){
		var texto = $('h1');
		texto.css('color', 'white');
	})
	$('h1').dblclick(function(){
		var texto = $('h1');
		texto.css('color', 'green');
	})
})