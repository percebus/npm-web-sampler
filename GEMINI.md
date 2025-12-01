# npm-web-sampler Gemini Code Instructions

## Project Overview

This is a comprehensive web development sampler project showcasing DevOps best practices and CI/CD pipelines for a simple static HTML website. The project demonstrates "all the bells and whistles" for modern web development tooling, serving as an educational example of the DevOps overhead needed even for simple projects. The project's philosophy is "DevOps first, functionality second".

## Technology Stack & Tools

- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5, Lodash
- **Build Tools**: Grunt, Parcel bundler
- **Package Managers**: npm, Bower (for git cloning), pip/pipx
- **Testing**: Jest, Jasmine, Testem, Frisby (REST API testing), Playwright, Selenium
- **DevOps**: Docker, Docker Compose, Helm (Kubernetes), MegaLinter
- **CI/CD**: GitHub Actions, semantic-release
- **Linting**: Prettier, StandardX, HTMLLint, and the full MegaLinter suite
- **Security**: Trivy, Gitleaks, Checkov, KICS (via MegaLinter)
- **Languages**: JavaScript (CommonJS), Python, Bash

## Project Architecture

```
npm-web-sampler/
├── src/                   # Source files (HTML, JS, CSS)
├── build/                 # Grunt build output
├── dist/                  # Parcel distribution bundle output
├── test/                  # Test configurations and results
├── __tests__/             # Jest/Playwright/Selenium test files
├── features/              # BDD/Gherkin feature files
├── _scripts/              # Build and utility bash scripts
├── repositories/          # Git submodules/external repos (managed by Bower)
├── helm/                  # Kubernetes deployment configurations
├── assets/                # Static assets, images, and documentation
└── selenium/              # Selenium-specific configurations
```

## Development Guidelines

### Code Style & Standards

- **Indentation**: 2 spaces for HTML/CSS/JS; 4 spaces for Python.
- **HTML**: Follow semantic HTML5 structure.
- **Styling**: Use Bootstrap classes for styling.
- **JavaScript**: Follow CommonJS module format for Node.js files.
- **File Naming**: Use kebab-case for all files and directories.
- **Bash Scripts**: Name scripts with a `.ba.sh` extension.

### Package Management Workflow

This project uses a multi-package manager setup.

1.  **npm**: Manages Node.js dependencies, installing them into `node_modules/`.
2.  **Bower**: Manages frontend dependencies by cloning git repositories into `repositories/` (configured via `.bowerrc`).
3.  **pip**: Manages Python tool dependencies, installing them into the `.venv/` virtual environment.
4.  **pipx**: Used for installing Python executables globally in isolated environments.

### Build & Test Strategy

- **Primary Build**: Grunt is the main build tool, outputting to the `build/` directory.
- **Distribution Bundle**: Parcel is used for creating a production-ready bundle in the `dist/` directory.
- **Testing Layers**: The project employs a multi-layered testing strategy: Unit (Jest) → Integration (Selenium) → E2E (Playwright).
- **Linting**: All code and configurations are linted. Use `npm run lint` for a quick check and `npm run mega-linter` for a comprehensive analysis.

## Important Context for Gemini

### Project Philosophy

This project intentionally demonstrates **DevOps complexity for educational purposes**. Every change should maintain this "all the bells and whistles" approach. The goal is to showcase a wide array of tools and practices, even if it seems like overkill for a simple static site.

### Key Features to Understand

1.  **Multi-Package Manager Setup**: npm, Bower, and pip are used together to manage different types of dependencies.
2.  **Comprehensive Testing**: The project is configured with multiple testing frameworks covering unit, integration, E2E, and cross-browser testing.
3.  **Extensive Linting**: Over 20 different linters are used via MegaLinter to ensure code quality, consistency, and security.
4.  **Container-Ready**: The application is fully configured for Docker, Kubernetes, and Helm deployment.
5.  **Automated Releases**: It uses semantic-release for automated versioning and changelog generation based on commit messages.

## When Making Changes

Before committing any changes, it is crucial to run the verification scripts to ensure that nothing is broken.

1.  **Run Tests**:

    - For unit tests: `npm test`
    - For the full verification suite (build + all tests): `npm run verify`
    - For Docker-based verification: `npm run verify:docker`

2.  **Run Linters**:

    - For a quick linting check: `npm run lint`
    - To auto-fix formatting issues: `npm run format`
    - For a deep security and quality scan: `npm run mega-linter`

3.  **Verify Builds**:
    - To run the standard Grunt build: `npm run build`
    - To create the distribution bundle with Parcel: `npm run dist`

## Key NPM Scripts & Workflows

| Task            | Command                     | Description                                      |
| --------------- | --------------------------- | ------------------------------------------------ |
| **Setup**       | `npm run setup`             | Installs all npm, bower, and pip dependencies    |
| **Development** | `npm start`                 | Starts the Parcel dev server                     |
|                 | `npm run start:docker`      | Starts the full stack with Docker Compose        |
| **Testing**     | `npm test`                  | Runs unit tests only                             |
|                 | `npm run verify`            | Runs the full build and test suite               |
| **Linting**     | `npm run lint`              | Runs a quick check with all linters              |
|                 | `npm run format`            | Auto-fixes formatting with Prettier & StandardX  |
|                 | `npm run mega-linter`       | Runs the full MegaLinter suite for deep analysis |
| **Building**    | `npm run build`             | Builds the project using Grunt to `build/`       |
|                 | `npm run dist`              | Bundles the project using Parcel to `dist/`      |
| **Docker**      | `npm run docker:this:build` | Builds the local Docker image                    |
|                 | `npm run docker:compose:up` | Starts the services with Docker Compose          |
| **Helm**        | `npm run helm:lint`         | Validates the Helm charts                        |

This project serves as a comprehensive example of modern web development practices. Please maintain its educational and demonstrative purpose in all modifications.
