import { ICONS_MAP } from '../../config/constants/Icons';
import { LOSE, WIN } from '../../config/constants/results';
import ActionCircle from '../action-circle';
import { BoxResult } from '../box-result';

export const SecondStep = ({ partyState }) => {
	const getWaves = () => {
		return (
			<>
				<div className='waves waves--first'></div>
				<div className='waves waves--second'></div>
				<div className='waves waves--thrid'></div>
			</>
		);
	};

	const getBoxResultColumn = () => {
		return (
			<div className='second-step__column'>
				<BoxResult winner={partyState.winner}></BoxResult>
			</div>
		);
	};

	return (
		<div className='container container--second-step second-step'>
			<div className='second-step__column'>
				<h2 className='second-step__title'>YOUR PICKED </h2>

				<div
					key={ICONS_MAP.get(partyState.playerAction)?.id}
					className={`second-step--circle container__circle second-step__circle`}>
					{partyState.winner === WIN && getWaves()}
					<ActionCircle
						iconPath={ICONS_MAP.get(partyState.playerAction)?.iconPath}
						alt={ICONS_MAP.get(partyState.playerAction)?.alt}
						id={ICONS_MAP.get(partyState.playerAction)?.id}
						selectedMode={false}></ActionCircle>
				</div>
			</div>

			{partyState.winner && getBoxResultColumn()}

			<div className='second-step__column'>
				<h2 className='second-step__title'>THE HOUSE PICKED</h2>
				<div
					key={ICONS_MAP.get(partyState.computerAction)?.id}
					className={`second-step--circle container__circle second-step__circle`}>
					{partyState.winner === LOSE && getWaves()}
					<ActionCircle
						iconPath={ICONS_MAP.get(partyState.computerAction)?.iconPath}
						alt={ICONS_MAP.get(partyState.computerAction)?.alt}
						id={ICONS_MAP.get(partyState.computerAction)?.id}
						selectedMode={false}></ActionCircle>
				</div>
			</div>
		</div>
	);
};
