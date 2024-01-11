import React, { useState } from "react";
import Post from "./Post";
import CommentPost from "./CommentPost";
// import Settings from "../Navigation/Settings";

const MainPostFeed = () => {
  // const { visibleComponents, setVisibleComponents } = useState([
  //   'NewsFeed', 'Events', 'Contacts', 'Projects', 'Boards', 'Personal Progress', 'Albums', 'Organizations', 'People You Follow', 'Tasks'
  // ]);
  // const allComponents = [
  //   'NewsFeed', 'Events', 'Contacts', 'Projects', 'Boards', 'Personal Progress', 'Albums', 'Organizations', 'People You Follow', 'Tasks'
  // ];

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const handleSubmittedPost = (postContent) => {
    setPosts([...posts, postContent]);
  };

  const handleSubmittedComment = (postComment) => {
    setComments([...comments, postComment]);
  };

  // const toggleComponent = (component) => {
  //   if (visibleComponents.includes(component)) {
  //     setVisibleComponents(visibleComponents.filter(c => c !== component));
  //   } else {
  //     setVisibleComponents([...visibleComponents, component]);
  //   }
  // };

  return (
    <>
      <div>
        <div className="card d-flex justify-content-centre">
          {/* Render the list of posts */}
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <Post submittedPost={handleSubmittedPost} />
            </blockquote>
          </div>
          <h5>NEWSFEED</h5>
          <ul>
            {posts.map((post, postIndex) => (
              <li key={postIndex}>
                <div className="card-header">User001</div>
                <div>
                  {post}
                  <div>
                    {comments
                      .filter((comment) => comment.postIndex === postIndex)
                      .map((filteredComment, commentIndex) => (
                        <div key={commentIndex}>
                          Comment: {filteredComment.content}
                        </div>
                      ))}
                  </div>
                </div>
                <p>
                  <CommentPost
                    submittedComment={(commentContent) =>
                      handleSubmittedComment({
                        content: commentContent,
                        postIndex: postIndex,
                      })
                    }
                  />
                </p>
              </li>
            ))}
          </ul>
          {/* Render the Post component with the handleSubmittedPost function */}
        </div>
        {/* adding the toggled  component here from  setting*/}
        {/* <Settings allComponents={allComponents} visibleComponents={visibleComponents} toggleComponent={toggleComponent} /> */}
      </div>
    </>
  );
};

export default MainPostFeed;
