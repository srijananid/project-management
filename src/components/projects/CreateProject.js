import React from "react";
import { connect } from "react-redux";
import ProjectForm from "./ProjectForm";
import _ from "lodash";

import { getMetatData ,createProject} from "../../actions";

class CreateProject extends React.Component {
  onSubmit = (formValues) => {
    const projObj = {
      qouteNumber: formValues.qouteNumber,
      projectName: formValues.projectName,
      recievedDt: new Date().toDateString(),
      startDate: this.convertToString(formValues.estEndDate),
      estimatedEntDt: this.convertToString(formValues.estEndDate),
      clientDetails: this.modifySingleValue(formValues.selectedClient),
      projectType: this.modifySingleValue(formValues.selectedType),
      prioirty: formValues.selectedPriorty.label,
      allocationList: this.modifyValues(formValues.selectedEmployee,formValues.qouteNumber),
    };

    console.log("FORM", projObj);

        this.props.createProject(projObj);
  };

  componentDidMount() {
    this.props.getMetatData();
  }

  convertToString = (dateobj) => {
    return !dateobj ? "" : dateobj.toDateString();
  };

  modifyValues = (options,qouteNumber) => {
    
    var keyMap = {
        value: "id",
        label :"name",
        project :"project"
      };

    const modifiedOptions = options.map(function (obj) {

        obj.project={
            qouteNumber: qouteNumber
          }

     
        return _.mapKeys(obj, function (value, key) {
            return keyMap[key];
          });
      
    });

    return modifiedOptions;
  };


  modifySingleValue = (selectedvalues) => {
    console.log("FOR  ::: ", selectedvalues);

    var keyMap = {
      value: "id",
      label :"name"
    };

    return _.mapKeys(selectedvalues, function (value, key) {
      return keyMap[key];
    });
  };



  render() {
    if (!this.props.projectdata) {
      return <div>Loading...</div>;
    }

    const intialV = _.pick(
      this.props.projectdata,
      "client",
      "employee",
      "type"
    );

    console.log(intialV);

    return (
      <div className="ui form">
        <h3 className="ui dividing header">Project Information</h3>
        <ProjectForm
          client={this.props.projectdata.client}
          onSubmit={this.onSubmit}
          initialValues={intialV}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projectdata: state.projectdata,
  };
};

export default connect(mapStateToProps, { getMetatData,createProject })(CreateProject);
