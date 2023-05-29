import { Outlet, Link } from "react-router-dom";
import React from "react";

export const Router = () => {
    return (
        <>
        <div>
            <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/button"> Buttons </Link>
                </li>
                <li>
                    <Link to="/counters"> Counters </Link>
                </li>
                <li>
                    <Link to="/items"> Items </Link>
                </li>
                <li>
                    <Link to="/list"> List </Link>
                </li>
                <li>
                    <Link to="/CssExc"> CSS harjotuksia </Link>
                </li>
                <li>
                    <Link to="/TicTacToe"> Tic Tac Toe </Link>
                </li>
            </ul>
        </div>
        <Outlet />
        </>
    )
};