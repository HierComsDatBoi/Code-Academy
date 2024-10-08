let users = [
  {
    id: 'dfs64dfs64',
    name: 'Petras'
  },{
    id: 'dfs64dsafdfs64',
    name: 'Rokas'
  },{
    id: 'dfs64ddsffs64',
    name: 'Jonas'
  },{
    id: 'dfs6sdff4dfs64',
    name: 'Kazimieras'
  }
];

const deleteUser = (id) => {
  users = users.filter(user => user.id !== id);
}

// PUT
const editUser = (id, newUserInfo) => {
  users = users.map(user => {
    if(user.id === id){
      return {
        id: id,
        ...newUserInfo
      }
    } else {
      return user;
    }
  })
}

export { users, deleteUser, editUser };