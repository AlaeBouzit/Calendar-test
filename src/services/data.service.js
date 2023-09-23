import { getMinutesFromHoursString } from './until.service';

export const getTabOfTimeInMinutes = (hours) =>
	hours.map((item) => {
		return getMinutesFromHoursString(item);
	});
