import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../client'

function ReadCrewmates() {
  const [crewmates, setCrewmates] = useState([])

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from('Crewmates')
        .select()
        .order('created_at', { ascending: false })

      if (error) {
        console.log(error)
      } else {
        setCrewmates(data)
      }
    }

    fetchCrewmates()
  }, [])

  return (
    <div>
      <h1 style={{ color: 'white' }}>Read Crewmates Page</h1>

      <Link to="/create">
        <button>Create New Crewmate</button>
      </Link>

      {crewmates.length === 0 ? (
        <p style={{ color: 'white' }}>No crewmates yet.</p>
      ) : (
        crewmates.map((c) => (
          <div key={c.id}>
            <Link to={`/crewmate/${c.id}`}>
              <h2 style={{ color: 'white' }}>{c.name}</h2>
            </Link>

            <p style={{ color: 'white' }}>Speed: {c.speed}</p>
            <p style={{ color: 'white' }}>Color: {c.color}</p>
            <p style={{ color: 'white' }}>Role: {c.role}</p>

            <Link to={`/edit/${c.id}`}>
              <button>Edit</button>
            </Link>
          </div>
        ))
      )}
    </div>
  )
}

export default ReadCrewmates