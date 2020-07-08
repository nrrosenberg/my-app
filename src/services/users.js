async function getUsers(token) {
    const response = await fetch('https://arcane-cove-93049.herokuapp.com/api/users',{
    headers: {Authorization: `Bearer ${token}`} 
    });
    let {data, links} = await response.json()
    return {data, links}    
}

export {getUsers}