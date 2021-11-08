import React from 'react';
import { BrowseContainer } from '../containers/browse';
import {useContent} from '../hooks';
import selectionFilter from '../utils/selection-filter';


export default function Browse() {
    // we need the series and the film
    const { series } = useContent('series');
    const { films } = useContent('films');
    // we need slides
    const slides = selectionFilter({ series, films });
    // pass it to the browse container

    return <BrowseContainer slides={slides} />;
}