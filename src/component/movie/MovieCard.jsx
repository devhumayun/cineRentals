/* eslint-disable react/prop-types */
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { MovieContext } from '../../context'
import { getImageUrl } from '../../utils/utils'
import MovieDetailsModal from './MovieDetailsModal'
import Rating from './Rating'

export default function MovieCard({ movie }) {

    const [showMovieDetailsModal, setShowMovieDetailsModal] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(null)
    const { state, dispatch } = useContext(MovieContext)
    function handleMovieDetails(movie) {
        setShowMovieDetailsModal(true)
        setSelectedMovie(movie)
    }
    // close the modal
    function handleClose() {
        setSelectedMovie(null)
        setShowMovieDetailsModal(false)
    }
    // add to cart function
    function handleAddToCart(e, movie) {
        e.stopPropagation()

        const found = state.cartData.find((item) => {
            return item.id === movie.id
        })

        if (!found) {
            dispatch({
                type: "ADD_TO_CART",
                payload: {
                    ...movie
                }
            })
            toast.success(`${movie.title} added to your cart`)
        } else {
            toast.error(`${movie.title} already added to your cart`)
        }

    }

    return (
        <>
            {
                showMovieDetailsModal && <MovieDetailsModal eDetailsModal selectedMovie={selectedMovie} onClose={handleClose} OnCartAdd={handleAddToCart} />
            }
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <span onClick={() => handleMovieDetails(movie)} className='cursor-pointer'>
                    <img className="w-full object-cover" src={getImageUrl(movie.cover)} alt="" />
                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1">{movie?.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                        <div className="flex items-center space-x-1 mb-5">
                            <Rating value={movie.rating} />
                        </div>
                        <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                            href="#" onClick={(e) => handleAddToCart(e, movie)}>
                            <img src="./assets/tag.svg" alt="" />
                            <span>${movie.price} | Add to Cart</span>
                        </a>
                    </figcaption>
                </span>
            </figure>
        </>
    )
}