async function getServices(token) {
    let response = await fetch('http://arcane-cove-93049.herokuapp.com/api/services',{
    headers: {Authorization: `Bearer ${token}`} 
    });
    response = await response.json()
    return response
       
}

export {getServices}    