import React from 'react';
import "../CSS/CommentArticleContent.css"

const CommentArticleContent = (props) => {
    let divStyle = {
        color: props.color,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        textAlign: props.contentJustify,
    }
    return (
        <div className="comment-content" style={divStyle}>
            Content
        </div >
    )
}

export default CommentArticleContent;
