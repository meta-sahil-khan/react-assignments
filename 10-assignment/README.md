# 📝 Todo Application

A modern, responsive Todo application built with React and Vite. Create, manage, and organize your todos with an intuitive interface and beautiful UI.

## ✨ Features

### Core Functionality
- ✅ **Create Todos** - Add new todos with validation
- 📋 **List Todos** - View all todos in an organized grid layout
- 👁️ **View Details** - See detailed information about individual todos
- ✏️ **Edit Todos** - Update todo names anytime
- ✔️ **Toggle Completion** - Mark todos as complete/incomplete with one click
- 🗑️ **Delete Todos** - Remove todos from your list
- 🔍 **Filter Todos** - View by All, Active (incomplete), or Completed

### Smart Features
- 📊 **Statistics Dashboard** - Shows total, completed, and active todo counts
- 🎯 **Auto-filtering** - Completed todos automatically disappear when "Active" filter is selected
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Gradient backgrounds, smooth animations, and attractive styling
- 🚀 **Fast Navigation** - React Router for seamless page transitions

## 🏗️ Project Structure

```
src/
├── context/
│   └── TodoContext.jsx          # Global state management with Context API
├── components/
│   ├── TodoList.jsx             # Main list view with filtering
│   ├── TodoForm.jsx             # Form to create new todos
│   ├── TodoDetail.jsx           # Individual todo detail view
│   ├── TodoList.css             # Component styles
│   ├── TodoForm.css             # Component styles
│   └── TodoDetail.css           # Component styles
├── App.jsx                      # Router configuration
├── App.css                      # Global and responsive styles
├── main.jsx                     # Application entry point
└── index.css                    # Base styles
```

## 📱 Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | TodoList | Main page showing all todos with filters |
| `/add` | TodoForm | Form page to create a new todo |
| `/todo/:id` | TodoDetail | Detail page for a specific todo |

## 🎯 Todo Object Structure

Each todo contains the following properties:

```javascript
{
  id: number,           // Unique identifier
  name: string,         // Todo description/title
  completed: boolean    // Completion status
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd 10-assignment
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot module reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🎨 UI/UX Highlights

### Responsive Design with CSS Grid
- **Grid-based layouts** - Auto-responsive columns that adapt to screen size
- **Mobile-first approach** - Optimized for all screen sizes (480px and up)
- **Touch-friendly buttons** - Adequate padding and spacing for mobile users

### Modern Visual Design
- **Gradient backgrounds** - Purple to pink gradient theme
- **Card-based components** - Clean card layouts with shadows
- **Smooth animations** - Slide-in effects and hover transitions
- **Color-coded status** - Green for completed, red for active
- **Emoji icons** - Visual indicators throughout the interface

### Interactive Feedback
- **Hover effects** - Buttons and cards have interactive hover states
- **Visual feedback** - Completed todos show visual indicators
- **Error messages** - Clear validation feedback for form inputs
- **Loading transitions** - Smooth page transitions with animations

## 🛠️ Technologies Used

- **React 19** - UI library
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Context API** - State management
- **CSS3** - Modern styling with Grid and Flexbox

## 💡 Key Features Explained

### Filtering System
The app provides three filter options:
- **All Todos** - Shows every todo in your list
- **Active** - Shows only incomplete todos
- **Completed** - Shows only finished todos

Filtering is instant and doesn't require any page reload.

### Smart Completion Behavior
When you mark a todo as complete while the "Active" filter is selected:
- The todo is immediately removed from view
- It will reappear if you switch to "All Todos" or "Completed" filter
- The statistics update in real-time

### Form Validation
The form includes validation for:
- Minimum 3 characters for todo name
- Non-empty input requirement
- Clear error messages

## 📊 Initial Sample Data

The app comes with 4 sample todos to get you started:
1. "Learn React" - Active
2. "Build a Todo App" - Completed
3. "Master React Router" - Active
4. "Deploy the app" - Active

You can delete these and create your own!

## 🎓 Learning Points

This project demonstrates:
- **Component composition** - Building reusable React components
- **State management** - Using Context API for global state
- **React Router** - Navigation between multiple views
- **Form handling** - Input validation and form submission
- **CSS Grid** - Creating responsive layouts
- **Conditional rendering** - Showing/hiding elements based on state
- **Event handling** - Click handlers and form submissions

## 📝 Usage Examples

### Adding a Todo
1. Click the "➕ Add New Todo" button
2. Enter your todo name (minimum 3 characters)
3. Click "✅ Create Todo"
4. You'll be redirected to the list view

### Filtering Todos
1. On the list page, click any filter button: "All Todos", "Active", or "Completed"
2. The list updates instantly
3. Switch between filters as needed

### Editing a Todo
1. Click the "👁️ View" button on a todo
2. Click the "✏️ Edit" button
3. Update the todo name
4. Click "💾 Save Changes"

### Completing a Todo
- **From List**: Click the checkbox next to any todo
- **From Detail**: Click "✔️ Mark as Complete" button

### Deleting a Todo
- Click the "🗑️ Delete" button (available on list or detail view)
- Confirm the deletion when prompted

## 🔄 State Management

The application uses React Context API for state management. The `TodoContext` provides:

- `todos` - Array of all todos
- `addTodo(name)` - Create a new todo
- `updateTodo(id, data)` - Update an existing todo
- `deleteTodo(id)` - Delete a todo
- `toggleCompleted(id)` - Toggle todo completion status
- `getTodoById(id)` - Retrieve a specific todo

All state changes are instantly reflected across the application.

## 🐛 Browser Compatibility

Tested and working on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is part of React assignments.

## 🤝 Contributing

This is a learning project. Feel free to:
- Add new features
- Improve styling
- Optimize performance
- Add animations

## 📞 Support

For issues or questions, refer to the project documentation or React/Vite docs:
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
