export default function Layout({ header, children, footer }) {
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
