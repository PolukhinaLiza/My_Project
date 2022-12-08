import { memo } from 'react';
import { useDrag } from 'react-dnd';

import { LogicalElement } from './LogicalElement';
import { Decoder } from './Decoder';
import { Multiplexer } from './Multiplexer';
import { Trigger } from './Trigger';

function getStyles(left, top, isDragging) {
	const transform = `translate3d(${left}px, ${top}px, 0)`;
	return {
		position: 'absolute',
		transform,
		WebkitTransform: transform,
		opacity: 1,
		height: isDragging ? 0 : '',
	};
}

export const DraggableElement = memo(function DraggableElement(props) {
	const { id, left, top } = props;
	const [{ isDragging }, drag] = useDrag(
		() => ({
			type: 'element',
			item: { id, left, top, props: props.props },
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			}),
		}),
		[id, left, top, props.props]
	);
	return (
		<div ref={drag} style={getStyles(left, top, isDragging)}>
			{(() => {
				switch (props.props.elementType) {
					case 'logicalElement':
						return <LogicalElement {...props.props.options} />;
					case 'decoder':
						return <Decoder {...props.props.options} />;
					case 'multiplexer':
						return <Multiplexer {...props.props.options} />;
					case 'trigger':
						return <Trigger {...props.props.options} />;
					default:
						return null;
				}
			})()}
		</div>
	);
});
