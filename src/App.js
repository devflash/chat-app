
import {useReducer} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Sidebar from './componets/sidebar/Sidebar';
import Chat from './componets/chat/Chat';
import Login from './componets/Login/Login';

const initialState = {
  rooms: [],
  user: {user: {displayName: 'Mruegsh'}}
}

const reducerFunction = (state, action) => {
  switch(action.type) {
    case 'INITIALIZE_ROOMS' : 
      return {
        ...state,
        rooms:[...action.rooms]
      }
    case 'USER_SIGN_IN' :
      return {
        ...state,
        user: action.user
      }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <div className="App">

      {state.user ? (
        <div className="app__body">
            <Router>
              <Sidebar rooms={state.rooms} dispatch={dispatch} user={state.user} showSidebar={state.showSidebar}/>
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat rooms={state.rooms} user={state.user}/>
                </Route>
                <Route path="/">
                  <Chat rooms={state.rooms} user={state.user}/>
                </Route>
              </Switch>
          </Router>

        </div>
        ) : (
          <Login dispatch={dispatch}/>
        )}
    </div>
  );
}

export default App;
