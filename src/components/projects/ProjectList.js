import React from "react";
import { connect } from "react-redux";
import { getProjectList } from "../../actions";

class ProjectList extends React.Component {
  componentDidMount() {
    this.props.getProjectList();
  }

  renderList() {
    const innerText = this.props.projects.map((project) => {
      return (
        <tr key={project.qouteNumber}>
          <td>{project.qouteNumber}</td>
          <td>{project.projectName}</td>
          <td>{project.current_status.status_name}</td>
          <td>{project.current_status.status_name}</td>
        </tr>
      );
    });

    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>QOUTE NUMBER</th>
            <th>PROJECT NAME</th>
            <th>STATUS</th>
            <th>PROJECT TYPE</th>
          </tr>
        </thead>
        <tbody>
        {innerText}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <h2 className="ui header">
        <i className="thumbtack icon"></i>
        <div className="content">
          Project List
          <div className="sub header">View / Update Project Information</div>
        </div>
        {this.renderList()}
      </h2>
    );
  }
}
const mapPropToState = (state) => {
  return { projects: Object.values(state.projects) };
};

export default connect(mapPropToState, { getProjectList })(ProjectList);
