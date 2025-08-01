# Comments Table - Frontend Assignment

A modern, responsive React application built for a frontend developer intern take-home assignment. Features a dark-themed, aesthetic UI with smooth corners and comprehensive functionality for displaying and managing comments data.

## 🚀 Features

### Core Requirements ✅
- **Paginated Comments Table**: Display comments in a clean, paginated table format
- **Navbar with Search**: Intuitive search functionality across multiple fields
- **API Integration**: Fetches data from JSONPlaceholder API
- **Required Columns**: Email, Name, Body, and Post (title) columns
- **Search Functionality**: Search across Name, Body, and Email fields

### Bonus Features ✅
- **In-place Editing**: Click-to-edit functionality for Name and Body fields
- **Persistent Storage**: Changes persist across page refreshes using localStorage
- **Optimized Re-rendering**: Only affected cells re-render during edits

### Design Features 🎨
- **Dark Theme**: Beautiful dark theme with light mode toggle
- **Smooth Corners**: Rounded corners throughout the UI (0.875rem radius)
- **Aesthetic Colors**: Carefully chosen shades of black, grey, and white
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Glass Effects**: Subtle backdrop blur effects for modern aesthetics

## 🛠️ Technology Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icons
- **JavaScript (JSX)** - Modern ES6+ syntax

## 📦 Installation & Setup

1. **Extract the project**:
   ```bash
   unzip comments-table-app.zip
   cd comments-table-app
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**:
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173`

## 🎯 Usage

### Basic Navigation
- **Search**: Use the search bar in the navbar to filter comments by name, body, or email
- **Pagination**: Navigate through pages using the pagination controls at the bottom
- **Theme Toggle**: Click the moon/sun icon to switch between dark and light themes

### In-place Editing
1. Click on any **Name** or **Body** cell in the table
2. The cell becomes editable with an input field
3. Make your changes and press **Enter** to save or **Escape** to cancel
4. Changes are automatically saved to localStorage and persist across page refreshes

### Search Functionality
- Search works across **Name**, **Body**, and **Email** fields
- Search is case-insensitive and matches partial text
- Results update in real-time as you type
- Pagination resets to page 1 when searching

## 🏗️ Project Structure

```
comments-table-app/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── assets/
│   ├── hooks/
│   ├── lib/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Custom styles and theme
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design Decisions

### Color Palette
- **Dark Theme**: Deep blacks (#0A0A0A) with subtle greys for contrast
- **Light Theme**: Clean whites with soft greys for readability
- **Accents**: Carefully chosen accent colors for interactive elements

### Typography & Spacing
- **Smooth Corners**: 0.875rem border radius for a modern, friendly appearance
- **Consistent Spacing**: 4px grid system for perfect alignment
- **Readable Typography**: Optimized font sizes and line heights

### User Experience
- **Hover States**: Subtle animations on interactive elements
- **Loading States**: Smooth loading spinner while fetching data
- **Visual Feedback**: Clear indication of editable cells and current page
- **Accessibility**: Proper contrast ratios and keyboard navigation support

## 📊 Performance Features

- **Efficient Pagination**: Only renders 10 comments per page
- **Optimized Search**: Client-side filtering for instant results
- **Minimal Re-renders**: React optimization for smooth editing experience
- **Lazy Loading**: Components load only when needed

## 🔧 API Integration

The application integrates with JSONPlaceholder API:
- **Comments**: `https://jsonplaceholder.typicode.com/comments`
- **Posts**: `https://jsonplaceholder.typicode.com/posts`

Data is fetched in parallel for optimal performance, and post titles are matched to comments for the "Post" column.

## 🚀 Build & Deployment

```bash
# Build for production
pnpm run build

# Preview production build
pnpm run preview
``

**Developed with ❤️**

