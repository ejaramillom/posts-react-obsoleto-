import React, { Component } from 'react';
import Post from './Post'

class Posts extends Component {
    render() {
        return (
            <>
            {this.props.data.map(post =>
                <Post key={post.id} post={post} onVote={this.props.onVote}/>
            )}
            </>
        );
    }
}

export default Posts;
