import React from 'react'
import BrowseContainer from '../components/browse/browseContainer';
import Content from '../hooks/use-content'
import SelectionFilter from '../utils/selection-filter';
const browser = () => {

    const {series}=Content('series');
    const {films}=Content('films');
    const slides=SelectionFilter({series,films});
     
    return (
       <BrowseContainer slides={slides}/>
    )
}

export default browser
