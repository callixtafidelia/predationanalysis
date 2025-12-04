export default function Header() {
  return (
    <header className="border-b border-primary/10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-6 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Evaluating the Impact of Wolf-Reduction Programs on Caribou Recovery in BC
        </h1>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">
          BIOL 230 Final Project - Ecology In Your Life 
        </p>
      </div>
    </header>
  )
}
