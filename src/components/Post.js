import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Post extends Component {
  handleClickUp = () => {
    this.props.onVote( this.props.post.id, "Up" );
  };
  handleClickDown = () => {
    this.props.onVote( this.props.post.id, "Down" );
  };
  render() {
    const { post } = this.props;
    return (
      <Row key={ post.id }>
        <Col sm={{ span:3, offset: 2 }}>
          <img
            src={ post.post_image_url }
            alt={ post.title }>
          </img>
        </Col>
        <Col sm={ 1 }>
          <div className="votes">
            <span>
              <button
                onClick={ this.handleClickUp }
                className="fas fa-angle-up"
              />
              <div>{ post.votes }</div>
              <button
                onClick={ this.handleClickDown }
                className="fas fa-angle-down"
              />
            </span>
          </div>
        </Col>
        <Col sm={ 5 }>
          <div>
            <h4>
              <a href={ post.url }>{ post.title }</a>
            </h4>
            { post.description }
          </div>
          <div className="author">
            <span>
              <em>Escrito por: &nbsp; </em>
              <img className="avatar" src={ post.writer_avatar_url } alt="Avatar"/>{" "}
            </span>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Post;
