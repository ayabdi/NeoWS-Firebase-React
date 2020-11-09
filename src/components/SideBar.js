import React from "react";
import SideNav, {
//   Toggle,
//   Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "./css/Main.scss";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { auth, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


const SideBar = ({ count, setCount }) => {
  const [user] = useAuthState(auth);

  const tabs = ["View All ", "View By ID", "View by Date"];
  if (user) {
    tabs.push("Favourites");
  }
  return (
    <div>
      <SideNav
        expanded
        style={{ background: "#082137", position: 'fixed'}}
      >
        <SideNav.Nav defaultSelected="home" style={{ marginTop: "30px" }}>
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          {!user ? (
            <NavItem eventKey="signin" onSelect={signInWithGoogle}>
              <NavIcon>
                <i className="fa fa-sign-in" style={{ fontSize: "1.75em" }} />
              </NavIcon>
              <NavText>Login</NavText>
            </NavItem>
          ) : (
            <NavItem eventKey="signout" onSelect={() => auth.signOut()}>
              <NavIcon>
                <i className="fa fa-sign-out" style={{ fontSize: "1.75em" }} />
              </NavIcon>
              <NavText>LogOut</NavText>
            </NavItem>
          )}
          <NavItem eventKey="view" expanded>
            <NavIcon>
              <i className="fa fa-list" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>View</NavText>

            {tabs.map((tab, i) => (
              <NavItem
                eventKey={count === i + 1 ? `view/${tab}` : ""}
                active={count !== i + 1 ? false : true}
                onSelect={() => {
                  setCount(i + 1);
                }}
              >
                <NavText>{tab}</NavText>
              </NavItem>
            ))}
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
};

export default SideBar;
