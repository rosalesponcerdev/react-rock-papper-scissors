import ActionCircle from '../action-circle';

import { ICONS_MAP } from '../../config/constants/Icons';

export const FirstStep = () => {
	return (
		<div className='container container--first-step'>
			{Array.from(ICONS_MAP.values()).map(({ iconPath, alt, id }) => {
				return (
					<div
						key={id}
						className={`container__circle container__circle--${id}`}>
						<ActionCircle
							iconPath={iconPath}
							alt={alt}
							id={id}></ActionCircle>
					</div>
				);
			})}
		</div>
	);
};
