import React from "react";

const Blog = () => {
  return (
    <div className="grid gap-3 p-2 my-12 md:w-[80%] mx-auto">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            differences between uncontrolled and controlled components
          </h2>
          <p>
            A controlled component is a component that is controlled by its
            parent component through props, while an uncontrolled component is a
            component that manages its own internal state. In a controlled form
            input, the parent component sets the value and handles any changes
            to the value, while in an uncontrolled form input, the input manages
            its own state and handles any changes to its value. Controlled
            components offer more precise control over the component's behavior,
            while uncontrolled components can be more convenient for simple use
            cases.
          </p>
        </div>
      </div>
      
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
          validate React props using PropTypes
          </h2>
          <p>
            To validate React props using PropTypes, you can use the prop-types
            library that comes with React. Here's an example of how to use
            PropTypes to validate a component's props:
            <pre className="bg-gray-100 p-4 rounded-lg overflow-auto whitespace-pre-line">
              <code className="">
                {`
           import PropTypes from 'prop-types';

           function MyComponent(props) {
             // Use the props here
           }
           
           MyComponent.propTypes = {
             name: PropTypes.string.isRequired,
             age: PropTypes.number,
             email: PropTypes.string,
             isActive: PropTypes.bool.isRequired,
             onClick: PropTypes.func,
           };
           
          `}
              </code>
            </pre>
            In this example, we're validating the name prop as a required
            string, age as an optional number, email as an optional string,
            isActive as a required boolean, and onClick as an optional function.
            PropTypes provides a range of validators for different data types
            such as string, number, boolean, array, object, and more. You can
            also define custom validators using PropTypes. If a prop fails
            validation, React will log a warning in the console. This helps
            catch bugs early and makes it easier to maintain and debug code.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
          Difference between nodejs and express js
          </h2>
          <p>
          Node.js is a JavaScript runtime built on the Chrome V8 engine that allows developers to run JavaScript code on the server-side. It provides a non-blocking, event-driven I/O model that makes it ideal for building scalable, real-time web applications. Express.js is a popular web application framework built on top of Node.js that provides a set of tools and features to help developers build web applications more quickly and easily. It provides a robust set of HTTP utility methods and middleware that allow developers to create APIs, handle requests and responses, and route requests to specific endpoints.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
          What is a custom hook, and why will we create a custom hook?
          </h2>
          <p>
          Custom hooks are functions that allow developers to reuse stateful logic across multiple components in a React application. They are written by the developer and can encapsulate any stateful logic that can be shared between components. Custom hooks can help reduce the amount of code needed to write and make it easier to maintain and update the codebase. Additionally, they can improve the readability and organization of the code, making it easier for developers to understand and modify in the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
