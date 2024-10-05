## Rust

* Compiled Language: Tiene la simplicidad de los lenguajes de alto nivel (Go, Python), pero el control de los lenguajes de bajo nivel (C, Cpp)
    * Web Assembly

* <https://www.youtube.com/watch?v=5C_HPTJg5ek>

* <https://doc.rust-lang.org/book/>

* <https://github.com/rust-unofficial/awesome-rust>


```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustc --version
```

```sh
rustc hello.rs #Compile the Rust program by running the following command

# Run the compiled executable by entering the following command:
#./hello
```

### Web Assembly

Rust is well-suited for WebAssembly (Wasm) development due to its performance, safety, and interoperability with JavaScript. WebAssembly is a binary instruction format for a stack-based virtual machine, designed as a compilation target for high-level programming languages such as Rust, C/C++, and others. It allows running code written in these languages on web browsers at near-native speeds.

Rust's integration with WebAssembly is facilitated by tools like wasm-pack, wasm-bindgen, and cargo-web. Here's how Rust relates to WebAssembly:

    WebAssembly as a Compilation Target: Rust can compile to WebAssembly directly. You can compile Rust code to Wasm using the wasm32-unknown-unknown target.

    Memory Safety: Rust's ownership model and memory safety features are highly compatible with the constraints of WebAssembly, making it a natural fit for writing safe and secure Wasm modules.

    Interoperability: Rust can interact with JavaScript in the browser environment using WebAssembly. Tools like wasm-bindgen facilitate seamless interoperability between Rust and JavaScript by generating bindings that allow Rust functions to be called from JavaScript and vice versa.

    Performance: Rust's performance characteristics make it a compelling choice for WebAssembly development. Rust's low-level control over memory and efficient abstractions enable writing high-performance code suitable for the web environment.

    Tooling: Rust's ecosystem has excellent tooling support for WebAssembly development. Tools like wasm-pack simplify the process of building, testing, and publishing Rust-generated WebAssembly packages.

    Community: Rust has a vibrant and active community that actively contributes to WebAssembly-related projects, libraries, and tools. This community support fosters the growth and adoption of Rust for web development with WebAssembly.

Overall, Rust's features and ecosystem make it a powerful language for writing efficient and secure WebAssembly code, enabling developers to build high-performance web applications with safety guarantees.