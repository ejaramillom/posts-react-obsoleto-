import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import Posts from "./components/Posts";

const datas = [
  {
    id: 1,
    title: "Manejo de dependencias en Ruby con Bundler",
    description:
      "Bundler es una manejador de dependencias para Ruby. Aunque viene incluido con Rails, Bundler no es exclusivo de Rails, lo puedes usar para manejar las dependencias de cualquier proyecto de Ruby.",
    url:
      "http://blog.makeitreal.camp/manejo-de-dependencias-en-ruby-con-bundler/",
    votes: 42,
    writer_avatar_url:
      "//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405",
    post_image_url:
      "http://blog.makeitreal.camp/assets/images/bg-images/bundler.jpg"
  },
  {
    id: 2,
    title: "Descubre si Make it Real es para ti",
    description:
      "En Make it Real buscamos entrenar a los desarrolladores Web que nosotros mismos quisiéramos contratar. Personas con autodisciplina que sean capaces de resolver problemas complejos y se adapten rápidamente a nuevas tecnologías y escenarios. En este post vamos a discutir algunas características de nuestro programa para que descubras si Make it Real es para ti.",
    url: "http://blog.makeitreal.camp/descubre-si-make-it-real-es-para-ti/",
    votes: 43,
    writer_avatar_url:
      "//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405",
    post_image_url:
      "http://blog.makeitreal.camp/assets/images/bg-images/laptop-sublime.jpg"
  },
  {
    id: 3,
    title: "¿Qué es código?",
    description:
      "Semáforos, automóviles, aviones, aeropuertos, satélites, el sistema financiero, gran parte de nuestras vidas depende del código que varias generaciones de programadores han escrito. Pero ¿qué es código? ¿quién lo ejecuta y cómo? En este post vamos a hacer un recorrido histórico para entender cómo es que la electricidad se convierte en código y cómo surgieron los lenguajes de programación.",
    url: "http://blog.makeitreal.camp/que-es-codigo/",
    votes: 44,
    writer_avatar_url:
      "//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405",
    post_image_url:
      "http://blog.makeitreal.camp/assets/images/bg-images/code.jpg"
  },
  {
    id: 4,
    title: "Aprende Desarrollo Web gratis",
    description:
      "¿Quieres iniciar en el mundo del desarrollo Web y no sabes por dónde empezar? Conoce Aprende Desarrollo Web, un curso completamente gratis dirigido a personas sin experiencia en el que aprenderás a crear y publicar sitios interactivos en Internet con HTML, CSS y JavaScript.",
    url: "http://blog.makeitreal.camp/aprende-desarrollo-web-gratis/",
    votes: 45,
    writer_avatar_url:
      "//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405",
    post_image_url:
      "http://blog.makeitreal.camp/assets/images/bg-images/aprende-desarrollo-web-bg.png"
  }
];

class App extends React.Component {
  state = { data: datas, order: "asc" };
  _handleVote = (postId, type) => {
    const updatedList = this.state.data.map(post => {
      if (post.id === postId && type === "Up") {
        return { ...post, votes: post.votes + 1 };
      } else if (post.id === postId && type === "Down") {
        return { ...post, votes: post.votes - 1 };
      } else {
        return post;
      }
    });

    if (this.state.order === "asc") {
      updatedList.sort((a, b) => (a.votes > b.votes ? 1 : -1));
    }
    if (this.state.order === "desc") {
      updatedList.sort((a, b) => (a.votes < b.votes ? 1 : -1));
    }
    this.setState({
      data: updatedList
    });
  };

  componentWillMount() {
    this._handleOrder("asc");
  }

  _handleOrder = order => {
    const newOrder = this.state.data;
    if (order === "asc") {
      newOrder.sort((a, b) => (a.votes > b.votes ? 1 : -1));
    }
    if (order === "desc") {
      newOrder.sort((a, b) => (a.votes < b.votes ? 1 : -1));
    }
    this.setState({ data: newOrder, order: order });
  };

  render() {
    console.log(this.state.order);
    const { data, order } = this.state;
    return (
      <Container>
        <h2 className='text-center'>Blog posts Populares</h2>
        <Row>
          <Col md={{ span: 6, offset: 2 }}>
            <div>
              Orden:
              <Button
                variant="outline-primary"
                className={order === "asc" ? "active" : ""}
                onClick={this._handleOrder.bind(this, "asc")}
                style={{ marginLeft: 10 }}
              >
                Ascendente
              </Button>
              <Button
                variant="outline-primary"
                className={order === "desc" ? "active" : ""}
                onClick={this._handleOrder.bind(this, "desc")}
                style={{ marginLeft: 10 }}
              >
                Descendente
              </Button>
            </div>
          </Col>
          <Posts data={data} onVote={this._handleVote} />
        </Row>
      </Container>
    );
  }
}

export default App;
