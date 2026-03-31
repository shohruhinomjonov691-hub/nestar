// MIT TASK
/*
 TASK ZJ:

 Shunday function yozing, u berilgan array ichidagi
 raqamlarni qiymatini hisoblab qaytarsin.

 MASALAN: reduceNestedArray([1, [1, 2, [4]]]); return 8;

 Yuqoridagi misolda, array nested bo'lgan holdatda ham,
 bizning function ularning yig'indisini hisoblab qaytarmoqda.
*/

/*Masalani yechimi  */
function reduceNestedArray(arr: any[]): number {
	let sum = 0;

	for (const item of arr) {
		if (Array.isArray(item)) {
			sum += reduceNestedArray(item);
		} else if (typeof item === 'number') {
			sum += item;
		}
	}

	return sum;
}

console.log(reduceNestedArray([1, [1, 2, [4]]]));
console.log(reduceNestedArray([1, 2, [1, 2, [4, 5]], 3, 4]));
console.log(reduceNestedArray([1, [1, 2, 3, [4]]]));
