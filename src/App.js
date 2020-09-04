import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import Imagelinkform from './Components/ImageLinkForm/Imagelinkform';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import './App.css';

const app = new Clarifai.App({
  apiKey: '2d348c854b364815abf2c6d66bb6e1c0'
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      input:'',
      imageUrl:'',
      box:{},
      route: 'signin',
      IsSignedIn: false,
      user: {
        id:'',
        name:'',
        email:'',
        entries:0,
        joined: ''
      }
    }
  }

  loadUser=(data)=> {
    this.setState({user: {
      id:data.id,
      name:data.name,
      email:data.email,
      entries:data.entries,
      joined:data.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
      return { 
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  showboxaroundface = (box) => {
    console.log(box)
    this.setState({box});
  }

   onInputChange = e => {
    this.setState({input : e.target.value});
}

  onrunitSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
      .then(response => {
        if (response) {
          fetch('http://localhost:3002/image', {
            method:'put',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                id:this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count =>{
            this.setState(Object.assign(this.state.user, {entries: count}))
          })
        }
        this.showboxaroundface(this.calculateFaceLocation(response))})
        .catch (err => console.log(err));
  }
  
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({IsSignedIn:false})
    } else if (route === 'home') {
      this.setState({IsSignedIn:true})
    }
    this.setState({route:route});
  }

  render() {
   const { IsSignedIn, imageUrl, route, box} = this.state;
    return (
      <div className="App" >

        <Navigation IsSignedIn={IsSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home' 
        ? <div>
        <Logo />
        <Rank
          name={this.state.user.name}
          entries={this.state.user.entries}
        />
        <Imagelinkform 
        onInputChange={this.onInputChange} 
        onrunitSubmit={this.onrunitSubmit}/>
        <FaceRecognition box={box} imageUrl={imageUrl}  />
        </div>
        : (
            route ==='signin' 
          ? <Signin onRouteChange={this.onRouteChange}/>
          :  <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )
        
        }
  
      </div>
    );  
  }

  } 
  

export default App;
