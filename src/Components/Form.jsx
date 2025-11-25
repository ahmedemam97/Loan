import { useState } from "react";
import Popup from "./Popup";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    emp: false,
    salary: "",
  });

  const [showPopup, setShowPopup] = useState({
    visibility: false,
    text: "",
    msgStyle: '',
  });

  function handleSubmit(event) {
    event.preventDefault();

    setShowPopup({...showPopup, visibility: true  });
  } 

  function handleDivClick() {
    if (showPopup.visibility) {

      setShowPopup({...showPopup, visibility: false  } );
    }
  }

  function handleShowText() {
    if (formData.age < 18 || formData.age > 100) {
      setShowPopup({...showPopup, text: "Age must be between 18 and 100 years!", msgStyle: 'red' });
    } else if (formData.phone.length < 9 || formData.phone.length > 13) {
      setShowPopup({...showPopup, text: "Phone number must be between 9 and 13 digits!",  msgStyle: 'red'});
    } else if  (formData.name && (formData.age > 18 || formData.age < 100) && (formData.phone.length > 9 || formData.phone.length < 13)) {
      setShowPopup({...showPopup, text: "Form submitted successfully!",msgStyle: 'green' });
    }else{
      setShowPopup({...showPopup, text: "Please fill all the required fields!" , msgStyle: 'red'});
    }

    console.log(showPopup.text);
  }

  const isBtnDisabled = formData.name && formData.age && formData.emp ? false : true;

  return (
    <div className="parent" onClick={handleDivClick}>
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

                // validateSubmit(updateData);
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

                // validateSubmit(updateData);
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

                // validateSubmit(updateData);
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

                // validateSubmit(updateData);
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
                // validateSubmit(updateData);
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
              disabled={isBtnDisabled}
              onClick={() => {
                handleShowText();
              }} style={{cursor: 'pointer'}}
              className={!(formData.name && formData.age && formData.emp) ? 'disabled' : ''}
            />
          </div>
        </form>
      </div>
      <Popup visibility={showPopup.visibility} text={showPopup.text} msgStyle={showPopup.msgStyle}/>
    </div>
  );
}

export default Form;
