import "./topBar.css"

export default function TopBar(){
    return(
        <div className="topBarContainer">
            <div className="topBarLeft">
                <span className="logo">Financial Tracker</span>
            </div>
            <div className="topBarCenter">
                <div className="topBarCenterLinks">
                    <div className="linksContainer">
                        <div className="topBarLink">How It Works</div>
                    </div>
                    <div className="linksContainer">
                        <div className="topBarLink">What You Get</div>
                    </div>
                    <div className="linksContainer">
                        <div className="topBarLink">The Goodbudget Way</div>
                    </div>
                </div>
            </div>
            <div className="topBarRight">
                <div className="topBarRightLinks">
                    <div className="topBarLink">Pricing</div>
                </div>
                <div className="topBarIcons">
                    <div className="iconContainer" style={{backgroundColor: "black", color: "white"}}>
                        <div className="topBarIcon">Log In</div>
                    </div>
                    <div className="iconContainer">
                        <div className="topBarIcon">Sign In</div>
                    </div>
                </div>
            </div>
        </div>
    )
}