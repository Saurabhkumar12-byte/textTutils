import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  function uppercaseFunc() {
   
    let newText = text.toUpperCase();
    setText(newText);
  }
  function lowercaseFunc() {
    
    let newText = text.toLowerCase();
    setText(newText);
  }
  function changed(e) {
    console.log("textarea changed");
    setText(e.target.value);
  }
  function prevFunc() {
    const collapse = document.getElementById("collapseOne");
    const contain = collapse.classList.contains("show");
    if (!contain) {
      collapse.classList.add("show");
    } else {
      collapse.classList.remove("show");
    }
  }
  function clearFunc() {
    setText("")
  }
  return (
    <>
      <div className="container">
        <div className="mb-1 my-3">
          <h1>{props.heading}</h1>

          <textarea
            className="form-control fs-4"
            id="mybox"
            rows="8"
            value={text}
            onChange={changed}
            placeholder="Do experiments with your text..."
          ></textarea>
          <button className="btn btn-primary my-2" onClick={uppercaseFunc}>
            Uppercase
          </button>
          <button className="btn btn-primary my-2 mx-2" onClick={prevFunc}>
            Preview
          </button>
          <button className="btn btn-primary my-2" onClick={lowercaseFunc}>
            Lowercase
          </button>
          <button className="btn btn-danger mx-2 my-2" onClick={clearFunc}>
            Clear
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p className="fs-5">
          {text.split(" ").length - 1} words {text.length} character
        </p>
        <p className="fs-5">
          {0.008 * (text.split(" ").length - 1)} minutes to above paragraph
        </p>
      </div>

      <div className="container">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                className="accordion-button fs-4"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Preview of textarea
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body fs-5">{text}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
