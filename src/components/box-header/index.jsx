import './style.scss';

const BoxHeader = ({}) => {
	return (
		<div className='box-header'>
			<div className='title-box'>
				<h1 className='title-box__title'>ROCK</h1>
				<h1 className='title-box__title'>PAPER</h1>
				<h1 className='title-box__title'>SCISSORS</h1>
			</div>

			<div className='box-score'>
				<span className='box-score__title'>SCORE</span>
				<p className='box-score__value'>12</p>
			</div>
		</div>
	);
};
export default BoxHeader;
