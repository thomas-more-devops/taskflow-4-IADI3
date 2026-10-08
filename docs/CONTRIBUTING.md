# Contributing to TaskFlow

> Thank you for your interest in contributing to TaskFlow! This guide will help you get started with contributing to our task management application.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Community](#community)

## 📖 Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. We are committed to providing a welcoming and inclusive environment for all contributors.

### Our Standards

**Positive behaviors include:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behaviors include:**
- The use of sexualized language or imagery
- Personal attacks or derogatory comments
- Public or private harassment
- Publishing others' private information without permission
- Other conduct which could reasonably be considered inappropriate

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:
- **Git** installed and configured
- A **GitHub account**
- A modern **web browser** for testing
- **Basic knowledge** of HTML, CSS, and JavaScript

### First Contribution

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/taskflow.git
   cd taskflow
   ```
3. **Set up upstream remote**:
   ```bash
   git remote add upstream https://github.com/original-owner/taskflow.git
   ```
4. **Create a branch** for your contribution:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 💻 Development Setup

### Local Development Environment

1. **Open the project** in your preferred editor:
   ```bash
   code taskflow  # VS Code
   # OR open in any text editor
   ```

2. **Start a local server** (optional):
   ```bash
   # Using VS Code Live Server extension
   # Right-click index.html → "Open with Live Server"
   
   # OR using Python
   python -m http.server 8000
   
   # OR using Node.js
   npx serve .
   ```

3. **Open in browser**:
   - Direct: Open `index.html` in your browser
   - Server: Visit `http://localhost:8000`

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "ritwickdey.liveserver",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

## 🤝 How to Contribute

### Types of Contributions

We welcome various types of contributions:

#### 🐛 Bug Reports
- Use the bug report template
- Include steps to reproduce
- Provide browser and OS information
- Add screenshots if applicable

#### ✨ Feature Requests  
- Use the feature request template
- Explain the problem it solves
- Describe the proposed solution
- Consider alternatives

#### 📚 Documentation
- Fix typos or unclear explanations
- Add examples or tutorials
- Improve API documentation
- Translate content

#### 🎨 Design Improvements
- UI/UX enhancements
- Accessibility improvements
- Mobile responsiveness
- Animation refinements

#### 🔧 Code Contributions
- Bug fixes
- New features
- Performance improvements
- Refactoring

### Contribution Workflow

1. **Check existing issues** to avoid duplicates
2. **Create an issue** to discuss major changes
3. **Fork and clone** the repository
4. **Create a feature branch** from main
5. **Make your changes** following coding standards
6. **Test thoroughly** across browsers
7. **Commit** with conventional commit messages
8. **Push** to your fork
9. **Create a Pull Request** using the template
10. **Respond to feedback** during review

## 📝 Coding Standards

### HTML Guidelines

#### Structure and Semantics
```html
<!-- ✅ Good: Semantic HTML -->
<article class="task-item">
  <h3 class="task-title">Task Title</h3>
  <p class="task-description">Task description</p>
  <button type="button" class="btn btn-primary">Action</button>
</article>

<!-- ❌ Bad: Non-semantic -->
<div class="task-item">
  <div class="task-title">Task Title</div>
  <div class="task-description">Task description</div>
  <div class="btn btn-primary" onclick="doSomething()">Action</div>
</div>
```

#### Accessibility Requirements
- Use semantic HTML elements
- Include ARIA labels where needed
- Ensure proper heading hierarchy
- Provide alt text for images
- Support keyboard navigation

### CSS Guidelines

#### Organization
```css
/* ✅ Good: Organized CSS */
/* ==========================================================================
   Component: Task Item
   ========================================================================== */

.task-item {
  /* Layout properties */
  display: flex;
  align-items: center;
  
  /* Box model */
  padding: 1rem;
  margin-bottom: 0.5rem;
  
  /* Visual properties */
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  
  /* Interactive properties */
  transition: all 0.3s ease;
}

.task-item:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

#### Naming Conventions
- Use **BEM methodology**: `.component__element--modifier`
- Use **kebab-case** for class names
- Use **semantic names** that describe purpose, not appearance

```css
/* ✅ Good */
.task-item__title--completed { }
.button--primary { }
.form__input--error { }

/* ❌ Bad */
.red-text { }
.big-button { }
.left-box { }
```

#### Responsive Design
```css
/* Mobile-first approach */
.container {
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
```

### JavaScript Guidelines

#### ES6+ Modern Syntax
```javascript
// ✅ Good: Modern JavaScript
class TaskManager {
  constructor(options = {}) {
    this.tasks = [];
    this.options = { ...this.defaultOptions, ...options };
  }
  
  addTask(text) {
    if (!this.validateTask(text)) {
      throw new Error('Invalid task text');
    }
    
    const newTask = {
      id: this.generateId(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    this.tasks = [...this.tasks, newTask];
    this.saveToStorage();
    this.render();
  }
  
  // Use arrow functions for methods that don't need 'this' context
  validateTask = (text) => {
    return text && typeof text === 'string' && text.trim().length > 0;
  }
}
```

#### Error Handling
```javascript
// ✅ Good: Comprehensive error handling
async function saveTask(task) {
  try {
    validateTask(task);
    await persistToStorage(task);
    showSuccessMessage('Task saved successfully');
  } catch (error) {
    console.error('Failed to save task:', error);
    showErrorMessage('Failed to save task. Please try again.');
    // Don't throw in UI event handlers
  }
}

// ✅ Good: Input validation
function validateTask(task) {
  if (!task) {
    throw new Error('Task is required');
  }
  
  if (typeof task.text !== 'string' || task.text.trim().length === 0) {
    throw new Error('Task text must be a non-empty string');
  }
  
  if (task.text.length > 500) {
    throw new Error('Task text must be less than 500 characters');
  }
}
```

#### DOM Manipulation
```javascript
// ✅ Good: Safe DOM manipulation
function renderTask(task) {
  const taskElement = document.createElement('div');
  taskElement.className = 'task-item';
  taskElement.setAttribute('data-task-id', task.id);
  
  // Use textContent for user data to prevent XSS
  const titleElement = document.createElement('h3');
  titleElement.textContent = task.text;
  titleElement.className = 'task-item__title';
  
  taskElement.appendChild(titleElement);
  return taskElement;
}

// ❌ Bad: XSS vulnerable
function renderTaskBad(task) {
  return `<div class="task-item">${task.text}</div>`;
}
```

### File Organization

```
taskflow/
├── index.html              # Entry point
├── styles/
│   └── main.css           # All styles (organized by components)
├── scripts/
│   └── app.js             # Main application logic
├── docs/                  # Documentation
├── .github/              # GitHub templates
└── assets/               # Images, icons (if needed)
```

## 📨 Commit Guidelines

### Commit Message Format

We use [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Types
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools

#### Examples
```bash
# ✅ Good commit messages
git commit -m "feat: add task priority levels"
git commit -m "fix: resolve localStorage data corruption on Safari"
git commit -m "docs: update API documentation for task creation"
git commit -m "style: improve mobile responsiveness for task list"
git commit -m "refactor: extract task validation into separate method"

# ❌ Bad commit messages
git commit -m "fixed stuff"
git commit -m "update"
git commit -m "changes"
```

#### Detailed Commit Example
```
feat(tasks): add task priority levels

Allow users to assign priority levels (High, Medium, Low) to tasks.
Tasks are now sorted by priority in the task list.

- Add priority field to task model
- Update task creation form with priority selector
- Implement priority-based sorting algorithm
- Add priority indicators in task list UI

Closes #123
```

## 🔍 Pull Request Process

### Before Creating a Pull Request

1. **Sync your fork** with upstream:
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Rebase your feature branch**:
   ```bash
   git checkout feature/your-feature
   git rebase main
   ```

3. **Test thoroughly**:
   - [ ] Test in multiple browsers
   - [ ] Test on mobile devices
   - [ ] Verify accessibility
   - [ ] Check for console errors

4. **Run quality checks**:
   - [ ] Code follows style guidelines
   - [ ] All tests pass (if applicable)
   - [ ] Documentation is updated
   - [ ] No linting errors

### Pull Request Template

When creating a PR, use our template and ensure you:

- **Provide clear description** of changes
- **Reference related issues** using keywords
- **Include screenshots** for UI changes  
- **List testing steps** you performed
- **Check all applicable boxes** in the template

### Review Process

1. **Automated checks** must pass
2. **At least one maintainer** reviews the code
3. **Address feedback** promptly and respectfully
4. **Update documentation** if needed
5. **Squash commits** if requested before merge

## 🐛 Issue Guidelines

### Before Creating an Issue

1. **Search existing issues** to avoid duplicates
2. **Check FAQ and documentation** first
3. **Use the latest version** of the application
4. **Gather relevant information** (browser, OS, steps to reproduce)

### Issue Templates

#### Bug Report
```markdown
**Bug Description**
A clear description of what the bug is.

**Steps to Reproduce**
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior**
What you expected to happen.

**Screenshots**
Add screenshots to help explain the problem.

**Environment**
- Browser: [e.g. Chrome 91]
- OS: [e.g. macOS 11.4]
- Device: [e.g. iPhone 12, Desktop]
```

#### Feature Request
```markdown
**Feature Description**
A clear description of what you want to happen.

**Problem Statement**
What problem does this feature solve?

**Proposed Solution**
Describe your preferred solution.

**Alternatives Considered**
Any alternative solutions you've considered.

**Additional Context**
Any other context or screenshots about the feature request.
```

## 🧪 Testing Guidelines

### Manual Testing Checklist

Before submitting changes, test:

#### Functionality Testing
- [ ] **Task Creation**: Add tasks with various inputs
- [ ] **Task Completion**: Toggle completion status
- [ ] **Task Editing**: Modify task text
- [ ] **Task Deletion**: Remove tasks with confirmation
- [ ] **Statistics**: Verify counters update correctly
- [ ] **Persistence**: Data survives page refresh

#### Browser Testing
- [ ] **Chrome** (latest)
- [ ] **Firefox** (latest)
- [ ] **Safari** (latest)
- [ ] **Edge** (latest)

#### Device Testing
- [ ] **Desktop** (1920x1080)
- [ ] **Tablet** (768x1024)
- [ ] **Mobile** (375x667)

#### Accessibility Testing
- [ ] **Keyboard navigation** works
- [ ] **Screen reader compatibility**
- [ ] **Color contrast** meets standards
- [ ] **Focus indicators** are visible

### Performance Testing

Check for:
- [ ] **No memory leaks** in long sessions
- [ ] **Smooth animations** at 60fps
- [ ] **Fast load times** (<3 seconds)
- [ ] **Responsive interactions** (<100ms)

## 📚 Documentation

### Code Comments

```javascript
/**
 * Creates a new task with validation
 * @param {string} text - The task description
 * @param {string} [priority='medium'] - Task priority level
 * @returns {Object} The created task object
 * @throws {Error} When text is invalid
 */
function createTask(text, priority = 'medium') {
  // Validate input parameters
  if (!text || typeof text !== 'string') {
    throw new Error('Task text must be a non-empty string');
  }
  
  // Create task object with current timestamp
  return {
    id: generateUniqueId(),
    text: text.trim(),
    priority,
    completed: false,
    createdAt: new Date().toISOString()
  };
}
```

### Documentation Updates

When making changes, update relevant documentation:

- **README.md**: For user-facing features
- **ARCHITECTURE.md**: For structural changes
- **FEATURES.md**: For new functionality
- **API.md**: For API changes (if applicable)

## 🎯 Best Practices

### General Guidelines

1. **Start small**: Make focused, single-purpose changes
2. **Test thoroughly**: Ensure changes work across environments
3. **Document changes**: Update relevant documentation
4. **Follow conventions**: Stick to established patterns
5. **Ask questions**: Don't hesitate to seek clarification

### Code Quality

1. **Write readable code**: Clear variable names, logical structure
2. **Handle errors gracefully**: Provide meaningful error messages
3. **Optimize performance**: Consider impact on load times and responsiveness
4. **Ensure accessibility**: Make features usable by everyone
5. **Test edge cases**: Consider unusual inputs and scenarios

### Communication

1. **Be respectful**: Treat all contributors with kindness
2. **Be constructive**: Provide helpful, actionable feedback
3. **Be patient**: Allow time for review and discussion
4. **Be collaborative**: Work together to find the best solutions

## 🏆 Recognition

### Contributors

We recognize contributors in several ways:

- **Contributors page** on our website
- **Changelog mentions** for significant contributions
- **Social media shoutouts** for major features
- **Maintainer status** for consistent, high-quality contributions

### Contribution Types

We value all types of contributions:
- Code contributions
- Bug reports and testing
- Documentation improvements
- Design feedback and suggestions
- Community support and mentoring

## 🆘 Getting Help

### Need Assistance?

- **GitHub Discussions**: For general questions and discussion
- **GitHub Issues**: For bug reports and feature requests
- **Documentation**: Check our comprehensive docs
- **Code Comments**: Review inline documentation

### Contact Maintainers

- Create an issue with the `question` label
- Start a discussion in GitHub Discussions
- Mention maintainers in relevant issues or PRs

## 📞 Community

### Stay Connected

- **GitHub Discussions**: Join conversations about the project
- **Issue Tracker**: Follow project progress
- **Pull Requests**: Review and comment on changes
- **Social Media**: Follow updates and announcements

### Contributing Guidelines Summary

1. **Fork and clone** the repository
2. **Create a feature branch** for your changes
3. **Follow coding standards** and conventions
4. **Write clear commit messages** using conventional format
5. **Test thoroughly** across browsers and devices
6. **Create detailed pull requests** using the template
7. **Respond to feedback** during the review process
8. **Update documentation** as needed

---

## 🎉 Thank You!

Thank you for taking the time to contribute to TaskFlow! Your efforts help make this project better for everyone. Whether you're fixing a bug, adding a feature, or improving documentation, every contribution is valuable and appreciated.

**Happy coding! 🚀**

---

*This contributing guide is a living document. If you have suggestions for improvements, please open an issue or submit a pull request.*
