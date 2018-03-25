import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth" >
        <Scene key="login" component={LoginForm} title="Please Login" initial />
        </Scene>

      <Scene key="main">
        <Scene
          rightTitle="Add"
          onRight={() => { Actions.employeecreate() }}
          key="employeelist"
          component={EmployeeList}
          title="Employees"
          initial />

          <Scene key="employeecreate" component={EmployeeCreate} title="Create Employee" />

          <Scene key="EmployeeEdit" component={EmployeeEdit} title="Edit Employee"/>
      </Scene>
    </Scene>
    </Router>
  );
};

export default RouterComponent;
