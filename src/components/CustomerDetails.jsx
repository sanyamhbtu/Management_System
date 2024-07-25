import React, { useState } from "react";
import style from "./CustomerDetails.module.css";
import { format } from "date-fns";

function CustomerDetails({ chat }) {
  const [inputValue, setInputValue] = useState("");
  const [conversations, setConversations] = useState([]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const addConversation = () => {
    if (inputValue.trim()) {
      setConversations([inputValue, ...conversations]);
      setInputValue("");
    }
  };
  return (
    <>
      <div className="container px-4 py-5">
        <h2 className="border-bottom  ">Customer Details</h2>

        <div
          className={`row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5 ${style.border}`}
        >
          <div className={`col d-flex flex-column align-items-start gap-2  `}>

            <ul className="list-group list-group-horizontal list-group-item-primary">
              <li className={`list-group-item ${style.fixedone}`}>1</li>
              <li className={`list-group-item ${style.fixedtwo}`}>Name</li>
              <li className={`list-group-item ${style.fixedthree}`}>
                {chat.name}
              </li>
            </ul>
            <ul className="list-group list-group-horizontal list-group-item-secondary ">
              <li className={`list-group-item ${style.fixedone}`}>2</li>
              <li className={`list-group-item ${style.fixedtwo}`}>
                Date of birth
              </li>
              <li className={`list-group-item ${style.fixedthree}`}>
                {chat.dateOfBirth}
              </li>
            </ul>
            <ul className="list-group list-group-horizontal list-group-item-success">
              <li className={`list-group-item ${style.fixedone}`}>3</li>
              <li className={`list-group-item ${style.fixedtwo}`}>
                Contact number
              </li>
              <li className={`list-group-item ${style.fixedthree}`}>
                {chat.contactNumber}
              </li>
            </ul>
            <ul className="list-group list-group-horizontal list-group-item-danger">
              <li className={`list-group-item ${style.fixedone}`}>4</li>
              <li className={`list-group-item ${style.fixedtwo}`}>
                Whatsapp number
              </li>
              <li className={`list-group-item ${style.fixedthree}`}>
                {chat.whatsappNumber}
              </li>
            </ul>
            <ul className="list-group list-group-horizontal list-group-item-warning">
              <li className={`list-group-item ${style.fixedone}`}>5</li>
              <li className={`list-group-item ${style.fixedtwo}`}>Address</li>
              <li className={`list-group-item ${style.fixedfour}`}>
                {chat.address}
              </li>
            </ul>
            <ul className="list-group list-group-horizontal list-group-item-info">
              <li className={`list-group-item ${style.fixedone}`}>6</li>
              <li className={`list-group-item ${style.fixedtwo}`}>Branch</li>
              <li className={`list-group-item ${style.fixedthree}`}>
                {chat.branch}
              </li>
            </ul>
            <ul className="list-group list-group-horizontal list-group-item-light">
              <li className={`list-group-item ${style.fixedone}`}>7</li>
              <li className={`list-group-item ${style.fixedtwo}`}>
                Product name
              </li>
              <li className={`list-group-item ${style.fixedthree}`}>
                {chat.product}
              </li>
            </ul>
            <ul className="list-group list-group-horizontal list-group-item-dark">
              <li className={`list-group-item ${style.fixedone}`}>8</li>
              <li className={`list-group-item ${style.fixedtwo}`}>
                Product price
              </li>
              <li
                className={`list-group-item ${style.fixedthree}`}
              >{`₹${chat.marketPrice}`}</li>
            </ul>
          </div>

          <div className="col">
            <div className={`${style.border}`}>
              <h2>Conversation</h2>

              <div class="list-group">
                <div className="conversation-list">
                  {conversations.map((conversation, index) => (
                    <>
                      <a
                        key={index}
                        href="#"
                        class="list-group-item list-group-item-action "
                        style={{
                          "background-color": "var(--bs-success-bg-subtle)",
                        }}
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <small
                            class="text-right text-muted card"
                            style={{ width: " 11rem" }}
                          >
                            Updated on: {format(new Date(), "dd/MM/yyyy")}
                          </small>
                        </div>

                        <p>{conversation}</p>
                      </a>
                      <hr />
                    </>
                  ))}
                </div>

                <a
                  href="#"
                  class="list-group-item list-group-item-action "
                  style={{ "background-color": "var(--bs-success-bg-subtle)" }}
                >
                  <div class="d-flex w-100 justify-content-between">
                    <small
                      class="text-right text-muted card"
                      style={{ width: " 11rem" }}
                    >
                      Updated on: {chat.date}
                    </small>
                  </div>

                  <p>{chat.conversation}</p>
                </a>
              </div>
            </div>

            <div className={`${style.border}`}>
              <h2>Add Conversation</h2>

              <div class="input-group">
                <span class="input-group-text">Add Text</span>
                <textarea
                  onChange={handleInputChange}
                  class="form-control"
                  aria-label="With textarea"
                ></textarea>
              </div>
              <button className={style.btn} onClick={addConversation}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerDetails;
