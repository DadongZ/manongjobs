import React from 'react'
import { Form, form } from 'react-bootstrap'

export default function SearchForm({params, onParamChange}) {
    return (
        <Form className="mb4">
            <Form.Row className="align-items-end">
                <Form.Group as={col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.description} name="description" type="text" />
                </Form.Group>
                <Form.Group as={col}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.Location} name="location" type="text" />
                </Form.Group>
                <Form.Group as={col} xs="auto" className="ml-2">
                    <Form.Check 
                        onChange={onParamChange} 
                        value={params.full_time} 
                        name="full_time" 
                        id="full-time" 
                        label="Only Full Time"
                        type='checkbox'
                        className="mb2"
                        />
                </Form.Group>
            </Form.Row>
        </Form>
    )
}
