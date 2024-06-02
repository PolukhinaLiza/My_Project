import { useState, useRef } from 'react';

import Userfront from '@userfront/toolkit/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import html2canvas, { jsPDF } from 'jspdf-html2canvas';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import { GridElements } from './components/GridElements';
import { CustomDragLayer } from './components/CustomDragLayer.jsx';
import { Menu } from './components/Menu/Menu';
import { Table } from './components/Table/Table';

import { useNotifications } from './hooks/useNotifications.jsx';

Userfront.init('wn98vj9b');

const styles = {
  // width: '1984px',
  overflow: 'auto',
  height: '1403px',
  margin: '20px',
  border: '0.76px solid black',
  position: 'relative',
  // transform: 'scale(0.4, 0.4)',
  transformOrigin: 'left top',
};

const style2 = {
  width: '1946px',
  height: '1388px',
  margin: '7.6px 7.6px 7.6px 30.4px',
  border: '0.76px solid black',
  position: 'absolute',
  borderCollapse: 'collapse',
};
const styleClick = {
  width: '1946px',
  height: '1388px',
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: '0',
};

const style3 = {
  width: '189px',
  height: '53px',
  border: '0.76px solid black',
  borderCollapse: 'collapse',
};

const App = () => {
  const [isWiresModEnabled, setIsWiresModEnabled] = useState(false);
  const [isWireProcess, setIsWireProcess] = useState(false);

  const [elementsOnGrid, updateElementsOnGrid] = useState({});
  const [schemeName, setSchemeName] = useState('Схема №1');
  const [isNewScheme, setIsNewScheme] = useState(true);
  const addElement = (props) => {
    const elementWidth = 150;
    const elementHeight = 200;

    const elementId = Object.keys(elementsOnGrid).length;
    const colIndex = elementId % 5;
    const rowIndex = Math.floor(elementId / 5);

    updateElementsOnGrid({
      ...elementsOnGrid,
      [elementId]: {
        top: rowIndex * elementHeight,
        left: colIndex * elementWidth,
        props,
      },
    });
  };
  const canvasRef = useRef(null);
  const exportRef = useRef(null);
  const exportPdf = async () => {
    const element = exportRef.current;

    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'l',
      format: 'a3',
    });
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    console.log('img2');
    pdf.save('a3.pdf');
  };

  const saveScheme = async () => {
    const userData = Userfront.user.uuid;

    let validate = await fetch('http://localhost:3001/schemes/validate', {
      method: 'post',
      body: JSON.stringify({ userData, schemeName }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    validate = await validate.json();
    console.warn(validate);
    if (validate) {
      alert('Файл с таким названием уже существует!');
    }
    let save = await fetch('http://localhost:3001/schemes/save', {
      method: 'post',
      body: JSON.stringify({ userData, schemeName, elementsOnGrid }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const changeIsNewScheme = () => {
    setIsNewScheme(false);
  };

  useNotifications();

  // Drawing wires

  const enableWiresMod = () => {
    setIsWiresModEnabled(true);
    canvasRef.current.style.zIndex = 10;
  };

  const getPointCoordinates = (e) => {
    const canvasPosition = canvasRef.current.getBoundingClientRect();
    const { left: canvasX, top: canvasY } = canvasPosition;

    const { clientX: clickOffsetX, clientY: clickOffsetY } = e;

    return {
      x: clickOffsetX - canvasX,
      y: clickOffsetY - canvasY,
    };
  };

  const handleCanvasClick = (event) => {
    const context = canvasRef.current.getContext('2d');
    const { x, y } = getPointCoordinates(event);

    if (!isWireProcess) {
      setIsWireProcess(true);

      context.beginPath();
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);

      context.strokeStyle = '#000';
      context.lineWidth = 1;
      context.stroke();

      context.beginPath();
      context.moveTo(x, y);
    }
  };

  const handleCanvasDoubleClick = () => {
    setIsWireProcess(false);
  };

  //

  return (
    <>
      <ReactNotifications />
      <div>
        <Menu
          addElement={addElement}
          downloadPdf={exportPdf}
          setIsWiresModEnabled={enableWiresMod}
          saveScheme={saveScheme}
          setSchemeName={setSchemeName}
          schemeName={schemeName}
        />
        <div style={styles} ref={exportRef}>
          <table style={style2}>
            <canvas
              ref={canvasRef}
              id='canvas'
              style={styleClick}
              width={1946}
              height={1388}
              onClick={isWiresModEnabled && handleCanvasClick}
              onDoubleClick={isWiresModEnabled && handleCanvasDoubleClick}
            />
            <div style={style3}></div>
            {Object.keys(elementsOnGrid).length ? (
              <DndProvider backend={HTML5Backend}>
                <GridElements initialElements={elementsOnGrid} />
                <CustomDragLayer />
              </DndProvider>
            ) : null}

            <Table />
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
