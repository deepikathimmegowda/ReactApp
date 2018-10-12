import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

class Postform extends Component {
  constructor(props){
    super(props);
    this.state = {
      title : '',
      body : ''
    };

    this.ontitleChange = this.ontitleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  ontitleChange(e){
    this.setState({
       title : e.target.value
    });
  }

  onbodyChange = (e) => {
    this.setState({
      body : e.target.value
    });
  }

  handleClick(e) {
        //e.perventDefault();
        //alert(e);

    const post = {
      title : this.state.title,
      body : this.state.body
    };

    this.props.createPost(post);
  }


  render(){
    return(
      <div> I am from postform
      <form onSubmit={this.handleClick}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={this.ontitleChange}></input>
        </div>
        <br/>
        <div>
          <label>body:</label>
          <textarea name="body" value={this.state.body} onChange={(e) => this.onbodyChange(e)}></textarea>
        </div>
        <br/>
        <button type="Submit">click me</button>
      </form>

      </div>

    );
  }
}

Postform.propTypes = {
  createPost : PropTypes.func.isRequired
};

export default connect(null,{ createPost })(Postform);