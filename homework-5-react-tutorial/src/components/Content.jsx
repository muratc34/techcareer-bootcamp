import React from 'react'
import { suppliers } from '../data/suppliersData'

const Content = () => {
  return (
    <table className='w3-table w3-striped'>
        <thead>
            <tr>
                <td>Company Name</td>
                <td>Contact Name</td>
                <td>Contact Title</td>
                <td>Country</td>
                <td>City</td>
            </tr>
        </thead>
        <tbody>
            {
                suppliers?.map((s, key) =>
                (
                    <tr key={key}>
                        <td>{s.companyName}</td>
                        <td>{s.contactName}</td>
                        <td>{s.contactTitle}</td>
                        <td>{s.address.country}</td>
                        <td>{s.address.city}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default Content