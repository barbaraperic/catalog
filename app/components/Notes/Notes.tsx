import styles from '@/app/components/Notes/Notes.module.css'

function Notes({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className={`grid-title`}>Notes</p>
    </div>
  )
}

export default Notes
