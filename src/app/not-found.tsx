import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ 
        padding: '100px', 
        textAlign: 'center', 
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', margin: '0 0 10px 0' }}>404</h1>
      <h2 style={{ fontSize: '2rem', margin: '0 0 20px 0' }}>Page Not Found</h2>
      <p style={{ color: '#666' }}>
        The page you are looking for does not exist.
      </p>
      <Link href="/" style={{ marginTop: '20px', color: 'blue', textDecoration: 'underline' }}>
        Go back home
      </Link>
    </div>
  );
}