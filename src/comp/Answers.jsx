import React from "react";
import { Table } from "react-bootstrap";

const CreateTable = ({ data }) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>City</th>
                <th>University</th>
                <th>Course</th>
            </tr>
            </thead>
            <tbody>
            <tr key={data.name}>
                <td>{data.name}</td>
                <td>{data.surname}</td>
                <td>{data.city}</td>
                <td>{data.university}</td>
                <td>{data.course}</td>
            </tr>
            </tbody>
        </Table>
    );
};

export default CreateTable;
