function split (wholeArray) {

var firstHalf = (wholeArray.slice(0, (wholeArray.length/2)));
var secondHalf = (wholeArray.slice(wholeArray.length/2));



  return [firstHalf, secondHalf];
}


function merge(firstHalf, secondHalf) {

	let len = firstHalf.length + secondHalf.length;
	var newArr = [];

	for (var i = 0; i < len; i++){


			if(firstHalf[0] > secondHalf[0]){

				newArr.push(secondHalf[0]);
				secondHalf.shift();

			}

			else if(secondHalf[0] > firstHalf[0]){

				newArr.push(firstHalf[0])
				firstHalf.shift(); 
			}

	}
		
			if (firstHalf.length === 0){
				for (let j = 0; j < secondHalf.length; j++){
					newArr.push(secondHalf[j]);
				}
			}
			if (secondHalf.length === 0){
				for (let k = 0; k < firstHalf.length; k++){
					newArr.push(firstHalf[k]);
				}
			}

	return newArr;

}


function mergeSort(array) {

	if (array.length <= 1){
		return array; 
	}

	var splitArrays = split(array);
	var leftArr = splitArrays[0];
	var rightArr = splitArrays[1];

	return merge(mergeSort(leftArr), mergeSort(rightArr));

}


