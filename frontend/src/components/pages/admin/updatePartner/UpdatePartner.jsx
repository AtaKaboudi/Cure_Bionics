import React from "react";
import "./updatePartner.scss";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PublishIcon from "@material-ui/icons/Publish";

export default function UpdatePartner() {
  return (
    <div className="partner">
      <div className="partnerTitleContainer">
        <h1 className="partnerTitle">Edit Partner</h1>

        <button className="partnerAddButton">Create</button>
      </div>
      <div className="partnerContainer">
        <div className="partnerShow">
          <div className="partnerShowTop">
            <img
              src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg"
              alt=""
              className="partnerShowImg"
            />
            <div className="partnerShowTopTitle">
              <span className="partnerShowPartnername">Foulen</span>
              <span className="partnerShowPartnerTitle">Tunis</span>
            </div>
          </div>
          <div className="partnerShowBottom">
            <span className="partnerShowTitle">Details</span>
            <div className="partnerShowInfo">
              <PermIdentityIcon className="partnerShowIcon" />
              <span className="partnerShowInfoTitle">Foulen</span>
            </div>
            <div className="partnerShowInfo">
              <PhoneIcon className="partnerShowIcon" />
              <span className="partnerShowInfoTitle">+21622222</span>
            </div>
            <div className="partnerShowInfo">
              <EmailIcon className="partnerShowIcon" />
              <span className="partnerShowInfoTitle">
                flenbenfoulen@gmail.com
              </span>
            </div>

            <div className="partnerShowInfo">
              <LocationOnIcon className="partnerShowIcon" />
              <span className="partnerShowInfoTitle">Tunisia</span>
            </div>
          </div>
        </div>
        <div className="partnerUpdate">
          <span className="partnerUpdateTitle">Edit</span>
          <form className="partnerUpdateForm">
            <div className="partnerUpdateLeft">
              <div className="partnerUpdateItem">
                <label>Partner name</label>
                <input
                  type="text"
                  placeholder="Foulen"
                  className="partnerUpdateInput"
                />
              </div>
              <div className="partnerUpdateItem">
                <label>Phone number</label>
                <input
                  type="text"
                  placeholder="+21622222"
                  className="partnerUpdateInput"
                />
              </div>
              <div className="partnerUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="flenbenfoulen@gmail.com"
                  className="partnerUpdateInput"
                />
              </div>
              <div className="partnerUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Tunisia"
                  className="partnerUpdateInput"
                />
              </div>
            </div>
            <div className="partnerUpdateRight">
              <div className="partnerUpdateUpload">
                <img
                  className="partnerUpdateImg"
                  src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?size=626&ext=jpg"
                  alt=""
                />
                <label htmlFor="file">
                  <PublishIcon className="partnerUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="partnerUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
