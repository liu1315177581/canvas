;(function(){
	//画箭头的js
	function Arrow(){
		this.x = 0;		//初始位置
		this.y = 0;
		this.rotation = 0;  //初始旋转角度
		this.color = "#ffff00";  //初始颜色
	}
	Arrow.prototype.draw = function(context){
		context.save();
        context.translate(this.x , this.y); //将坐标移到this.x 和 this.y
        context.rotate(this.rotation); //设置旋转角度
        context.lineWidth = 5;  //设置线宽
        context.fillStyle = this.color; //设置填充色
        context.beginPath();  //路径开始
        context.moveTo(-50,-25);
        context.lineTo(0,-25);
        context.lineTo(0,-50);
        context.lineTo(50,0);
        context.lineTo(0,50);
        context.lineTo(0,25);
        context.lineTo(-50,25);
        context.closePath(); //路径闭合
        context.stroke(); //描边
        context.fill(); //填充
        context.restore();
	}

	/*
	调用的时候
	var 变量名 = new Arrow();
	设置样式：
		变量名.x = ; //设置位置
		变量名.color = ; 
	 */
})()