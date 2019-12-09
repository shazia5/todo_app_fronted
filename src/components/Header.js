import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <h1>
                <header className="navbar">My to do List...
                <i className="fas fa-heart"></i>
                </header>
                <img
                    src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_100,q_50,w_400/v1/clients/anchorage/highway-deyoung-state_edited_a6dbb76b-6b90-43ca-add5-6464ba6e9536.jpg"
                    alt="scenic view " />
            </h1>

        );
    }
}

export default Header;