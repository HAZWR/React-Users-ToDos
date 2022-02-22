import { useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {add,remove} from '../../store/todo/index';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import './Header.scss';
export function Header(props) {
     const listOfTodos = useSelector((state)=>state.todo.list);
     const dispatch=useDispatch();

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


     return (
     <>
          <Button variant="outlined" startIcon={<AddIcon />}>
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
                                   <Button size="small">Plus en détail</Button>
                                   <Button onClick={(e)=>actionDelete(e,element.id)} variant="outlined" startIcon={<DeleteIcon />}>
                                        Delete
                                   </Button>
                                   </CardActions>
                              </Card>
                         )
                    })
               }
          </div>
     </>
     );
}
