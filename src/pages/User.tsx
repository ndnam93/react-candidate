import axios from "axios";
import { useEffect } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { selectUsers, setUsers } from "../store/users/usersSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'first_name', headerName: 'First Name'},
  { field: 'last_name', headerName: 'Last Name'},
  { field: 'email', headerName: 'Email'},
  { field: 'dept', headerName: 'Dept'},
  { field: 'ip_address', headerName: 'IP Address'},
];
export function Users() {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    axios.get('https://my.api.mockaroo.com/ent_user.json?key=d455a2b0')
      .then(response => {
        dispatch(setUsers(response.data))
      })
  }, []);

  return (
    <>
      <div>Data / Users</div>
      
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  )
}