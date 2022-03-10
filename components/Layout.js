
import React from "react";
import "../styles/main.scss";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions/modalActions";
import Carousel, { Modal, ModalGateway } from "react-images";

const Layout = (props) => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modal);

  return (
    <>
      <div className={"container"}>
        {props.children}
      </div>
      <ModalGateway>
        {modalState.isOpen && (
          <Modal onClose={() => dispatch(actions.closeModal())}>
            <Carousel
              currentIndex={modalState.index}
              views={modalState.photos}
              autoSize={{
                width: 2000,
                height: 500,
              }}
            />
          </Modal>
        )}
      </ModalGateway>
    </>
  );
};

export default Layout;
