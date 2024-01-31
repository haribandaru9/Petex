import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Appointment(){

    const [Appointment, setAppointment] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:9090/petex/getAll");
                setAppointment(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    
const deleteDataById = async (id) => {
    try {
      const response = await fetch(`http://localhost:9090/petex/delete/{customerId}`, {
        method: 'DELETE',
        
      });
  
      if (response.ok) {
        alert(`Record with ID ${id} deleted successfully`);
      } else {
        console.error(`Failed to delete record with ID ${id}`);
      }
    } catch (error) {
      console.error('Error deleting record:', error);
      throw error;
    }
  };




return(
<>
        
                            <div className="container">
                                <div className="table-responsive">
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">customerName</th>
                                                <th scope="col">customerEmail</th>
                                                <th scope="col">customerphno</th>
                                                <th scope="col">date</th>
                                                <th scope="col">time</th>
                                                <th scope="col">description</th>
                                               <th scope="col">delete</th>


                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Appointment.map((data, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td key={`${index}-customerName`}>{data.customerName}</td>
                                                    <td key={`${index}-customeremail`}>{data.customeremail}</td>
                                                    <td key={`${index}-customerphno`}>{data.customerphno}</td>
                                                    <td key={`${index}-date`}>{data.date}</td>
                                                    <td key={`${index}-time`}>{data.time}</td>
                                                    <td key={`${index}-description`}>{data.description}</td>
                                                    <td><button type="submit"onClick={()=>deleteDataById(data.id)}></button></td>


                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        
                
                   


</>
);
}