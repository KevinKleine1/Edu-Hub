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
import NewProject from '../../views/NewProject/NewProject';
import NoWizard from '../../views/NoWizard/NoWizard';
import MyProjects from '../../views/MyProjects/MyProjects';
import Favs from '../../views/Favs/Favs';
<<<<<<< HEAD
import ProjectPage from '../../views/ProjectPage/projectPage';
=======
import Discover from '../../views/Discover/Discover';
import Test from '../../views/Pages/Test/Test';
import Test2 from '../../views/Test2/Test2';
>>>>>>> 8abb8d4e8a77a08dcd91bbc49cb4a5242a18cbcc

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
              <Route path="/neuesprojekt" name="NewProject" component={NewProject}/>
              <Route path="/favs" name="Favoriten" component={Favs}/>
              <Route path="/projectpage" name="ProjectPage" component={ProjectPage}/>
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
