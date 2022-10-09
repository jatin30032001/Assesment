import React from "react";
import "./createchallenge.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/navbar/Navbar";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { hackathons_list } from "../../hackathons_list";
import {useParams } from "react-router";

export default function CreateChallenge() {
  const param = useParams();

  return (
    <div>
      <Navbar />
      <div className="header">Challenge Details</div>
      <div className="createchallenge">
        <div>
          <p>Challenge Name</p>
          <label for="Challenge_Name"></label>
          <input type="text" id="Challenge_Name" className="input" size="51" value={param.id?hackathons_list[(param.id)-1].title:""}/>
          <p>Start Date</p>

          <div className="calendarbar">
            <label for="Challenge_Name" id="Start_Date"></label>
            <input
              type="date-time"
              class="inputbar"
              placeholder="DD/MM/YYYY"
              size="40"
              id="Start_Date"
              value={param.id?hackathons_list[(param.id)-1].start:""}
              style={{
                border: "0px",
                padding: "5px",
                marginLeft: "2px",
                outline: "none"
              }}
            />
            <span
              id="basic-addon2"
              style={{ padding: "5px", marginRight: "15px" }}
            >
              <CalendarTodayOutlinedIcon color="disabled" />
            </span>
          </div>
          <p>End Date</p>
          <div className="calendarbar">
            <label for="End_Date"></label>
            <input
              type="date-time"
              class="inputbar"
              placeholder="DD/MM/YYYY"
              size="40"
              id="End_Date"
              value={param.id?hackathons_list[(param.id)-1].end:""}
              style={{
                outline: "none",
                border: "0px",
                padding: "5px",
                marginLeft: "2px",
              }}
            />
            <span
              id="basic-addon2"
              style={{ padding: "5px", marginRight: "15px" }}
            >
              <CalendarTodayOutlinedIcon color="disabled" />
            </span>
          </div>
          <p>Description</p>
          <textarea type="text" className="desc_box"value={param.id?hackathons_list[(param.id)-1].description:""}/>
          <p>Image</p>
          <img src={param.id?hackathons_list[(param.id)-1].img:""} alt="" />
          <div className="upload_btn">
            <label for="Image"></label>
            <button>
              Upload{"   "}
              <span>
                <CloudUploadIcon color="disabled" />
              </span>
            </button>
            <input
              type="file"
              class="inputbar"
              placeholder="Upload"
              id="Image"
              style={{
                border: "0px",
                padding: "5px",
                marginLeft: "2px",
                display: "none",
              }}
            />
          </div>
          <div class="dropdown">
           <p>Level Type</p>
            <button
              class="btn btn-light dropdown-toggle input difficulty"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Easy
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" >
                Medium
              </a>
              <a class="dropdown-item" >
                Hard
              </a>
            </div>
          </div>
          <button className="create_challenge"> Create Challenge</button>
        </div>
      </div>
    </div>
  );
}
