function PostItem({ post, onDelete }) {

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
            <button
                onClick={() => onDelete(post.id)}
                className="post-item__button">Видалити пост</button>
        </div>
    );
}

export default PostItem;