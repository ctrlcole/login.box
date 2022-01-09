	$("#click-me").on("click", function() {
		let password = $('#password').val();
		
		if (password.length < 8) {
			alert('Password must be > 8');
		}
	});

var count = 0;
	$("#click-me").on("click", function() {
		++count;
		//alert('Clicked ' + count + ' times');
		
		let username = $('#usrname').val();
		console.log(username);
		
		if (username === '') {
			alert('Cannot be blank');
		}
	})
