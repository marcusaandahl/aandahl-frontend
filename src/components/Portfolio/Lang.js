import PythonLogo from './assets/logos/Python.png';
import JSLogo from './assets/logos/JS.png';
import JavaLogo from './assets/logos/Java.png';
import CSSLogo from './assets/logos/CSS.png';
import HTMLLogo from './assets/logos/HTML.png';
import RubyLogo from './assets/logos/Ruby.png';
import TypescriptLogo from './assets/logos/Typescript.png';

function Lang() {
    return (
        <div className="logos lang">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <img src={TypescriptLogo} alt="TypeScript" className="logo typescript" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="Typescript" data-bs-content=""/> 
                    <img src={RubyLogo} alt="Ruby" className="logo ruby" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="Ruby" data-bs-content=""/> 
                    <img src={JavaLogo} alt="Java" className="logo java" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="Java" data-bs-content=""/> 
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <img src={PythonLogo} alt="Python" className="logo python" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="Python" data-bs-content=""/> 
                    <img src={JSLogo} alt="JavaScript" className="logo js" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="JavaScript" data-bs-content=""/> 
                    <img src={CSSLogo} alt="CSS 3" className="logo css" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="CSS 3" data-bs-content=""/> 
                    <img src={HTMLLogo} alt="HTML 5" className="logo html" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" title="HTML 5" data-bs-content=""/> 
                </div>
            </div>
        </div>
    );
}

export default Lang;