import React from "react";
import { Form, Button, InputGroup, Col, Row } from "react-bootstrap";
import { useState } from "react";
import classes from "./styles.module.css";

function NewRecipe() {
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({});
  const setField = (field, value) => {
    console.log(field);
    console.log(value);
    console.log(form);
    setForm({
      ...form,
      [field]: value,
    });
  };
  async function putData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(form);

    putData("/new-recipe", form).then((data) => {
      console.log(data);
    });
    setValidated(true);
  };
  return (
    <div className={classes.newrecipes}>
      <Form
        className={classes.container}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="8" controlId="validationCustom02">
            <Form.Label className={classes.title}>Title</Form.Label>
            <Form.Control
              onChange={(e) => setField("title", e.target.value)}
              required
              type="text"
            />{" "}
            <Form.Control.Feedback type="invalid">
              'Title' is a required field
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="8" controlId="validationCustom02">
            <Form.Label className={classes.ingredients}>Ingredients</Form.Label>
            <Form.Control
              onChange={(e) => setField("ingridients", e.target.value)}
              required
              type="text"
            />{" "}
            <Form.Control.Feedback type="invalid">
              'Ingredients' is a required field
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group as={Col} md="8" controlId="validationCustom02">
          <Form.Label className={classes.instructions}>Instructions</Form.Label>
          <Form.Control
            onChange={(e) => setField("instructions", e.target.value)}
            required
            type="text"
          />{" "}
          <Form.Control.Feedback type="invalid">
            'Instructions' is a required field
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="8" controlId="validationCustom02">
          <Form.Label className={classes.preparingtime}>
            Preparing time
          </Form.Label>
          <Form.Control
            onChange={(e) => setField("prepTime", e.target.value)}
            required
            type="text"
          />
          <Form.Control.Feedback type="invalid">
            'Preparing time' is a required field
          </Form.Control.Feedback>
        </Form.Group>{" "}
      </Form>
      <br></br>
      <div className={classes.submitt}>
        <Button variant="primary btn" type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default NewRecipe;
