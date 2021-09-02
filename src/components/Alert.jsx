import React from "react";

export default function Alert() {
  return (
    <div>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Hi Saurabh!</strong> Welcome to your <strong>React App</strong>
      
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}
