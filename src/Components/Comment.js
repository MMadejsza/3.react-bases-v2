import React, { Component } from 'react';
import CommentPic from '../Components/CommentPic.js'
import CommentArticle from '../Components/CommentArticle.js'
import "../CSS/Comment.css"

//czy tu można użyć takich skrótów np.?
//const store = this.props.store;
// const form = this.props.form;
// const loading = this.props.loading;
// const errors = this.props.errors;
// const entity = this.props.entity;
// Shorthand:
//import { observable, action, runInAction } from 'mobx';
//const { store, form, loading, errors, entity } = this.props;
//You can even assign your own variable names:
// const { store, form, loading, errors, entity:contact } = this.props;


class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleted: false,
            pic: this.props.pic, //czy tu musi być this?
            picAlt: "Icon",
            color: this.props.color,
            fontSize: this.props.fontSize,
            fontWeight: this.props.fontWeight,
            headerJustify: this.props.headerJustify,
            contentJustify: this.props.contentJustify,
        }
    }

    deleteComment = () => {
        console.log('clicked');
        this.setState({
            deleted: true
        })
    }

    render() {
        if (!this.state.deleted) {
            return (
                <div className="comment-box" onClick={this.deleteComment}>
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