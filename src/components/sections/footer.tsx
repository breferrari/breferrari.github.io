export function Footer() {
  return (
    <footer className="border-t border-border/20 px-6 py-6">
      <div className="mx-auto max-w-4xl text-center text-xs text-muted-foreground/50">
        <p>&copy; {new Date().getFullYear()} Brenno Ferrari</p>
      </div>
    </footer>
  );
}
