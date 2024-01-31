import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function User(){

    const [patient, setpatient] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:9091/petex/getAll");
                setpatient(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    
const deleteDataById = async (id) => {
    try {
      const response = await fetch(`http://localhost:9091/petex/deluser/${id}`, {
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
                                                <th scope="col">petType</th>
                                                <th scope="col">petname</th>
                                                <th scope="col">species</th>
                                                <th scope="col">age</th>
                                                <th scope="col">gender</th>
                                                <th scope="col">vaccinated</th>
                                                <th scope="col">fullname</th>
                                                <th scope="col">email</th>
                                                <th scope="col">pwd</th>
                                                <th scope="col">phno</th>
                                                <th scope="col">city</th>
                                                <th scope="col">delete</th>


                                            </tr>
                                        </thead>
                                        <tbody>
                                            {patient.map((data, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td key={`${index}-patientname`}>{data.petType}</td>
                                                    <td key={`${index}-referaldoctorName`}>{data.petname}</td>
                                                    <td key={`${index}-hospitalname`}>{data.species}</td>
                                                    <td key={`${index}-bookingdate`}>{data.age}</td>
                                                    <td key={`${index}-slotime`}>{data.gender}</td>
                                                    <td key={`${index}-typeofServices`}>{data.vaccinated}</td>
                                                    <td key={`${index}-typeofServices`}>{data.fullname}</td>
                                                    <td key={`${index}-typeofServices`}>{data.email}</td>
                                                    <td key={`${index}-typeofServices`}>{data.pwd}</td>
                                                    <td key={`${index}-typeofServices`}>{data.phno}</td>

                                                    <td key={`${index}-typeofServices`}>{data.city}</td>
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