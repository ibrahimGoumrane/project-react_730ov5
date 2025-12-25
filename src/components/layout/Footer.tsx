const Footer = () => {
  return (
    <footer className='bg-background border-t border-border p-4 text-center text-muted-foreground text-sm mt-8'>
      <div className='container mx-auto'>
        <p>&copy; {new Date().getFullYear()} Todo App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
