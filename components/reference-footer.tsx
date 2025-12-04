export interface ReferenceFooterProps {
  references: Array<{
    title: string
    authors?: string
    year?: number
    url?: string
  }>
}

export default function ReferenceFooter({ references }: ReferenceFooterProps) {
  return (
    <footer className="mt-16 pt-8 border-t border-muted space-y-6">
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-primary">References</h4>
        <div className="space-y-2">
          {references.map((ref, index) => (
            <div
              key={index}
              className="text-xs text-muted-foreground leading-relaxed"
            >
              <p className="text-foreground">
                {ref.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-xs text-muted-foreground pt-4 border-t border-muted">
        <p>© 2025 Callixta Fidelia C</p>
      </div>
    </footer>
  )
}
