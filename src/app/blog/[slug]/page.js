// app/blog/[slug]/page.js

const blogPosts = {
  'hello-world': {
    title: 'Hello World',
    content: 'This is the very first blog post on our site.',
  },
  'react-basics': {
    title: 'React Basics',
    content: 'Learn the basics of React including components and props.',
  },
  'nextjs-intro': {
    title: 'Next.js Intro',
    content: 'Discover the power of server-side rendering with Next.js.',
  },
};

// 🟢 Dynamic metadata:
export function generateMetadata({ params }) {
  const post = blogPosts[params.slug];
  return {
    title: post ? `${post.title} | Blog` : 'Post Not Found',
    description: post ? post.content.slice(0, 50) : 'No post found for this slug.',
  };
}

// 🟢 Page component:
export default function BlogPost({ params }) {
  const post = blogPosts[params.slug];

  if (!post) {
    return <h1>404 - Blog Post Not Found</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
