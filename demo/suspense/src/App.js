import React, { Component } from 'react';
import { unstable_deferredUpdates as deferredUpdates } from 'react-dom';

import Loading from './future/Loading';

import Courses from './Courses';
import Groups from './Groups';

class App extends Component {
  state = { page: 'students' }

  showStudents = () => {
    deferredUpdates(() => {
      this.setState(() => ({ page: 'students' }));
    });
  }

  showCourses = () => {
    deferredUpdates(() => {
      this.setState(() => ({ page: 'courses' }));
    });
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
