import React from 'react'
import { RenderProp } from '../container/GetFavorites.js'
import { Layout } from '../components/Layout/index.js'

export default () => {
    return(
        <Layout title={'Tus favoritos'} subtitle={'Aquí puedes encontrar tus favoritos'}>
            <RenderProp/>
        </Layout>
    )
}