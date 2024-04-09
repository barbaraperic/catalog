function Spacer({ size }: { size: 's' | 'm' | 'l' }) {
  const sizes = {
    s: '0.5rem',
    m: '3rem',
    l: '4rem',
  }

  return <div style={{ height: sizes[size] }}></div>
}

export default Spacer
