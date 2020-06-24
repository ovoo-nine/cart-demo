var s = function(a){
	return function(b){
		return a+b;
	}
}





var s=function(a){
	var sum=0;
	for(var i=0;i<arguments.length;i++){
		sum=sum+arguments[i];
	}
	return sum;
}


var s=function(a){
	return function(...args){
		for(var i=0,sum=a;i<args.length;i++){
			sum=sum+args[i];
		}
		return sum;
	}
};
var t =s(12);
console.log(t(15));



var s=function(a){
	return function(...args){
		sum=a;
		args.forEach(function(val,index,args){
			sum=sum+val;
		})
		return sum;

	}
};
var t =s(12);
console.log(t(15));


var num=[1,5,9];
var sum =0;
num.forEach(function(e){
	sum=sum+e;
});
console.log(sum);