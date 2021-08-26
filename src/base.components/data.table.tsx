import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'content',
    headerName: 'Conteúdo',
    width: 150,
  },
  {
    field: 'reactions',
    headerName: 'Curtidas',
    type: 'number',
    width: 150,
  },
  {
    field: 'comments',
    headerName: 'Comentários',
    type: 'number',
    width: 150,
  },
  {
    field: 'sharings',
    headerName: 'Compartilhamentos',
    type: 'number',
    width: 150,
  }
];

const rows = [
  { id: 1, content: "Futuro das criptomoedas", reactions:50, comments: 12, sharings: 35 },
  { id: 2, content: "Futuro das criptomoedas", reactions: 23, comments: 1, sharings: 42 },
  { id: 3, content: "Futuro das criptomoedas", reactions: 2, comments: 1, sharings: 45 },
  { id: 4, content: "Futuro das criptomoedas", reactions: 12, comments: 1, sharings: 16 },
  { id: 5, content: "Futuro das criptomoedas", reactions:  30, comments: 1, sharings: null },
  { id: 6, content: "Futuro das criptomoedas", reactions: 15, comments: null, sharings: 150 },
  { id: 7, content: "Futuro das criptomoedas", reactions: 40, comments: 1, sharings: 44 },
  { id: 8, content: "Futuro das criptomoedas", reactions: 10, comments: 1, sharings: 36 },
  { id: 9, content: "Futuro das criptomoedas", reactions: 1, comments: 1, sharings: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
      />
    </div>
  );
}
