import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "./_actions/user_actions";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers().then((data) => dispatch(data));
  }, [dispatch]);
  const { users } = useSelector((state) => state.user);
  useEffect(() => {
    console.log(users ? users["hydra:member"] : "no User");
  }, [users]);
  return <div className="App">{users && <> OK</>}</div>;
}

export default App;
