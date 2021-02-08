import React from "react";
import { Field, reduxForm } from "redux-form";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import _ from "lodash";

class ProjectForm extends React.Component {
  renderOptions = (options) => {
    var keyMap = {
      id: "value",
      companyName: "label",
      userName: "label",
      description: "label",
    };

    const modifiedOptions = options.map(function (obj) {
      return _.mapKeys(obj, function (value, key) {
        return keyMap[key];
      });
    });

    return modifiedOptions;
  };

  renderTextInput = ({ input, label, type = "text" , meta}) => {
    return (
      <div className="field">
        {this.renderLabel(label)}

        <div className="ui labeled input">
          <input {...input} type={type} />
          {this.renderError(meta)}
        </div>
      </div>
    );
  };

  renderFileInput = ({ input, label , meta}) => {
    return (
      <div className="field">
        {this.renderLabel(label)}
        <div>
          <input
           {...input}
            type="file"
            onChange={(event) => this.handleChange(event, input)}
          />
          {this.renderError(meta)}
        </div>
      </div>
    );
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
 

  renderDropdown = ({ input, options, label, meta }) => {
    return (
      <div className="field">
        {this.renderLabel(label)}

        <Select
          className="basic-multi-select"
          classNamePrefix="select"
          {...input}
          options={options}
          value={input.value}
          onBlur={() => {
            input.onBlur(input.value);
          }}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  renderMultiDropdown = ({ input, options, label, meta }) => {
    return (
      <div className="field">
        {this.renderLabel(label)}

        <Select
          isMulti
          className="basic-multi-select"
          classNamePrefix="select"
          {...input}
          options={options}
          value={input.value}
          onBlur={() => {
            input.onBlur(input.value);
          }}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  renderLabel = (label) => {
    return <label>{label}:</label>;
  };

  renderDatePicker = ({ input, label, minDate = new Date(), meta }) => {
    return (
      <div className="field">
        {this.renderLabel(label)}
        <DatePicker
          dateFormat="dd/MM/yyyy"
          {...input}
          minDate={minDate}
          selected={input.value}
        />
        {this.renderError(meta)}
      </div>
    );
  };


  

  onSubmit = (formValues) => {
    
    this.props.onSubmit(formValues);
  };

  render() {
    
    if (this.props.client) {
        const priorty = [
        { value: "LOW", label: "LOW" },
        { value: "MEDIUM", label: "MEDIUM" },
        { value: "HIGH", label: "HIGH" },
      ];

      return (
        <form
          className="ui form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <div className="three fields">
            <Field
              name="qouteNumber"
              label="Qoute Number"
              type="number"
              component={this.renderTextInput}
            />
            <Field
              name="projectName"
              label="Project Name"
              component={this.renderTextInput}
            />

            <Field
              name="selectedClient"
              component={this.renderDropdown}
              options={this.renderOptions(this.props.initialValues.client)}
              label="Client"
            />
          </div>

          <div className="three fields">
            <Field
              name="selectedPriorty"
              component={this.renderDropdown}
              options={priorty}
              label="Priority"
            />
            <Field
              name="startDate"
              component={this.renderDatePicker}
              label="Start Date"
            />

            <Field
              name="selectedType"
              component={this.renderDropdown}
              options={this.renderOptions(this.props.initialValues.type)}
              label="Project Type"
            />
          </div>

          <div className="three fields">
            <Field
              name="selectedEmployee"
              component={this.renderMultiDropdown}
              options={this.renderOptions(this.props.initialValues.employee)}
              label="Allocation"
            />
            <Field
              name="estEndDate"
              component={this.renderDatePicker}
              label="Est End Date"
            />

            <Field
              name="selectedGuide"
              component={this.renderMultiDropdown}
              options={this.renderOptions(this.props.initialValues.employee)}
              label="Guide"
            />
          </div>
          <div className="two fields">
            
            <div className="field">
              <button className="ui button" type="button">
                RESET ALL
              </button>
            </div>
            <div className="field">
              <button className="ui primary button  right floated" type="submit">
                CREATE PROJECT
              </button>
            </div>
          </div>
        </form>
      );
    }

    return <div>Loading</div>;
  }
}

const validate = (formValues) => {
  
  
  const errors = {};
  

  if(!formValues.projectName){
    errors.qouteNumber="Please enter a Project Name";
  }


  if(!formValues.qouteNumber){
    errors.qouteNumber="Please enter a Qoute Number";
  }


  if(!formValues.selectedClient){
    errors.qouteNumber="Please select a Client";
  }


  if(!formValues.selectedEmployee){
    errors.qouteNumber="Please select employee allocation";
  }


  if(!formValues.selectedPriorty){
    errors.qouteNumber="Please priority";
  }


  if(!formValues.selectedType){
    errors.qouteNumber="Please select Project Type";
  }
  
  
  return errors;
};

export default reduxForm({
  form: "projectForm", 
  validate: validate
})(ProjectForm);
