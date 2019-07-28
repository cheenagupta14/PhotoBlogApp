import React from "react";
import { Row , Col} from "antd";
import PropTypes from 'prop-types'

const UserInfo = (props) => (
    <Row style={{display:"inline-flex"}}>
        <Col>
        <img src="../assests/Images/ezgif.com-gif-maker.jpg" style={{"borderRadius": "40em", height: 200}}></img>
        </Col>
        <Col style={{padding:"40px 100px", display:"grid"}}>
        <label style={{fontSize:"xx-large"}}>{props.userinfo.name}</label>
        <label>{props.userinfo.email}</label>
        <label>{props.userinfo.phone}</label>
        </Col>
    </Row>
)

export default UserInfo;