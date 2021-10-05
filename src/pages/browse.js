import React from 'react'
import BrosweContainer from '../containers/browse'
import { useContent } from '../hooks'
import selectionMap from '../utils/selectionMap'
const Browse = () => {
    const {series} = useContent('series')
    const {films} = useContent('films')
    const slides = selectionMap({series,films})
    return (
        <BrosweContainer slides = {slides} />
    )
}

export default Browse
