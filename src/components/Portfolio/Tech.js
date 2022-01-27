import RailsLogo from './assets/logos/Rails.png';
import ReactLogo from './assets/logos/React.png';
import NodeLogo from './assets/logos/Node.png';
import ExpressLogo from './assets/logos/Express.png';
import AxiosLogo from './assets/logos/Axios.png';
import PSQLLogo from './assets/logos/PSQL.png';
import BootstrapLogo from './assets/logos/Bootstrap.png';
import TailwindLogo from './assets/logos/Tailwind.png';
import FirebaseLogo from './assets/logos/Firebase.png';
import SnowpackLogo from './assets/logos/Snowpack.png';
import WebpackLogo from './assets/logos/Webpack.png';
import GSAPLogo from './assets/logos/GSAP.png';

function Tech() {
    return (
        <div className="logos tech">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <img src={RailsLogo} alt="Rails" className="logo rails" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="Rails" data-bs-content=""/>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <img src={ReactLogo} alt="React" className="logo react" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="React" data-bs-content=""/> 
                    <img src={NodeLogo} alt="NodeJS" className="logo node" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="NodeJS" data-bs-content=""/> 
                    <img src={ExpressLogo} alt="ExpressJS" className="logo express" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="ExpressJS" data-bs-content=""/> 
                    <img src={AxiosLogo} alt="Axios" className="logo axios" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="Axios" data-bs-content=""/> 
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <img src={SnowpackLogo} alt="Snowpack" className="logo snowpack" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="Snowpack" data-bs-content=""/>
                    <img src={WebpackLogo} alt="Webpack" className="logo webpack" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="Webpack" data-bs-content=""/>
                    <img src={GSAPLogo} alt="GSAP" className="logo gsap" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="GSAP" data-bs-content=""/>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <img src={TailwindLogo} alt="Tailwind" className="logo tailwind" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="Tailwind" data-bs-content=""/>
                    <img src={BootstrapLogo} alt="Bootstrap" className="logo bootstrap" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="Bootstrap" data-bs-content=""/> 
                    <img src={PSQLLogo} alt="Postgresql" className="logo psql" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="PostgeSQL" data-bs-content=""/> 
                    <img src={FirebaseLogo} alt="Firebase" className="logo firebase" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="Firebase" data-bs-content=""/>
                </div>
            </div>
        </div>
    );
}

export default Tech;