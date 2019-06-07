import React, { Component } from 'react';

import Loading from './Loading';
import Courses from './Courses';
import Groups from './Groups';

class App extends Component {
  state = { page: 'students' }

  showStudents = () => {
    this.setState(() => ({ page: 'students' }));
  }

  showCourses = () => {
    this.setState(() => ({ page: 'courses' }));
  }

  renderPage() {
    if (this.state.page === 'students') {
      return <Groups />;
    } else {
      return <Courses />;
    }
  }

  render() {
    return (
      <section>
        <h1>Університет</h1>

        <nav>
          <ul>
            <li><a onClick={this.showStudents}>Студенти</a></li>
            <li><a onClick={this.showCourses}>Курси</a></li>
          </ul>
        </nav>

        <Loading>{this.renderPage()}</Loading>
      </section>
    );
  }
};

export default App;
