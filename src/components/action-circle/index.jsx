import './styles.scss';

const ActionCircle = ({ iconPath, alt, id }) => {
	if (!id) return;

	return (
		<div className={`action-circle action-circle--${id}`} key={id}>
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

export default ActionCircle;
