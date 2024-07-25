
import { createContext, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const FormList = createContext({
  formList: [],
  addChat: () => { },
  deleteChat: () => { },
  deleteAllChat: () => { }
});
const formListReducer = (currChat, action) => {
  let newCurrChat = currChat;
  switch (action.type) {
    case 'DELETEALLCHAT':
      newCurrChat = [];
      return newCurrChat;

    case 'DELETECHAT':
      newCurrChat = currChat.filter(chat => chat.id !== action.payload.id);
      return newCurrChat;
    case 'ADDCHAT':
      const chatWithId = { id: uuidv4(), ...action.payload };
      newCurrChat = [chatWithId, ...currChat];
      return newCurrChat;
  }
}
const DEFAULT_FORM_LIST = [{
  id: '1',
  date: '10/06/04',
  time: `10:30:55`,
  name: 'Sanyam jain',
  dateOfBirth: '10/06/04',
  contactNumber: '6395606174',
  whatsappNumber: '6395606174',
  address: '105/2 jagriti vihar meerut',
  branch: 'shastri nagar',

  product: 'Tata Motat car',
  marketPrice: '600000',
  conversation: 'customer is happy , he will come tommorow'
},
{
  id: '2',
  date: '25/07/2024',
  time: `10:30:55`,
  name: 'Kavya jain',
  dateOfBirth: '25/03/2007',
  contactNumber: '6395606174',
  whatsappNumber: '9412107130',
  address: '105/2 jagriti vihar meerut',
  branch: 'Lohiya nagar',

  product: 'Washing Machine',
  marketPrice: '600000',
  conversation: 'Customer bought the product at the price of 580000'
}
]

const FormListProvider = ({ children }) => {
  const [formList, dispatchFormList] = useReducer(formListReducer, DEFAULT_FORM_LIST);
  const addChat = (Date, Time, Name, Dob, ContactNumber, WhatsappNumber, Address, Branch, ProductName, ProductPrice, Update_conversation) => {
    dispatchFormList({
      type: 'ADDCHAT',
      payload: {

        date: Date,
        time: Time,
        name: Name,
        dateOfBirth: Dob,
        contactNumber: ContactNumber,
        whatsappNumber: WhatsappNumber,
        address: Address,
        branch: Branch,
        product: ProductName,
        marketPrice: ProductPrice,
        conversation: Update_conversation
      }
    })
  }
  const deleteChat = (id) => {
    dispatchFormList({
      type: 'DELETECHAT',
      payload: {
        id
      }
    })
  }
  const deleteAllChat = () => {
    dispatchFormList({
      type: 'DELETEALLCHAT',

    })
  }
  return <FormList.Provider value={{ formList, addChat, deleteChat, deleteAllChat }}>
    {children}
  </FormList.Provider>
}

export default FormListProvider