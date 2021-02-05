import React       from 'react';
import _         from 'lodash';


// This component is only used once right now, but I imagine could
// be used on a page that displays users
class UserCard extends React.Component {
  render() {
    const currClass = "userCard postContent card " + this.props.className,
          user      = getCurrUser(this.props.userId);

    return <div key={user.id} className={currClass}>
              <div className="postTitle">
                <h4> Current User </h4>
                <hr></hr>
                <div className="contentRow row">
                  <div className="picContainer">
                    <div className="profilePic largerPic">
                      <img alt="" src={user.profPic}></img> 
                    </div>
                  </div>
                </div>
                <div className="contentRow row">
                  <div className="picContainer btn btn-def">
                    {user.userName}
                  </div>    
                </div>
              </div>
              
            </div>;
  }
}

// Please see comments from `panel.js` for these functions
const users       = _.get(require("../../definitions/definitions.json"), "users");
const getCurrUser = (userId) => _.find(users, user => user.userId === userId);

export default UserCard;