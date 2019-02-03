import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav(props){
    return (
        <div>
            <ul className="nav-list">
                <Link to="/dashboard"><li>Home</li></Link>
                <Link to="/new"><li>New Post</li></Link>
                <Link to="/"><li>Logout</li></Link>
            </ul>
        </div>
    )
}