import React from 'react';
import _ from "lodash";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Panel from '../panel/panel';
import { connect } from 'react-redux';
import { postsFetchData } from '../appData/actions/actions';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchData('https://jsonplaceholder.typicode.com/posts');
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    // return (
    //   <ul>
    //     {this.props.posts.map((item) => (
    //       <li key={item.id}>
    //         {item.title}
    //       </li>
    //     ))}
    //   </ul>
    // );
    return <Container>
      <Row>
        <Col>
          <Panel name="Current User Posts" className="" allPosts={getUserPosts(this.props.posts)}/>
        </Col>
        <Col>
          <Panel name="All Users Posts" className="" allPosts={getOtherUserPosts(this.props.posts)}/>
        </Col>
      </Row>
    </Container>;
  }
}

const getUserPosts      = (posts) => _.filter(posts, post => post.userId === getCurrUser());
const getOtherUserPosts = (posts) => _.filter(posts, post => post.userId !== getCurrUser());
const getCurrUser       = () => 1;

const mapStateToProps = (state) => {
  return {
    posts      : state.posts,
    hasErrored : state.loadError,
    isLoading  : state.currLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(postsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
