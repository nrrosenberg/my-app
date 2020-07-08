
async function getPosts(token) {
    const response = await fetch('http://arcane-cove-93049.herokuapp.com/api/posts',{
    headers: {Authorization: `Bearer ${token}`} 
    });
    let {data, links} = await response.json()
    data = Object.values(data);
    await data.map(async (post, i)=>{
        post.attributes['freelancerUsername'] = await getFreelancerName(token ,Object.values(post.attributes)[1])
    });
    return {data, links}    
}

async function getTopPosts(token) {
    const response = await fetch('http://arcane-cove-93049.herokuapp.com/api/posts/top',{
    headers: {Authorization: `Bearer ${token}`} 
    });
    let {data, links} = await response.json()
    data = await Object.values(data);
    await data.map(async (post, i)=>{
        post.attributes['freelancerUsername'] = await getFreelancerName(token ,Object.values(post.attributes)[1])
        
    });

    return {data, links}
}

async function getComments(token, postId) {
    const response = await fetch(`http://arcane-cove-93049.herokuapp.com/api/posts/comments/${postId}`,{
    headers: {Authorization: `Bearer ${token}`} 
    });
    return response.json();
}

async function getFreelancerName(token, freelancerId) {
    let response = await fetch(`http://arcane-cove-93049.herokuapp.com/api/freelancers/show/${freelancerId}`,{
    headers: {Authorization: `Bearer ${token}`} 
    });
    let {data} = await response.json().then();
    const username = Object.values(data.attributes)[3]
    return username

}

export {getPosts, getTopPosts, getComments, getFreelancerName};