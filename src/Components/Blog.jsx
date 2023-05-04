import React, { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";

const Blog = () => {
  const pdfRef = useRef();

  const handleDownloadPdf = () => {
    const pdfBlob = pdfRef.current.toBlob();
    saveAs(pdfBlob, "blog.pdf");
  };
  return (
    <div>
      <div style={{ display: "none" }}>
        <Document ref={pdfRef}>
          <Page>
            <View style={styles.container}>
              <Text style={styles.title}>Blog Page</Text>
              <Text style={styles.body}>
                This is a sample PDF document for the Blog page.
              </Text>
            </View>
          </Page>
        </Document>
      </div>
      <div className="mt-28 lg:w-[80%] mx-auto">
        <PDFDownloadLink
          className="flex justify-end"
          document={
            <Document>
              <Page>
                <View style={styles.container}>
                  <Text style={styles.title}>Blog</Text>
                  <Text style={styles.body}>
                    uncontrolled and controlled components
                  </Text>
                  <Text style={styles.body}>
                    A controlled component is a component that is controlled by
                    its parent component through props, while an uncontrolled
                    component is a component that manages its own internal
                    state. In a controlled form input, the parent component sets
                    the value and handles any changes to the value, while in an
                    uncontrolled form input, the input manages its own state and
                    handles any changes to its value. Controlled components
                    offer more precise control over the component's behavior,
                    while uncontrolled components can be more convenient for
                    simple use cases.
                  </Text>
                  <Text style={styles.body}>
                    How to validate React props using PropTypes
                  </Text>
                  <Text style={styles.body}>
                    React provides a utility called PropTypes that allows you to
                    define the expected data types and other validation rules
                    for the props that are passed to a component. To use
                    PropTypes, you need to install the prop-types package using
                    NPM or Yarn: npm install prop-types --save yarn add
                    prop-types Once you have installed prop-types, you can
                    import it in your component file and define the expected
                    prop types using the PropTypes object. Here is an example:
                    {`
                import PropTypes from 'prop-types';

                    function Greeting(props) {
                      return <h1>Hello, {props.name}!</h1>;
                    }
                    
                    Greeting.propTypes = {
                      name: PropTypes.string.isRequired
                    };
                    
                    export default Greeting;
                `}
                    In this example, we're using PropTypes to validate that the
                    name prop passed to the Greeting component is a string and
                    is required. If the name prop is not a string or is not
                    passed at all, PropTypes will log a warning message in the
                    console.
                  </Text>
                  <Text style={styles.body}>
                    Difference between nodejs and express js
                  </Text>
                  <Text style={styles.body}>
                    Node.js is a JavaScript runtime built on the Chrome V8
                    engine that allows developers to run JavaScript code on the
                    server-side. It provides a non-blocking, event-driven I/O
                    model that makes it ideal for building scalable, real-time
                    web applications. Express.js is a popular web application
                    framework built on top of Node.js that provides a set of
                    tools and features to help developers build web applications
                    more quickly and easily. It provides a robust set of HTTP
                    utility methods and middleware that allow developers to
                    create APIs, handle requests and responses, and route
                    requests to specific endpoints.
                  </Text>
                  <Text style={styles.body}>
                    What is a custom hook, and why will you create a custom
                    hook?
                  </Text>
                  <Text style={styles.body}>
                    Custom hooks are functions that allow developers to reuse
                    stateful logic across multiple components in a React
                    application. They are written by the developer and can
                    encapsulate any stateful logic that can be shared between
                    components. Custom hooks can help reduce the amount of code
                    needed to write and make it easier to maintain and update
                    the codebase. Additionally, they can improve the readability
                    and organization of the code, making it easier for
                    developers to understand and modify in the future.
                  </Text>
                </View>
              </Page>
            </Document>
          }
          fileName="blog.pdf"
        >
          {({ loading }) =>
            loading ? (
              <span>Loading PDF...</span>
            ) : (
              <button className="flex gap-2" onClick={handleDownloadPdf}>
                <span>Download Pdf</span>
                <FaDownload />
              </button>
            )
          }
        </PDFDownloadLink>
        <div className="card w-full bg-base-100 shadow-lg mb-8">
          <div className="card-body">
            <h2 className="card-title">
              uncontrolled and controlled components
            </h2>
            <p>
              A controlled component is a component that is controlled by its
              parent component through props, while an uncontrolled component is
              a component that manages its own internal state. In a controlled
              form input, the parent component sets the value and handles any
              changes to the value, while in an uncontrolled form input, the
              input manages its own state and handles any changes to its value.
              Controlled components offer more precise control over the
              component's behavior, while uncontrolled components can be more
              convenient for simple use cases.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-lg mb-8">
          <div className="card-body">
            <h2 className="card-title">
              How to validate React props using PropTypes
            </h2>
            <div>
              React provides a utility called PropTypes that allows you to
              define the expected data types and other validation rules for the
              props that are passed to a component. To use PropTypes, you need
              to install the prop-types package using NPM or Yarn:
              <pre className="overflow-auto whitespace-pre-line">
                <code>
                  {`
                    npm install prop-types --save
                    `}
                </code>
                or
                <code>
                  {`yarn add prop-types
`}
                </code>
              </pre>
              Once you have installed prop-types, you can import it in your
              component file and define the expected prop types using the
              PropTypes object. Here is an example:
            </div>
            <pre className="overflow-auto whitespace-pre-line">
              <code>
                {`
                    import PropTypes from 'prop-types';

                    function Greeting(props) {
                      return <h1>Hello, {props.name}!</h1>;
                    }
                    
                    Greeting.propTypes = {
                      name: PropTypes.string.isRequired
                    };
                    
                    export default Greeting;
                    
                    `}
              </code>
            </pre>
            In this example, we're using PropTypes to validate that the name
            prop passed to the Greeting component is a string and is required.
            If the name prop is not a string or is not passed at all, PropTypes
            will log a warning message in the console.
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-lg mb-8">
          <div className="card-body">
            <h2 className="card-title">
              Difference between nodejs and express js
            </h2>
            <p>
              Node.js is a JavaScript runtime built on the Chrome V8 engine that
              allows developers to run JavaScript code on the server-side. It
              provides a non-blocking, event-driven I/O model that makes it
              ideal for building scalable, real-time web applications.
              Express.js is a popular web application framework built on top of
              Node.js that provides a set of tools and features to help
              developers build web applications more quickly and easily. It
              provides a robust set of HTTP utility methods and middleware that
              allow developers to create APIs, handle requests and responses,
              and route requests to specific endpoints.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-lg mb-8">
          <div className="card-body">
            <h2 className="card-title">
              What is a custom hook, and why will you create a custom hook?
            </h2>
            <p>
              Custom hooks are functions that allow developers to reuse stateful
              logic across multiple components in a React application. They are
              written by the developer and can encapsulate any stateful logic
              that can be shared between components. Custom hooks can help
              reduce the amount of code needed to write and make it easier to
              maintain and update the codebase. Additionally, they can improve
              the readability and organization of the code, making it easier for
              developers to understand and modify in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  body: {
    fontSize: 14,
    textAlign: "justify",
    margin: 20,
  },
});

export default Blog;


