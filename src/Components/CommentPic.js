import React from 'react';
import "../CSS/CommentPic.css"

function CommentPic(props) {
    //funkcja losująca zdjęcie
    return (
        <div className="comment-pic">
            <img src={props.pic} alt={props.picAlt} width={95.39} height={96.24} />
        </div>
    )
}
export default CommentPic;