import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cmp from '../assets/images/card.jpg'
export const Projects=()=>{
    return(
        <div className='component mt-4'>
            <h1 className='mt-3 text-center'>Projects</h1>
            <div className='row dflex justify-content-around align-items-center g-2 mt-5'>
                <div className='col col-sm-12 col-md-4'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={cmp} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col col-sm-12 col-md-4'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={cmp} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col col-sm-12 col-md-4'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={cmp} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>

    );
}