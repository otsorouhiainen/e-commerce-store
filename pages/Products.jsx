import StoreItemCard from '../components/StoreItemCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Products() {
  const [productsList, setProducts] = useState(null)

  useEffect(() => {
      console.log('fetching products')
      axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data)
      })
  }, [])  

  console.log(productsList)
  if(productsList){
    return(
      <Container>
        <h1>Products</h1>
        <Row xs={1} md={2} lg={2} xl={3} xxl={4} className="g-4">
            {productsList.map(product =>
              <Col className="d-flex gap-2" key={product.id}>
                <StoreItemCard>{product}</StoreItemCard>
              </Col>
            )}
        </Row>
      </Container>
    )
  }else{
    return (
      <h1>No items in store, come back later!</h1>
    )
  }
}
export default Products