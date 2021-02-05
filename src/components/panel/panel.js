import React       from 'react';
import _           from 'lodash';
import PostContent from '../postContent/postContent';


class Panel extends React.Component {
  render() {
    const currClass = "postPanel " + this.props.className;

    return <div className={currClass}>
      <h2>{this.props.name}</h2>
      {this.props.allPosts.map((post) => (
        <PostContent key={post.id} postData={post} userData={getCurrUser(post.userId)} currUser={this.props.currUser}/>
      ))}
    </div>;
  }
}

/**
 * Retrieves all relevant users from database (users hardcoded with 
 * pictures for your pleasure [takes bow])
 * 
 * NOTE:  Typically, the query I use in the database will make it 
 *        unnecessary for this function.
 */
const users = _.get(require("../../definitions/definitions.json"), "users");

/**
 * Retrieves current user information from list of users.
 * 
 * NOTE:  With a database, the userId would be used in the query to
 *        retrieve only the relevant user(s) rather than getting all
 *        first and then finding.
 * 
 * @param {Number} userId 
 */
const getCurrUser = (userId) => _.find(users, user => user.userId === userId);

export default Panel;