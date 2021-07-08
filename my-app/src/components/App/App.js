import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

import Todos from '../../todos/components/Todos/Todos';
import Users from '../../users/components/Users/Users';
import TopBar from '../TopBar/TopBar';
import Home from '../Home/Home';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <div className="App-Route-Container">
          <Route path="/" component={Home} exact />
          <Route path="/todos" component={Todos} />
          <Route path="/users" component={Users} />
        </div>
      </BrowserRouter>
    </div>
  );
}
