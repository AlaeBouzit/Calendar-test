import * as React from 'react';
import { DayCalendarStyles } from './styles.js';
import TaskPannel from './TaskPannel.jsx';
import { hours } from './../data/data';
import {
	getGroupOfOverlapsTasks,
	getGroupOfNotOverlapingTasksInGroupOfTasks
} from './../services/input.service';
import { getTabOfTimeInMinutes } from './../services/data.service';

function DayCalendar() {
	return (
		<div style={DayCalendarStyles.calendarWrapper}>
			<div style={DayCalendarStyles.hoursWrapper}>
				{hours.map((hour, index) => (
					<div style={DayCalendarStyles.hourWrapper} key={index}>
						<p style={DayCalendarStyles.hourText}>{hour}</p>
					</div>
				))}
			</div>
			<TaskPannel
				input={getGroupOfNotOverlapingTasksInGroupOfTasks(
					getGroupOfOverlapsTasks()
				)}
				hours={getTabOfTimeInMinutes(hours)}
			/>
		</div>
	);
}
export default DayCalendar;
