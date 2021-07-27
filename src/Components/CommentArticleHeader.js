import React from 'react';
import "../CSS/CommentArticleHeader.css"

const CommentArticleHeader = (props) => {
    let divStyle = {
        color: props.color,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        textAlign: props.headerJustify,
    }
    return (
        <div className="comment-content-header" style={divStyle}>
            Header
        </div >
    )
}
export default CommentArticleHeader;