import styled from "styled-components"

const Box = styled.div` 
    width: 100px;
    height: 100px;
    background-color: dodgerblue;
`

const Btn = styled.button`

`

function ProductListItem() {
    return (
        <Box>
            product list item
            <Btn>klicka mig!</Btn>
        </Box>
    )
}

export default ProductListItem