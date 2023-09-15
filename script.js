function firstNonRepeatedChar(str) {
 // Write your code here
	let mp = {};
	for ( let i =0; i < str.length; i++ ){
		if(mp[str[i]] != undefined ){
			mp[str[i]] += 1;
		}
		else{
			mp[str[i]] = 1;
		}
	}
	for ( let i = 0; i < str.length; i++ ){
		if(str[i] == 1){
			return str[i];
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
