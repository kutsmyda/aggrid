import {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import "./customComponent.css";



export const CustomStatsToolPanel = (props) => {

  const [firstName, setFirstName] = useState("''");
  const [secondName, seSecondName] = useState("''");
  const [email, setEmail] = useState("''");
  const [gender, setGender] = useState("''");
  const [ipAddress, setIpAddress] = useState("''");
  const [job, setJob] = useState("''");
  


  const updateTotals = (e) => {
    console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwww", e.data)
    setFirstName(e.data.first_name)
    seSecondName(e.data.last_name)
    setEmail(e.data.email)
    setGender(e.data.gender)
    setIpAddress(e.data.ip_address)
    setJob(e.data.job)
  }


  useEffect(() => {
    props.api.addEventListener( "cellClicked" ,updateTotals);

    return () => props.api.removeEventListener( "cellClicked" ,updateTotals);
  }, []);
  return <div className="custom-component-wrapper">
    <div className="personal-info-header">All information About user</div>
    <div className="personal-info-container">
      <div className="personal-info-desription">First Name</div>
      <div>{firstName}</div>
      <div className="personal-info-desription">Last Name</div>
      <div>{secondName}</div>
      <div className="personal-info-desription">Email</div>
      <div >{email}</div>
      <div className="personal-info-desription">Ip adress</div>
      <div >{ipAddress}</div>
      <div className="personal-info-desription">Job</div>
      <div>{job}</div>
    </div>
  </div>;
}
