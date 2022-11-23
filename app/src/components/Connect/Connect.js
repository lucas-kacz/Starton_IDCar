import Login from "../Login/Login";
import Partner from "../Partner/Partner";
import Client from "../Client/Client";
import Garage from "../Garage/Garage";

function Connect() {

    function refreshPage() {
        window.location.reload(false);
      }
      
    function init() {
        document.getElementById("c-left").style.width = "calc(100%/3)";
        document.getElementById("c-center").style.width = "calc(100%/3)";
        document.getElementById("c-right").style.width = "calc(100%/3)";
        document.getElementById("flex").style.width = "100%";
        document.getElementById("flex").style.marginLeft = "0%";
    }

    return (
        <div>
            <div className="big-div">
                <Login />
            </div>
            <div className="div space"></div>
            <div className="div space"></div>
            <div id="flex" className="notel">
                <h2 id="partner">Partner Space</h2>
                <h2 id="client">Customer Space</h2>
                <h2 id="garage">Mechanic Space</h2>
            </div>
            <div className="cartes">
                <div className="carte" id="c-left">
                    <Partner />
                </div>
                <div className="carte" id="c-center">
                    <Client />
                </div>
                <div className="carte" id="c-right">
                    <Garage />
                </div>
            </div>
            <div className="div space">
                <button className="button large" onClick={refreshPage}>Changer d'espace</button>
            </div>
        </div>
    );
};

export default Connect;