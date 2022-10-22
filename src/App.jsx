import { useEffect, useState } from 'react';
import { subscribe, unsubcribe } from './core/utils/events';

import BoxHeader from './components/box-header';
import ActionCircle from './components/action-circle';

import { ICONS_MAP, ICONS_MAP_KEY } from './config/constants/Icons';
import { PLAY_AGAIN, SELECT_ACTION } from './config/constants/EventsNames';

import './App.scss';
import './assets/scss/global.scss';
import { getRandomIntegerNumberRange, isLocalWinner } from './core/utils';
import { WIN } from './config/constants/results';

import { SecondStep } from './components/second-step';
import { FirstStep } from './components/first-step';

function App() {
	const [partyState, setPartyState] = useState({
		winner: null,
		computerAction: null,
		playerAction: null,
		score: 0,
	});

	useEffect(() => {
		subscribe(SELECT_ACTION, onSelectAction);
		subscribe(PLAY_AGAIN, onPlayAgain);

		return () => {
			unsubcribe(SELECT_ACTION);
			unsubcribe(PLAY_AGAIN);
		};
	}, []);

	const onPlayAgain = () => {
		setPartyState((partyState) => ({
			...partyState,
			winner: null,
			computerAction: null,
			playerAction: null,
		}));
	};

	const onSelectAction = ({ detail: playerAction }) => {
		const option = getRandomIntegerNumberRange(1, 3);
		const computerAction = ICONS_MAP_KEY.get(option);

		const winner = isLocalWinner(playerAction, computerAction);

		setPartyState((partyState) => ({
			...partyState,
			winner,
			computerAction,
			playerAction,
			score: winner === WIN ? partyState.score + 1 : partyState.score,
		}));
	};

	return (
		<div className='App'>
			<div className='container container--header'>
				<BoxHeader score={partyState.score}></BoxHeader>
			</div>

			{partyState.playerAction ? (
				<SecondStep partyState={partyState}></SecondStep>
			) : (
				<FirstStep></FirstStep>
			)}
		</div>
	);
}

export default App;
