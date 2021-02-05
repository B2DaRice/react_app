import React from 'react';
import Row   from 'react-bootstrap/Row';
import Col   from 'react-bootstrap/Col';


// This component is used for both the current user posts and the other user posts,
// I've used some ternary operations to only display what I want based on props 
// passed down
class PostContent extends React.Component {
  render() {
    const currClass = "postContent card " + this.props.className,
          post      = this.props.postData,
          user      = this.props.userData;

    return  <div key={post.id} className={currClass}>
              <div className="contentRow row d-flex flex-wrap align-items-center">
                {this.props.currUser === "all" &&
                  <Col md="3">
                    <div className="picContainer">
                      <div className="profilePic align-middle">
                        <img alt="" src={user.profPic}></img> 
                      </div>
                    </div>
                  </Col>
                }
                <Col>
                  <Row>
                    <span className="postTitle">
                      {this.props.currUser === "all" &&
                        <div className="btn btn-def">{user.userName}</div>
                      }
                      <h5>{post.title}</h5>
                    </span>
                  </Row>
                  <Row>
                    <div className="postContentBody">
                      {post.body}
                    </div>
                  </Row>
                </Col>
              </div>
            </div>;
  }
}

export default PostContent;
