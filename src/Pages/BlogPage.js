const BlogPage = ({ title, content, author, date }) => {

    // Function to format the date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="blog-post">
            <h2>{title}</h2>
            <div className="blog-content">{content}</div>
            <p className="blog-author">Written by: {author}</p>
            <p className="blog-date">Published on: {formatDate(date)}</p>
        </div>
    );
};

export default BlogPage

// 1. Look at the `BlogPost` component 
// 2. Answer the following
//    - What props does the component expect? title, content, author, date
//    - How will these props be used in the component? Dynamically change the information as it renders