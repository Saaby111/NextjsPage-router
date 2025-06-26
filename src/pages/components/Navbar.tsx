import Link from 'next/link';

const Navbar = () => (
  <nav style={{ background: '#222', padding: '10px', display: 'flex', gap: '20px' }}>
    <Link href="/" style={{ color: '#fff' }}>Home</Link>
    <Link href="/products" style={{ color: '#fff' }}>Products</Link>
    <Link href="/cart" style={{ color: '#fff' }}>Cart</Link>
    <Link href="/about" style={{ color: '#fff' }}>About</Link>
    <Link href="/contact" style={{ color: '#fff' }}>Contact</Link>
  </nav>
);

export default Navbar;
