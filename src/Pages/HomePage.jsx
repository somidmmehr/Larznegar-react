import DefaultLayout  from "../Layouts/DefaultLayout";
import {Card, Col, Divider, Row} from "antd";

const HomePage = () => {
    return (
        <DefaultLayout>
            <Divider orientation="left">LarzNegar - Iran Earthquakes Monitor</Divider>
            <Row gutter={16} style={{ minHeight: 380 }}>
                <Col span={12}>
                    <Card>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>

                <Col span={12}>
                    <Card>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
            </Row>
        </DefaultLayout>
    )
}

export default HomePage