import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { 
  Switch, 
  Route,
  useLocation
} from "react-router-dom";
import Menu from './Menu';
import Welcome from './Welcome';
import { papers }from './Paper';
import { projects } from './Project';
import BlogList  from './BlogList';
import BlogPost  from './BlogPost';


export default function Main(){

  const location = useLocation();

	const hideMenu = location.pathname.match(/^\/blog\/[^/]+$/);

  return (
      <Container fluid className="App mt-5 mb-5">
        <Row>
          {!hideMenu && (
            <Col md={{span: 3, offset: 1}}> 
              <Menu/> 
            </Col>
          )}
          <Col 
            md={hideMenu? {}: {span: 7, offset: 0}} 
            className="App-main-content"
          >
            <Switch>
              <Route path="//"> <Welcome /> </Route>
              <Route path="/papers"> {papers} </Route>
              <Route path="/projects"> { projects } </Route>
               <Route exact path="/blog">
                  <BlogList />
                </Route>
              <Route path="/blog/:id" component={BlogPost} />
            </Switch>
          </Col>
        </Row>
      </Container>
  );
}
