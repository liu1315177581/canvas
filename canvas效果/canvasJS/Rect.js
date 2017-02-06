function Rect(ctx,y,ele,x,nunmber){
	this.ele = ele;
	this.ctx = ctx;
	this.x = x;
	this.y = y;
	this.nunmber = nunmber;
	this.arr = [];
	this.n = 1;
	this.timer = null;
	this.newArr = this.addArr();
	this.newArr1 = this.newArr.concat().reverse().slice(0,nunmber);
	this.drawframe();

}
Rect.prototype.addArr = function(){
	for(var j = 0; j<100; j++){
		var p = {};
		p.y = -this.y*j/50;
		this.arr.push(p);
	}
	return this.arr;
}
Rect.prototype.drawframe = function(){
	this.timer = requestAnimationFrame($.proxy(this.drawframe,this),this.ele);
	this.n++;
	this.ctx.fillStyle = 'blue';
	if(this.nunmber == undefined){
		this.ctx.fillRect(this.x,0,50,this.newArr[this.n].y);
		if(this.n>=this.newArr.length-1){
			cancelAnimationFrame(this.timer);
		}
	}else{
		this.ctx.fillRect(this.x,0,50,this.newArr1[this.n].y);
		if(this.n>=this.newArr1.length-1){
			cancelAnimationFrame(this.timer);
		}
	}
}