import React from 'react'
import DataTable from '../components/DataTable'
import { Link } from 'react-router-dom'

function AllDataPage() {
  return (
    <div>
        <Link to={'/addUpdate'}>
        <button>Add User</button>
        </Link>
        <h1>All Users</h1>
        <DataTable/>
    </div>
  )
}

export default AllDataPage