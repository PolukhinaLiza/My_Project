import {
	inputOutputStyleHR,
	inputStyleDiv,
	elementContainerStyle,
	inputStyle,
	outputStyle,
} from './Style';
export const Trigger = (props) => {
	const { elementType, isSynchro } = props;
	console.log(props);
	const inputsCount = elementType.length + (isSynchro ? 1 : 0);
	const inputsElement = (
		isSynchro
			? elementType.length === 1
				? elementType + 'C'
				: elementType[0] + 'C' + elementType[1]
			: elementType
	).split('');
	const heightStyle = 200 + 5 * inputsCount;
	const tableStyle = {
		display: 'table',
		height: heightStyle + 'px',
		width: '150px',
		borderCollapse: 'collapse', 
		border: '1px solid black',
	};

	const tdStyle = {
		display: 'table-cell',
		textAlign: 'center',
	};

	const tdBokStyle = {
		display: 'table-cell',
		textAlign: 'center',
		border: '1px solid black',
		width: '40px',
	};

	const tdBokWhiteStyle = {
		display: 'table-cell',
		textAlign: 'center',
		width: '40px',
	};

	return (
		<div style={elementContainerStyle}>
			<div style={inputStyleDiv}>
				{[...new Array(inputsCount).keys()].map((i) => (
					<hr style={inputOutputStyleHR} key={`input${i}`} />
				))}
			</div>
			<div style={tableStyle}>
				<div style={tdBokStyle}>
					<div style={inputStyle}>
						{inputsElement.map((element) => (
							<p>{element}</p>
						))}
					</div>
				</div>
				<div style={tdStyle}>T</div>
				<div style={tdBokWhiteStyle}>
					<div style={inputStyle}>
						<p>Q</p>
						<p>~Q</p>
					</div>
				</div>
			</div>
			<div style={inputStyleDiv}>
				<hr style={inputOutputStyleHR} />
				<hr style={inputOutputStyleHR} />
			</div>
		</div>
	);
};
