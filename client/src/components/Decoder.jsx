import {
  inputOutputStyleHR,
  inputStyleDiv,
  elementContainerStyle,
} from './Style';
export const Decoder = (props) => {
  const { elementType, isSynchro, inputsCount } = props;
  const outputsCount =
    elementType === 'DC' ? inputsCount ** 2 : Math.ceil(Math.sqrt(inputsCount));
  const heightStyle = 200 + 5 * inputsCount;
  const tableStyle = {
    display: 'table',
    height: heightStyle + 'px',
    width: '150px',
    borderCollapse: 'collapse',
  };

  const tdStyle = {
    display: 'table-cell',
    textAlign: 'center',
    border: '1px solid black',
    verticalAlign: '30px',
  };

  const tdBokStyle = {
    display: 'table-cell',
    textAlign: 'center',
    border: '1px solid black',
    verticalAlign: '30px',
    width: '30px',
  };

  return (
    <div style={elementContainerStyle}>
      <div style={inputStyleDiv}>
        {[...new Array(inputsCount).keys()].map((i) => (
          <hr style={inputOutputStyleHR} key={`input${i}`} />
        ))}
      </div>
      <div style={tableStyle}>
        <div style={tdBokStyle}></div>
        <div style={tdStyle}>{elementType}</div>
        <div style={tdBokStyle}></div>
      </div>
      <div style={inputStyleDiv}>
        {[...new Array(outputsCount).keys()].map((i) => (
          <hr style={inputOutputStyleHR} key={`input${i}`} />
        ))}
      </div>
    </div>
  );
};
