import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./sidebar.css";

import SideNav, {
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  render() {
    if(this.props.pacientes !== "1") {
      return (
        <SideNav expanded={this.state.isVisible} className="sidenavbar">
          <SideNav.Toggle
            onClick={() => {
              this.setState({ isVisible: !this.state.isVisible });
            }}
          />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
              </NavIcon>
              <NavText>Pacientes</NavText>
            </NavItem>
            {this.props.pacientes.map(usuario => {
              if(usuario.role === "user") {
                console.log(usuario.name);
                return (
                  <NavItem eventKey="placed orders">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-line-chart"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>{usuario.name}</NavText>
                  </NavItem>
                );
              }
              return null;
            })}
          </SideNav.Nav>
        </SideNav>
      );
    }
  }
}

export default SideNavBar;