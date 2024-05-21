import React, { useEffect } from 'react'
import NavBarPanel from './NavBarPanel'
import Table from './Table'
import NewTicket from './pages/newticket/NewTicket'
import { Route, Routes } from 'react-router-dom'
// import axios from './api/axios'

const Dashboard = () => {
    useEffect(() => {
        const fetchData = async() =>{
            try{
                const response = await fetch('http://app.autointelli.com:10480/otrs/customer.pl?Action=CustomerTicketOverview;Subaction=MyTickets')
                console.log(response.data);
            }catch(err){
                console.log(err.message);
            }
        }    
    },[])

  return (
    <div className='dashboard'>
        <NavBarPanel/>
        <Table/>
        {/* <Routes>
            <Route path='/dash/newticket' element={<NewTicket/>}/>
        </Routes> */}

    </div>
  )
}

export default Dashboard