import { useEffect, useState, useRef, useCallback } from "react";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import {CustomStatsToolPanel} from "./CustomStatsToolPanel";


import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import "./agSideBar.css"
import { fakeData } from "./MOCK_DATA"


export default function App() {
  const [rowData, setRowData] = useState(null);

  useEffect(() => {
   setTimeout(()=> setRowData(fakeData), 1000)
}, []);

  return (
    <div className="ag-theme-alpine" style={{height: `${window.innerHeight}px`, width: `${window.innerWidth}px`}}>
      <AgGridReact
        defaultColDef={{
          editable: true,
          sortable: true,
          flex: 1,
          minWidth: 100,
          filter: true,
          resizable: true,
        }}
        icons={
         { 'custom-stats': '<span class="ag-icon ag-icon-custom-stats"></span>'}
        }
        sideBar={{
          toolPanels: [
            {
              id: 'columns',
              labelDefault: 'Columns',
              labelKey: 'columns',
              iconKey: 'columns',
              toolPanel: 'agColumnsToolPanel',
            },
            {
              id: 'filters',
              labelDefault: 'Filters',
              labelKey: 'filters',
              iconKey: 'filter',
              toolPanel: 'agFiltersToolPanel',
            },
            {
              id: 'userInfo',
              labelDefault: 'User Info',
              labelKey: 'userInfo',
              iconKey: 'custom-stats',
              toolPanel: 'customStatsToolPanel',
            },
          ],
          defaultToolPanel: "customStatsToolPanel",
          position: 'right'
        }}
        frameworkComponents={{ customStatsToolPanel: CustomStatsToolPanel }}
        rowData={rowData}>
        <AgGridColumn filter="agTextColumnFilter" field="first_name"></AgGridColumn>
        <AgGridColumn field="last_name"></AgGridColumn>
        <AgGridColumn field="email"></AgGridColumn>
        <AgGridColumn field="gender"></AgGridColumn>
        <AgGridColumn field="ip_address"></AgGridColumn>
        <AgGridColumn field="job"></AgGridColumn>
      </AgGridReact>
    </div>
  );
}