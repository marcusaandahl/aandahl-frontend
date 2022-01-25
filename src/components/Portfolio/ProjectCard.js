import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import './ProjectCard.scss';

import {storage} from '../../firebase.js';
import { ref, getDownloadURL } from "firebase/storage";

function getMonth(monthNr) {
    switch (monthNr) {
        case 1:
            return 'Jan';
        case 2:
            return 'Feb';
        case 3:
            return 'Mar';
        case 4:
            return 'Apr';
        case 5:
            return 'May';
        case 6:
            return 'Jun';
        case 7:
            return 'Jul';
        case 8:
            return 'Aug';
        case 9:
            return 'Sep';
        case 10:
            return 'Oct';
        case 11:
            return 'Nov';
        case 12:
            return 'Dec';
        default:
            return 'Mon';
    }
}

function ProjectCard(props) {
    const [urlPic, setUrlPic] = useState('');
    const [picStyle, setPicStyle] = useState({background: `url('') 50% 10% / cover no-repeat`})

    useEffect(() => {
        if (props.pictureName) {
            getDownloadURL(ref(storage, `portfolio/project-pictures/${props.pictureName}.png`)).then((url) => {
                setUrlPic(url);
            })
            .catch(() => {});
        }
    }, [props.pictureName])

    useEffect(() => {
        setPicStyle({
            background: `url(${urlPic}) 50% 10% / cover no-repeat`
        })
    }, [urlPic])

    // const picStyle = {
    // }

    return (
        <div className="example Pcard">
            <div className="wrapper" style={picStyle}>
                <div className="date">
                    <span className="day">{props.day}</span>
                    <span className="month">{getMonth(props.month)}</span>
                    <span className="year">{props.year}</span>
                </div>
                <ul className="menu-content">
                    {props.link ? <li><a href={props.link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></li> : ''}
                    {props.github ? <li><a href={props.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li> : '' }
                </ul>
                <div className="data">
                    <div className="Pcontent">
                    <span className="type">{props.subtitle}</span>
                    <h1 className="title"><a href={props.link}>{props.title}</a></h1>
                    <p className="text">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;