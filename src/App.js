import React, { useState } from 'react';
import Form from './Form';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accounts, setAccounts] = useState([
    { username: 'asdasdasd', password: '123123123' },
  ]);

  const onSubmit = (e) => {
    //YOUR CODE HERE
    console.log(username, 'and pass:', password);
    console.log(accounts);
    // if (
    //   username === accounts[0].username &&
    //   password === accounts[0].password
    // ) {
    //   alert(`Logged succesfully! yo ${username}`);
    //   setPassword('');
    //   setUsername('');
    // }
    if (
      username.length > 6 &&
      username.length < 20 &&
      password.length > 6 &&
      password.length < 20
    ) {
      if (
        !accounts.find(
          (account) =>
            account.username === username && account.password === password
        )
      ) {
        console.log(
          `false but with passable username and pass length and\nwill be added to the accounts array as username:${username} and password:${password}`
        );
        setAccounts([...accounts, { username: username, password: password }]);
        //useState is async so accounts would update but wont show in the log the line below...
        // when we talked about controlled vs un controlled seems like
        //control uses -useState and it's async which could be misleading
        //uncontrol uses -useRef which is sync and more predictavble...
        //but was suggested that controlled is...controlled so much likely to be used
        //come up with a question about this...?
        console.log(accounts);
        //how come the inputs are emptied but i dont state the setState?
        // ------------------------------------------------setPassword('');
        // ------------------------------------------------setUsername('');
        return;
      }

      alert(`Logged succesfully! yo ${username}`);
      setPassword('');
      setUsername('');
      console.log(accounts);
      return;
    } else if (username.length > 20)
      return alert('username cannot exceed 20 char');
    else if (password.length > 20)
      return alert('password cannot exceed 20 char');

    alert('username and/or password is too short');
  };

  const onUsernameChange = (e) => {
    // YOUR CODE HERE
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    // YOUR CODE HERE
    setPassword(e.target.value);
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 20,
      }}>
      <Form
        username={username}
        password={password}
        onSubmit={onSubmit}
        onUsernameChange={onUsernameChange}
        onPasswordChange={onPasswordChange}
      />
    </div>
  );
}

export default App;
