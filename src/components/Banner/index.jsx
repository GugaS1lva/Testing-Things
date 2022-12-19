const Banner = () => {
    const imageUrl = 'https://github.com/GugaS1lva.png'
    const imageAlt = 'Alternative Text'

    return (
        <div>
            <img src={imageUrl} alt={imageAlt} />
        </div>
    )
}

export default Banner