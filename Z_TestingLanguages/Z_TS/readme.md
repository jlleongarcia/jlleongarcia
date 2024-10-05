## TS

* <https://github.com/microsoft/TypeScript>



```sh
sudo apt update
sudo apt install nodejs npm

sudo npm install -g typescript
tsc -v

```


Compile js and run it:


```sh

tsc hello.ts
node hello.js
```


TypeScript offers several advantages over JavaScript, particularly in larger and more complex codebases. Some of the key advantages of TypeScript include:

1. **Static Typing**:
   TypeScript introduces static typing to JavaScript, allowing developers to specify types for variables, function parameters, return values, and more. This helps catch type-related errors at compile-time rather than at runtime, leading to fewer bugs and improved code quality. Static typing also enhances code documentation and provides better tooling support, such as code editors offering auto-completion and type checking.

2. **Enhanced Tooling Support**:
   Because TypeScript provides explicit type annotations, code editors and IDEs can offer advanced features such as IntelliSense, code navigation, refactoring tools, and better error checking. This improves developer productivity and makes it easier to work with large codebases.

3. **Readability and Maintainability**:
   TypeScript's static typing improves code readability by making the types of variables and function signatures explicit. This makes the codebase easier to understand and maintain, especially for developers who are new to the project or are collaborating with others.

4. **Early Error Detection**:
   TypeScript's static type system allows for early detection of potential errors during development. Type checking occurs at compile-time, catching many common programming mistakes such as type mismatches, misspelled variable names, or incorrect function calls before running the code. This leads to more robust and reliable software.

5. **Better Code Refactoring**:
   With TypeScript, refactoring code becomes safer and more straightforward. IDEs and tools can accurately analyze the codebase's structure and dependencies, allowing for reliable code refactoring operations such as renaming variables, extracting functions, or restructuring code. Developers can refactor their code with confidence, knowing that the TypeScript compiler will catch any potential errors introduced during the process.

6. **ECMAScript Compatibility**:
   TypeScript is a superset of JavaScript, meaning that all valid JavaScript code is also valid TypeScript code. TypeScript supports all features of the latest ECMAScript specifications and can transpile TypeScript code to different ECMAScript versions, allowing developers to leverage modern JavaScript features while maintaining compatibility with older environments.

Overall, TypeScript offers many benefits for developers working on medium to large-scale projects, including improved type safety, enhanced tooling support, better code readability and maintainability, early error detection, and seamless integration with JavaScript and modern ECMAScript features.