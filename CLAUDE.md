# npm-web-sampler Claude Code Instructions

## Project Overview

This is a comprehensive web development sampler project showcasing DevOps best practices and CI/CD pipelines for a simple static HTML website. The project demonstrates "all the bells and whistles" for modern web development tooling without the actual Christmas tree - serving as an educational example of the DevOps overhead needed even for simple projects.

## Technology Stack & Tools

- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5, Lodash
- **Build Tools**: Grunt, Parcel bundler
- **Package Managers**: npm, Bower (deprecated but used for git cloning), pip/pipx
- **Testing**: Jest, Jasmine, Testem, Frisby (REST API testing), Playwright, Selenium
- **DevOps**: Docker, Docker Compose, Helm (Kubernetes), MegaLinter
- **CI/CD**: GitHub Actions, semantic-release
- **Linting**: Prettier, StandardX, HTMLLint, MegaLinter suite
- **Security**: Trivy, Gitleaks, Checkov, KICS, and more via MegaLinter

## Project Architecture

```
npm-web-sampler/
├── src/                   # Source files (HTML, JS, CSS)
├── build/                 # Built/compiled output
├── dist/                  # Distribution files (Parcel output)
├── test/                  # Test configurations and results
├── __tests__/             # Jest test files
├── features/              # BDD/Gherkin feature files
├── _scripts/              # Build and utility bash scripts
├── repositories/          # Git submodules/external repos (Bower)
├── helm/                  # Kubernetes deployment configs
├── assets/                # Static assets and documentation
└── selenium/              # Selenium test configurations
```

## Key NPM Scripts & Workflows

### Development Commands

- `npm run setup` - Full project setup (all package managers)
- `npm run dev` - Development workflow (style + test)
- `npm test` - Run unit tests
- `npm run build` - Build project + generate licenses
- `npm run dist` - Create distribution bundle
- `npm run verify` - Full verification (test + dist)

### Testing Commands

- `npm run jest:ci:unit` - Unit tests with Jest
- `npm run jest:playwright` - E2E Integration tests with Playwright
- `npm run jest:selenium` - E2E Integration tests with Selenium
- `npm run testem:ci` - Cross-browser testing

### Quality Assurance

- `npm run lint` - Run all linters
- `npm run style` - Auto-fix formatting
- `npm run mega-linter` - Comprehensive linting suite
- `npm run prettier:check` - Check code formatting
- `npm run standardx:check` - JavaScript linting

### Docker & Deployment

- `npm run docker:this:build` - Build Docker image
- `npm run docker:compose:up` - Start with Docker Compose
- `npm run helm:lint` - Validate Helm charts

## Development Guidelines

### Code Style & Standards

- Use 2 spaces for indentation (HTML/CSS/JS)
- Use 4 spaces for Python files
- Follow semantic HTML5 structure
- Use Bootstrap classes for styling
- Follow CommonJS module format for Node.js files
- Use kebab-case for files and directories

### Package Management Workflow

1. **npm**: Node.js dependencies → `node_modules/`
2. **Bower**: Git repositories → `repositories/` (via `.bowerrc`)
3. **pip**: Python tools → `.venv/`
4. **pipx**: Python executables globally

### Build & Test Strategy

- Primary build: Grunt → `build/`
- Bundle distribution: Parcel → `dist/`
- Test multiple layers: Unit → Integration → E2E
- Lint everything: Code, HTML, Docker, Helm, Security

### File Conventions

- Bash scripts: `*.ba.sh`
- Jest tests: `*.spec.js`
- Requirements: `requirements.*.txt`
- Environment: `.env.*` files
- Config files: lowercase with extensions

## Important Context for Claude Code

### Project Philosophy

This project intentionally demonstrates **DevOps complexity for educational purposes**. Every change should maintain this "all the bells and whistles" approach while being practical and functional.

### Key Features to Understand

1. **Multi-Package Manager Setup**: npm + bower + pip working together
2. **Comprehensive Testing**: Unit, Integration, E2E, and Cross-browser
3. **Extensive Linting**: 20+ different linters via MegaLinter
4. **Container-Ready**: Docker, Kubernetes, and Helm deployment
5. **Automated Releases**: Semantic versioning and changelog generation

### When Making Changes

1. **Test Commands**: Always run the appropriate test suite after changes

   - Unit tests: `npm test`
   - Full verification: `npm run verify`
   - Docker verification: `npm run verify:docker`

2. **Linting Commands**: Ensure code quality

   - Quick lint: `npm run lint`
   - Full linting: `npm run mega-linter`
   - Auto-fix: `npm run style`

3. **Build Commands**: Verify builds work
   - Standard build: `npm run build`
   - Distribution: `npm run dist`

### Common Tasks & Their Commands

| Task                 | Command                | Notes                              |
| -------------------- | ---------------------- | ---------------------------------- |
| Install dependencies | `npm run setup`        | Installs npm, bower, and pip deps  |
| Run tests            | `npm test`             | Unit tests only                    |
| Full test suite      | `npm run verify`       | all tests + dist                   |
| Fix formatting       | `npm run style`        | all linters (except `mega-linter`) |
| Check all linting    | `npm run lint`         | Fast linting check                 |
| Deep security scan   | `npm run mega-linter`  | Full MegaLinter suite              |
| Build for production | `npm run dist`         | Creates `dist/` folder             |
| Start development    | `npm start`            | Parcel dev server                  |
| Docker development   | `npm run start:docker` | Full Docker Compose stack          |

### Environment Setup

- Copy `.env.*.local.example` files to `.env.*.local`
- Copy `env/*.src.sh.example` to `env/*.src.sh` for CLI tools
- Run `npm run husky:install` for git hooks

### Security & Best Practices

- Never commit secrets (extensive `.gitignore` configured)
- Use environment variables for configuration
- Follow semantic versioning for releases
- Maintain comprehensive documentation
- Test cross-platform compatibility

This project serves as a comprehensive example of modern web development practices, so maintain its educational and demonstrative purpose in all modifications.
