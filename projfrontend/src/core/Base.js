import React from "react";
import Menu from "./menu";
const Base=({
  tittle="My tittle",
  description="My description",
  className="bg-dark text-white p-4",
  children
})=>{
    return(<div>
        <Menu/>
        <div className="container-fluid">
        <div className="jumbotron bg-dark text-white text-center">
            <h2 className="display-4">{tittle} </h2>
            <p className="lead">{description} </p>
        </div>
        <div className={className}>{children}</div>
        </div>
        <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center py-3">
            <h4> If you have any questions,feel free to reach out</h4>
            <button className="btn btn-warning btn-lg">Contact Us </button>
        </div>
        <div className="container">
            <span className="text-muted">
            An Amazing place to buy <span className="text-white">tshirt</span>
            </span>
        </div>
        </footer>

        </div>
    )
}
export default Base;