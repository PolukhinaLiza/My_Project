export const LogicalElement = (props) => {
	const { elementType, isInversed, inputsCount } = props;
	const heightStyle = 75 + (5* inputsCount);
	const elementStyle = {
		background: 'white',
		width: '50px',
		height: heightStyle + 'px',
		border: '1px solid black',
		textAlign: 'right',
	};

	const elementContainerStyle = {
		display: 'flex',
		flexDirection: 'row',
	};

	const elementTypeGOST = () => {
		switch (elementType) {
			case 'and':
				return '&';
			case 'or':
				return '1';
			case 'xor':
				return '=1';
			default:
				return null;
		}
	};

	const inputOutputStyleHR = {
		width: '10px',
	};

	const inputOutputStyleDiv ={
		display: 'flex',
		flexDirection: 'column',
  		alignItems: 'center',
  		justifyContent: 'space-around',
	};

	return (
		<div style={elementContainerStyle}>
			<div style={inputOutputStyleDiv}>
				{[...new Array(inputsCount).keys()].map((i) => (
					<hr style={inputOutputStyleHR} key={`input${i}`} />
				))}
			</div>
			<div style={elementStyle}>{elementTypeGOST()}</div>
			<div style={inputOutputStyleDiv}>
				<hr style={inputOutputStyleHR} />
			</div>

		</div>
	);
};
