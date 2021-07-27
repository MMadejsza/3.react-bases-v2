import React from 'react';
import CommentArticleHeader from '../Components/CommentArticleHeader.js'
import CommentArticleContent from '../Components/CommentArticleContent.js'
import '../CSS/CommentArticle.css'

const CommentArticle = (props) => {
    return (
        <div className="comment-article">
            <CommentArticleHeader
                color={props.color} fontSize={props.fontSize} fontWeight={props.fontWeight} headerJustify={props.headerJustify} />
            <CommentArticleContent
                color={props.color} fontSize={props.fontSize} fontWeight={props.fontWeight} contentJustify={props.contentJustify} />
        </div>
    )
}

export default CommentArticle;


