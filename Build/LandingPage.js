import React, { Component } from "react";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div class="d-flex justify-content-center align-items-center vh-100">
          <div class="center-box">
            <h1 class="display-4 fw-bold">Welcome to My Website</h1>
            <p class="lead">Your journey to amazing content starts here.</p>
            <a href="#start" class="btn btn-light btn-lg mt-3">
              Get Started
            </a>
          </div>
        </div>
      </div>
    );
  }
}
