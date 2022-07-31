import { Container, Row, Col } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import CampsitesDetail from '../features/campsites/CampsiteDetail';
import { selectRandomCampsite } from '../features/campsites/campsiteSlice';

const CampsitesDirectoryPage = () => { 
    const selectedCampsite = selectRandomCampsite()
    return (
        <Container>
            <Row>
                <Col sm='5' md='7'><CampsitesList /></Col>
                <Col sm='7' md='5'><CampsitesDetail campsite={selectedCampsite} /></Col>
            </Row>
        </Container>
    );


};

export default CampsitesDirectoryPage;