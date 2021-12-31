import React, { Component } from "react";
import emailjs from "emailjs-com";

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            phone: "",
            message: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    sendEmail(e) {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_3myfe3r",
                "template_6gjsuwg",
                e.target,
                "user_TLDsKWgP19sMDfuk1Efne"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
            this.resetForm()
    }
    resetForm(){
        this.setState({
            username: "",
            email: "",
            phone: "",
            message: "",
        })
    }
    render() {
        return (
            <div className="grid bg-emerald-700  w-1/2  space-y-5  py-4 mx-auto">
                <h1 className="font-primary mx-auto w-5/6 text-3xl font-bold text-white ">
                    {" "}
                    Contact Us
                </h1>
                <form onSubmit={this.sendEmail} className="space-y-5 flex flex-col ">
                    <input
                        className="formInput"
                        type="text"
                        value={this.state.username}
                        placeholder="Username"
                        name="username"
                        onChange={this.handleChange}
                    />

                    <input
                        className="formInput"
                        type="email"
                        value={this.state.email}
                        placeholder="E-mail"
                        name="email"
                        onChange={this.handleChange}
                    />

                    <input
                        className="formInput"
                        type="tel"
                        value={this.state.phone}
                        placeholder="Phone"
                        name="phone"
                        onChange={this.handleChange}
                    />

                    <textarea
                        className="textAreaInput"
                        value={this.state.message}
                        placeholder="Message"
                        name="message"
                        onChange={this.handleChange}
                    ></textarea>

                    <input
                        className=" cursor-pointer rounded-full p-2 border-white border-2  text-emerald-700 border-solid bg-white text-sm px-5  w-32 font-secondary mx-auto "
                        type="submit"
                        value="Send"
                    />
                </form>
            </div>
        );
    }
}
