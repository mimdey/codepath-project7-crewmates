import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'

function EditCrewmate() {
  const { id } = useParams()

  const [name, setName] = useState('')
  const [speed, setSpeed] = useState('')
  const [color, setColor] = useState('')
  const [role, setRole] = useState('')

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from('Crewmates')
        .select()
        .eq('id', id)
        .single()

      if (error) {
        console.log(error)
      } else {
        setName(data.name)
        setSpeed(data.speed)
        setColor(data.color)
        setRole(data.role)
      }
    }

    fetchCrewmate()
  }, [id])

  const handleUpdate = async (e) => {
    e.preventDefault()

    const { error } = await supabase
      .from('Crewmates')
      .update({
        name: name,
        speed: speed,
        color: color,
        role: role
      })
      .eq('id', id)

    if (error) {
      console.log(error)
      alert(error.message)
    } else {
      window.location = '/'
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault()

    const { error } = await supabase
      .from('Crewmates')
      .delete()
      .eq('id', id)

    if (error) {
      console.log(error)
      alert(error.message)
    } else {
      window.location = '/'
    }
  }

  return (
    <div>
      <h1 style={{ color: 'white' }}>Edit Crewmate</h1>

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
        />

        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button type="submit">Update</button>
        <button onClick={handleDelete}>Delete</button>
      </form>
    </div>
  )
}

export default EditCrewmate