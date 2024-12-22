# Portfolio Project

This is the README file for my portfolio project.

## About the .env File

The `.env` file is used to store environment variables that are used by the application. These variables are sensitive and should not be shared publicly. Make sure to add the `.env` file to your `.gitignore` to prevent it from being committed to your repository.

### Environment Variables

The following environment variables are used in this project:

- `API_KEY`: Your API key.
- `API_SECRET`: Your API secret.
- `EMAIL`: Your email address.

Example `.env` file:

```
API_KEY=ygfuyjgjygjyhg
API_SECRET=uyfkfyyfjy
EMAIL='joker@mail.com'

```

Make sure to replace the example values with your actual credentials.
## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/salillakra/portfolio.git
    ```
2. Navigate to the project directory:
    ```sh
    cd portfolio
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Create a `.env` file in the root directory and add your environment variables:
    ```sh
    touch .env
    ```
5. Start the development server:
    ```sh
    npm start
    ```

## Usage

Once the development server is running, you can view the project in your browser at `http://localhost:3000`.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them:
    ```sh
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature/your-feature-name
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.