import { Menu } from './Menu/Menu';
import { useState, useRef } from 'react';
import html2canvas, { jsPDF } from 'jspdf-html2canvas';
import { GridElements } from './components/GridElements';
import { CustomDragLayer } from './components/CustomDragLayer.jsx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Table } from './components/Table/Table';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Navigate,
	useLocation,
} from 'react-router-dom';
import Userfront from '@userfront/toolkit/react';

Userfront.init('wn98vj9b');

const styles = {
	width: '1984px',
	height: '1403px',
	margin: '20px',
	border: '0.76px solid black',
	position: 'relative',
	// transform: 'scale(0.4, 0.4)',
	transformOrigin: 'left top',
};

const style2 = {
	width: '1946px',
	height: '1388px',
	margin: '7.6px 7.6px 7.6px 30.4px',
	border: '0.76px solid black',
	position: 'absolute',
	borderCollapse: 'collapse',
};
const styleClick = {
	width: '1946px',
	height: '1388px',
	position: 'absolute',
	top: '0',
	left: '0',
	zIndex: '0',
};

const style3 = {
	width: '189px',
	height: '53px',
	border: '0.76px solid black',
	borderCollapse: 'collapse',
};

const App = () => {
	const [isWiresModEnabled, setIsWiresModEnabled] = useState(false);
	const [startPoint, setStartPoint] = useState(null);
	const [elementsOnGrid, updateElementsOnGrid] = useState({});
	const addElement = (props) => {
		const elementWidth = 150;
		const elementHeight = 200;

		const elementId = Object.keys(elementsOnGrid).length;
		const colIndex = elementId % 5;
		const rowIndex = Math.floor(elementId / 5);

		updateElementsOnGrid({
			...elementsOnGrid,
			[elementId]: {
				top: rowIndex * elementHeight,
				left: colIndex * elementWidth,
				props,
			},
		});
	};
	const canvasRef = useRef(null);
	const exportRef = useRef(null);
	const exportPdf = async () => {
		const element = exportRef.current;

		const canvas = await html2canvas(element);
		const data = canvas.toDataURL('image/png');
		const pdf = new jsPDF({
			orientation: 'l',
			format: 'a3',
		});
		const imgProperties = pdf.getImageProperties(data);
		const pdfWidth = pdf.internal.pageSize.getWidth();
		const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

		pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
		console.log('img2');
		pdf.save('a3.pdf');
	};

	return (
		<Router>
			<div>
				<Menu
					addElement={addElement}
					downloadPdf={exportPdf}
					setIsWiresModEnabled={setIsWiresModEnabled}
				/>
				<div style={styles} ref={exportRef}>
					<table style={style2}>
						<canvas
							ref={canvasRef}
							id='canvas'
							style={styleClick}
							onClick={(e) => {
								if (isWiresModEnabled) {
									const ctx = canvasRef.current.getContext('2d');
									if (startPoint === null) {
										setStartPoint({ x: e.pageX, y: e.pageY });
									} else {
										ctx.beginPath();
										ctx.moveTo(startPoint.x - 100, startPoint.y - 131);
										ctx.lineTo(e.pageX - 100, e.pageY - 130);
										ctx.stroke();
										setStartPoint(null);
									}
								}
							}}
						/>
						<div style={style3}></div>
						{Object.keys(elementsOnGrid).length ? (
							<DndProvider backend={HTML5Backend}>
								<GridElements initialElements={elementsOnGrid} />
								<CustomDragLayer />
							</DndProvider>
						) : null}

						<Table />
					</table>
				</div>

				<button
					class='btn btn-dark '
					onClick={() => setIsWiresModEnabled(true)}>
					Показать меню
				</button>
			</div>
		</Router>
	);
};

export default App;
