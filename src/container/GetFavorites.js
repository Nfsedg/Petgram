import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { ListOfFavs } from '../components/ListOfFavs';

const GET_FAVS = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const FavsWithQuery = () => {
    const { loading, data, error } = useQuery(GET_FAVS, {
        fetchPolicy: 'cache-and-network'
      })
      return { loading, data, error }
};

export const RenderProp = () => {
    const {loading, data, error} = FavsWithQuery();
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>
    const {favs} = data;

    return (
        <ListOfFavs favs={favs} />
    )
}