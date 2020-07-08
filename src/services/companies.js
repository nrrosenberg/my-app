async function getCompanies(token) {
    const response = await fetch('http://localhost:3000/api/companies',{
    headers: {Authorization: `Bearer ${token}`} 
    });
    let {data, links} = await response.json()
    return {data, links}    
}

export {getCompanies}