
function Line(ele,arr1,color,lineWidth){
	var n = 1;
	var arr = init(arr1);
	var ctx = ele.getContext('2d');
	(function draw(){
		if(n < arr.length-1){
			window.requestAnimationFrame(draw,ele);
		}
		ctx.clearRect(0,0,ele.width,ele.height)
		ctx.save();
		ctx.moveTo(arr[n-1].x,arr[n-1].y);
		ctx.lineTo(arr[n].x,arr[n].y);
		ctx.lineWidth = lineWidth;
		ctx.strokeStyle = color;
		ctx.stroke();
		ctx.restore();
		n++;
	})()
}

function init(arr){
	var pointer = [];
	for(var i = 1; i<arr.length; i++){
		var dx = arr[i].x - arr[i-1].x;
		var dy = arr[i].y - arr[i-1].y;
		for(var j = 0; j<50; j++){
			var x = arr[i-1].x + dx*j/50;
			var y = arr[i-1].y + dy*j/50;
			pointer.push({
				x:x,
				y:y
			});
		}
	}
	return pointer;
}
