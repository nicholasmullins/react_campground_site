import { Card, Carding, CardText, CardBody, CardTitle } from 'reactstrap';

const DisplayCard = ({item}) => {
    const { image, name, description } = item;
    return (
        <Card>
            <CardImg src={image} alt={name} />
            <CardBody>
                <CardTitle>{description}</CardTitle>
            </CardBody>
        </Card>
    )
}