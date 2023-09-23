import { MAX_VALUE, OFFSET_VALUE } from './../services/until.service';
const BLACK_TEXT = '#130C05';
const LIGHT_GREY = '#EFEFEF';
const PRIMARY = '#2479D1';
const BORDER_HORIZENTAL_OFFSET = '2px';

export const DayCalendarStyles = {
	calendarWrapper: {
		display: 'flex',
		height: '100%',
		minHeight: '400px',
		minWidth: '300px'
	},
	hoursWrapper: {
		height: `100vh`,
		display: 'flex',
		flexDirection: 'column',
		minHeight: '400px'
	},
	hourWrapper: {
		backgroundColor: 'white',
		flex: 1,
		borderWidth: 1,
		borderColor: LIGHT_GREY,
		borderStyle: 'solid',
		overflow: 'hidden',
		padding: '0px 20px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	hourText: {
		fontSize: '18px',
		fontWeight: '600',
		textAlign: 'center',
		margin: '0',
		color: BLACK_TEXT
	}
};

export const TaskPannelStyles = {
	taskPannelWrapper: {
		backgroundColor: LIGHT_GREY,
		flex: 1,
		position: 'relative'
	},
	tasksWrapper: {
		color: 'white',
		display: 'flex',
		textAlign: 'center'
	},
	notOverlapingtasksWrapper: {},
	taskWrapper: {
		position: 'absolute',
		backgroundColor: PRIMARY,
		overflow: 'hidden',
		borderWidth: 1,
		borderColor: 'white',
		borderStyle: 'solid',
		borderRadius: 7,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	taskText: {
		margin: 0
	},

	taskPosition: (input, index, length) => {
		const top =
			(((input.startInMinutes - OFFSET_VALUE) / (MAX_VALUE - OFFSET_VALUE)) *
				1200) /
			13;

		return {
			height: `calc( ${
				((input.duration / (MAX_VALUE - OFFSET_VALUE)) * 1200) / 13
			}%)`,
			left: `${(100 / length) * index}%`,
			width: `calc(${100 / length}% - ${BORDER_HORIZENTAL_OFFSET})`,
			top: `${top}%`
		};
	}
};
