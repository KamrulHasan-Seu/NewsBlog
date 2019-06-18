import React, {Component} from 'react'
//import axios from 'axios'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

class Home extends Component {
  //     state = {         posts : []     } componentDidMount(){
  // axios.get('https://jsonplaceholder.typicode.com/posts')     .then(res =>{
  //     this.setState({             posts : res.data         })     }) }

  render() {
    console.log(this.props.posts)
    const {posts} = this.props;
    const postsList = posts
      ? (posts.map(p => {
        return (
          <div className="post card">
            <div className="card-content">
              <Link to={'/' + p.id}>
                <span className="card-title" key={p.id}>{p.title}</span>
              </Link>
              <p>{p.body}</p>
            </div>
          </div>
        )
      }))
      : (
        <h1>There has No posts Yet!!</h1>

      )
    return (
      <div>
        <div className="container">
          <div className="center">
            <h2>Home</h2>
            {postsList}
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts}
}

export default connect(mapStateToProps)(Home)