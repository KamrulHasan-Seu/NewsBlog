import React, { Component } from 'react'
import axios from 'axios'
class Post extends Component{
    state = {
        post : null
    }
   componentDidMount(){
    let id = this.props.match.params.post_id;
    axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
    .then( p =>{
        this.setState({
            post : p.data
        })
    })
   }

    render(){
        const postWithId = this.state.post ? (
            
                <div className ="post card">
                    <div className ="card-content">
                       <span className="card-title" key={this.state.post.id}>{this.state.post.title}</span>
                        <p>{this.state.post.body}</p>
                    </div>
                </div>
            
        ):(
            <h2>Loading post....</h2>
        ) 
        return(
            <div className ="container">
            {
                postWithId
            }
            </div>
        )
    }
}
export default Post