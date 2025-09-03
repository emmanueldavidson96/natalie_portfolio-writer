import "./Nav.css"
import { RxHamburgerMenu } from "react-icons/rx";


export default function Nav (){
    return (
        <header className="">
            <div className="navigation-area">
                <h2 className="logo">Natalie | Writer</h2>
                
                <RxHamburgerMenu
                    color="#fff"
                    size={30}
                    cursor={"pointer"}                    
                />
            </div>
        </header>
    )
}