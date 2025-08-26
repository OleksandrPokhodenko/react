import PostItem from "./PostItem";

function PostsList({ postsList }) {
    return (
        <div className="posts-list">
            {postsList.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostsList;