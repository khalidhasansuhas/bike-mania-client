import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="divide-y divide-gray-700">
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">What are the different ways to manage a state in a React application?</h3>
                        <p className="md:pl-0 md:col-span-7">There are four main types of state you need to properly manage in your React apps:<br/>

                            Local state<br/>
                            Global state<br/>
                            Server state<br/>
                            URL state</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">How does prototypical inheritance work?</h3>
                        <p className="md:pl-0 md:col-span-7">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">What is a unit test? Why should we write unit tests?</h3>
                        <p className="md:pl-0 md:col-span-7">unit test: <br />
                        Unit Testing is a testing method that tests an individual unit of software in isolation. Unit testing for React Apps means testing an individual React Component. Unit Testing is important for React Apps, as it helps in testing the individual functionality of React components. <br />
                        Reason of using unit test: <br />
                        Unit testing for React Apps means testing an individual React Component. Unit Testing is important for React Apps, as it helps in testing the individual functionality of React components. Moreover, any error in code can be identified at the beginning itself, saving time to rectify it at later stages.
                        </p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">React vs. Angular vs. Vue?</h3>
                        <p className="md:pl-0 md:col-span-7"> Angular JS and React JS frameworks are used to create web interfaces for front end development. Angular is Google's matured and advanced JavaScript framework based on TypeScript, whereas Vue is a progressive open-source front-end JavaScript framework created by Evan You</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;