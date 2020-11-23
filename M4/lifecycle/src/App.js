import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Movie from "./components/Movie"
import { Container, Row, Col, Form } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

class App extends React.Component {
  state = {
    movieTitle: "Batman Forever",
  }
  componentDidMount = () => {
    console.log("App component is fully mounted")
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Form>
                  <Form.Group>
                    <Form.Label htmlFor="movieSelect"></Form.Label>
                    <Form.Control
                      name="movieSelect"
                      as="select"
                      onChange={(e) =>
                        this.setState({ movieTitle: e.currentTarget.value })
                      }
                    >
                      <option>Batman Forever</option>
                      <option>Man Of Steel</option>
                      <option>Wonder Woman</option>
                    </Form.Control>
                  </Form.Group>
                </Form>

                <Movie movieTitle={this.state.movieTitle} />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}

export default App
