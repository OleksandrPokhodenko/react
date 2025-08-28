import { useState } from "react";

function PostForm({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    return (
        <div className="posts-form posts-form--margin">
            <label className="posts-form__label">Заголовок
                <input
                    placeholder="Введіть заголовок"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="posts-form__input"
                />
            </label>
            <label className="posts-form__label">Текст поста
                <textarea
                    placeholder="Введіть текст поста"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="posts-form__textarea"
                />
            </label>
            <label className="posts-form__label">Автор
                <input
                    placeholder="Введіть ім'я автора"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    type="text"
                    className="posts-form__input"
                />
            </label>
            <button
                onClick={() => onSubmit(title, body, author, setAuthor, setBody, setTitle)}
                className="posts-form__button"
            >
                Додати пост
            </button>
        </div>
    );
}

export default PostForm
