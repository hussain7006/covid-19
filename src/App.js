import React from 'react';

import {Cards, Chart, CountryPicker} from './components'
import Styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/image.png';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data:fetchedData });
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country})
    }

    render() {

        const {data, country} = this.state;

        return (
            <div className={Styles.container}>
                <img className={Styles.image} src={coronaImage} alt='COVID-19' />
                <br></br>
                <br></br>
                <Cards data = { data } />
                <br></br>
                <br></br>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data = { data } country = { country }  />
            </div>
        )
    }
}
export default App;
