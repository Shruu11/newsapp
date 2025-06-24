import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar"; // ✅ Case-sensitive match
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import LandingPage from "./components/LandingPage";

export default class App extends Component {
  pageSize = 15;
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={this.pageSize}
                  country="us"
                  category="sports"
                  apiKey={this.apiKey}
                />
              }
            />

            <Route
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={this.pageSize}
                  country="us"
                  category="business"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="us"
                  category="entertainment"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  country="us"
                  category="general"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={this.pageSize}
                  country="us"
                  category="health"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={this.pageSize}
                  country="us"
                  category="science"
                  apiKey={this.apiKey}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={this.pageSize}
                  country="us"
                  category="technology"
                  apiKey={this.apiKey}
                />
              }
            />

            {/* Add more routes for entertainment, health, etc. as needed */}
          </Routes>
        </Router>
      </>
    );
  }
}
