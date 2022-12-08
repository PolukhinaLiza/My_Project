import { memo } from 'react';
import { useDrag } from 'react-dnd';

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
			{id}
		</div>
	);
});
