import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../routes/Home';
import Detail from '../routes/Detail';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}
