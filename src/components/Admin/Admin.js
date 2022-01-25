import { useState, useEffect } from 'react';
import { auth, getProjects, addProject, delProject, getAllUsers, delUser, makeUserMod, makeUserBase } from '../../firebase.js';
import { GoogleAuthProvider, signOut, signInWithPopup } from "firebase/auth";
import './Admin.scss';
import ProjectCard from '../Portfolio/ProjectCard.js';

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

function Admin() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [userAdmin, setUserAdmin] = useState(false);

    const [portfolioVisible, setPortfolioVisible] = useState(false);
    const [projects, setProjects] = useState([]);
    const [projectComponents, setProjectComponents] = useState([]);

    const [usersVisible, setUsersVisible] = useState(false);
    const [users, setUsers] = useState([]);
    const [userComponents, setUserComponents] = useState([]);

    const [formContent, setFormContent] = useState({})

    const [reload, setReload] = useState(false);

    auth.onAuthStateChanged((user) => {
        if (user) {
            setLoggedIn(true);
            if (user.email === "marcus.aandahl@gmail.com") {
                setUserAdmin(true);
            }
        } else {
            setLoggedIn(false);
            setUserAdmin(false);
        }
    })

    function createUser() {
        signInWithPopup(auth, provider)
    }

    function logOutFunc() {
        signOut(auth);
    }

    function updateProjects() {
        getProjects().then((projects) => {
            if (projects) {
                setProjects(projects);
                const projElems = projects.map((project, index) => {
                    return <ProjectCard key={`card${index}`} day={project.date} month={project.month} year={project.year} title={project.title} subtitle={project.subtitle} description={project.description} github={project.github} link={project.link} pictureName={project.pictureName}/>
                })
                setProjectComponents(projElems)
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        var regexLink = new RegExp(expression);
        if (formContent.link.match(regexLink) && formContent.github.match(regexLink)) {
            const cont = {
                title: formContent.title,
                subtitle: formContent.subtitle,
                description: formContent.description,
                pictureName: formContent.pictureName,
                link: formContent.link,
                github: formContent.github,
                date: formContent.date,
                month: formContent.month,
                year: formContent.year
            }
            addProject(cont).then(() => {
                alert('Project added successfully')
                updateProjects();
            })
            .catch(err => alert(err))
        } else {
            alert("Links were not valid");
            return false;
        }
    }

    function handleChange(event) {
        const id = event.target.id.slice(0, -7);
        var newData = formContent;
        if (id !== 'date'){
            newData[id] = event.target.value
        } else {
            const splitdate = event.target.value.split('-');
            newData['year'] = parseInt(splitdate[0]);
            newData['month'] = parseInt(splitdate[1]);
            newData['date'] = parseInt(splitdate[2]);
        }
        setFormContent(newData);
    }

    function onInit() {
        getProjects().then((projects) => {
            if (projects) {
                setProjects(projects);
                const projElems = projects.map((project, index) => {
                    return <ProjectCard key={`card${index}`} day={project.date} month={project.month} year={project.year} title={project.title} subtitle={project.subtitle} description={project.description} github={project.github} link={project.link} pictureName={project.pictureName}/>
                })
                setProjectComponents(projElems)
            }
        })
        getAllUsers().then(users => {
            if (users) {
                setUsers(users.data);
            }
        })
    }

    useEffect(() => {
        onInit();
    }, [])

    useEffect(() => {
        onInit();
    }, [loggedIn, reload])

    useEffect(() => {
        if (users.length > 0) {
            const userElems = [];
            users.forEach((user, index) => {
                const elem = (<div key={`user${index}`} className={`userCardCont user${index}`}>
                    <div className="userDetails">
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.role}</p>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => {makeUserMod(user.uid, user.role).then(() => { setReload(!reload) })}}>MOD</button>
                    <button type="button" className="btn btn-primary" onClick={() => {makeUserBase(user.uid, user.role).then(() => { setReload(!reload) })}}>BASE</button>
                    <button type="button" className="btn btn-primary" onClick={() => {delUser(user.uid, user.role).then(() => { setReload(!reload) })}}>DEL</button>
                </div>)
                userElems.push(elem);
            })
            setUserComponents(userElems);
        }
    }, [users, reload])

    const page = (
        <div>
            <div className="portfolio">
                <div className="portfolio-header">
                    <h1 className="title">Portfolio</h1> <button type="button" className="btn btn-primary button1" onClick={() => {setPortfolioVisible(!portfolioVisible)}}>VIEW</button>
                </div>
                { portfolioVisible ?
                    <div className="adminContent">
                        <div className="projectCards">
                            {projectComponents.length > 0 ? projectComponents : <p>Loading Projects...</p>}
                        </div>
                        <div className="projectWrites">
                            <div className="addProject">
                                <h3 className="title">Add Project</h3>
                                <form className="form" onSubmit={(e) => handleSubmit(e)} >
                                    <input id="titleProject" className="input" type="text" placeholder="Title" required onChange={(e) => handleChange(e)}/>
                                    <input id="subtitleProject" className="input" type="text" placeholder="Subtitle" required onChange={(e) => handleChange(e)}/>
                                    <input id="linkProject" className="input" type="text" placeholder="Link" required onChange={(e) => handleChange(e)}/>
                                    <input id="githubProject" className="input" type="text" placeholder="Github Link" required onChange={(e) => handleChange(e)}/>
                                    <input id="dateProject" className="input" type="date" required onChange={(e) => handleChange(e)}/>
                                    <input id="pictureNameProject" className="input" type="text" placeholder="Picture Name" required onChange={(e) => handleChange(e)}/>
                                    <textarea id="descriptionProject" className="input" type="text" placeholder="Description" required onChange={(e) => handleChange(e)}/>
                                    <button type="text" className="submit btn btn-primary">submit</button>
                                </form>
                            </div>
                            <div className="deleteProject">
                                {projects.map((project, index) => { return <div className="projDel" key={`project${index}`}><p>{project.title}</p><button className="btn btn-primary" onClick={() => delProject(project.title).then(() => {updateProjects()})}>X</button></div>})}
                            </div>
                        </div>
                    </div>
                : ''}
            </div>
            <div className="users">
                <div className="user-header">
                    <h1 className="title">Users</h1>
                    <button type="button" className="btn btn-primary button1" onClick={() => {setUsersVisible(!usersVisible)}}>VIEW</button>
                    <button className="btn btn-primary button2" onClick={() => logOutFunc()}>Log out</button> 
                </div>
                { usersVisible ?
                <div className="userCards">
                    {userComponents.length > 0 ?
                        userComponents
                    : <p>No Users</p> }
                </div>
                : ''}
             </div>
        </div>
    )

    const logIn = (
        <div className="signInForm">
            <button className="btn btn-primary" onClick={() => createUser()}>Log In</button> 
            <p>Email: {auth.currentUser ? auth.currentUser.email : ""}</p>
        </div>
    )

    const logOut = (
        <div className="signOutForm">
            <button className="btn btn-primary" onClick={() => logOutFunc()}>Log out</button> 
            <p>Email: {auth.currentUser ? auth.currentUser.email : ""} not permitted</p>
        </div>
    )

    return (
        <div className="admin">
            {(loggedIn && userAdmin) ? page : (loggedIn ? logOut : logIn)}
        </div>
    );
}

export default Admin;