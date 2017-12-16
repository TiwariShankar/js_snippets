//binary search 
let arr = ['1', '22', '3', '14', '5'];
let num = '1';

function bst(arr, num){
	let mid_pos,
		min = 0,
		max = arr.length;

	while(min <= max){
		mid_pos = Math.floor((min + max) / 2);
		if(arr[mid_pos] === num){
			return num
		}
		else if(arr[mid_pos] < num){
			min = mid_pos + 1;
		}else{
			max = mid_pos - 1;
		}
	}

	return -1;
	
}

console.log(bst(arr, num))