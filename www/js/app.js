var Form = React.createClass({
  prototypes: {

  },
  render: function () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-offset-1 col-xs-10 col-md-offset-2 col-md-8">
            <form>
              <InputGroup id="exampleInputEmail1" className="form-control" type="email" label="Email address" placeholder="Email" />
              <InputGroup id="exampleInputPassword1" className="form-control" type="password" label="Password" placeholder="Password" />
              <InputGroup id="exampleInputFile" type="file" label="File input" />
              <InputCheckbox />
              <BtnSubmit />
            </form>
          </div>
        </div>
      </div>
    );
  }
});

var BtnSubmit = React.createClass({
  render: function () {
    return (
      <button type="submit" className="btn btn-default">Submit</button>
    );
  }
});

var InputCheckbox = React.createClass({
  render: function () {
    return (
      <div className="checkbox">
        <label>
          <input type="checkbox" /> Check me out
        </label>
      </div>
    );
  }
});

var InputGroup = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['email','password','file']).isRequired,
    className: React.PropTypes.string
  },
  render: function () {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input type={this.props.type} 
          className={this.props.className} 
          id={this.props.id} />
      </div>
    );
  }
});

React.render(
  <Form />,
  document.getElementById('content')
);
