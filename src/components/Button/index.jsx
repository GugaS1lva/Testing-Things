const Button = ({ children }) => {
    return (
        <button 
            data-testid="button"
            style={{
                width: "200px",
                height: "40px",
                backgroundColor: "#000",
                color: '#FFF',
                fontSize: "20px",
                borderRadius: '5px',
                cursor: "pointer",
            }}
        >{children}</button>
    )
}

export default Button