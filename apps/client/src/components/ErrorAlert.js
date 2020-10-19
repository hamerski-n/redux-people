import React from "react";
import {connect} from "react-redux";
import {get} from 'lodash';
import {Alert} from "antd";
import {ERRORS} from "../redux/constants";

const ErrorAlert = (props) => {
    const {updateErrorsStatusToOld} = props;

    const errorList = get(props, 'ErrorList', '');
    const newAlert = errorList.find(el => el.status === 'new');


    const onAlertClose = () => {
        updateErrorsStatusToOld()
    }

    if (!newAlert) return null;

    return (
        <Alert
            onClose={onAlertClose}
            message={newAlert.type}
            description={newAlert.error}
            type="error"
            closable
        />
    )

}

const mapStateToProps = state => {
    return {
        ErrorList: state.error
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateErrorsStatusToOld: () => dispatch({type: ERRORS.CLOSE}),
});
export default connect(mapStateToProps, mapDispatchToProps)(ErrorAlert);
