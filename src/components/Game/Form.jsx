import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      author: '',
    }

    this.handleChangeField = this.handleChangeField.bind(this);
  }

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }

  render() {
    const { title, body, author } = this.state;

    return (
      <div className="col-12 col-lg-6 offset-lg-3">
        <input
          onChange={(ev) => this.handleChangeField('title', ev)}
          value={title}
          className="form-control my-3"
          placeholder="Article Title"
        />
        <textarea
          onChange={(ev) => this.handleChangeField('body', ev)}
          className="form-control my-3"
          placeholder="Article Body"
          value={body}>
        </textarea>
        <input
          onChange={(ev) => this.handleChangeField('author', ev)}
          value={author}
          className="form-control my-3"
          placeholder="Article Author"
        />
        <button className="btn btn-primary float-right">Submit</button>
      </div>
    )
  }
}

export default Form;