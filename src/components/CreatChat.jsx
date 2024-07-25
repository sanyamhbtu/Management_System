import React, { useContext, useRef } from "react";
import style from "./CreatChat.module.css";
import { FormList } from "../store/Form_list";
function CreatChat({setView}) {
  const { addChat } = useContext(FormList);
  const todayDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  const date = useRef();
  const time = useRef();
  const name = useRef();
  const dob = useRef();
  const contactNumber = useRef();
  const whatsappNumber = useRef();
  const address = useRef();
  const branch = useRef();
  const productName = useRef();
  const productprice = useRef();
  const update_conversation = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const Date = date.current.value;
    const Time = time.current.value;
    const Name = name.current.value;
    const Dob = dob.current.value;
    const ContactNumber = contactNumber.current.value;
    const WhatsappNumber = whatsappNumber.current.value;
    const Address = address.current.value;
    const Branch = branch.current.value;
    const ProductName = productName.current.value;
    const ProductPrice = productprice.current.value;
    const Update_conversation = update_conversation.current.value;
    date.current.value = "";
    time.current.value = "";
    name.current.value = "";
    dob.current.value = "";
    contactNumber.current.value = "";
    whatsappNumber.current.value = "";
    address.current.value = "";
    branch.current.value = "";
    productName.current.value = "";
    productprice.current.value = "";
    update_conversation.current.value = "";
    addChat(
      Date,
      Time,
      Name,
      Dob,
      ContactNumber,
      WhatsappNumber,
      Address,
      Branch,
      ProductName,
      ProductPrice,
      Update_conversation
    );
    setView("showHistory")
  };
  return (
    <>
      <form action="" className={style.form} onSubmit={handleSubmit}>
        <h1>Add Customer Details</h1>
        <hr />
        <div className={style.date}>
          <label htmlFor="Date"> Today Date : </label>
          <input
            type="text"
            id="Date"
            ref={date}
            value={`${todayDate} `}
            readOnly
            style={{ border: "none" }}
          />
          <label htmlFor="Date"> Current Time : </label>
          <input
            type="text"
            id="Time"
            ref={time}
            value={`${currentTime} `}
            readOnly
            style={{ border: "none" }}
          />
        </div>
        <h6 className={style.p}>Client's Information</h6>
        <div className={`border border-bottom-0 ${style.client}`}>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Name
            </span>
            <input
              type="text"
              ref={name}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Date of birth
            </span>
            <input
              type="tel"
              ref={dob}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Contact Number
            </span>
            <input
              type="tel"
              ref={contactNumber}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>

          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              WhatsApp Number
            </span>
            <input
              type="tel"
              ref={whatsappNumber}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>

          <div className="input-group">
            <span className="input-group-text">Address</span>
            <textarea
              ref={address}
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>

          <h6 className={style.p}>Property Information</h6>
          <div className={`border border-bottom-0 ${style.client}`}>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Branch
              </span>
              <input
                type="text"
                ref={branch}
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Product Name
              </span>
              <input
                type="text"
                ref={productName}
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>

            <div className="input-group input-group-sm mb-3">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Product Market Price
              </span>
              <input
                type="number"
                ref={productprice}
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <h6 className={style.p}>Recent Conversation</h6>
            <div className={`border border-bottom-0 ${style.client}`}>
              <div className="input-group">
                <span className="input-group-text">
                  Update Converstaion here...
                </span>
                <textarea
                  ref={update_conversation}
                  className="form-control"
                  aria-label="With textarea"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className={style.btn}>
          Submit here
        </button>
      </form>
    </>
  );
}

export default CreatChat;
