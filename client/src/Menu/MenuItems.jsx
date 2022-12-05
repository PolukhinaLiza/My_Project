import './Menu.css';

export const MenuItems = (props) => {
	const { selectElement } = props;
	const availableElements = [
		{ label: 'Выбрать логический элемент', id: 'logicalElement' },
		{ label: 'Выбрать дешифратор/шифратор', id: 'decoder'},
		{ label: 'Выбраь мультиплексор/демультиплексор', id: 'multiplexer'},
		{ label: 'Выбрать триггер', id: 'trigger'},
		{ label: 'Выбрать счетчик', id:'counter'},
		{ label: 'Выбрать регистр', id: 'registor'},
		{ label: 'Выбрать компаратор', id: 'comparator'},
		{ label: 'Выбрать сумматор', id: 'summator'}
	];

	return (
		<nav class='one'>
			<ul>
				{availableElements.map((element) => (
					<li key={element.id}>
						<button onClick={() => selectElement(element.id)}>
							{element.label}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};
