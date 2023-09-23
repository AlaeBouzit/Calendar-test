import * as React from 'react';
import { TaskPannelStyles } from './styles.js';

function TaskPannel(props) {
	const [tasks] = React.useState(props.input);

	return (
		<div style={TaskPannelStyles.taskPannelWrapper}>
			{tasks.map((tasksGroup, tgIndex) => (
				<div style={TaskPannelStyles.tasksWrapper} key={`taskGroup-${tgIndex}`}>
					{tasksGroup.map((notOverlapingTasks, noltIndex) => (
						<div
							style={TaskPannelStyles.notOverlapingtasksWrapper}
							key={`notOverlapingTasks-${tgIndex}-${noltIndex}`}
						>
							{notOverlapingTasks.map((task, tIndex) => (
								<div
									style={{
										...TaskPannelStyles.taskWrapper,
										...TaskPannelStyles.taskPosition(
											task,
											noltIndex,
											tasksGroup.length
										)
									}}
									key={`task-${tgIndex}-${noltIndex}-${tIndex}`}
								>
									<p style={TaskPannelStyles.taskText}>{task.id}</p>
								</div>
							))}
						</div>
					))}
				</div>
			))}
		</div>
	);
}

export default TaskPannel;
