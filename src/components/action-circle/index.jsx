import './styles.scss';

import { emit } from '../../core/utils/events';
import { SELECT_ACTION } from '../../config/constants/events';

const ActionCircle = ({ iconPath, alt, id, selectedMode = true }) => {
	const selectEventHandler = () => {
		if (!selectedMode) return;

		emit(SELECT_ACTION, id);
	};

	const getHiddenTemplate = () => {
		return (
			<div className='action-circle'>
				<div className='action-circle__hidden'></div>
			</div>
		);
	};

	const getTemplate = () => {
		return (
			<div
				className={`action-circle action-circle--${id} ${
					selectedMode && 'action-circle--click'
				}`}
				key={id}
				onClick={() => {
					selectEventHandler();
				}}>
				<div className='action-circle__container'>
					<img
						className='action-circle__img'
						src={iconPath}
						alt={alt}
						draggable='false'
					/>
				</div>
			</div>
		);
	};

	return <>{id ? getTemplate() : getHiddenTemplate()}</>;
};

export default ActionCircle;
