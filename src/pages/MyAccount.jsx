import React from 'react';
import '../styles/MyAccount.scss';

const MyAccount = ()=> {
  return(
    <div class="login">
      <div class="form-container">
        <div>
          <h1 class="title">My account</h1>
          <label for="name" class="label">Name</label>
          <p class="value">Alejandro Senger</p>
          <label for="email" class="label">Email address</label>
          <p class="value">alex.senger@hotmail.com</p>
          <label for="password" class="label">Password</label>
          <p class="value">*********</p>
        </div>
        <input type="submit" value="Edit" class="secondary-button edit-button" />
      </div>
    </div>
  )
}

export default MyAccount;