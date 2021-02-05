import React from 'react';
import _ from "lodash";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Panel from '../panel/panel';
import UserCard from '../userCard/userCard'
import { connect } from 'react-redux';
import { postsFetchData } from '../../appData/actions/actions';

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
    return <div className="container homeContainer">
              <Row>
                <Col md="5">
                  <UserCard userId={getCurrUserID()} />
                  <Panel name="Your Posts" className="" currUser={getCurrUserID()} allPosts={getUserPosts(this.props.posts)}/>
                </Col>
                <Col>
                  <Panel name="All Users Posts" className="" currUser={"all"} allPosts={getOtherUserPosts(this.props.posts)}/>
                </Col>
              </Row>
            </div>;
  }
}

/**
 * Finds posts only made by the current user 
 * 
 * @param {[Object]} posts - An array of all the posts gathered so far
 */
const getUserPosts = (posts)  => _.filter(posts, post => post.userId === getCurrUserID());

/**
 * Finds any posts not made by the current user.
 * 
 * I shuffled the other posts to make it looks like a social media site or something, but
 * it is purely for the aesthetics of your experience :)
 * 
 * @param {[Object]} posts - An array of all the posts gathered so far
 */
const getOtherUserPosts = (posts)  => _.shuffle(_.filter(posts, post => post.userId !== getCurrUserID()));

// TODO: Add a current user state and use this function to retrieve from store
/**
 * Retrieves the current user from the store (hardcoded right now per 
 * the breathing room given in project write-up)
 */
const getCurrUserID = () => 1;

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
