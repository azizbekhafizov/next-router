import Link from 'next/link';

export const metadata = {
  title: "Blog | My Simple Next.js Site",
  description: "Read our latest blog posts.",
};

const blogPosts = [
  { title: "Hello World", slug: "hello-world" },
  { title: "React Basics", slug: "react-basics" },
  { title: "Next.js Intro", slug: "nextjs-intro" },
];

export default function BlogPage() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
