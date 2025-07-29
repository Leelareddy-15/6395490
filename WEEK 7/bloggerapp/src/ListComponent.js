import BlogItem from "./BlogItem";

function ListComponent() {
  const blogs = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "Conditional Rendering" },
    { id: 3, title: "Using Keys in Lists" }
  ];

  return (
    <div>
      <h2>Blog List</h2>
      <ul>
        {blogs.map(blog => (
          <BlogItem key={blog.id} title={blog.title} />
        ))}
      </ul>
    </div>
  );
}

export default ListComponent;
