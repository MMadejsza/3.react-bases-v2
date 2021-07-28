import React, { Component } from 'react';
import CommentPic from '../Components/CommentPic.js'
import CommentArticle from '../Components/CommentArticle.js'
import "../CSS/Comment.css"

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleted: this.props.hidden,
            pic: this.props.pic,
            picAlt: "Icon",
            color: this.props.color,
            fontSize: this.props.fontSize,
            fontWeight: this.props.fontWeight,
            headerJustify: this.props.headerJustify,
            contentJustify: this.props.contentJustify,
        }
    }

    deleteComment = () => {
        this.props.deleted()
    }

    render() {
        console.log("du")
        console.log(this.state.deleted)
        if (!this.state.deleted) {
            return (
                <div className="comment-box" onClick={this.deleteComment}>
                    {this.state.deleted}
                    <CommentPic pic={this.state.pic} alt={this.state.picAlt} />
                    <CommentArticle
                        color={this.state.color} fontSize={this.state.fontSize} fontWeight={this.state.fontWeight} headerJustify={this.state.headerJustify} contentJustify={this.state.contentJustify}
                    />
                </div>

            )
        } return (" ")
    }
}


export default Comment;