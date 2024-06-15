export default function Price({oldPrice,newPrice}){
    let oldStyles={
        textDecorationLine:"line-through",
    };
    let newStyles={
        fontWieght:"bold",
        textFont:"20px",
    };
    let styles={
        backgroundColor:"#e0c367",
        height:"50px",
        color:"black"
    };
    return(
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}