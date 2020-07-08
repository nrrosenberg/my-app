import React, {Component} from 'react';

import '../styles/navigation.css'
import '../styles/tables.css'
import {getPosts, getTopPosts} from  '../services/posts' 
import { getComments, getFreelancerName } from '../services/posts';
//import { id } from 'postcss-selector-parser';


class Posts extends Component {
    constructor(){
      super()
      this.state = {
        posts: '',
        links: '',
        comments: '',
      }
      this.fetchTopPosts = this.fetchTopPosts.bind(this);
      this.fetchPosts = this.fetchPosts.bind(this);
      this.fetchComments = this.fetchComments.bind(this);
      this.fetchFreelancerName = this.fetchFreelancerName.bind(this);
    }

    async fetchPosts() {
        const {data, links} = await getPosts(localStorage.getItem('token'));
        await this.setState({ posts: data, links: links, comments: ''});
      }
    async fetchTopPosts() {
        const {data, links} = await getTopPosts(localStorage.getItem('token'));
        await this.setState({ posts: data, links: links, comments: ''});
      }
      async fetchComments(postId) {
        const {data} = await getComments(localStorage.getItem('token'), postId);
        this.setState({ comments: data});
      }
      async fetchFreelancerName(freelancerId) {
        const {data} = await getFreelancerName(localStorage.getItem('token'), freelancerId);
        return (Object.values(data.attributes)[3])
      }


  render() {
      let posts;
      if (this.state.posts){
        posts = this.state.posts.map((post, i) => {
          console.log(post.attributes.freelancerUsername)
  
          return (
            <tbody key= {i}>
              <tr>
                <td>{post.attributes.freelancerUsername}</td>
                <td>{post.attributes.description}</td>
                <td><img className='table-img' src={post.attributes.media} alt="" /></td>
                <td>{post.attributes.likes}</td>
                <td><button className='btn btn-outline-light' onClick={()=>this.fetchComments(post.attributes.id)}> Comments</button></td>
              </tr>
            </tbody>
          ); 
        });
      }
      let comments;
      if (this.state.comments){
        comments = this.state.comments.map((comment, i) => {
          return (
            <tbody  key= {i}>
              <tr>
                <td>{comment.attributes.freelancer}</td>
                <td>{comment.attributes.description}</td>
              </tr>
            </tbody>
          ); 
        });
      }

      return (
        <div className='container'>
          <h2>Posts</h2>
          
          <div>
          <ul className="list-group list-group-horizontal-sm">
            <li className="">
              <button className='btn btn-outline-primary' onClick={this.fetchTopPosts}> Top 10 (Likes)</button>
            </li>
            <li className="">
              <button className='btn btn-outline-primary' onClick={this.fetchPosts}> Todos los Posts</button>
              </li>
          </ul>
        </div>
  
          <table>
            <thead>
            <tr>
              <th>Freelancer</th>
              <th>Description</th>
              <th>Media</th>
              <th>Likes</th>
              <th>Comentarios</th>
            </tr>
            </thead>
            {posts}
          </table>

          <table>
            <thead>
            <tr>
              <th>Usuario</th>
              <th>Description</th>
              
            </tr>
            </thead>
            {comments}
          </table>
        </div>
      )
  }
}
  
  
export default Posts;