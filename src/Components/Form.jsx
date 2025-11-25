import { useState } from "react";
import Popup from "./Popup";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    emp: false,
    salary: "",
    isBtnDisabled: true,
  });

  const [showPopup, setShowPopup] = useState(false);
  const [showText, setShowText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function validateSubmit(updatedForm) {
    if (
      updatedForm.name !== "" &&
      updatedForm.phone !== "" &&
      updatedForm.age !== "" &&
      updatedForm.emp === true
    ) {
      setFormData({ ...updatedForm, isBtnDisabled: false });
      setShowPopup(<Popup text={showText} />);
    } else {
      setFormData({ ...updatedForm, isBtnDisabled: false });
      setShowPopup(<Popup text={showText} />);
    }
    handleShowText();
    console.log(showText);
  }

  function handleShowText() {
    if (formData.age < 18 || formData.age > 100) {
      setShowText("Age is not allowed!");
    } else if (formData.phone.length < 9 || formData.phone.length > 13) {
      setShowText("Phone number format is incorrect!");
    } else {
      setShowText("The Form Has Been Submitted Successfully.");
    }

    console.log(showText);
  }

  return (
    <div className="parent">
      <div className="box">
        <div className="header">Requesting a Loan</div>
        <hr />

        <form action="" onSubmit={handleSubmit}>
          <div className="name">
            <label htmlFor="">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(event) => {
                const updateData = { ...formData, name: event.target.value };
                setFormData(updateData);

                validateSubmit(updateData);
              }}
            />
          </div>

          <div className="phone">
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(event) => {
                const updateData = { ...formData, phone: event.target.value };
                setFormData(updateData);

                validateSubmit(updateData);
              }}
            />
          </div>

          <div className="age">
            <label htmlFor="">Age</label>
            <input
              type="number"
              value={formData.age}
              onChange={(event) => {
                const updateData = { ...formData, age: event.target.value };

                setFormData(updateData);

                validateSubmit(updateData);
              }}
            />
          </div>

          <div className="emp">
            <label htmlFor="">Are you an employee?</label>
            <input
              type="checkbox"
              checked={formData.emp}
              onChange={(event) => {
                const updateData = { ...formData, emp: event.target.checked };

                setFormData(updateData);

                validateSubmit(updateData);
              }}
            />
          </div>

          <div className="salary">
            <label htmlFor="">Salary</label>
            <select
              value={formData.salary}
              onChange={(event) => {
                const updateData = { ...formData, salary: event.target.value };

                setFormData(updateData);
                validateSubmit(updateData);
              }}
            >
              <option>2000</option>
              <option>3000</option>
              <option>4000</option>
            </select>
          </div>

          <div className="submit">
            <input
              type="submit"
              value="Submit"
              disabled={formData.isBtnDisabled}
              onClick={() => {
                handleShowText();
              }}
            />
          </div>
        </form>
      </div>
      <Popup />
    </div>
  );
}

export default Form;
