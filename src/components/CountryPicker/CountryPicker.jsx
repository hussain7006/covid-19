import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';

import Styles from './CountryPicker.module.css';

import {fetchCountries} from '../../api/index';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCounries] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCounries(await fetchCountries());
        }

        fetchApi();
    },[setFetchedCounries])
    // console.log(fetchedCountries);
    return (
        <FormControl className={Styles.formControl} >
            <NativeSelect defaultValue="" onChange = {(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i) => <option key={i} value = {country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
