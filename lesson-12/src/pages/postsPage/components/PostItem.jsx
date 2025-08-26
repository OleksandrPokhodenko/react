function PostItem({ post }) {
    return (
        <div className="post-item">
            <h2 className="post-item__title">{post.title}</h2>
            <div className="post-item__text">
                <p>{post.body}</p>
            </div>
            <div className="post-item__info">
                <div className="post-item__likes">
                    <span>👍: {post.likesNumber}</span>
                    <span>👎: {post.dislikesNumber}</span>
                </div>
                <div className="post-item__author">{post.authorId}</div>
            </div>
        </div>
    );
}

export default PostItem;