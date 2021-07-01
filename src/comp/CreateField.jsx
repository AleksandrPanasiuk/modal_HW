import React from "react";
import FormFields from "./FieldForm";

const CreateField = (props) => {
    return (
        <React.Fragment>
            <FormFields {...props} />
        </React.Fragment>
    );
};

export default CreateField;
