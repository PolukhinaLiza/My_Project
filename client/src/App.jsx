import { Menu } from './Menu/Menu';
import { useState } from 'react';
import { GridElements } from './components/GridElements';

const App = () => {
	const [elementsOnGrid, updateElementsOnGrid] = useState([]);
	//const elementStyle = {
	//	display: 'flex',
	//	flexDirection: 'row',
	//};
	const addElement = (id, props) => {
		updateElementsOnGrid([...elementsOnGrid, { id, props }]);
	};
	return (
		<div>
			<Menu addElement={addElement} />
			{elementsOnGrid.length? <GridElements gridElements={elementsOnGrid}/> : null}
		</div>
	);
};

export default App;
