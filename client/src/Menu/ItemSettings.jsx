export const ItemSettings = (props) => {
	const { itemId, addElement } = props;
	const formTemplates = {
		logicalElement: [
			{
				fieldName: 'elementType',
				label: 'Тип логического элемента',
				fieldType: 'select',
				options: [
					{ label: 'Логическое ИЛИ', value: 'or' },
					{ label: 'Логическое И', value: 'and' },
					{ label: 'Исключающее ИЛИ', value: 'xor' },
				],
			},
			{
				fieldName: 'isInversed',
				label: 'Инверсный ли выход?',
				fieldType: 'checkbox',
			},
			{
				fieldName: 'inputsCount',
				label: 'Количество входов',
				fieldType: 'number',
			},
		],
		decoder: [
			{
				fieldName: 'elementType',
				label: 'Шифратор или Дешифратор?',
				fieldType: 'select',
				options: [
					{ label: 'Шифратор', value: 'CD' },
					{ label: 'Дешифратор', value: 'DC' },
				],
			},
			//{
			//	fieldName: 'isSynchro',
			//	label: 'Синхронный ли элемент ?',
			//	fieldType: 'checkbox'
			//},
			{
				fieldName: 'inputsCount',
				label: 'Количество входов',
				fieldType: 'number',
			},
		],
		multiplexer: [
			{
				fieldName: 'elementType',
				label: 'Мультиплексор или Демультиплексор?',
				fieldType: 'select',
				options: [
					{ label: 'Мультиплексор', value: 'MS' },
					{ label: 'Демультиплексор', value: 'DMS' },
				],
			},
			{
				fieldName: 'inputsCount',
				label: 'Количество входов',
				fieldType: 'number',
			},
		],
		trigger: [
			{
				fieldName: 'elementType',
				label: 'Тип триггера',
				fieldType: 'select',
				options: [
					{ label: 'D-триггер', value: 'D' },
					{ label: 'RS-триггер', value: 'RS' },
					{ label: 'JK-триггер', value: 'JK' },
					{ label: 'T-триггер', value: 'T' },
				],
			},
			{
				fieldName: 'isSynchro',
				label: 'Синхронный ли триггер?',
				fieldType: 'checkbox',
			},
		],
		counter: [
			{
				fieldName: 'elementType',
				label: 'Тип триггера',
				fieldType: 'select',
				options: [
					{ label: 'D-триггер', value: 'D' },
					{ label: 'RS-триггер', value: 'RS' },
					{ label: 'JK-триггер', value: 'JK' },
					{ label: 'T-триггер', value: 'T' },
				],
			},
			{
				fieldName: 'isSynchro',
				label: 'Синхронный ли триггер?',
				fieldType: 'checkbox',
			},
		],
	};
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				const options = {};
				formTemplates[itemId].forEach((inputInfo) => {
					const input = e.target[inputInfo.fieldName];
					options[inputInfo.fieldName] =
						inputInfo.fieldType === 'checkbox'
							? input.checked
							: inputInfo.fieldType === 'number'
							? parseInt(input.value)
							: input.value;
				});
				addElement(itemId, options);
			}}>
			{formTemplates[itemId].map((inputInfo) => (
				<div>
					<label>{inputInfo.label}</label>
					{inputInfo.fieldType === 'select' ? (
						<select name={inputInfo.fieldName}>
							{inputInfo.options.map((option, i) => (
								<option
									key={'option_' + i}
									value={option.value}
									selected={i === 0}>
									{option.label}
								</option>
							))}
						</select>
					) : (
						//TODO:  Добавить валидацию Добавить значение по умолчанию
						<input
							name={inputInfo.fieldName}
							type={inputInfo.fieldType}></input>
					)}
				</div>
			))}
			<button type='submit'>Добавить элемент</button>
		</form>
	);
};
