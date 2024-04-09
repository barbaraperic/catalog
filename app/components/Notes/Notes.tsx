import styles from '@/app/components/Notes/Notes.module.css'

function Notes({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h2 className={`grid-title`}>Notes</h2>
      <p>imperfect and informal jot-downs</p>
    </div>
  )
}

export default Notes
