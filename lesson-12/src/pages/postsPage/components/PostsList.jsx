import PostItem from "./PostItem";

function PostsList({ postsList, onDelete }) {
    return (
        <div className="posts-list">
            {postsList.map((post) => (
                <PostItem key={post.id} post={post} onDelete={onDelete} />
            ))}
        </div>
    );
}

export default PostsList;