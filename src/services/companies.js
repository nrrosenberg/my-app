async function getCompanies(token) {
    const response = await fetch('http://arcane-cove-93049.herokuapp.com/api/companies',{
    headers: {Authorization: `Bearer ${token}`} 
    });
    let {data, links} = await response.json()
    return {data, links}    
}

export {getCompanies}