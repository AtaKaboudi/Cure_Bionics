import React from "react";
import "./adminHome.scss";
import PublishIcon from "@material-ui/icons/Publish";

export default function AdminHome() {
  return (
    <div className="adminHome">
      <div className="partnerOverview">
        <div className="featuredItem">
          <span className="featuredTitle">
            Total patient number from all partners
          </span>
          <div className="featurePartnerContainer">
            <span className="featuredPartner">50</span>
          </div>
        </div>

        <div className="featuredItem">
          <span className="featuredTitle">
            Total patients waiting from all partners
          </span>
          <div className="featurePartnerContainer">
            <span className="featuredPartner">25</span>
          </div>
        </div>

        <div className="featuredItem">
          <span className="featuredTitle">
            Total patients fitted from all partners
          </span>
          <div className="featurePartnerContainer">
            <span className="featuredPartner">25</span>
          </div>
        </div>
      </div>

      <h1>Partner Overview</h1>
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
    </div>
  );
}
