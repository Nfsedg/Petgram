import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery } from '@apollo/client'
import { withPhotos } from '../../hoc/withPhotos'

export const ListOfPhotoCards = ({ categoryId }) =>{
    const { loading, error, data } = useQuery(withPhotos, { variables: { categoryId }})
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <ul>
            {data.photos.map((p) =>
                (<PhotoCard key={p.id} {...p}></PhotoCard>)
            )}
        </ul>
    )
}
