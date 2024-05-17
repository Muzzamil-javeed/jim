import React from "react";
import mitchadam from "../../assets/images/mitchadam.png";
import "./mitchadam.scss";
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

const MitchAdam = () => {
    return (
        <div className="mitchadam-wrapper">
            <div className="containerfluid">
                <div className="row">
                    <div className="col-lg-5">
                        <div>
                            <div className="accor">
                                <h6>DNAlien 2 - The Hunt For Gene</h6>
                                <h4>Experience First Page <br /> <span>For Free</span></h4>
                            </div>
                            <Accordion defaultActiveKey="0">

                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>CHAPTER 01</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>CHAPTER 02</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>CHAPTER 03</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="mitchadam-img">
                            <img src={mitchadam} alt="mitchadam" className="float" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MitchAdam;
