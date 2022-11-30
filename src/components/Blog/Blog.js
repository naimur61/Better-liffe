import React from 'react';
import './Blog.css'

const Blog = () => {
   return (
      <div className='blog'>
         <div className=' q-div'>
            <h2>How does react work?</h2>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.
            </p>
         </div>
         <div className=' q-div'>
            <h2>What is difference between props and state?</h2>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
         </div>
         <div className=' q-div'>
            <h2>What kind of work  useEffect without data load ?</h2>
            <p>It runs when the component is mounted and when it is re-rendered while a dependency of the useEffect has changed. This is powerful, but it is easy to omit dependencies and create bugs in your app.</p>
         </div>

      </div>
   );
};

export default Blog;