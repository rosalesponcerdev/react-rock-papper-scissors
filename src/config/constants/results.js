export const PAPPER_KEY = 'papper';
export const SCISSOR_KEY = 'scissor';
export const ROCK_KEY = 'rock';

export const WIN_CASE = {
	[PAPPER_KEY]: SCISSOR_KEY,
	[SCISSOR_KEY]: ROCK_KEY,
	[ROCK_KEY]: PAPPER_KEY,
};

export const DRAW = 'draw';
export const LOSE = 'lose';
export const WIN = 'win';
