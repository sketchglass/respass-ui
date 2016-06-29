import * as React from "react";
import * as ReactDOM from "react-dom";

interface ThreadProps {

}

class Thread extends React.Component<ThreadProps, {}> {
  render() {
    return (
      <div>
        hoge
      </div>
    );
  }
}

window.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Thread></Thread>, document.getElementById("app"));
});
