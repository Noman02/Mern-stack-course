import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="text-3xl text-blue-600 text-center m-6">
        Frequently Asked Questions
      </h2>
      <div className="border-solid border-2 border-blue-600 m-6 p-6 rounded">
        <h2 className="font-semibold my-3 text-xl">What is cors?</h2>
        <p>
          CORS <span className="text-bold">Cross-Origin Resource Sharing </span>{" "}
          is an HTTP-header based mechanism that allows a server to indicate any
          origins domain, scheme, or port other than its own from which a
          browser should permit loading resources. CORS also relies on a
          mechanism by which browsers make a "preflight" request to the server
          hosting the cross-origin resource, in order to check that the server
          will permit the actual request. In that preflight, the browser sends
          headers that indicate the HTTP method and headers that will be used in
          the actual request.
        </p>
      </div>
      <div className="border-solid border-2 border-blue-600 m-6 p-6 rounded">
        <h2 className="font-semibold my-3 text-xl">Why we use firebase?</h2>
        <p>
          Google Firebase is an application development platform that allows
          developers to create iOS, Android, and Web apps. Here's why you should
          use it! Google Firebase offers many features that pitch it as the
          go-to backend development tool for web and mobile apps. It reduces
          development workload and time. And it's a perfect prototyping tool.
          Firebase is simple, lightweight, friendly, and industrially
          recognized. Tired of writing boring code for your backend, or can't
          even write it at all? Try Google Firebase. So what's Google Firebase,
          and why should you build your app around it?
        </p>
      </div>
      <div className="border-solid border-2 border-blue-600 m-6 p-6 rounded">
        <h2 className="font-semibold my-3 text-xl">
          How does private route works?
        </h2>
        <p>
          The react private route component renders child components ( children
          ) if the user is logged in. If not logged in the user is redirected to
          the /login page with the return url passed in the location state
          property
        </p>
      </div>
      <div className="border-solid border-2 border-blue-600 m-6 p-6 rounded">
        <h2 className="font-semibold my-3 text-xl">
          What is node? How does node work?
        </h2>
        <p>
          It is a used as backend service where javascript works on the
          server-side of the application. This way javascript is used on both
          frontend and backend. Node. js runs on chrome v8 engine which converts
          javascript code into machine code, it is highly scalable, lightweight,
          fast, and data-intensive.
        </p>
      </div>
    </div>
  );
};

export default Blog;
