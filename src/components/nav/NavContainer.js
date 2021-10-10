import StoreContext from "../../StoreContext";
import Nav from "./Nav";


const NavContainer = () => {
    return(
        <StoreContext.Consumer>
            {
                (store) => 
                {
                    let state = store.getState();
// debugger;
                    return (
                        <Nav 
                        
                        friends={state.sidebarTopFriends.friends}
                        />
                        // <Nav text={state.profilePage.textareaText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default NavContainer;