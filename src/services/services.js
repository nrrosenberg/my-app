async function getServices(token) {
    let response = await fetch('http://localhost:3000/api/services',{
    headers: {Authorization: `Bearer ${token}`} 
    });
    response = await response.json()
    return response
       
}

export {getServices}