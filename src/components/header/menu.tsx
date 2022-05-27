import React from "react";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <form className="form-inline">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">@</span>
          </div>
          <input type="text" className="form-control" placeholder="Username" />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Password:</span>
          </div>
          <input type="text" className="form-control" placeholder="Password" />
        </div>
        <button className="btn btn-info">Submit</button>
      </form>
    </nav>
  );
};

export default Menu;
