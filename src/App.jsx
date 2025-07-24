import { useState, useEffect } from "react";
import { Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import "./App.css";

// Navbar component
const Navbar = ({ searchTerm, setSearchTerm, darkMode, toggleDarkMode }) => {
  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* <h1 className="text-2xl font-bold text-foreground">Comments Table</h1> */}
          <svg
            width="240"
            height="40"
            viewBox="0 0 240 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="darkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>

              <linearGradient
                id="lightGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#be185d" />
              </linearGradient>

              <linearGradient
                id="darkTextGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>

              <linearGradient
                id="lightTextGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>

              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <circle
              cx="20"
              cy="20"
              r="14"
              fill="url(#darkGrad)"
              filter="url(#glow)"
              opacity="0.9"
            />

            <circle
              cx="20"
              cy="20"
              r="8"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              opacity="0.3"
            />
            <circle cx="20" cy="20" r="4" fill="#ffffff" opacity="0.6" />

            <text
              x="42"
              y="26"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="18"
              fontWeight="600"
              fill="url(#darkTextGrad)"
            >
              CommentSphere
            </text>

            <circle cx="36" cy="8" r="1" fill="#60a5fa" opacity="0.6" />
            <circle cx="230" cy="32" r="0.8" fill="#a855f7" opacity="0.5" />
          </svg>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search comments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-input/50 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 ease-in-out pl-10 w-64 rounded-lg"
            />
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            {darkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

// Pagination component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-6">
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 rounded-lg"
      >
        Previous
      </Button>

      {getPageNumbers().map((page, index) => (
        <Button
          key={index}
          variant={page === currentPage ? "default" : "outline"}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={page === "..."}
          className="hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 rounded-lg min-w-[40px]"
        >
          {page}
        </Button>
      ))}

      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 rounded-lg"
      >
        Next
      </Button>
    </div>
  );
};

// Editable cell component
const EditableCell = ({ value, onSave, isEditing, setIsEditing }) => {
  const [editValue, setEditValue] = useState(value);

  const handleSave = () => {
    onSave(editValue);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      setEditValue(value);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <Input
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyPress}
        className="rounded-lg"
        autoFocus
      />
    );
  }

  return (
    <div
      className="hover:bg-accent/30 focus-within:bg-accent/50 transition-all duration-300 ease-in-out rounded-md p-2 cursor-pointer min-h-[40px] flex items-center"
      onClick={() => setIsEditing(true)}
      title="Click to edit"
    >
      {value}
    </div>
  );
};

// Comments table component
const CommentsTable = ({ comments, posts, onUpdateComment }) => {
  const [editingCell, setEditingCell] = useState(null);

  const handleCellEdit = (commentId, field, newValue) => {
    onUpdateComment(commentId, field, newValue);
    setEditingCell(null);
  };

  const getPostTitle = (postId) => {
    const post = posts.find((p) => p.id === postId);
    return post ? post.title : "Loading...";
  };

  return (
    <Card className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
      <CardHeader>
        <CardTitle className="text-xl">Comments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-semibold text-muted-foreground">
                  Email
                </th>
                <th className="text-left p-4 font-semibold text-muted-foreground">
                  Name
                </th>
                <th className="text-left p-4 font-semibold text-muted-foreground">
                  Body
                </th>
                <th className="text-left p-4 font-semibold text-muted-foreground">
                  Post
                </th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment) => (
                <tr
                  key={comment.id}
                  className="hover:bg-accent/50 transition-all duration-300 ease-in-out cursor-pointer border-b border-border/50"
                >
                  <td className="p-4 text-sm text-muted-foreground">
                    {comment.email}
                  </td>
                  <td className="p-4">
                    <EditableCell
                      value={comment.name}
                      onSave={(newValue) =>
                        handleCellEdit(comment.id, "name", newValue)
                      }
                      isEditing={editingCell === `${comment.id}-name`}
                      setIsEditing={(editing) =>
                        setEditingCell(editing ? `${comment.id}-name` : null)
                      }
                    />
                  </td>
                  <td className="p-4 max-w-md">
                    <EditableCell
                      value={comment.body}
                      onSave={(newValue) =>
                        handleCellEdit(comment.id, "body", newValue)
                      }
                      isEditing={editingCell === `${comment.id}-body`}
                      setIsEditing={(editing) =>
                        setEditingCell(editing ? `${comment.id}-body` : null)
                      }
                    />
                  </td>
                  <td className="p-4 text-sm">
                    {getPostTitle(comment.postId)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

function App() {
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const commentsPerPage = 10;

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch comments and posts in parallel
        const [commentsResponse, postsResponse] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/comments"),
          fetch("https://jsonplaceholder.typicode.com/posts"),
        ]);

        const commentsData = await commentsResponse.json();
        const postsData = await postsResponse.json();

        // Load saved edits from localStorage
        const savedEdits = JSON.parse(
          localStorage.getItem("commentEdits") || "{}"
        );

        const commentsWithEdits = commentsData.map((comment) => ({
          ...comment,
          ...savedEdits[comment.id],
        }));

        setComments(commentsWithEdits);
        setPosts(postsData);
        setFilteredComments(commentsWithEdits);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle search functionality
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredComments(comments);
    } else {
      const filtered = comments.filter(
        (comment) =>
          comment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          comment.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
          comment.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredComments(filtered);
    }
    setCurrentPage(1); // Reset to first page when searching
  }, [searchTerm, comments]);

  // Handle dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Handle comment updates
  const handleUpdateComment = (commentId, field, newValue) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId ? { ...comment, [field]: newValue } : comment
    );

    setComments(updatedComments);

    // Save edits to localStorage
    const savedEdits = JSON.parse(localStorage.getItem("commentEdits") || "{}");
    savedEdits[commentId] = {
      ...savedEdits[commentId],
      [field]: newValue,
    };
    localStorage.setItem("commentEdits", JSON.stringify(savedEdits));
  };

  // Pagination calculations
  const totalPages = Math.ceil(filteredComments.length / commentsPerPage);
  const startIndex = (currentPage - 1) * commentsPerPage;
  const endIndex = startIndex + commentsPerPage;
  const currentComments = filteredComments.slice(startIndex, endIndex);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading comments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {currentComments.length} of {filteredComments.length}{" "}
            comments
            {searchTerm && ` (filtered by "${searchTerm}")`}
          </p>
        </div>

        <CommentsTable
          comments={currentComments}
          posts={posts}
          onUpdateComment={handleUpdateComment}
        />

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </main>
    </div>
  );
}

export default App;
