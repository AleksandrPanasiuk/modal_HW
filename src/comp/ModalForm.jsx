import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";



const ModalForm = props => {
    const [isLoading] = useState(false)
    return (
        <Modal
            size={props.size}
            centered
            show={props.show}
            animation={false}
        >
            <Modal.Header>
                <Modal.Title>Enter your Answer:</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.Content}</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={props.onCancel}>
                    Cancel
                </Button>
                <Button
                    variant="success"
                    disabled={isLoading}
                    type="submit"
                    form="form"
                    onClick={props.onSubmit}
                >
                    {isLoading ? "Loading..." : "Submit"}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};



export default ModalForm;