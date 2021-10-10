import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Ramens from "./pages/Ramens";
import Top from "./pages/Top";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Top></Top>
        </Route>
        <Route path="/ramens">
          <Ramens></Ramens>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
