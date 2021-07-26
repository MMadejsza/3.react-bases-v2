import React, { Component } from 'react';
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
            const { pic, color, fontSize, fontWeight, headerJustify, contentJustify } = this.props;
        }
    }



    render() {
        return (
            <div>
                <CommentPic />
                <CommentArticle />
            </div>
        )
    }
}

export default Comment;