const fakeUsers = {
  azizbek: {
    name: 'Azizbek Hafizov',
    location: 'Samarkand, Uzbekistan',
    bio: 'Frontend Developer | Next.js Enthusiast',
  },
  john: {
    name: 'John Doe',
    location: 'New York, USA',
    bio: 'Fullstack Developer & Blogger',
  },
  sarah: {
    name: 'Sarah Smith',
    location: 'London, UK',
    bio: 'UI/UX Designer who loves cats 🐱',
  },
};

export function generateMetadata({ params }) {
  const user = fakeUsers[params.username];

  if (!user) {
    return {
      title: 'User Not Found',
      description: 'No profile found for this user.',
    };
  }

  return {
    title: `${user.name} | Profile`,
    description: `${user.bio} — Based in ${user.location}`,
  };
}

export default function ProfilePage({ params }) {
  const user = fakeUsers[params.username];

  if (!user) {
    return <h1>404 - User Not Found</h1>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p><strong>Location:</strong> {user.location}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
    </div>
  );
}
