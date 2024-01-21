
import Star from '../../assets/star.svg'
export default function Rating({ value }) {
    const ratingStar = Array(value).fill(Star)
    return (
        <>
            {
                ratingStar.map((star, index) => (
                    <img key={index} src={star} alt={star} height="14" width="14" />
                ))
            }
        </>
    )
}