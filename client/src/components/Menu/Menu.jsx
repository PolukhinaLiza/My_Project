import { useState } from 'react';
import { MenuItems } from './MenuItems';
import { ItemSettings } from './ItemSettings';

export const Menu = (props) => {
  const {
    saveScheme,
    addElement,
    downloadPdf,
    setIsWiresModEnabled,
    loadExistingScheme,
  } = props;
  const [selectedElement, selectElement] = useState(null);
  return (
    <div>
      <MenuItems
        saveScheme={saveScheme}
        selectElement={selectElement}
        downloadPdf={downloadPdf}
        setIsWiresModEnabled={setIsWiresModEnabled}
        loadExistingScheme={loadExistingScheme}
      />
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
