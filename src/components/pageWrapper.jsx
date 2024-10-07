import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import "./pageWrapper.css";

export const PageWrapper = ({ children }) => {
    const { theme } = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(toggleTheme());
    }
    return (
        <div className={theme}>
            <nav>
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/todo`}>Todo</Link>
                    </li>
                    <li>
                        <Link to={`/converter`}>Converter</Link>
                    </li>
                    <li>
                        <Link to={`/about`}>About</Link>
                    </li>
                    <li>
                        <Link to={`/catalog`}>Catalog</Link>
                    </li>
                </ul>
            </nav>
            <button onClick={onClick}>toggleTheme</button>
            <div>{children}</div>
        </div>
    )
}