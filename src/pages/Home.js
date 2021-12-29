import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotocards'
import { Layout } from '../components/Layout'

const HomePage = ({ detailId }) => {
    return (
    <Layout 
        title={'Tu app de fotos de mascotas'} 
        subtitle={'Con petgram puedes encontrar fotos de animales domesticos muy bonitos'}
    >
        <ListOfCategories/><ListOfPhotoCards categoryId={detailId}/>
    </Layout>
    )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
    return prevProps.detailId === props.detailId
})