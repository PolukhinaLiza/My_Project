import { useState } from 'react';
import { MenuItems } from './MenuItems';
import { ItemSettings } from './ItemSettings';

export const Menu = (props) => {
	const { addElement } = props;
	const [selectedElement, selectElement] = useState(null);
	return (
		<div>
			<MenuItems selectElement={selectElement} />
			{selectedElement && (
				<ItemSettings
					itemId={selectedElement}
					addElement={(props) => {
						addElement(props);
						selectElement(null);
					}}
				/>
			)}
		</div>
	);
};
