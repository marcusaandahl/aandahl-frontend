import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import './ProjectCard.scss';

import {storage} from '../../firebase.js';
import { ref, getDownloadURL } from "firebase/storage";

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

    return (
        <div className="Pcard">
            <div className="Ppicture" style={picStyle}>
                <div className="Plinks">
                    {props.link ? <span className="Plink"><a href={props.link} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></span> : ''}
                    {props.github ? <span className="Plink"><a href={props.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></span> : '' }
                </div>
            </div>
            <div className="Pcontent">
                <div className="Ptitle">
                    <div className="Ptitles">
                        <h2 className="Ptitletitle"> {props.title} </h2>
                        <h5 className="Psubtitle"> {props.subtitle} </h5>
                    </div>
                </div>
                <p className="Pdescription">
                    {props.description}
                </p>
            </div>
        </div>
    );
}

export default ProjectCard;