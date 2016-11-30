import React, { Component } from 'react';
import SearchBar from '../containers/search_bar.js';
import WeatherList from '../containers/weather_list.js';
import ClearButton from '../containers/clear_button.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ClearButton />
        <WeatherList />
      </div>
    );
  }
}
