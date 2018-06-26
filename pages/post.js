const Post = (props) => (
  <div>
    <h1>
      {props.url.query.title}
    </h1>
    <p>This is the post</p>
  </div>
)

export default Post