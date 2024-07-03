import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function StoreItemCard(product) {
  return (
    <Card style={{ width: '25rem', height: '35rem' }}>
      <Card.Img style={{maxWidth: '18rem', maxHeight: '22rem', padding: '1.5rem', alignSelf: "center"}} variant="top" src={product.children.image} />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-4'>{product.children.title}</Card.Title>
        <Card.Text>
          $ {product.children.price}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}
export default StoreItemCard