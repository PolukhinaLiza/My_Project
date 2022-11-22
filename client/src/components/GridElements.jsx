import { LogicalElement } from './LogicalElement';
import React from 'react';

export const GridElements = (props) => {
	const { gridElements } = props;
	console.log(gridElements[0]);
	return (
		<div>
			{gridElements.map((elementInfo) => {
				switch (elementInfo.id) {
					case 'logicalElement':
						return <LogicalElement {...elementInfo.props} />;
					default:
						return null;
				}
			})}
		</div>
	);
};
