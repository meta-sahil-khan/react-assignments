# Blog Posts Application

A React app displaying a list of blog posts from different users in a vertical layout. Built with reusable components following React best practices.

## Features

- **Reusable Components**: Modular `Post` and `PostList` components for scalability
- **Mock Data**: Sample blog posts with author, date, and content
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Clean UI**: Modern styling with hover effects and smooth transitions

## Project Structure

```
src/
├── components/
│   ├── Post.jsx         # Individual post display component
│   └── PostList.jsx     # List container for posts
├── data/
│   └── mockData.js      # Mock blog posts data model
├── App.jsx              # Main app component
├── App.css              # Styles for the application
└── main.jsx             # Entry point
```

## Components

### `Post`
Displays a single blog post with:
- Title
- Author name
- Publication date
- Content

**Props:**
- `title` (string): Post title
- `author` (string): Author name
- `date` (string): Publication date
- `content` (string): Post content

### `PostList`
Renders a vertical list of posts and handles mapping.

**Props:**
- `posts` (array): Array of post objects

## Running the App

### Install dependencies:
```bash
npm install
```

### Start development server:
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

### Build for production:
```bash
npm run build
```

### Preview production build:
```bash
npm run preview
```

## Data Model

Posts are structured as:
```javascript
{
  id: 1,
  title: "Post Title",
  author: "Author Name",
  date: "March 20, 2026",
  content: "Post content text..."
}
```

To add more posts, edit `src/data/mockData.js` and add objects to the `mockPosts` array.

## Notes

- Components follow React best practices with proper prop management
- No external API calls—all data is mock and local
- Fully responsive with mobile-first CSS
- Easily extensible for database integration in the future
