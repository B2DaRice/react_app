import React from 'react';

class Panel extends React.Component {
  render() {
    const currClass = this.props.className;

    return <div className={currClass}>
      <h2>{this.props.name}</h2>
      <ul>
        {this.props.allPosts.map((post) => (
          <li key={post.id}>
            <div>
              <h4>{post.title}</h4>
              {post.body}
            </div>
          </li>
        ))}
      </ul>
    </div>;
  }
}

export default Panel;