import React, { createContext } from 'react';

const UserContext = createContext({
  local: '',
  updateLocal: () => {},
});

export class UserProvider extends React.Component {
  updateLocal = newLocal => {
    this.setState({ local: newLocal });
  };

  state = {
    local: '',
    updateLocal: this.updateLocal,
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;
