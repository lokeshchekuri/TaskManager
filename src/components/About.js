import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <h1>About Task Manager App</h1>
            <p>
                Welcome to the Task Manager App, your ultimate tool for managing tasks efficiently and effectively. Whether you're managing personal tasks, work projects, or anything in between, our app is designed to help you stay organized and productive.
            </p>
            <h2>Features</h2>
            <ul>
                <li>Add, edit, and delete tasks with ease.</li>
                <li>Organize tasks by categories.</li>
                <li>Set priorities and deadlines for each task.</li>
                <li>Search and filter tasks to find what you need quickly.</li>
                <li>Responsive design for use on both desktop and mobile devices.</li>
            </ul>
            <h2>Getting Started</h2>
            <p>
                To get started, simply add your tasks using the "Add Task" feature. You can view and manage all your tasks from the "Show Tasks" page. For more information about the app and its features, feel free to explore the "About Us" page.
            </p>
            <h2>Contact Us</h2>
            <p>
                If you have any questions, feedback, or need support, please reach out to us via the "Contact Us" page. We're here to help you make the most out of the Task Manager App.
            </p>
        </div>
    );
};

export default About;
