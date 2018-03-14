import Link from 'next/link'
import { Component } from "react";
import SearchBar from './SearchBar';
import Typing from 'react-typing-animation';
import Email from './Email';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Jumbotron extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };

    }

    toggle = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() {
        return (

            <div className="jumbotron jumbotron-fluid app-jumbotron" style={{ marginTop: 60 }} >
                <div className="container">
                    <h1 className="display-4">
                        Work Remotely as
                            <Typing>
                            <span className="app-jumbotron-typing">a Software Engineer</span>
                            <Typing.Backspace count={50} delay={2000} />
                            <Typing.Delay ms={500} />
                            <span className="app-jumbotron-typing">an Accountant</span>
                            <Typing.Backspace count={50} delay={2000} />
                            <Typing.Delay ms={500} />
                            <span className="app-jumbotron-typing">a Graphic Designer</span>
                            <Typing.Backspace count={50} delay={2000} />
                            <Typing.Delay ms={500} />
                            <span className="app-jumbotron-typing">an Android Developer</span>
                        </Typing>
                    </h1>
                    <p className="lead">Find your next job by searching through the largest remote listing database on the internet. <br /> Kept up to date every hour.</p>
                    <hr className="my-4" />
                    <p className="lead">
                        <SearchBar term={this.props.searchTerm} onSearch={this.props.onSearch} />
                    </p>
                    <p>
                        <div>
                            <Button color="danger" onClick={this.toggle}>
                                Get Weekly Job Notifications
                            </Button>
                            <Modal isOpen={this.state.isModalOpen} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>Get Weekly Job Notifications</ModalHeader>
                                <ModalBody>
                                    <Email expanded noBackground hideTitle />
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggle}>Close</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </p>
                    {/* <p className="lead">
                        <Email />
                    </p> */}
                    {/* <p className="lead">
                        <PostJob buttonLabel={"Post a job for $249/month"} />
                    </p> */}
                </div>
            </div>
        )
    }
}

export default Jumbotron


