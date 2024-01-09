import Navigation from "../../components/navigation/Navigation";
import {useState} from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import Income from "../../components/income/Income";
import Expenses from "../../components/expenses/Expenses";

import './mainPage.css'

export default function MainPage(){
    const [active, setActive] = useState(1);

    const DisplayData = () => {
        switch (active){
            case 1: return <Dashboard />
            case 2: return <Dashboard/>
            case 3: return <Income />
            case 4: return <Expenses />
            default: return <Dashboard/>
        }
    }

    return(
        <div className="dashboardContainer">
            <div className="mainLayout">
                <Navigation active={active} setActive={setActive}/>
                <div className="mainContent">
                    {DisplayData()}
                </div>
            </div>

        </div>
    )
}