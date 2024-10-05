## WASM


```sh
emcc -o hello.js hello.c
node hello.js
```

### Containerd-wasm-shim

To run wasm inside docker:

```sh
sudo apt-get install ./docker-desktop-4.27.2-amd64.deb
#settings -> features in development -> Enable WASM
```

Now instead of compiling the html or js app, we will just compile the .wasm module:

```sh
emcc -o hello.wasm hello.c

#ll hello.wasm
#file hello.wasm
```

```sh
cat DockerfileWasm
```

```Dockerfile
FROM scratch

COPY helloworld.wasm /helloworld.wasm
ENTRYPOINT [ "/helloworld.wasm" ]
```

```sh
docker buildx build --platform wasi/wasm -t fossengineer/helloworld-wasm -f DockerfileWasm .
#docker image ls | head
docker run --platform wasi/wasm --runtime io.containerd.wasmedge.v1 fossengineer/helloworld-wasm
```

### Info

Getting started with WebAssembly (Wasm) involves learning about its concepts, tools, and use cases. Here's a brief guide to help you get started:

1. **Learn about WebAssembly**: Understand what WebAssembly is, its purpose, and how it works. WebAssembly is a binary instruction format for a stack-based virtual machine, designed to be a portable compilation target for high-level languages like C/C++, Rust, and others.

2. **Choose a Language**: Decide which programming language you want to use for WebAssembly development. Rust, C/C++, and AssemblyScript (a subset of TypeScript) are popular choices due to their compatibility and tooling support for WebAssembly.

3. **Set Up Your Development Environment**:
   - For Rust: Install Rust and `wasm-pack`, which is a tool for building, testing, and publishing Rust-generated WebAssembly projects.
   - For C/C++: Use tools like Emscripten or LLVM to compile C/C++ code to WebAssembly.
   - For AssemblyScript: Install Node.js and the AssemblyScript compiler.

4. **Write and Compile WebAssembly Code**: Write your code in the chosen language and compile it to WebAssembly. This step will depend on the specific tools and workflows associated with your chosen language.

5. **Integrate with JavaScript**: WebAssembly modules can interact with JavaScript code in the browser environment. You can use JavaScript to load, instantiate, and call functions in WebAssembly modules.

6. **Test and Deploy**: Test your WebAssembly code to ensure it behaves as expected, and then deploy it to your web application. Make sure to consider performance and compatibility across different web browsers.

As for running Python scripts in a browser, it's not straightforward to execute Python code directly in a web browser environment. However, there are several approaches you can take:

- **Compile Python to WebAssembly**: Tools like `Pyodide and PyPy.js` allow you to compile Python code to WebAssembly, enabling you to run Python code in a browser environment. However, not all Python features may be fully supported.

- **Use WebAssembly for Performance-Intensive Tasks**: You can use WebAssembly for performance-critical parts of your web application and interact with Python code running on the server-side through AJAX requests or WebSockets.

- **Transpile Python to JavaScript**: There are tools like `Brython and Skulpt` that transpile Python code to JavaScript, allowing you to run Python code directly in the browser.

Each approach has its trade-offs in terms of performance, compatibility, and ease of use, so choose the one that best fits your requirements and constraints.