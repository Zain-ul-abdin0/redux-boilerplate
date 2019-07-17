import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col">
          <div>
            <span>A:</span>
            <span>{this.props.a}</span>
          </div>
          <button onClick={() => this.props.updateA(this.props.b)}>
            Update A
          </button>
        </div>
        <div className="col">
          <div>
            <span>B:</span>
            <span>{this.props.b}</span>
          </div>
          <button onClick={() => this.props.updateB(this.props.a)}>
            Update B
          </button>
          
          <button onClick={() => this.props.update('ahmad')}>
          {this.props.name}
          {console.log(this.props)}
          </button>
          <ui>
          {this.props.myObj.map((nam)=>{return(
            <li>{nam.name}</li>
          )})}

          </ui>

          <button onClick={() => this.props.delete()}>
            delete
          </button>

        </div>
      </div>
    );
  }
}

const mapDispachToProps = dispach => {
  return {
    updateA: b => dispach({ type: "UPDATE_A", b: b }),
    updateB: a => dispach({ type: "UPDATE_B", a: a }), 
    update: () => dispach({ type: "UPDATE", name: { "name":"ran", "age":300, "car":null } }),
    delete: () => dispach({ type: "DELETE", name: { "name":"John", "age":300, "car":null } })

  };
};

const mapStateToProps = state => {
  return {
    a: state.reducerA.a,
    b: state.reducerB.b,
    myObj:state.myReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
