# TaskFlow Features Documentation

> Guide to all current TaskFlow features and what is planned next

## 🎯 Overview

TaskFlow is a responsive task management application built with vanilla HTML, CSS, and JavaScript. It provides a clean, simple interface for managing personal tasks with persistent storage and live statistics.

## ✨ Core Features

### 🆕 Task Creation
- **Quick Add**: Simple input field with Enter key support
- **Validation**: Shows a warning when you try to add an empty task
- **Auto-focus**: Input field is automatically focused on load and after adding a task
- **Visual Feedback**: Success notification confirms task creation
- **Unique IDs**: Each task gets a unique identifier

**How to Use**:
1. Type your task description in the input field
2. Press Enter or click "Add Task"
3. Task appears immediately in the list below
4. Input field clears automatically for the next task

### 🏷️ Task Categories
- **Three Categories**: Work 💼, Personal 🏠 and Shopping 🛒
- **Pick on Creation**: Choose a category from the dropdown next to the input field (Personal is the default)
- **Colour-coded Badges**: Each task shows a badge with its category
- **Filter Bar**: Show all tasks, or only the tasks of one category
- **Stats Stay Complete**: Total / Completed / Pending always count every task, whatever filter is active
- **Older Tasks**: Tasks saved before categories existed load as Personal

**How to Use**:
1. Pick a category in the dropdown, then add the task as usual
2. Click a filter button (All / Work / Personal / Shopping) above the list to show only those tasks

### ✅ Task Completion
- **Toggle Completion**: Click the checkbox to mark a task complete or incomplete
- **Visual Feedback**: Completed tasks are shown with strikethrough styling
- **Status Persistence**: Completion state is saved automatically
- **Completion Timestamps**: Records when a task was completed
- **Celebration**: "Task completed! 🎉" notification

### ✏️ Task Editing
- **Prompt-based Editing**: Click the edit icon and change the text in a popup
- **Validation**: Empty task descriptions are not saved
- **Auto-save**: Changes are saved immediately

**How to Edit**:
1. Click the edit icon (✏️) on any task
2. Change the text in the popup
3. Click OK to save or Cancel to discard
4. Task updates immediately in the list

### 🗑️ Task Deletion
- **Confirmation Dialog**: Asks for confirmation before deleting
- **Permanent Removal**: Tasks are completely removed from storage
- **Visual Feedback**: Success notification confirms deletion
- **No Undo**: Deletion is permanent

### 💾 Data Persistence
- **Local Storage**: All data is saved in the browser's localStorage
- **Auto-save**: Every change is saved automatically
- **Session Recovery**: Tasks are still there after closing and reopening the browser
- **Error Handling**: Shows an error notification if saving fails

**Storage Details**:
- Saves the task list and the ID counter
- Stored in JSON format

### 📊 Live Statistics
- **Live Updates**: Statistics update after every action
- **Total Tasks**: All tasks currently in the list
- **Completed Tasks**: Number of finished tasks
- **Pending Tasks**: Tasks still to be done
- **Task Count**: Number of tasks shown in the header

### 📱 Responsive Design
- **Adaptive Layout**: Layout adjusts to smaller screens (input and button stack on mobile)
- **Works on**: Desktop, tablet, and mobile browsers

## 🎨 User Interface

- **Gradient Background**: Purple gradient backdrop
- **Glass Effect**: Translucent cards with backdrop blur
- **Slide-in Animation**: New tasks slide into the list
- **Hover Effects**: Visual feedback on buttons and task items
- **Typography**: Inter font family throughout
- **Toast Notifications**: Color-coded pop-ups — success (green), error (red), warning (orange)
- **Empty State**: Message shown when there are no tasks
- **Smart Sorting**: Incomplete tasks are shown first, newest on top

## 🔧 Technical Details

- **ES6+ Class**: All app logic lives in one `TaskFlow` class
- **No Dependencies**: Plain HTML, CSS, and JavaScript, no build step
- **Offline**: Works without an internet connection (except loading the Google Font)
- **Client-Side Only**: No server; data stays in your browser
- **XSS Protection**: Task text is HTML-escaped before it is shown

## ⌨️ Keyboard Support
- **Enter**: Add a new task
- **Tab**: Move between the input field and buttons

## 🔮 Future Feature Roadmap

### 🎯 Planned Enhancements
- **Due Dates**: Set and track task deadlines
- **Priority Levels**: High, medium, low priority
- **Search & Filter**: Find tasks quickly
- **Dark Mode**: Alternative dark theme
- **Task Notes**: Add detailed notes to tasks
- **Recurring Tasks**: Repeat tasks automatically
- **Duplicate Check**: Warn when adding a task that already exists
- **Bulk Actions**: Clear all / complete all

### ⌨️ Keyboard Improvements
- **Escape**: Cancel editing
- **Space**: Toggle task completion
- **Arrow Keys**: Navigate the task list
- **Focusable Checkbox**: Make the checkbox reachable with Tab

### 📈 Extra Statistics
- **Completion Rate**: Percentage of completed tasks
- **Daily Progress**: Tasks created/completed today
- **Productivity Trends**: History of completed tasks

### 📋 Data Export & Import
- **JSON Export**: Download tasks as a JSON backup
- **Data Import**: Load a previously exported backup

### 🌐 Advanced Features
- **Cloud Sync**: Synchronize across devices
- **Collaboration**: Share tasks with others
- **Progressive Web App**: Installable app with full offline support
- **Theming**: Switch between color themes

## ❓ Frequently Asked Questions

**Q: Where is my data stored?**
A: Locally in your browser using localStorage. Nothing is sent to a server.

**Q: Will my tasks be lost if I clear my browser data?**
A: Yes. Clearing browser data removes your tasks.

**Q: Can I use TaskFlow offline?**
A: Yes, it is a client-side application.

**Q: Is there a limit to how many tasks I can create?**
A: It depends on your browser's localStorage capacity (usually 5–10MB), which is enough for thousands of tasks.

**Q: Which browsers are supported?**
A: Chrome 80+, Firefox 75+, Safari 13+, and Edge 80+.

**Q: Can I customize the appearance?**
A: Only by editing the CSS file for now. Themes are on the roadmap.

---

## 🎉 Getting Started

Check out the [Setup Guide](SETUP.md) for installation instructions, or just open `index.html` in your browser.
