import "./styles.css";
import axios from "axios";
import { render } from "@testing-library/react";
import React, { useState } from "react";
import {
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
  Form,
  FormGroup,
  Button,
  Image,
  Row,
  Col,
  Container,
  Carousel,
} from "react-bootstrap";
import Recipe from "../../components/Recipe";

function Options(props) {
  // const rootURL = "https://api.edamam.com/search?";
  // const apiKey = "&app_key=c0baa345e633fba28dd95821b2cec992";
  // const appId = "&app_id=9ace14ad";
  // const param1 = "q=";
  // const param2 = "&Health=peanut-free";
  // const param3 = "&mealType=Lunch";
  // const testAPI = rootURL + param1 + appId + apiKey + param2 + param3;

  const [choice, setChoice] = useState([]);
  // const [proteinSelection, setProteinSelection] = useState("");
  const [dietSelection, setDietSelection] = useState("");
  const [mealSelection, setMealSelection] = useState("");
  const [allergySelection, setAllergySelection] = useState("");
  let choicesArr = [];

  // const handleProteinSelect = (e) => {
  //   setProteinSelection(e)
  //   console.log(e)
  // }

  const handleDietSelect = (e) => {
    setDietSelection(e);
    console.log(e);
  };

  const handleMealSelect = (e) => {
    setMealSelection(e);
    console.log(e);
  };

  const handleAllergySelect = (e) => {
    setAllergySelection(e);
    console.log(e);
  };

  const click = () => {
    setChoice(choicesArr);
  };

  return (
    <Container className="d-flex justify-content-center">
    <Form onSubmit={props.submitButton} className="mainForm">
      <h1 className='text-center' id="recipe-title">Recipe Roulette</h1>
      <Image
        src={require("../../components/Header/roulettelogo.png")}
        width={270}
        height={270}
        className="mx-auto d-block" alt="Responsive image"
      />

        <Form.Group className="mb-3 text-center">
          <Form.Label className="label" htmlFor='protein'>Choose Your Protein</Form.Label>
          <Form.Select className="mb-3 text-center" name='protein' id='option'>
                <option id='option' value='chicken'>Chicken</option>
                <option id='option' value='fish'>Fish</option>
                <option id='option' value='beef'>Beef</option>
                <option id='option' value='pork'>Pork</option>
                <option id='option' value='veggies'>Veggies</option>
                <option id='option' value='not picky'>Not Picky</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 text-center">
          <Form.Label className='label' htmlFor='course'>Meal Type</Form.Label>
          <Form.Select className="mb-3 text-center" name='course' id='option'>
                <option id='option' value='breakfast'>Breakfast</option>
                <option id='option'value='lunch'>Lunch</option>
                <option id='option' value='dinner'>Dinner</option>
                <option id='option' value='snack'>Snack</option>
                <option id='option' value='lunch'>Not Picky</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 text-center">
          <Form.Label className='label' htmlFor='diet'>Dietary Preferences</Form.Label>
          <Form.Select className="mb-3 text-center" name='diet' id='option'>
                <option id='option' value='soy free'>Soy-Free</option>
                <option id='option' value='dairy free'>Dairy-Free</option>
                <option id='option' value='gluten free'>Gluten-Free</option>
                <option id='option' value='egg free'>Egg-Free</option>
                <option id='option' value='peanut free'>Peanut-Free</option>
          </Form.Select>
        </Form.Group>
             <Button className="sub-btn">
                  Submit
            </Button>
        </Form>
        </Container>
  );
};
      



export default Options;
