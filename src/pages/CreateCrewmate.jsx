import { useState } from 'react'
import { supabase } from '../client'

function CreateCrewmate() {
  const [name, setName] = useState('')
  const [speed, setSpeed] = useState('')
  const [color, setColor] = useState('')
  const [role, setRole] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error } = await supabase
      .from('Crewmates')
      .insert([
        {
          name: name,
          speed: speed,
          color: color,
          role: role
        }
      ])

    if (error) {
      console.log(error)
      alert(error.message)
    } else {
      window.location = '/'
    }
  }

  return (
    <div>
      <h1 style={{ color: 'white' }}>Create Crewmate</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Speed"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
        />

        <input
          type="text"
          placeholder="Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreateCrewmate