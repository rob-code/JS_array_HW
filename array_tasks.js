var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var resultArray = [];
		arr.forEach(function(item){
				resultArray.push(item * item)
		})
		return resultArray;
	},

	sum: function (arr) {
		var sum = 0;
		arr.forEach(function(item){
			sum += item
		})
			return sum
	},

	findDuplicates: function (arr) {

		//this approach only works for ordered arrays
		arr.sort();

		var resultArray = [];
			for (var i of arr){
			if (arr[i+1] == arr[i]){
				resultArray.push(arr[i]);
				}
			}

			for (var i = 0; i < resultArray.length; i++){
				if (resultArray[i+1] == resultArray[i]){
						resultArray.splice(i+1);		
				}
			}
			return resultArray
	},

	removeAndClone: function (arr, valueToRemove) {
			var result = new Array
			for (var i = 0; i < arr.length; i++){
				if (arr[i] != valueToRemove){
					result.push(arr[i]);
					}
			}
			return result
	},

	findIndexesOf: function (arr, itemToFind) {
		var result = new Array
		for (var i = 0; i < arr.length; i++){
			if (arr[i] == itemToFind){
				result.push(i);
				}
		}
		return result


	},

	sumOfAllEvenNumbersSquared: function (arr) {

		var sum = 0;
		
		for (var i = 0; i < arr.length; i++){
			if (arr[i] % 2 === 0 ){

				sum += arr[i] * arr[i];
				}
		}
		
		return sum


	}

}

module.exports = arrayTasks
