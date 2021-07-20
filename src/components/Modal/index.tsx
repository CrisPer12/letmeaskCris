import { ReactNode } from 'react';
import ReactModal from 'react-modal'

type ModalProps = {
    isOpen: boolean;
    handleModalVisible: () => void;    
    children?: ReactNode;
}

export function Modal({isOpen, handleModalVisible,  ...props}: ModalProps){
    
    return(
        <ReactModal
        isOpen={isOpen}
        onRequestClose={handleModalVisible}
        ariaHideApp={false}
        style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(8, 2, 2, 0.404)'
            },
            content : {
                borderRadius: '5px',
                border: 'none',
                background: '#FFF',
                height: '350px',
                width: '600px',
                padding: '0px',
                top: '40%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'          
            }
          }}
        >
            {props.children}
        </ReactModal>
    );           
}