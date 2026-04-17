import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../client'

function DetailCrewmate() {
  const { id } = useParams()
  const [crewmate, setCrewmate] = useState(null)

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
        setCrewmate(data)
      }
    }

    fetchCrewmate()
  }, [id])

  return (
    <div>
      {crewmate ? (
        <>
          <h1 style={{ color: 'white' }}>{crewmate.name}</h1>
          <p style={{ color: 'white' }}>Speed: {crewmate.speed}</p>
          <p style={{ color: 'white' }}>Color: {crewmate.color}</p>
          <p style={{ color: 'white' }}>Role: {crewmate.role}</p>

          <Link to={`/edit/${crewmate.id}`}>
            <button>Edit</button>
          </Link>
        </>
      ) : (
        <p style={{ color: 'white' }}>Loading...</p>
      )}
    </div>
  )
}

export default DetailCrewmate