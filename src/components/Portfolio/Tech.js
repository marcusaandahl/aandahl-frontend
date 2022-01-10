import RailsLogo from './assets/logos/Rails.png';
import ReactLogo from './assets/logos/React.png';
import NodeLogo from './assets/logos/Node.png';
import ExpressLogo from './assets/logos/Express.png';
import JqueryLogo from './assets/logos/Jquery.png';
import AxiosLogo from './assets/logos/Axios.png';
import PSQLLogo from './assets/logos/PSQL.png';
import BootstrapLogo from './assets/logos/Bootstrap.png';
import GSAPLogo from './assets/logos/GSAP.png';

function Tech() {
    return (
        <div className="logos tech">
                <img src={RailsLogo} alt="Rails" className="logo rails" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="Rails" data-bs-content=""/>
                <img src={ReactLogo} alt="React" className="logo react" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="React" data-bs-content=""/> 
                <img src={NodeLogo} alt="NodeJS" className="logo node" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="NodeJS" data-bs-content=""/> 
                <img src={ExpressLogo} alt="ExpressJS" className="logo express" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="ExpressJS" data-bs-content=""/> 
                <img src={JqueryLogo} alt="jQuery" className="logo jquery" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="jQuery" data-bs-content=""/> 
                <img src={AxiosLogo} alt="Axios" className="logo axios" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="Axios" data-bs-content=""/> 
                <img src={PSQLLogo} alt="Postgresql" className="logo psql" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="PostgeSQL" data-bs-content=""/> 
                <img src={BootstrapLogo} alt="Bootstrap" className="logo bootstrap" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="Bootstrap" data-bs-content=""/> 
                <img src={GSAPLogo} alt="GSAP" className="logo gsap" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="GSAP" data-bs-content=""/>                 
        </div>
    );
}

export default Tech;