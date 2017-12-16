//maximum length of substring
function getMaxLen(str) {
	let i = 0, j = 0, max = 0, mysetCh = new Set();
	while (j < str.length) {
		if (!(mysetCh.has(str.charAt(j)))) {
			mysetCh.add(str[j++]);
			max = Math.max(max, mysetCh.size);
		}else{
			mysetCh.delete(str.charAt(i++));
		}
	}
	//console.log('mysetCh', mysetCh);
	return max;
} 
console.log(getMaxLen("ABDEFGABEF"));
       