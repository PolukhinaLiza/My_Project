export const MenuItems = (props) => {
	const { selectElement } = props;
	const availableElements = [
		{ label: 'Выбрать логический элемент', id: 'logicalElement' },
		{ label: 'Выбрать дешифратор/шифратор', id: 'decoder'},
		{ label: 'Выбрать мультиплексор/демультиплексор', id: 'multiplexer'},
		{ label: 'Выбрать триггер', id: 'trigger'},
		{ label: 'Выбрать счетчик', id:'counter'},
		{ label: 'Выбрать регистр', id: 'registor'},
		{ label: 'Выбрать компаратор', id: 'comparator'},
		{ label: 'Выбрать сумматор', id: 'summator'}
	];
	//dropdown-toggle
	return (
		<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
			<ul class="navbar-nav">
				{availableElements.map((element) => (
					<li class="nav-item active" key={element.id}>
						<button class="btn btn-dark " onClick={() => selectElement(element.id)}>
							{element.label}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};
