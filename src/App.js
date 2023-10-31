import React from 'react';

function App() {
  const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 1, name: 'User 1 (Duplicate)' }, 
    { id: 4, name: 'User 4' },
  ];

  const renderUsers = () => {
    return users.map(user => (
      <div key={user.id}>
        {user.name}
      </div>
    ));
  }

  return (
    <div>
      {renderUsers()}
    </div>
  );
}

export default App;
