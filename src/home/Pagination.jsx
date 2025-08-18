import React from "react";

import "../styles/home/Pagination.css"

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className="contributions-pages">
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "page-number-button active" : "page-number-butto"}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;