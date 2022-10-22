import papperIcon from '../../assets/images/icon-paper.svg';
import rockIcon from '../../assets/images/icon-rock.svg';
import scissorsIcon from '../../assets/images/icon-scissors.svg';

import { PAPPER_KEY, ROCK_KEY, SCISSOR_KEY } from './results';

export const ICONS_MAP = new Map([
	[PAPPER_KEY, { iconPath: papperIcon, alt: 'Papper Icon', id: PAPPER_KEY }],
	[SCISSOR_KEY, { iconPath: scissorsIcon, alt: 'Scissors Icon', id: SCISSOR_KEY }],
	[ROCK_KEY, { iconPath: rockIcon, alt: 'Rock Icon', id: 'rock' }],
]);

export const ICONS_MAP_KEY = new Map([
	[1, PAPPER_KEY],
	[2, SCISSOR_KEY],
	[3, ROCK_KEY],
]);
