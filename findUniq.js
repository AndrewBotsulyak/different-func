/*
Допустим есть массив строк. Все строки содержар одинаковые символы, кроме одной строки.
Надо написать функцию, которая будет принимать этот массив и находить это слово.
Строки могут содержать пробелы, их нужно игнорировать, только non-spaces символы имеют значение.
Гарантировано, что массив будет содержать больше 3 строк
Примр:
findUniq([ 'abc', 'acb', 'bac', 'test', 'bca', 'cab', 'cba' ]) === 'test'

*/

function findUniq(arr){
	let arr2 = arr3 = [];
	arr3 = arr.map(el => {  	 //  remove spaces
		el = el.replace(/\s+/g,'');
			return el.split('').sort().join(''); 
	});
	arr3.reduce((prev, curr, index)=>{
		if(prev !== curr){
			arr2.push(index - 1, index);
			return curr;
		}
		return curr;
	});
	return (arr2.length > 2) ? arr[arr2[1]] : arr[arr2[0]]; 
}


console.log(findUniq(['b ac', 'test', 'abc', 'a    c  b', 'b ac', ' abc', 'bca ', 'c a b', 'cba' ]));

//asdasdsa
//asdasd
//asdasd

console.log('asdsad');