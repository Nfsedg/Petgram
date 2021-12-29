import React from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useMuationToogleLike } from '../../container/ToggleLikeMutation'
import { Link } from '@reach/router'
import propTypes from 'prop-types'

const DefaultImage = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DefaultImage }) => {
    const {show, element} = useNearScreen()
    const { mutation, mutationLoading, mutationError } = useMuationToogleLike()

    const handleFavClick = () => {
        mutation({
          variables: {
            input: { id }
          }
        })
      }

    return(
        <Article ref={element}>
            {
                show && 
                <React.Fragment>
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src}/>
                        </ImgWrapper>
                    </Link>
                    <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
                </React.Fragment>
            }
            
        </Article>
    )
}

PhotoCard.propTypes = {
    id: propTypes.string.isRequired,
    liked: propTypes.bool.isRequired,
    src: propTypes.string.isRequired,
    likes: function(props, propName, componentName) {
        const propValue = props[propName]
        if(propValue === undefined) {
            return new Error(`${propName} value must be defined`)
        }
        if(propValue < 0) {
            return new Error(`${propName} value must greater than 0`)
        }
    }
}