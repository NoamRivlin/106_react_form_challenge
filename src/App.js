import React, { useState } from 'react';
import Form from './Form';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accounts, setAccounts] = useState([{ username: 'N', password: '11' }]);

  const onSubmit = (e) => {
    //YOUR CODE HERE
    console.log(username, 'and pass:', password);
    console.log(accounts);
    if (
      username === accounts[0].username &&
      password === accounts[0].password
    ) {
      alert(`Logged succesfully! yo ${username}`);
      setPassword('');
      setUsername('');
    }
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
