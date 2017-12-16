//closure example
var counter = (function(){

	var privateCount = 0;

	function changeByVal(val){
		privateCount += val;
	}

	return {
		increment: function(){
			changeByVal(1);
		},

		decrement: function(){
			changeByVal(-1);
		},

		value: function(){
			return privateCount;
		}
	}
})();


console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value()); 
counter.decrement();
console.log(counter.value()); 