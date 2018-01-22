import React, {Component} from 'react';
import {
  Header,
  Icon,
  Segment,
  Divider,
  Card,
  Button,
  Grid,
  Image
} from 'semantic-ui-react';
import FavObject from '../../components/FavObject/FavObject';


class Favs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      favs: []
    };
    this.createFavs = this.createFavs.bind(this);
  }

  getFavs(){
    var target = ('http://backend-edu.azurewebsites.net/user/getmyproject/favs/' + localStorage.getItem("userid"))
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({
        favs: json
      }, function() {
        this.setState({
  
        }, function() {});
      })

    })
  }

  setUser() {
    var target = ('http://backend-edu.azurewebsites.net/user/' + localStorage.getItem('email'))
    fetch(target).then((results) => {
      return results.json();

    }).then((json) => {

      this.setState({
        NutzerId: json[0].userid
      }, function () {
        localStorage.setItem('userid', this.state.NutzerId);
      });
    })
  }

  createFavs(favs) {

    return favs.map(this.createFav);

  }

  createFav(fav) {
    return <FavObject name={fav.project_name} image={fav.project_imagepath} key={fav.projectid}/>;
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  componentDidMount(){
    this.setUser();
    this.getFavs();
  }

  render() {

    return (<div className="animated fadeIn">
      <div className="container">
        <div className="row justify-content-md-center">
          <Segment vertical={true} style={{
              width: "1000px"
            }}>
            <Header as='h2'>
              <Icon name='empty heart'/>
              <Header.Content>
                Favoriten
                <Header.Subheader>
                  Projekte, die du favorisiert hast
                </Header.Subheader>
              </Header.Content>
            </Header>
            <Divider fitted/>
        <Divider hidden/>
        <Grid doubling={true} columns={4} divided='vertically'>
          {this.createFavs(this.state.favs)}


        </Grid>

      </Segment>
    </div>
      </div>

    </div>)
  }
}

export default Favs;
