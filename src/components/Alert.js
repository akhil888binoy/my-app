import React  from 'react'

function Alert(props) {
  return (
    <div>
      {props.alert && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          {props.alert.type && <strong>{props.alert.type}: </strong>}
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert
