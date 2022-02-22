import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import todo from './todo';

export default configureStore({
          reducer: {
               todo
          },
     },
     composeWithDevTools
);

