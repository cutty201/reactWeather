var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This is a simple weather application build on React. I am using the OpenWeatherMap API to fetch the weather information.
      </p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li><a href="https://facebook.github.io/react/index.html" target="_blank">React</a></li>
      </ul>
      <ul>
        <li><a href="http://foundation.zurb.com/" target="_blank">Foundation</a></li>
      </ul>
    </div>
  );
};

module.exports = About;
