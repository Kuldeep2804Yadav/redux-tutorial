import Auth from "./components/Auth";
import CounterNum from "./components/CounterNum";
import Header from "./components/Header";
import Profile from "./components/Profile";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.auth);

  return (
    <div className="App">
      <Header />
      {isAuth ? <Profile /> : <Auth />}

      <CounterNum />
    </div>
  );
}

export default App;
