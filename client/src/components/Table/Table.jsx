import './style.css';

export const Table = () => {
	const styleTable = {
		position: 'absolute',
		display: 'flex',
		flexDirection: 'row',
		borderCollapse: 'collapse',
		width: '699px',
		height: '208px',
		bottom: '0',
		right: '0',
	};
	const styleTable5 = {
		borderCollapse: 'collapse',
		width: '246px',
		height: '208px',
	};
	const styleTable2 = {
		borderCollapse: 'collapse',
		width: '246px',
		height: '94.5px',
	};
	const styleTable4 = {
		borderCollapse: 'collapse',
		width: '246px',
		height: '113.5px',
	};
	const styleTable3 = {
		borderCollapse: 'collapse',
		width: '453px',
		height: '208px',
	};
	const styleTR1 = {
		lineHeight: '1',
		height: '56.7px',
		border: '0.76px solid black',
	};
	const styleTR2 = {
		lineHeight: '1',
		height: '95px',
		border: '0.76px solid black',
	};
	const styleTR3 = {
		display: 'flex',
		flexDirection: 'row',
		lineHeight: '1',
		height: '56px',
	};
	const styleTR = {
		lineHeight: '1',
		height: '18.9px',
		border: '0.76px solid black',
	};
	const styleTR4 = {
		display: 'flex',
		flexDirection: 'row',
		lineHeight: '1',
		height: '19px',
	};
	const styleTD1 = {
		border: '0.76px solid black',
		width: '26px',
	};
	const styleTD2 = {
		width: '38px',
		border: '0.76px solid black',
	};
	const styleTD3 = {
		width: '87px',
		border: '0.76px solid black',
	};
	const styleTD4 = {
		width: '57px',
		border: '0.76px solid black',
	};
	const styleTD5 = {
		width: '64px',
		border: '0.76px solid black',
	};
	const styleTD6 = {
		width: '264px',
		border: '0.76px solid black',
	};
	const styleTD7 = {
		width: '189px',
		border: '0.76px solid black',
	};
	const styleTD8 = {
		display: 'flex',
		flexDirection: 'column',
		width: '189px',
		padding: '0',
	};
	const styleTD9 = {
		width: '68px',
		border: '0.76px solid black',
	};
	const styleTD10 = {
		width: '19px',
		border: '0.76px solid black',
	};
	const styleTD11 = {
		width: '76px',
		border: '0.76px solid black',
	};
	const styleTD12 = {
		width: '113px',
		border: '0.76px solid black',
	};

	return (
		<table style={styleTable}>
			<table style={styleTable5}>
				<table style={styleTable2}>
					<tr style={styleTR}>
						<td style={styleTD1}> </td>
						<td style={styleTD2}> </td>
						<td style={styleTD3}> </td>
						<td style={styleTD4}> </td>
						<td style={styleTD2}> </td>
					</tr>
					<tr style={styleTR}>
						<td style={styleTD1}> </td>
						<td style={styleTD2}> </td>
						<td style={styleTD3}> </td>
						<td style={styleTD4}> </td>
						<td style={styleTD2}> </td>
					</tr>
					<tr style={styleTR}>
						<td style={styleTD1}> </td>
						<td style={styleTD2}> </td>
						<td style={styleTD3}> </td>
						<td style={styleTD4}> </td>
						<td style={styleTD2}> </td>
					</tr>
					<tr style={styleTR}>
						<td style={styleTD1}> </td>
						<td style={styleTD2}> </td>
						<td style={styleTD3}> </td>
						<td style={styleTD4}> </td>
						<td style={styleTD2}> </td>
					</tr>
					<tr style={styleTR}>
						<td style={styleTD1}>Изм</td>
						<td style={styleTD2}>Лист</td>
						<td style={styleTD3}>№докум.</td>
						<td style={styleTD4}>Подп.</td>
						<td style={styleTD2}>Дата</td>
					</tr>
				</table>
				<table style={styleTable4}>
					<tr style={styleTR}>
						<td style={styleTD5}>Разраб.</td>
						<td style={styleTD3}> </td>
						<td style={styleTD4}> </td>
						<td style={styleTD2}> </td>
					</tr>
					<tr style={styleTR}>
						<td style={styleTD5}>Проверил</td>
						<td style={styleTD3}> </td>
						<td style={styleTD4}> </td>
						<td style={styleTD2}> </td>
					</tr>
					<tr style={styleTR}>
						<td style={styleTD5}>Т.контр.</td>
						<td style={styleTD3}> </td>
						<td style={styleTD4}> </td>
						<td style={styleTD2}> </td>
					</tr>
					<tr style={styleTR}>
						<td style={styleTD5}> </td>
						<td style={styleTD3}> </td>
						<td style={styleTD4}> </td>
						<td style={styleTD2}> </td>
					</tr>
					<tr style={styleTR}>
						<td style={styleTD5}>Н.контр.</td>
						<td style={styleTD3}> </td>
						<td style={styleTD4}> </td>
						<td style={styleTD2}> </td>
					</tr>
					<tr style={styleTR}>
						<td style={styleTD5}>Утв.</td>
						<td style={styleTD3}> </td>
						<td style={styleTD4}> </td>
						<td style={styleTD2}> </td>
					</tr>
				</table>
			</table>
			<table style={styleTable3}>
				<tr style={styleTR1}></tr>
				<tr style={styleTR2}>
					<td style={styleTD6}></td>
					<td style={styleTD8}>
						<tr style={styleTR4}>
							<td style={styleTD4}>Лит.</td>
							<td style={styleTD5}>Масса</td>
							<td style={styleTD9}>Масштаб</td>
						</tr>
						<tr style={styleTR3}>
							<td style={styleTD10}></td>
							<td style={styleTD10}></td>
							<td style={styleTD10}></td>
							<td style={styleTD5}></td>
							<td style={styleTD9}></td>
						</tr>
						<tr style={styleTR4}>
							<td style={styleTD11}>Лист</td>
							<td style={styleTD12}>Листов</td>
						</tr>
					</td>
				</tr>
				<tr style={styleTR1}>
					<td style={styleTD6}></td>
					<td style={styleTD7}></td>
				</tr>
			</table>
		</table>
	);
};
