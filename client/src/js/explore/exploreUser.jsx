import React from "react"
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import DisplayUserSearch from "./displayUserSearch"


const ExploreUser = ({ userId }) => {
  const [users, setUsers] = React.useState([])
  const [query, setQuery] = React.useState('')

  React.useEffect(() => {
    fetch(`api/v1/users?q=${query}`)
      .then(resp => resp.json())
      .then(users => {
        setUsers(users)
      })
  }, [query])

  return <div style={{ minHeight: 660 }}>
    <form onSubmit={e => e.preventDefault()}>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginLeft: 15 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Username"
          inputProps={{ 'aria-label': 'search google maps' }}
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </form>
    {users.map(user => <DisplayUserSearch key={user.id} user={user} />)}
  </div>
}

export default ExploreUser