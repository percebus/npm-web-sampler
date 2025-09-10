# npm-web-sampler Copilot Instructions

## Project Overview

This is a comprehensive web development sampler project showcasing DevOps best practices and CI/CD pipelines for a simple static HTML website. The project demonstrates "all the bells and whistles" for modern web development tooling.

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap
- **Build Tools**: Grunt, Parcel bundler
- **Package Managers**: npm, Bower, pip/pipx
- **Testing**: Jest, Jasmine, Testem, Frisby, Playwright
- **DevOps**: Docker, Docker Compose, Helm (Kubernetes), MegaLinter
- **CI/CD**: GitHub Actions, semantic-release
- **Languages**: JavaScript (CommonJS), Python, Bash

## Project Structure Guidelines

- `src/` - Source files (index.html, app/, assets/)
- `build/` - Built/compiled files
- `test/` - Test files and results
- `_scripts/` - Build and utility scripts (bash)
- `repositories/` - Git submodules/external repos
- `helm/` - Kubernetes deployment configs
- `assets/` - Static assets (images, documents, AI tools output)

## Development Guidelines

### Code Style

- Use consistent indentation (2 spaces for HTML/CSS/JS, 4 spaces for Python)
- Follow semantic HTML5 structure
- Use Bootstrap classes for styling
- Maintain comprehensive documentation

### Package Management

- Use npm for JavaScript dependencies
- Use Bower for frontend dependencies (legacy support)
- Use pip/pipx for Python tools
- Always update package.json scripts when adding new tools

### Build Process

- Primary build tool is Grunt
- Parcel is used for bundling
- All builds should output to `build/` directory
- Maintain vendor licensing information

### Testing Strategy

- Unit tests with Jest
- E2E tests with Playwright
- HTML validation with htmllint
- Multiple test runners for comprehensive coverage

### DevOps Practices

- Docker containerization for all environments
- Kubernetes deployment via Helm charts
- Comprehensive linting with MegaLinter
- Automated releases with semantic-release
- GitHub Actions for CI/CD

## File Naming Conventions

- Use kebab-case for directories and files
- Bash scripts: `*.ba.sh`
- Test files: `*.spec.js`, `*.test.js`
- Config files: lowercase with appropriate extensions

## Scripts and Automation

- Prefix npm scripts logically (`npm:`, `pip:`, `bower:`, etc.)
- Use pre/post hooks for setup/cleanup
- Maintain bash scripts in `_scripts/` directory
- Support both development and production environments

## Dependencies Management

- Keep requirements files updated (`requirements.txt`, `requirements.dev.txt`, etc.)
- Freeze pip dependencies to `requirements.frozen.txt`
- Use `--allow-root` for bower in containers
- Install global tools via npm scripts

## Documentation Standards

- Maintain comprehensive README.md
- Include badges for CI/CD status
- Document all available npm scripts
- Keep CHANGELOG.md updated
- Include proper LICENSE and security documentation

## Best Practices

- Always test changes locally before committing
- Use semantic versioning
- Maintain backward compatibility where possible
- Follow the principle of "DevOps first, functionality second"
- Comprehensive error handling in scripts
- Cross-platform compatibility (Windows/Linux/macOS)

## When Contributing

- Follow existing patterns and conventions
- Update documentation for any new features
- Add appropriate tests for new functionality
- Ensure all linters pass
- Update package versions appropriately
- Consider the educational value of changes (this is a sampler project)

## Security Considerations

- Keep dependencies updated
- Use .gitignore for sensitive files
- Follow SECURITY.md guidelines
- Validate all inputs in scripts
- Use environment variables for configuration

This project serves as a comprehensive example of modern web development practices, so all changes should maintain this educational and demonstrative purpose.
