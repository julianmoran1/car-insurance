import React, { useState } from "react";
import {
  obtainYearDifference,
  obtainBrandDifference,
  obtainPlan,
} from "../helper";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Input = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

export default function Form({ setSummary, setLoading }) {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  const { brand, year, plan } = data;

  const [error, setError] = useState(false);

  const getData = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const cotizarSeguro = (event) => {
    event.preventDefault();

    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    //gets difference by years
    // 3 % each year
    const yearDifference = obtainYearDifference(year);

    let result = 2000;
    result -= (yearDifference * 3 * result) / 100;

    // european 30%
    // american 15%
    // asian 5%
    result = +obtainBrandDifference(brand) * +result;

    // basic 20%
    // full 50%
    result = +obtainPlan(plan) * +result;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setSummary({
        brand,
        year,
        plan,
        result,
        show: true,
      });
    }, 2000);
  };

  return (
    <form onSubmit={cotizarSeguro}>
      {error && <Error>All fields are mandatory</Error>}
      <Input>
        <Label>Brand Origin</Label>
        <Select name="brand" value={brand} onChange={getData}>
          <option value="">-- Select --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </Input>
      <Input>
        <Label>Year</Label>
        <Select name="year" value={year} onChange={getData}>
          <option value="">-- Select --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Input>
      <Input>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basic"
          checked={plan === "basic"}
          onChange={getData}
        />
        Basic
        <InputRadio
          type="radio"
          name="plan"
          value="full"
          checked={plan === "full"}
          onChange={getData}
        />
        Full
      </Input>
      <Button type="submit">Get price</Button>
    </form>
  );
}

Form.propTypes = {
  setSummary: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};
