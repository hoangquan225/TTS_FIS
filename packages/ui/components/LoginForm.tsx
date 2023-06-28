"use client";
import React, { useState } from 'react';

const FormLogin = () => {

    return (
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default FormLogin;