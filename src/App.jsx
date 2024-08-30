import Routes from './Routes'
import { useDispatch } from 'react-redux';
import { fetchUser } from './features/slices/user/userSlice';

function App() {

  const dispatch = useDispatch();
  const token = localStorage.getItem("earringsToken");
  if (token) {
    dispatch(fetchUser());
  }
  return (
    <>
      <Routes />
    </>
  )
}

export default App
