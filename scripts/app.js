// TaskFlow: all logic of the to-do app lives in this one class.
// Tasks are objects { id, text, completed, createdAt, completedAt }
// and are saved in the browser's localStorage as JSON.
class TaskFlow {

    // Starts the app: loads saved tasks and the next id, hooks up the
    // buttons, and draws the task list and statistics on the page.
    constructor() {
        this.tasks = this.loadTasks();
        this.taskIdCounter = this.getNextTaskId();
        this.initializeApp();
        this.bindEvents();
        this.renderTasks();
        this.updateStats();
    }

    // Logs a start message in the console and shows the welcome message.
    initializeApp() {
        console.log('TaskFlow initialized successfully!');
        this.showWelcomeMessage();
    }

    // Logs a welcome message in the console when there are no tasks yet.
    showWelcomeMessage() {
        if (this.tasks.length === 0) {
            console.log('Welcome to TaskFlow! Add your first task to get started.');
        }
    }

    // Connects the "Add Task" button and the Enter key to addTask().
    // Needs the elements #addTaskBtn and #taskInput in index.html.
    // Prints a clear error and stops if one of them is missing.
    bindEvents() {
        const addTaskBtn = document.getElementById('addTaskBtn');
        const taskInput = document.getElementById('taskInput');

        // If an id was renamed in index.html, getElementById returns null
        // and addEventListener would crash with "Cannot read properties of null"
        if (!addTaskBtn) {
            console.error('TaskFlow: element with id "addTaskBtn" not found in index.html');
        }
        if (!taskInput) {
            console.error('TaskFlow: element with id "taskInput" not found in index.html');
        }
        if (!addTaskBtn || !taskInput) {
            return;
        }

        addTaskBtn.addEventListener('click', () => this.addTask());
        
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTask();
            }
        });

        // Focus on input when page loads
        taskInput.focus();
    }

    // Adds a task from the input box. Shows a warning if the box is empty.
    // Saves the new task, redraws the list and updates the statistics.
    addTask() {
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            this.showNotification('Please enter a task description', 'warning');
            taskInput.focus();
            return;
        }

        const newTask = {
            id: this.taskIdCounter++,
            text: taskText,
            completed: false,
            createdAt: new Date().toISOString(),
            completedAt: null
        };

        this.tasks.push(newTask);
        this.saveTasks();
        this.renderTasks();
        this.updateStats();
        
        taskInput.value = '';
        taskInput.focus();
        
        this.showNotification('Task added successfully!', 'success');
    }

    // Deletes the task with this id after the user confirms.
    // Needs: taskId (number). Deletion is permanent.
    deleteTask(taskId) {
        if (confirm('Are you sure you want to delete this task?')) {
            this.tasks = this.tasks.filter(task => task.id !== taskId);
            this.saveTasks();
            this.renderTasks();
            this.updateStats();
            this.showNotification('Task deleted successfully!', 'success');
        }
    }

    // Switches a task between done and not done, and records when it was completed.
    // Needs: taskId (number). Called when the user clicks the checkbox.
    toggleTask(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = !task.completed;
            task.completedAt = task.completed ? new Date().toISOString() : null;
            this.saveTasks();
            this.renderTasks();
            this.updateStats();
            
            const message = task.completed ? 'Task completed! 🎉' : 'Task marked as pending';
            this.showNotification(message, 'success');
        }
    }

    // Lets the user change a task's text in a popup prompt.
    // Needs: taskId (number). Cancel or empty text keeps the old text.
    editTask(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            const newText = prompt('Edit task:', task.text);
            if (newText !== null && newText.trim() !== '') {
                task.text = newText.trim();
                this.saveTasks();
                this.renderTasks();
                this.showNotification('Task updated successfully!', 'success');
            }
        }
    }

    // Draws the task list on the page: unfinished tasks first, newest on top.
    // Shows the "empty" message instead when there are no tasks.
    // Needs the elements #tasksList and #emptyState in index.html.
    renderTasks() {
        const tasksList = document.getElementById('tasksList');
        const emptyState = document.getElementById('emptyState');

        if (this.tasks.length === 0) {
            tasksList.style.display = 'none';
            emptyState.style.display = 'block';
            return;
        }

        tasksList.style.display = 'flex';
        emptyState.style.display = 'none';

        // Sort tasks: incomplete first, then by creation date
        const sortedTasks = [...this.tasks].sort((a, b) => {
            if (a.completed !== b.completed) {
                return a.completed - b.completed;
            }
            return new Date(b.createdAt) - new Date(a.createdAt);
        });

        tasksList.innerHTML = sortedTasks.map(task => `
            <div class="task-item ${task.completed ? 'completed' : ''}" data-task-id="${task.id}">
                <div class="task-content">
                    <div class="task-checkbox ${task.completed ? 'checked' : ''}" 
                         onclick="taskFlow.toggleTask(${task.id})">
                    </div>
                    <span class="task-text">${this.escapeHtml(task.text)}</span>
                </div>
                <div class="task-actions">
                    <button class="task-btn edit-btn" onclick="taskFlow.editTask(${task.id})" title="Edit task">
                        ✏️
                    </button>
                    <button class="task-btn delete-btn" onclick="taskFlow.deleteTask(${task.id})" title="Delete task">
                        🗑️
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Updates the Total / Completed / Pending counters and the task count in the header.
    updateStats() {
        const totalTasks = this.tasks.length;
        const completedTasks = this.tasks.filter(task => task.completed).length;
        const pendingTasks = totalTasks - completedTasks;

        document.getElementById('totalTasks').textContent = totalTasks;
        document.getElementById('completedTasks').textContent = completedTasks;
        document.getElementById('pendingTasks').textContent = pendingTasks;
        
        // Update task count in header
        const taskCount = document.getElementById('taskCount');
        taskCount.textContent = `${totalTasks} ${totalTasks === 1 ? 'task' : 'tasks'}`;
    }

    // Saves all tasks and the id counter to localStorage so they survive a page reload.
    // Shows an error notification if the browser storage is full or blocked.
    saveTasks() {
        try {
            localStorage.setItem('taskflow_tasks', JSON.stringify(this.tasks));
            localStorage.setItem('taskflow_counter', this.taskIdCounter.toString());
        } catch (error) {
            console.error('Failed to save tasks:', error);
            this.showNotification('Failed to save tasks. Please check your browser storage.', 'error');
        }
    }

    // Reads the saved task list from localStorage.
    // Returns an empty list if nothing is saved, the JSON is broken,
    // or the saved value is not a list (for example someone saved 5).
    loadTasks() {
        try {
            const saved = localStorage.getItem('taskflow_tasks');
            if (!saved) {
                return [];
            }

            const parsed = JSON.parse(saved);

            // Valid JSON can still be the wrong type (5, "hello", {}),
            // so only accept it if it is an array
            if (!Array.isArray(parsed)) {
                console.error('Saved tasks are not a list, starting with an empty list:', parsed);
                return [];
            }

            return parsed;
        } catch (error) {
            console.error('Failed to load tasks:', error);
            return [];
        }
    }

    // Reads the next free task id from localStorage. Starts at 1 if nothing is saved
    // or if the saved value is not a number (for example "abc").
    getNextTaskId() {
        try {
            const saved = localStorage.getItem('taskflow_counter');
            if (!saved) {
                return 1;
            }

            const id = parseInt(saved, 10);

            // parseInt("abc") gives NaN, which would give new tasks the id NaN
            if (Number.isNaN(id)) {
                console.error('Saved task counter is not a number, starting at 1:', saved);
                return 1;
            }

            return id;
        } catch (error) {
            console.error('Failed to load task counter:', error);
            return 1;
        }
    }

    // Makes user text safe to put in HTML by replacing special characters (& < > " ').
    // Prevents someone from injecting HTML or scripts through a task name (XSS).
    escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Shows a colored pop-up message in the top right for 3 seconds, and logs it.
    // Needs: message (text) and type ('success', 'error', 'warning' or 'info').
    showNotification(message, type = 'info') {
        // Simple notification system
        console.log(`[${type.toUpperCase()}] ${message}`);
        
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 1000;
            opacity: 0;
            transform: translateY(-20px);
            transition: all 0.3s ease;
            max-width: 300px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        `;

        // Set color based on type
        const colors = {
            success: '#48bb78',
            error: '#e53e3e',
            warning: '#ed8936',
            info: '#3182ce'
        };
        
        notification.style.background = colors[type] || colors.info;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Utility methods for potential future features

    // Downloads all tasks as a JSON file (taskflow_backup.json).
    // Not used yet: there is no export button in the app.
    exportTasks() {
        const dataStr = JSON.stringify(this.tasks, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'taskflow_backup.json';
        link.click();
        
        URL.revokeObjectURL(url);
        this.showNotification('Tasks exported successfully!', 'success');
    }

    // Deletes all tasks at once after the user confirms.
    // Not used yet: there is no "clear all" button in the app.
    clearAllTasks() {
        if (confirm('Are you sure you want to delete ALL tasks? This cannot be undone.')) {
            this.tasks = [];
            this.saveTasks();
            this.renderTasks();
            this.updateStats();
            this.showNotification('All tasks cleared!', 'success');
        }
    }

    // Returns an object with task counts: total, completed, pending,
    // created today and completed today. Not shown in the app yet.
    getTaskStats() {
        const now = new Date();
        const stats = {
            total: this.tasks.length,
            completed: this.tasks.filter(t => t.completed).length,
            pending: this.tasks.filter(t => !t.completed).length,
            createdToday: this.tasks.filter(t => {
                const taskDate = new Date(t.createdAt);
                return taskDate.toDateString() === now.toDateString();
            }).length,
            completedToday: this.tasks.filter(t => {
                if (!t.completedAt) return false;
                const completedDate = new Date(t.completedAt);
                return completedDate.toDateString() === now.toDateString();
            }).length
        };
        return stats;
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.taskFlow = new TaskFlow();
});

// Export for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TaskFlow;
}
