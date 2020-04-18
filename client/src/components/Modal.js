import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import {ModalStyledHook} from './styled';
import styled from 'styled-components'
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline'

const ModalCloseButton = styled(CloseOutline)`
  color: rgb(9, 51, 160);
  float: right;
`;

export const ModalHeader = styled.div`
   text-align: center;
`;

export const ModalBody = styled.div`
   border: 1px;
   padding: 5px;
`;

export const ModalFooter = styled.div`
     text-align: center;
     padding:10px;
`;

export const useModalHook = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    }
};

export const Modal = ({ isShowing, hide , children, title = null}) => {
    if(!isShowing) {
        return null;
    }

    return ReactDOM.createPortal(
        <ModalStyledHook>
                <div className="modal-main">
                    <ModalHeader>
                            <ModalCloseButton size="40" onClick={hide}/>
                            {title && <h2 style={{padding: '10px'}}>{title}</h2>}
                    </ModalHeader>
                    {children ? <ModalBody>{children}</ModalBody> : null}
                </div>
        </ModalStyledHook>, document.body);
};


