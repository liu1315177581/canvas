function Triangle(x,y){
	this.x = x ? x : 125;
	this.y = y ? y : 300;
	this.vx = 2;
}
Triangle.prototype.draw = function(content){
	content.save();
	content.beginPath();
	content.fillStyle = 'red';
	content.moveTo(0,-10);
	content.lineTo(200,-10);
	content.lineTo(this.x,-this.y);
	content.closePath();
	content.fill();
	content.restore();
}
