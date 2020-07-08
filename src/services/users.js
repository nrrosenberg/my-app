async function getUsers(token) {
    const response = await fetch('http://localhost:3000/api/users',{
    headers: {Authorization: `Bearer ${token}`} 
    });
    let {data, links} = await response.json()
    return {data, links}    
}

export {getUsers}