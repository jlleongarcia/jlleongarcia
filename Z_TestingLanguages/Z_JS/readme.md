## JS

`and how about javascript? how to install it in ubuntu, check the version, make a hello world and what can i do regarding data analytics with it?`



Node.js is a **JavaScript runtime** that allows you to run JavaScript code outside of a web browser, making it suitable for server-side development, command-line tools, and more.


```sh
sudo apt update
sudo apt install nodejs

#node -v
```

```sh
node hello.js
```

### D&A with JS


* <https://echarts.apache.org/en/index.html>

* <https://plotly.com/javascript/>
* <https://github.com/chartjs/Chart.js>
    * <https://www.chartjs.org/docs/latest/samples/information.html>
* <https://d3js.org/d3-geo/path>

JavaScript is a widely-used programming language that is commonly used for web development, including front-end and back-end development, as well as for data visualization and analytics. Here's how you can get started with JavaScript on Ubuntu:

1. **Install Node.js**:
   Node.js is a JavaScript runtime that allows you to run JavaScript code outside of a web browser, making it suitable for server-side development, command-line tools, and more. You can install Node.js using the following commands:

   ```bash
   sudo apt update
   sudo apt install nodejs
   ```

   This will install both Node.js and npm (Node Package Manager), which is used for managing JavaScript packages.

2. **Check Node.js Version**:
   After installation, you can check the installed version of Node.js using the following command:

   ```bash
   node -v
   ```

   This command will print the installed version of Node.js.

3. **Hello World in JavaScript**:
   You can create a simple "Hello, World!" program in JavaScript by creating a new file with a `.js` extension and adding the following code:

   ```javascript
   console.log("Hello, World!");
   ```

   Save the file (e.g., `hello.js`), and you can run it using Node.js:

   ```bash
   node hello.js
   ```

   This will print "Hello, World!" to the terminal.

4. **Data Analytics with JavaScript**:
   JavaScript is also widely used for data analytics and visualization, especially in web-based environments. Here are some popular libraries and tools for data analytics and visualization with JavaScript:

   - **D3.js (Data-Driven Documents)**: D3.js is a powerful JavaScript library for creating interactive data visualizations in web browsers. It provides a wide range of tools for manipulating data and creating custom visualizations.
   
   - **Chart.js**: Chart.js is a simple and flexible JavaScript charting library for creating responsive and interactive charts and graphs.
   
   - **Plotly.js**: Plotly.js is a JavaScript library for creating interactive and web-based data visualizations. It supports a wide range of chart types and provides advanced features for data exploration and analysis.
   
   - **TensorFlow.js**: TensorFlow.js is a library for training and deploying machine learning models in web browsers and Node.js environments. It allows you to build and train models using JavaScript and run them directly in the browser.
   
   - **Pandas.js**: Pandas.js is a JavaScript library inspired by Python's pandas library. It provides data structures and functions for manipulating and analyzing tabular data in JavaScript.
