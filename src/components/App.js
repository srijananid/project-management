import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';


import ProjectList from './projects/ProjectList';
import EditProject from './projects/EditProject';
import CreateProject from './projects/CreateProject';
import EditTimeSheet from './employee/EditTimeSheet';
import ViewTimeSheet from './employee/ViewTimeSheet';
import Header from './Header';



const App = () => {

    return (
        <div className="ui container">
            <BrowserRouter>
                <Header></Header>
                <div>
                    <Route path="/" exact component={ProjectList}>

                    </Route>
                    <Route path="/projects/edit" exact component={EditProject}>

                    </Route>
                    <Route path="/projects/create" exact component={CreateProject}>

                    </Route>
                    <Route path="/employee/timesheet/edit" exact component={EditTimeSheet}>

                    </Route>
                    <Route path="/employee/timesheet/view" exact component={ViewTimeSheet}>

                    </Route>
                </div>
            </BrowserRouter>
        </div>
    );
}


export default App;