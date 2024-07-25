import React, { useContext } from "react";
import style from "./Chat.module.css";
import { FormList } from "../store/Form_list";
import CustomerDetails from "./CustomerDetails";
function Chat({ chat, onMoreClick }) {
  const { deleteChat } = useContext(FormList);
  const showMore = (chat) => {
    <CustomerDetails chat={chat} />;
  };
  return (
    <>
      <div style={{ margin: "5px" }}>
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <img
            src="https://www.imagella.com/cdn/shop/products/fec5e9f79ee323f367b0fec5d7177663_89776d30-f406-46cf-8a1b-c58b59aa9d54.jpg?v=1708376164"
            alt="twbs"
            width="52"
            height="52"
            className="rounded-circle flex-shrink-0"
          />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">{chat.name}</h6>
              <p className="mb-0 opacity-75">{`seeing for ${chat.product} at ${chat.branch}`}</p>
            </div>
            <small className="opacity-50 text-nowrap">{chat.date}</small>
          </div>
          <button className={style.btn} onClick={() => onMoreClick(chat)}>
            More
          </button>
          <button className={style.btn} onClick={() => deleteChat(chat.id)}>
            Delete
          </button>
        </a>
      </div>
    </>
  );
}

export default Chat;
