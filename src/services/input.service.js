import { input } from '../data/input';
import {
	getIndexOfElementInTableOfTables,
	getMinutesFromHoursString,
	sortArrayOfArraysById
} from './until.service';

export const getInputWithStartInMinutes = () => {
	const inputClone = [...input];
	return inputClone.map((item) => {
		item.startInMinutes = getMinutesFromHoursString(item.start);
		return item;
	});
};
/* 
	getGroupOfOverlapTasks()
	return block of tasks that represent timeSplot in the calendar , 
	without grouping tasks that overlap specificly
*/
export const getGroupOfOverlapsTasks = () => {
	const inputClone = [
		...getInputWithStartInMinutes(input).sort((a, b) => b.duration - a.duration)
	];

	let result = [];
	inputClone.forEach((item) => {
		const filterItems = inputClone.filter(
			(element) =>
				item.startInMinutes <= element.startInMinutes &&
				item.startInMinutes + item.duration > element.startInMinutes
		);
		/*
		 element in the filter Items existe already in an array in the result
		 concat the result with the filterItems if existe else push in the result 
		*/
		const indexInResult = getIndexOfElementInTableOfTables(filterItems, result);
		if (indexInResult !== -1) {
			result[indexInResult] = [...result[indexInResult], ...filterItems].sort(
				(a, b) => a.duration - b.duration
			);
		} else {
			result.push(filterItems);
		}
	});

	result = deleteDoublonsFromOverlappingGroupOfTasks(result);
	return result;
};
/*
	deleteDoublonsFromOverlappingGroupOfTasks(result)
	delete doublons from the result of GroupOfTasks
*/
const deleteDoublonsFromOverlappingGroupOfTasks = (result) => {
	const resultClone = [...result];
	return resultClone.map((element) =>
		(element = element.filter((obj, index) => {
			return index === element.findIndex((o) => obj.id === o.id);
		})).sort((a, b) => a.id - b.id)
	);
};
/*
	getGroupOfNotOverlapingTasksInGroupOfTasks(result)
	group not OverLaping Tasks in the groupOfTasks
*/
export const getGroupOfNotOverlapingTasksInGroupOfTasks = (tasksGroup) => {
	let result = [];

	tasksGroup.forEach((taskGroup) => {
		const resultElement = [];
		taskGroup.forEach((item) => {
			const filterItems = taskGroup.filter(
				(element) =>
					item.startInMinutes < element.startInMinutes &&
					item.startInMinutes + item.duration <= element.startInMinutes
			);

			resultElement.push([item, ...filterItems].sort((a, b) => a.id - b.id));
		});
		resultElement.sort((a, b) => b.length - a.length);

		if (resultElement.length > 0)
			result.push(groupOverlapingUniqueTasks(taskGroup, resultElement));
	});

	return result;
};

/*
	groupOverlapingUniqueTasks
	delete doublons based on unique ids in the task group array
*/
const groupOverlapingUniqueTasks = (taskGroup, resultElement) => {
	const taskGroupClone = [...taskGroup];
	const result = [];
	resultElement.forEach((overLapingTasks) => {
		const tab = [];
		overLapingTasks.forEach((task) => {
			let taskInTaskGroup = [];
			const index = taskGroupClone.findIndex(
				(element) => task.id === element.id
			);
			if (index !== -1) {
				taskInTaskGroup = task;

				taskGroupClone.splice(index, 1);
			}
			if (taskInTaskGroup && taskInTaskGroup.id) tab.push(taskInTaskGroup);
		});

		if (tab.length > 0) result.push(tab);
	});

	return sortArrayOfArraysById(result);
};
