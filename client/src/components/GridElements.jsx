import React from 'react';
import { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import update from 'react-addons-update';
import { useDrag } from 'react-dnd';
import { LogicalElement } from './LogicalElement';
import { Decoder } from './Decoder';
import { Multiplexer } from './Multiplexer';
import { Trigger } from './Trigger';

export const GridElements = (props) => {
	const { gridElements } = props;
	console.log(gridElements);
	return (
		<div>
			{gridElements.map((elementInfo) => {
				switch (elementInfo.id) {
					case 'logicalElement':
						return <LogicalElement {...elementInfo.props} />;
					case 'decoder':
						return <Decoder {...elementInfo.props} />;
					case 'multiplexer':
						return <Multiplexer {...elementInfo.props} />;
					case 'trigger':
						return <Trigger {...elementInfo.props} />;
					default:
						return null;
				}
			})}
		</div>
	);
};
