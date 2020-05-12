import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import Posts from "./components/Posts";
import datas from './components/datas'

class App extends React.Component {

  constructor( props ){
    super( props );
    this.state = {
      data: datas,
      order: "ascendant"
    };
  }

  orderPosts = ( postId, type ) => {
    const updatedList = this.state.data.map(post => {
      if ( post.id === postId && type === "Up" ) {
        return { ...post, votes: post.votes + 1 };
      } else if ( post.id === postId && type === "Down" ) {
        return { ...post, votes: post.votes - 1 };
      } else {
        return post;
      }
    });

    if ( this.state.order === "ascendant" ) {
      updatedList.sort(( a, b ) => ( a.votes > b.votes ? 1 : -1 ));
    }
    if ( this.state.order === "descendant" ) {
      updatedList.sort(( a, b ) => ( a.votes < b.votes ? 1 : -1 ));
    }
    this.setState({
      data: updatedList
    });
  };

  componentWillMount() {
    this.handleOrder( "ascendant" );
  }

  handleOrder = order => {
    const newOrder = this.state.data;
    if ( order === "ascendant" ) {
      newOrder.sort(( a, b ) => ( a.votes > b.votes ? 1 : -1 ));
    }
    if (order === "descendant") {
      newOrder.sort(( a, b ) => ( a.votes < b.votes ? 1 : -1 ));
    }
    this.setState({ data: newOrder, order: order });
  };

  render() {
    console.log( this.state.order );
    const { data, order } = this.state;
    return (
      <Container>
        <Row>
          <Col md={ 12 } className='text-center'>
          <h1 className='text-center'>BLOG | POST POPULARES </h1>
          </Col>
          <Col xs={ 8 } className='text-center'>
            <div className='center-buttons'>
              Ordenar:
              <Button
                variant="outline-primary"
                className={ 'margin-button' + order === "ascendant" ? "active" : "" }
                onClick={ this.handleOrder.bind(this, "ascendant" )}
                style={{ marginLeft: 10 }} >
                Ascendente
              </Button>
              <Button
                variant="outline-primary"
                className= { 'margin-button' + order === "descendant" ? "active" : ""}
                onClick={ this.handleOrder.bind(this, "descendant" )}
                style={{ marginLeft: 10 }}>
                Descendente
              </Button>
            </div>
          </Col>
          <Posts data={ data } onVote={ this.orderPosts } />
        </Row>
      </Container>
    );
  }
}

export default App;
