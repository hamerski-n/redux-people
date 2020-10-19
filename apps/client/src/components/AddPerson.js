import React from "react";
import {PERSON} from "../redux/constants";
import {connect} from "react-redux";
import {Button, Col, Form, Input, Row} from "antd";
import {scrollToTop} from "./utils";

const AddPerson = (props) => {
    const [form] = Form.useForm();

    const {addPerson} = props;

    const onFinish = (values) => {
        addPerson(values);
        form.resetFields();
        scrollToTop();
    }

    return (
        <Form onFinish={onFinish} form={form} layout='vertical'>
            <Row gutter={6}>
                <Col>
                    <Form.Item name='firstName'
                               // label='First Name:'
                               rules={[{required: true, message: 'Please add a first name!'}]}
                               initialValue=''
                    >
                        <Input placeholder='First name' type='text'/>
                    </Form.Item>
                </Col>

                <Col>
                    <Form.Item name='lastName'
                               // label='Last Name:'
                               rules={[{required: true, message: 'Please add a last name!'}]}
                               initialValue=''
                    >
                        <Input placeholder='Last name' type='text'/>
                    </Form.Item>
                </Col>

                <Col>
                    <Form.Item name='age'
                               // label='Age:'
                               initialValue=''
                    >
                        <Input placeholder='Age' type='number'/>
                    </Form.Item>
                </Col>
            </Row>

            <Row justify='end'>
                <Button name='createBtn' htmlType='submit'>Add person</Button>
            </Row>

        </Form>
    )
}
const mapStateToProps = state => {
    return {
        People: state.people
    }
}

const mapDispatchToProps = (dispatch) => ({
    addPerson: (payload) => dispatch({type: PERSON.CREATE, payload}),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddPerson);
