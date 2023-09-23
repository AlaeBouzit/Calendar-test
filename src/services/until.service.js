const OFFSET_VALUE = 540;
const MAX_VALUE = 1260;

export const getMinutesFromHoursString = (hour) => {
	const timeParts = hour.split(':');
	return Number(timeParts[0]) * 60 + Number(timeParts[1]);
};
export const getIndexOfElementInTableOfTables = (arrOfItems, arr) => {
	let res = -1;
	arrOfItems.forEach((item) => {
		arr.forEach((childArr, index) => {
			const test = childArr.findIndex((element) => element.id === item.id);
			if (test !== -1) res = index;
		});
	});
	return res;
};
export const sortArrayOfArraysById = (arrayofArrays) => {
	return arrayofArrays.sort((array1, array2) => {
		let id1 = array1[0].id;
		array1.forEach((elementArray1) => {
			if (elementArray1.id < id1) id1 = elementArray1.id;
		});
		let id2 = array2[0].id;
		array2.forEach((elementArray2) => {
			if (elementArray2.id < id2) id2 = elementArray2.id;
		});
		return id1 - id2;
	});
};
export { MAX_VALUE, OFFSET_VALUE };
