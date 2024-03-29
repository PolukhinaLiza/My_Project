import React, { useEffect } from 'react';
import { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import update from 'react-addons-update';
import { DraggableElement } from './DraggablElement';

const styles = {
	width: '4961px',
	height: '3508px',
	position: 'absolute',
};

export const GridElements = (props) => {
	const { initialElements } = props;
	const [elements, setElements] = useState({});

	useEffect(() => {
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
};
