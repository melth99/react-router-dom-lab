// src/App.jsx
import React from "react";
import { useState } from 'react';
import {Route, Routes} from 'react-router'
//import MailboxFile from './components/MailboxFile/MailboxFile'
import MailboxList from './components/MailboxList/MailboxList'
import NavBar from './components/NavBar/NavBar'
import MailForm from "./components/MailForm/MailForm";
import MailboxFile from "./components/MailboxFile/MailboxFile";

const initialState = []

const App = () => {
  const [mailList,setMailList] = useState(initialState)

  const addMail = (newMail) => {
newMail._id = mailList.length + 1
setMailList([...mailList, newMail])
  }

  return (
    //  <Route path = '/mail/form' element={<h1>form</h1>}/>
    //     <Route path = '/mail/:mail_.id'/>
    <>
  <NavBar/>
  <Routes>
    <Route path='/' element={<h1>Home!</h1>}   />
    <Route path='/mail' element={<MailboxList mailList={mailList}/>}/>
    <Route path='/mail/new' element={<MailForm addMail={addMail}/>}/>
    <Route path="/mail/:mailId" element={<MailboxFile mailList={mailList} />} />
    <Route path="*" element={<h2>Whoops Nothing here</h2>}/>
    </Routes>
  </>
  )

};

export default App;
