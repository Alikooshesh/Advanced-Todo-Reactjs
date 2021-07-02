import React, {useState} from "react";
import {MdPlaylistAddCheck , MdSearch , MdFilterList , MdModeEdit} from "react-icons/md"
import {Button, FormControl, InputGroup, Modal} from "react-bootstrap";

import './header.css'
import TaskModal from "../tastController/taskController";
import {Iheader} from "../../interfaces";

const Header:React.FC<Iheader> = (props) => {

    const handleClose = () => props.setModalShow(false);
    const handleShow = () => props.setModalShow(true);
    return (
        <header className={"w-100 h-100 d-flex text-light p-2"} style={{backgroundColor:"#673ab7"}}>
            <div className={"w-75 d-flex align-items-center"}>
                <span className={""}><MdPlaylistAddCheck className={"icon"}></MdPlaylistAddCheck></span>
                <h4 className={"mx-2"}>MY To-Do Tasks</h4>
            </div>
            <div className={"w-25 d-flex justify-content-end align-items-center"}>
                <InputGroup className="rounded">
                    <InputGroup.Text><MdSearch></MdSearch></InputGroup.Text>
                    <FormControl id="inlineFormInputGroup" placeholder="Search" />
                </InputGroup>
                <MdFilterList className={"icon rounded-circle p-2 mx-2"}></MdFilterList>
                <MdModeEdit className={"icon rounded-circle p-2 mx-2"} onClick={handleShow}></MdModeEdit>
            </div>

            <TaskModal modalShow={props.modalShow} setModalShow={props.setModalShow} modalType={"add"} taskDate={null}></TaskModal>
        </header>

    )
}

export default Header