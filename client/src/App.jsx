import { Menu } from './Menu/Menu';
import { useState } from 'react';
import { GridElements } from './components/GridElements';
import { CustomDragLayer } from './components/CustomDragLayer.jsx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
	const [elementsOnGrid, updateElementsOnGrid] = useState({});
	const addElement = (props) => {
		const elementWidth = 150;
		const elementHeight = 200;

		const elementId = Object.keys(elementsOnGrid).length;
		const colIndex = elementId%5;
		const rowIndex = Math.floor(elementId/5);

		updateElementsOnGrid({ ...elementsOnGrid, [elementId]: {top: rowIndex*elementHeight, left: colIndex*elementWidth, props} });
	};
	return (
		<div>
			<Menu addElement={addElement} />
			{Object.keys(elementsOnGrid).length ? (
				<DndProvider backend={HTML5Backend}>
					<GridElements initialElements={elementsOnGrid} />
					<CustomDragLayer />
				</DndProvider>
			) : null}
		</div>
	);
};

export default App;
