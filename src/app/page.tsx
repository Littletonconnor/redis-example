export default function Home() {
  return (
    <main className="flex min-h-screen justify-center w-full text-center">
      <h1>Redis Demo</h1>
      <p>This is a demo of Redis. See README for setup instructions.</p>
      <ul>
        <li>First navigate to /api/user/:id</li>
        <li>There are three users in the database. The IDS are: [1,2,3]</li>
        <li>
          The first time you visit, you will see we query the database, but
          after querying the database we save the item in our redis cache so
          subsequent visits do not trigger database queries!
        </li>
        <li>
          The TTL is set to 1hr, so after 1hr the key will expire. Feel free to
          change this in the code to see how caching works.
        </li>
      </ul>
    </main>
  );
}
