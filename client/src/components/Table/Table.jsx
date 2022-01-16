import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';


export default function DataGridFunc() {
    const [inventory, setInventory] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [newItem, setNewItem] = React.useState({ name: "", description: "", available: 0 });
    const apiRef = React.useRef(null);
    const columns = [
        { field: 'id', headerName: 'ID', flex: 0.3 },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            flex: 3,
            editable: true,
        },
        {
            field: 'available',
            headerName: 'Available',
            type: 'number',
            flex: 0.5,
            editable: true,
            renderCell: (params) => {
                apiRef.current = params.api;
            },
        },
    ];

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRowAdd = React.useCallback(
        async () => {
            try {
                await fetch('http://127.0.0.1:9000/inventory/add', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    mode: 'cors',
                    credentials: 'include',
                    body: JSON.stringify(newItem),
                });
                setOpen(false);
            } catch (err) {
                console.error(err);
            }
        }
    )

    const handleRowDelete = React.useCallback(
        () => {
            try {
                const rows = apiRef.current.getSelectedRows();
                rows.forEach((value, key) => {

                    fetch('http://127.0.0.1:9000/inventory/delete', {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                        mode: 'cors',
                        credentials: 'include',
                        body: JSON.stringify({ "id": key }),
                    });
                });

            } catch (err) {
                console.error(err);
            }
        }
    )

    const handleRowEditCommit = React.useCallback(
        async (id) => {
            try {
                const model = apiRef.current.getEditRowsModel();
                const row = { id: id, name: model[id].name.value, description: model[id].description.value, available: model[id].available.value };

                await fetch('http://127.0.0.1:9000/inventory/update', {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    mode: 'cors',
                    credentials: 'include',
                    body: JSON.stringify(row),
                });
            } catch (err) {
                console.error(err);
            }
        }
    )

    const handleExport = async () => {
        // Convert array of objects into csv string
        const array = [Object.keys(rows[0])].concat(rows)
            .map(item => {
                return Object.values(item).toString()
            })
            .join("\n");

        // Create csv file from string and open download window
        const csv = "data:text/csv;charset=utf-8," + array;
        var encodedUri = encodeURI(csv);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "inventory.csv");
        document.body.appendChild(link);
        link.click();

    };

    React.useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('http://127.0.0.1:9000/inventory/get', {
                    method: 'GET',
                    mode: 'cors',
                    credentials: 'include',
                });
                if (res.ok) {
                    const data = await res.json();
                    setInventory(data.details);
                }
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    });

    const rows = inventory;

    return (
        <div style={{ height: 650, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection={true}
                disableSelectionOnClick={true}
                disableColumnMenu
                editMode='row'
                onRowEditCommit={handleRowEditCommit}
            />
            <Button variant="text" onClick={handleClickOpen}>ADD</ Button>
            <Button variant="text" onClick={handleRowDelete}>DELETE</ Button>
            <Button variant="text" onClick={handleExport}>EXPORT</ Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add inventory</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="normal"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        onInput={e => setNewItem(prevState => ({
                            ...prevState,
                            name: e.target.value
                        }))}
                    />
                    <TextField
                        margin="normal"
                        id="name"
                        label="Description"
                        type="text"
                        fullWidth
                        multiline
                        minRows={5}
                        maxRows={10}
                        variant="outlined"
                        onInput={e => setNewItem(prevState => ({
                            ...prevState,
                            description: e.target.value
                        }))}
                    />
                    <TextField
                        margin="normal"
                        id="name"
                        label="Stock available"
                        type="number"
                        fullWidth
                        variant="outlined"
                        onInput={e => setNewItem(prevState => ({
                            ...prevState,
                            available: e.target.value
                        }))}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleRowAdd}>Confirm</Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}