export default function BusinessCard({ name, email, logo = undefined}) {
  return(
    <div style = {{
      border: '1px solid #000000',
      padding: '10px',
      marginBottom: '20px',
      maxWidth: '300px',
      backgroundColor: '#ffffff',
      color: '#000000',
      display: 'flex',
      gap: '8px'
    }
    }>

    {logo ? <img
    src={logo}
    alt="logo"
    style={{
      width: '100px',
      height: '100px'
    }}
  />}

    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      </div>
      </div>
  )
}
