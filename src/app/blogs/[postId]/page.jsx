import Post from "@/app/components/Post";
import React from "react";
const blogsData = [
  {
    id: 1,
    title: "Getting Started with JavaScript",
    author: "John Doe",
    category: "JavaScript",
    description: "Learn the basics of JavaScript and how it works.",
    image: "https://example.com/javascript.jpg",
  },
  {
    id: 2,
    title: "Understanding React Components",
    author: "Sarah Smith",
    category: "React",
    description: "A beginner-friendly guide to understanding React components.",
    image: "https://example.com/react.jpg",
  },
  {
    id: 3,
    title: "CSS Flexbox Explained",
    author: "Mike Johnson",
    category: "CSS",
    description: "Learn how to create flexible layouts using CSS Flexbox.",
    image: "https://example.com/flexbox.jpg",
  },
  {
    id: 4,
    title: "What Is an API?",
    author: "Emma Wilson",
    category: "Web Development",
    description:
      "Understand what APIs are and how frontend applications use them.",
    image: "https://example.com/api.jpg",
  },
  {
    id: 5,
    title: "Introduction to Next.js",
    author: "David Brown",
    category: "Next.js",
    description: "Explore the basics of Next.js and why developers use it.",
    image: "https://example.com/nextjs.jpg",
  },
];
const PostDetailPage = async ({ params }) => {
  const { postId } = await params;
  const post = blogsData.find((post) => post.id === parseInt(postId));
  return (
    <div>
      <h2>Post Detail Page:{postId}</h2>
      {post && (
        <div>
          <p>{post.title}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetailPage;
