import { Menu } from './Menu/Menu';
import { useState } from 'react';
import { GridElements } from './components/GridElements';
import { CustomDragLayer } from './CustomDragLayer.jsx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
	const [elementsOnGrid, updateElementsOnGrid] = useState({});
	const addElement = (props) => {
		updateElementsOnGrid({ ...elementsOnGrid, [Object(elementsOnGrid).keys().length]: props });
	};
	return (
		<div>
			<Menu addElement={addElement} />
			{elementsOnGrid.length ? (
				//<DndProvider backend={HTML5Backend}>
					<GridElements gridElements={elementsOnGrid} />
					//<CustomDragLayer />
				//</DndProvider>
			) : null}
		</div>
	);
};

export default App;
