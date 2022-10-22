import { useEffect, useState } from 'react';
import { subscribe, unsubcribe } from './core/utils/events';

import BoxHeader from './components/box-header';
import ActionCircle from './components/action-circle';

import { ICONS_MAP, ICONS_MAP_KEY } from './config/constants/Icons';
import { SELECT_ACTION } from './config/constants/events';

import './App.scss';
import './assets/scss/global.scss';
import { getRandomIntegerNumberRange, isLocalWinner } from './core/utils';
import { LOSE, WIN } from './config/constants/results';

function App() {
	const [selectedAction, setSelectedAction] = useState(null);
	const [selectedComputerAction, setSelectedComputerAction] = useState(null);
	const [partyResult, setPartyResult] = useState(null);

	useEffect(() => {
		subscribe(SELECT_ACTION, ({ detail: localoption }) => {
			setSelectedAction(localoption);

			setTimeout(() => {
				const option = getRandomIntegerNumberRange(1, 3);
				const keyOption = ICONS_MAP_KEY.get(option);

				const winner = isLocalWinner(localoption, keyOption);

				setPartyResult(winner);
				setSelectedComputerAction(keyOption);
			}, 2000);
		});

		return () => {
			unsubcribe(SELECT_ACTION);
		};
	}, []);

	const getStep1 = () => {
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

	const getWaves = () => {
		return (
			<>
				<div className='waves waves--first'></div>
				<div className='waves waves--second'></div>
				<div className='waves waves--thrid'></div>
			</>
		);
	};

	const getStep2 = () => {
		return (
			<div className='container container--second-step second-step'>
				<div className='second-step__column'>
					<h2 className='second-step__title'>YOUR PICKED </h2>

					<div
						key={ICONS_MAP.get(selectedAction)?.id}
						className={`second-step--circle container__circle second-step__circle`}>
						{partyResult === WIN && getWaves()}
						<ActionCircle
							iconPath={ICONS_MAP.get(selectedAction)?.iconPath}
							alt={ICONS_MAP.get(selectedAction)?.alt}
							id={ICONS_MAP.get(selectedAction)?.id}
							selectedMode={false}></ActionCircle>
					</div>
				</div>
				<div className='second-step__column'>
					<h2 className='second-step__title'>THE HOUSE PICKED</h2>
					<div
						key={ICONS_MAP.get(selectedComputerAction)?.id}
						className={`second-step--circle container__circle second-step__circle`}>
						{partyResult === LOSE && getWaves()}
						<ActionCircle
							iconPath={ICONS_MAP.get(selectedComputerAction)?.iconPath}
							alt={ICONS_MAP.get(selectedComputerAction)?.alt}
							id={ICONS_MAP.get(selectedComputerAction)?.id}
							selectedMode={false}></ActionCircle>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='App'>
			<div className='container container--header'>
				<BoxHeader></BoxHeader>
			</div>

			{selectedAction ? getStep2() : getStep1()}
		</div>
	);
}

export default App;
