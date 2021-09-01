import React from "react";
import "./partnersList.scss";
import PublishIcon from "@material-ui/icons/Publish";

export default function PartnersList() {
  return (
    <div className="partnerList">
      <div className="featuredPartnerCard">
        <img
          className="partnerShowImg"
          src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg"
          alt=""
        />
        <span className="featuredName">Foulen</span>
        <div className="featureAppointmentContainer"></div>
        <div className="updateButton">
          <button className="partnerUpdateButton">
            <PublishIcon className="partnerUpdateIcon" />
            Update
          </button>
        </div>
      </div>
      <div className="featuredPartnerCard">
        <img
          className="partnerShowImg"
          src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg"
          alt=""
        />
        <span className="featuredName">Foulen</span>
        <div className="featureAppointmentContainer"></div>
        <div className="updateButton">
          <button className="partnerUpdateButton">
            <PublishIcon className="partnerUpdateIcon" />
            Update
          </button>
        </div>
      </div>
      <div className="featuredPartnerCard">
        <img
          className="partnerShowImg"
          src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg"
          alt=""
        />
        <span className="featuredName">Foulen</span>
        <div className="featureAppointmentContainer"></div>
        <div className="updateButton">
          <button className="partnerUpdateButton">
            <PublishIcon className="partnerUpdateIcon" />
            Update
          </button>
        </div>
      </div>
      <div className="featuredPartnerCard">
        <img
          className="partnerShowImg"
          src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg"
          alt=""
        />
        <span className="featuredName">Foulen</span>
        <div className="featureAppointmentContainer"></div>
        <div className="updateButton">
          <button className="partnerUpdateButton">
            <PublishIcon className="partnerUpdateIcon" />
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
