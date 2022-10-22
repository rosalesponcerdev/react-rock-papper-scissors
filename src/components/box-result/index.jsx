import { PLAY_AGAIN } from '../../config/constants/EventsNames';
import { WIN } from '../../config/constants/results';
import { emit } from '../../core/utils/events';
import './style.scss';

export const BoxResult = ({ winner }) => {
	const clickHandler = () => {
		emit(PLAY_AGAIN);
	};

	return (
		<div className='box-result'>
			<div className='box-result__title'>YOU {winner === WIN ? 'WIN' : 'LOSE'}</div>

			<button className='box-result__play' onClick={clickHandler}>
				PLAY AGAIN
			</button>
		</div>
	);
};
