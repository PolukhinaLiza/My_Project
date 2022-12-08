import React, { useEffect } from 'react';
import { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import update from 'react-addons-update';
import { useDrag } from 'react-dnd';
import { LogicalElement } from './LogicalElement';
import { Decoder } from './Decoder';
import { Multiplexer } from './Multiplexer';
import { Trigger } from './Trigger';
import { DraggableElement } from './DraggablElement';

const styles = {
	width: 3000,
	height: 3000,
	border: '1px solid black',
	position: 'relative',
};

export const GridElements = (props) => {
	const { initialElements } = props;
	const [elements, setElements] = useState({});

	useEffect(() => {
		console.log(initialElements, 'liza');
		setElements(initialElements);
	}, [initialElements]);

	const moveElement = useCallback(
		(id, left, top) => {
			setElements(
				update(elements, {
					[id]: {
						$merge: { left, top },
					},
				})
			);
		},
		[elements]
	);

	const [, drop] = useDrop(
		() => ({
			accept: 'element',
			drop(item, monitor) {
				const delta = monitor.getDifferenceFromInitialOffset();
				let left = Math.round(item.left + delta.x);
				let top = Math.round(item.top + delta.y);
				moveElement(item.id, left, top);
				return;
			},
		}),
		[moveElement]
	);

	return (
		<div ref={drop} style={styles}>
			{Object.keys(elements).map((key) => (
				<DraggableElement key={key} id={key} {...elements[key]} />
			))}
		</div>
	);
	// return (
	// 	<div>
	// 		{gridElements.map((elementInfo) => {
	// 			switch (elementInfo.id) {
	// 				case 'logicalElement':
	// 					return <LogicalElement {...elementInfo.props} />;
	// 				case 'decoder':
	// 					return <Decoder {...elementInfo.props} />;
	// 				case 'multiplexer':
	// 					return <Multiplexer {...elementInfo.props} />;
	// 				case 'trigger':
	// 					return <Trigger {...elementInfo.props} />;
	// 				default:
	// 					return null;
	// 			}
	// 		})}
	// 	</div>
	// );
};
