function dan(x, y){
    console.log(x + ' * ' + y + ' = ' + (x * y) );
}

for(var x = 2; x <= 9; x++){
	for(var y = 1; y <= 9; y++) {
		dan(x, y);
	}
	console.log('');
}