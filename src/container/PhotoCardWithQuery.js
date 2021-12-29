import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useGetSinglePhoto } from '../hooks/useGetSinglePhoto'

export const PhotoCardWithQuery = ({ id }) => {
    const { loading, data, error } = useGetSinglePhoto(id)

    if(loading) return <p>Loading</p>
    if(error) return <p>Error!</p>

    const { photo = {} } = data

    return <PhotoCard {...photo}/>
}