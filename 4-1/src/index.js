import React from 'react';
import ReactDOM from 'react-dom/client';
import FormCheck from './FormCheck';
import FormCheckMulti from './FormCheckMulti';
import FormFile from './FormFile';
import FormList from './FormList';
import FormRadio from './FormRadio';
import FormSelect from './FormSelect';
import FormTextarea from './FormTextarea';
import StateForm from './StateFrom';
import StateFormUC from './StateFromUC';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <FormFile />
      <hr />

      <FormCheckMulti />
      <hr />

      <FormCheck />
      <hr />

      <FormRadio />
      <hr />

      <FormList />
      <hr />

      <FormSelect />
      <hr />

      <FormTextarea />
      <hr />

      <StateFormUC />
      <hr />

      <StateForm />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
