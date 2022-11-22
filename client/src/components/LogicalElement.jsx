export const LogicalElement = (props) => {
	const { elementType, isInversed, inputsCount } = props;
	console.log(props);
	const heightStyle = 60 + 5 * inputsCount;
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
		border: '1px solid black',
	};

	const inputStyleDiv = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
	};

	const outputStyleDiv = {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	};

	const notStyle = {
		width: '5px',
		height: '5px',
		borderRadius: '50%',
		border: '1px solid black',
	};

	return (
		<div style={elementContainerStyle}>
			<div style={inputStyleDiv}>
				{[...new Array(inputsCount).keys()].map((i) => (
					<hr style={inputOutputStyleHR} key={`input${i}`} />
				))}
			</div>
			<div style={elementStyle}>{elementTypeGOST()}</div>
			<div style={outputStyleDiv}>
				{isInversed && <div style={notStyle}></div>}
				<hr style={inputOutputStyleHR} />
			</div>
		</div>
	);
};
