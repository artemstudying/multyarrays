
var multiArr = [

    [16,-37,54,-4,72],

    [-56,47,4,-16,25],

    [-37,46,4,-51,27],

    [-63,4,-54,76,-4],

    [12,-35,4,47]

];

//Найти сумму и количество положительных элементов.
function summAndQuantity(arr){
	var summ = 0;
	var qantity = 0;
	
	for( var i = 0; i < arr.length; i++){
//		console.log(arr[i]);
		for( var j = 0; j < arr[i].length; j++){
//			console.log(arr[i][j]);
			if(arr[i][j] > 0){
				summ = summ + arr[i][j];
				qantity++;
			}
		}
	}
	console.log(summ, qantity);
}

//Найти минимальный элемент массива и его порядковый номер.
function minAndIndex(arr){
	var max = Infinity;
	var index1 = 0;
	var index2 = 0;
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			if(arr[i][j] < max){
				max = arr[i][j];
				index1 = i;
				index2 = j;
			}
		}
	}
	console.log(max, index1 + ":" + index2);
}
//Найти максимальный элемент массива и его порядковый номер.
function maxAndIndex(arr){
	var max = -Infinity;
	var index1 = 0;
	var index2 = 0;
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			if(arr[i][j] > max){
				max = arr[i][j];
				index1 = i;
				index2 = j;
			}
		}
	}
	console.log(max, index1 + ":" + index2);
}

//Определить количество отрицательных элементов.
function countOfPositive(arr){
	var count = 0;
	
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			if(arr[i][j] < 0){
				count++;
			}
		}
	}
	console.log(count);
}
//Найти количество нечетных положительных элементов.
function countOfPositiveOdd(arr){
	var countOdd = 0;
	
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			if(arr[i][j] > 0 && arr[i][j] % 2){
				countOdd++;
			}
		}
	}
	console.log(countOdd);
}

//Найти количество четных положительных элементов.
function countOfPositiveEven(arr){
	var countEven = 0;
	
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			if(arr[i][j] > 0 && !(arr[i][j] % 2)){
				countEven++;
			}
		}
	}
	console.log(countEven);
}

//Найти сумму четных положительных элементов.
function summOfPositiveEven(arr){
	var summ = 0;
	
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			if(arr[i][j] > 0 && !(arr[i][j] % 2)){
				summ += arr[i][j];
			}
		}
	}
	console.log(summ);
}

//Найти сумму нечетных положительных элементов.
function summOfPositiveOdd(arr){
	var summ = 0;
	
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			if(arr[i][j] > 0 && arr[i][j] % 2){
				summ += arr[i][j];
			}
		}
	}
	console.log(summ);
}

//Найти произведение положительных  элементов.
function multyplyOfPositive(arr){
	var multiply = 1;
	
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			if(arr[i][j] > 0){
				multiply *= arr[i][j];
			}
		}
	}
	console.log(multiply);
}

//Найти определить количество элементов, равных 4.
function countOfFour(arr){
	var count = 0;
	
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			if(arr[i][j] === 4){
				count++;
			}
		}
	}
	console.log(count);
}
//Найти наибольший среди элементов массива, остальные обнулить.
function findMaxElem(arr){
	var maxElem = 0;
	var zerro = 0;
	
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			if(arr[i][j] > maxElem){
				maxElem = arr[i][j];
			}
		}
	}
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			if(arr[i][j] < maxElem){
				arr[i][j] = zerro;
			}
		}
	}
	console.log(maxElem, arr);
}
//summAndQuantity(multiArr);
//minAndIndex(multiArr);
//maxAndIndex(multiArr);
//countOfPositive(multiArr);
//countOfPositiveOdd(multiArr);
//countOfPositiveEven(multiArr);
//summOfPositiveEven(multiArr);
//summOfPositiveOdd(multiArr);
//multyplyOfPositive(multiArr);
//countOfFour(multiArr);
findMaxElem(multiArr);



