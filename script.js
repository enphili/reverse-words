const  reverseWords = (str, l = 4) => {
	let words = str.trim().split(' ');
	words = words.map(word => {
		if (word.length > l) {
			return word.split('').reverse().join('');
		} else {
			return word
		}
	})
	return words.join(' ');
};

console.log(reverseWords('имеющее ровно два различных натуральных делителя', 9)); // имеющее ровно два различных хыньларутан делителя
