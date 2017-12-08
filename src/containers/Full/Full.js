import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import Callback from '../../Callback/Callback';
import Dashboard from '../../views/Dashboard/';
import Auth from '../../Auth/Auth';
import Profile from '../../views/Profile/Profile';
import Admin from '../../views/Admin/Admin';
import Welcome from '../../views/Pages/Welcome/Welcome';
import Wizard1 from '../../views/NewProject/Wizard1';
import Wizard2 from '../../views/NewProject/Wizard2';
import Wizard3 from '../../views/NewProject/Wizard3';
import Wizard4 from '../../views/NewProject/Wizard4';
import Wizard5 from '../../views/NewProject/Wizard5';
import Wizard6 from '../../views/NewProject/Wizard6';
import NoWizard from '../../views/NoWizard/NoWizard';
import MyProjects from '../../views/MyProjects/MyProjects';
import Favs from '../../views/Favs/Favs';
import ProjectPage from '../../views/ProjectPage/projectPage';
import Discover from '../../views/Discover/Discover';
import Test from '../../views/Pages/Test/Test';
import Test2 from '../../views/Test2/Test2';

//creates the login object to handle the authentication
const auth = new Auth();

//find a better way to integrate the function globally

//handles the authentication
const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}


//main app class where everything gets put together
class Full extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
              <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
              <Route path="/profil" name="Profil" component={Profile}/>
              <Route path="/admin" name="Admin" component={Admin}/>
              <Route path="/welcome" name="Welcome" component={Welcome}/>
              <Route path="/nowizard" name="Nowizard" component={NoWizard}/>
              <Route path="/myprojects" name="MyProjects" component={MyProjects}/>
              <Route path="/wizard1" name="Wizard1" component={Wizard1}/>
              <Route path="/wizard2" name="Wizard2" component={Wizard2}/>
              <Route path="/wizard3" name="Wizard3" component={Wizard3}/>
              <Route path="/wizard4" name="Wizard4" component={Wizard4}/>
              <Route path="/wizard5" name="Wizard5" component={Wizard5}/>
              <Route path="/wizard6" name="Wizard6" component={Wizard6}/>
              <Route path="/favs" name="Favoriten" component={Favs}/>
              <Route path="/projectpage/:projectid" name="ProjectPage" component={ProjectPage}/>
              <Route path="/discover" name="Entdecken" component={Discover}/>
              <Route path="/test" name="Test" component={Test}/>
              <Route path="/test2" name="Test" component={Test2}/>
              <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
              <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
