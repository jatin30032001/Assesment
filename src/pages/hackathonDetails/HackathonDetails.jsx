import React from "react";
import Navbar from "../../components/navbar/Navbar";
import HackathonHeader from "../../components/hackathonheader/HackathonHeader";
import ".//hackathondetails.scss";
import { useNavigate,useParams } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { hackathons_list } from "../../hackathons_list";


export default function HackathonDetails() {
  const navigate = useNavigate();
  const param = useParams();
  const navigateEdit = (id) => {
    navigate(`/CreateChallenge/${id}`);
  };
  return (
    <div className="hackathondetails">
      <Navbar />
      <HackathonHeader Detail={hackathons_list[+(param.id)-1]}/>
      <div className="details">
        <div className="overview">
          Overview<p></p>
        </div>
        <div
          className="btn btn-success edit"
          style={{ cursor: "pointer" }}
          onClick={()=>{navigateEdit(param.id)}}
        >
          Edit
        </div>
        <div className="btn btn-outline-danger delete">Delete</div>
      </div>
      <div className="abouthackathon">
        <p className="aboutparagraph">
          Butterflies are the adult flying stage of certain insects belonging to
          an order or group called Lepidoptera. The word "Lepidoptera" means
          "scaly wings" in Greek. This name perfectly suits the insects in this
          group because their wings are covered with thousands of tiny scales
          overlapping in rows.
        </p>
        <p className="aboutparagraph">
          An agency of the Governmental Wildlife Conservation is planning to
          implement an automated system based on computer vision so that it can
          identify butterflies based on captured images. As a consultant for
          this project, you are responsible for developing an efficient model.
        </p>
        <p className="aboutparagraph">
          Your Task is to build an Image Classification Model using CNN that
          classifies to which class of weather each image belongs to.
        </p>
      </div>
    </div>
  );
}
