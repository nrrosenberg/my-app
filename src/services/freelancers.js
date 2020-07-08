async function getFreelancers(token) {
    const response = await fetch('http://arcane-cove-93049.herokuapp.com/api/freelancers',{
    headers: {Authorization: `Bearer ${token}`} 
    });
    let {data, links} = await response.json()
    return {data, links}    
}

export {getFreelancers}