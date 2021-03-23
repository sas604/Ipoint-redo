import HeaderLarge from './header';
import Nav from './nav';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Nav />
      <HeaderLarge />
      {children}
    </div>
  );
}
