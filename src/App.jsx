import './App.scss';
import './assets/scss/global.scss';

import BoxHeader from './components/box-header';

import ActionCircle from './components/action-circle';
import { ICONS } from './config/constants/Icons';

function App() {
	return (
		<div className='App'>
			<BoxHeader></BoxHeader>

			<div className='container'>
				{ICONS.map(({ iconPath, alt, id }) => {
					return (
						<ActionCircle
							key={id}
							iconPath={iconPath}
							alt={alt}
							id={id}></ActionCircle>
					);
				})}
			</div>
		</div>
	);
}

export default App;
