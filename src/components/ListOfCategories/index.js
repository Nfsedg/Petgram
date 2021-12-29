import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        setLoading(true)
        fetch('https://petgram-server-rsor.vercel.app/categories')
            .then(data => data.json())
            .then(response => {
                setCategories(response)
                setLoading(false)
            })
    }, [])

    return {
        categories,
        loading
    }
}

const ListOfCategoriesComponet = () => {
    const [showFixed, setShowFixed] = useState(false)

    const { categories, loading } = useCategoriesData()

    useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed != newShowFixed && setShowFixed(newShowFixed)
        }
        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {
                categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`}/></Item>)
            }
        </List>
    )

    if(loading) {
        return 'Cargando...'
    }

    return(
        <React.Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </React.Fragment>
    )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponet)