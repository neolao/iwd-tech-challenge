import React, { Component } from 'react';
import axios from 'axios';

export default class SurveyList extends Component {
  state = {
    surveys: null,
  }

  async componentDidMount() {
    const response = await axios.get('/api/surveys');
    this.setState({ surveys: response.data });
  }

  render() {
    return (
      <main>
        <h2>Surveys</h2>
        {this.renderSurveys()}
      </main>
    );
  }

  renderSurveys() {
    const { surveys } = this.state;
    if (!Array.isArray(surveys)) {
      return <p>No surveys</p>;
    }

    const rows = surveys.map(survey => {
      return (
        <tr key={survey.id}>
          <td>{survey.name}</td>
          <td>{survey.code}</td>
        </tr>
      );
    });

    return (
      <table>
        <thead>
          <tr><th>Name</th><th>Code</th></tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}
