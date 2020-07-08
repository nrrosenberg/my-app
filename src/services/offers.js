async function getOffers(token) {
    const response = await fetch('http://localhost:3000/api/offers',{
    headers: {Authorization: `Bearer ${token}`} 
    });
    let {data, links} = await response.json()
    return {data, links}    
}

export {getOffers}