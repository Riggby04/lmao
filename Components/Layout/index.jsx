import React, { Component } from "react";
import Header from "./header";
import Footer from "./Footer";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (

      <React.Fragment>
          <Header />
          <main >
          {children}
            <Footer />
          </main>

       </React.Fragment>
    
    );
  }
}

export default Layout;
