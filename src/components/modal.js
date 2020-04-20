import React, { Component } from "react";
import "./modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { isModal: false };
  }

  onOpen = () => {
    this.setState(() => {
      return { isModal: true };
    });
  };

  onClose = () => {
    this.setState(() => {
      return { isModal: false };
    });
  };
  render() {
    let showModal = (
      <div className="modal" id="modal">
        <div className="modal__content">
          <button onClick={this.onClose} className="modal-close">
            x
          </button>
          <h2 className="modal-heading">Modal window title goes here</h2>
          <p className="modal-para">
            The modal is centered horizontally and vertically There is a darker
            overlay, so the content below cannot be selected. When the content
            below is scrolled, the overlay is still covering the entire page.
            The modal is centered horizontally and vertically There is a darker
            overlay, so the content below cannot be selected. When the content
            below is scrolled, the overlay is still covering the entire page.
            The modal is centered horizontally and vertically There is a darker
            overlay, so the content below cannot be selected. When the content
            below is scrolled, the overlay is still covering the entire page.
            The modal is centered horizontally and vertically There is a darker
            overlay, so the content below cannot be selected. When the content
            below is scrolled, the overlay is still covering the entire page.
            The modal is centered horizontally and vertically There is a darker
            overlay, so the content below cannot be selected. When the content
            below is scrolled, the overlay is still covering the entire page.
            The modal is centered horizontally and vertically There is a darker
            overlay, so the content below cannot be selected. When the content
            below is scrolled, the overlay is still covering the entire page.
            The modal is centered horizontally and vertically There is a darker
            overlay, so the content below cannot be selected. When the content
            below is scrolled, the overlay is still covering the entire page.
            The modal is centered horizontally and vertically There is a darker
            overlay, so the content below cannot be selected. When the content
            below is scrolled, the overlay is still covering the entire page.
            The modal is centered horizontally and vertically There is a darker
            overlay, so the content below cannot be selected. When the content
            below is scrolled, the overlay is still covering the entire page.
            The modal is centered horizontally and vertically There is a darker
            overlay, so the content below
          </p>

          <footer className="modal-footer">
            <button className="cancel-button">Cancel</button>
            <button className="go-button">Let's go</button>
          </footer>
        </div>
      </div>
    );

    if (this.state.isModal === false) {
      showModal = null;
    }

    return (
      <div>
        <div className="main-text">
          <div className="head-container">
            <button onClick={this.onOpen} className="modal-open">
              Modal Open
            </button>
            <h1 className="text-head">Main text heading</h1>
          </div>
          <p>
            {" "}
            The modal is centered horizontally and vertically There is a darker
            overlay, so the content below cannot be selected. When the content
            below is scrolled, the overlay is still covering the entire page.
            The modal is centered horizontally and vertically There is a darker
            overlay, so the content below cannot be selected. When the content
            below is scrolled, the overlay is still covering the entire page.
            The modal is centered horizontally and vertically There is a darker
            overlay, so the content below cannot be selected. When the content
            below is scrolled, the overlay is still covering the entire page.
            The modal is centered horizontally and vertically There is a darker
            overlay, so the content below cannot be selected. When the content
            below is scrolled, the overlay is still covering the entire page.
            The modal is centered horizontally and vertically There is a darker
            overlay, so the content below cannot be selected. When the content
            below is scrolled, the overlay is still covering the entire page.
            The modal is centered horizontally and vertically There is a darker
            overlay, so the content below cannot be selected. When the content
            below is scrolled, the overlay is still covering the entire page.
          </p>
        </div>
        <div className="modal-container">{showModal}</div>
      </div>
    );
  }
}

export default Modal;
