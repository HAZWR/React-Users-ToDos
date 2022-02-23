import * as React from 'react';
import { useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {add,remove} from '../../store/todo/index';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Header.scss';
const style = {
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width: 400,
     bgcolor: 'background.paper',
     border: '2px solid #000',
     boxShadow: 24,
     p: 4,
   };
export function Header(props) {
     const listOfTodos = useSelector((state)=>state.todo.list);
     const dispatch=useDispatch();
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);

     useEffect(()=>{
           fetch('https://jsonplaceholder.typicode.com/todos')
           .then(response=>response.json())
           .then(data=>dispatch(add(data)));
     },[]);

     function actionDelete(e,id){
          e.preventDefault();
          console.log(id);
          dispatch(remove(id));
          console.log("après suppression");
     }

     const [age, setAge] = React.useState('');

     const handleChange = (event) => {
       setAge(event.target.value);
     };

     return (
     <>
          <Button onClick={handleOpen} variant="outlined" startIcon={<AddIcon />}>
               Add
          </Button>
          <div className="classList">
               {
                    listOfTodos.map((element,index)=>{
                         return(
                              <Card key={index} sx={{ minWidth: 275 }}>
                                   <CardContent>
                                   <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        {element.id}
                                   </Typography>
                                   <Typography variant="body2">
                                        {element.title}
                                   </Typography>
                                   </CardContent>
                                   <CardActions>
                                   <Link to={{
                                        pathname:`tasks/${element.id}`,
                                        state:{
                                             id: element.id,
                                             title: element.title,
                                        }
                                   }}
                                   >Plus de détail</Link>
                                   <Button onClick={(e)=>actionDelete(e,element.id)} variant="outlined" startIcon={<DeleteIcon />}>
                                        Delete
                                   </Button>
                                   </CardActions>
                              </Card>
                         )
                    })
               }
          </div>
          <Modal
               open={open}
               onClose={handleClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
               >
               <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                         Create a todo list
                    </Typography>
                    <TextField id="outlined-basic" label="Titre" variant="outlined" />
                    <TextField id="outlined-basic" label="Completed" variant="outlined" />
                    <Box sx={{ minWidth: 120 }}>
                         <FormControl fullWidth>
                         <InputLabel id="demo-simple-select-label">User</InputLabel>
                         <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Age"
                              onChange={handleChange}
                         >
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                              <MenuItem value={4}>4</MenuItem>
                              <MenuItem value={5}>5</MenuItem>
                              <MenuItem value={6}>6</MenuItem>
                              <MenuItem value={7}>7</MenuItem>
                              <MenuItem value={8}>8</MenuItem>
                              <MenuItem value={9}>9</MenuItem>
                              <MenuItem value={10}>10</MenuItem>
                         </Select>
                         </FormControl>
                    </Box>
               </Box>
               <Button variant="contained">Ajouter</Button>
          </Modal>     
     </>
     );
}
