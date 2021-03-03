import React, { Component } from 'react';
import './App.css';
import Selectfield from './components/Selectfiels';
import youtubeApi from './api/youtube';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      videoMetaInfo: [],
      selectedVideoId: null
    }
  }
  
  onVideoSelected = videoId => {
    this.setState({
      selectedVideoId:videoId
    })
  }

  onSearch = async keyword => {
    const response = await youtubeApi.get('/search',{
      params:{
        q:keyword
      }
    })
    this.setState({
      videoMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId 
    })
    console.log(this.state)
  };

  render(){
    return (
      <div className='App'> 
        <VideoList onVideoSelected={this.onVideoSelected} data={this.state.videoMetaInfo} />
        <Selectfield  onSearch={this.onSearch}  />
        <VideoPlayer videoId={this.state.selectedVideoId} />
      </div>
    )
  }
}

export default App;
