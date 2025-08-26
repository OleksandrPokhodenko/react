import { setCurrentPage } from "@/redux/slices/posts/postsSlise";
import { useDispatch, useSelector } from "react-redux";

function PaginationBlock() {
    const { currentPage, totalPages, status } = useSelector(state => state.posts);
    const dispatch = useDispatch();
    return (
        status === 'success' ?
            <div className="pagination-block">
                <button
                    disabled={currentPage === 1}
                    onClick={currentPage !== 1 ? () => dispatch(setCurrentPage(currentPage - 1)) : null}
                    className="pagination-block__button-edge">Попередня</button>
                <div className="pagination-block__buttons">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            className={`pagination-block__button ${currentPage === i + 1 ? 'pagination-block__button--active' : ''}`}
                            key={i}
                            onClick={() => dispatch(setCurrentPage(i + 1))}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
                <button
                    disabled={currentPage === totalPages}
                    onClick={currentPage !== totalPages ? () => dispatch(setCurrentPage(currentPage + 1)) : null}
                    className="pagination-block__button-edge">Наступна</button>
            </div>
            : null
    );
}

export default PaginationBlock;