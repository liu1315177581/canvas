function Rect(width,height,color,x){
	if(width === undefined) {width = 40;}
    if(color === undefined){color = '#00ff00';}
    this.x = x ? x : 0;
    this.width = width ? width : 0;
    this.height = height ? height : 0;
    this.vx = 0;
    this.vy = 0;
    this.color = color;
}
Rect.prototype.draw = function(context){
    context.fillStyle = this.color;
    context.fillRect(this.x,0,this.width,-this.height)
    context.fill();
}