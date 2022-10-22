import { DRAW, LOSE, WIN, WIN_CASE } from '../../config/constants/results';

export const getRandomIntegerNumberRange = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const isLocalWinner = (local, computer) => {
	if (local === computer) return DRAW;

	const winCase = WIN_CASE[local];

	return computer === winCase ? LOSE : WIN;
};
