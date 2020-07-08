async function getFreelancers(token) {
    const response = await fetch('http://localhost:3000/api/freelancers',{
    headers: {Authorization: `Bearer ${token}`} 
    });
    let {data, links} = await response.json()
    return {data, links}    
}

export {getFreelancers}