const Card = () => {
    return (
        <div
            style={{
                width: '300px',
                padding: '10px',
                margin: '10px',
                backgroundColor: '#1B1C1E',
                color: 'white',
                fontFamily: 'Arial',
                textAlign: 'center',
                borderRadius: '5px',
            }}
        >
            <h2>Card Title</h2>

            <p style={{ padding: '0 15px 10px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, earum fugit possimus eos tempore nihil nulla consectetur dolores, ut magnam, ipsam sit incidunt necessitatibus officia aut inventore aliquid et quos?</p>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 10px',
                    fontWeight: 'bolder',
                }}
            >
                <span>29/11/2022</span>

                <a
                    style={{
                        padding: '10px',
                        backgroundColor: '#D1D5DB',
                        borderRadius: '100%'
                    }}
                    href="/"
                > ✏️ </a>
            </div>
        </div>
    )
}

export default Card