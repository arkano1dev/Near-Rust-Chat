# Near-Rust-Chat

My assignment within the Near bootcamp at Encode Club. With This code enables you to exchange messages with other participants using a contract on the Near network. To begin, make sure you have the following dependencies listed in the *cargo.toml*  file:

[dependencies]

- near-sdk = "4.1.1"

- near-sdk-contract-tools = "1.0.1"


## Installation 

Make sure you have the following versions of Rust and Cargo:

- cargo 1.71.1
- rustc 1.71.1 (eb26296b5 2023-08-03)

Install the required packages and tools:

```
cargo add near-sdk
cargo add near-sdk near-sdk-contract-tools
cargo install --git https://github.com/near/bos-loader
cargo install --git https://github.com/FroVolod/bos-cli-rs 
```

## Usage

- Visit https://near.org/flags and enable the BOS loader URL: "http://127.0.0.1:3030".
- Navigate to the project directory in the terminal.
- Run the following command:

``bos-loader <YourNEARaccount> --path .\src``   


![image](https://github.com/arkanoeth/Near-Rust-Chat/assets/62271657/3c90e0ac-6f17-45d0-ad97-cd8b87d49afe)

