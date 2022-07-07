import React from "react";
import Flag from "lyef-flags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getFlag from "../helpers/getFlag";

const ProfileHeader = ({ user }) => {
  const flagSvg = user.location && getFlag(user.location.toLocaleLowerCase());
  return (
    <>
      <h1>
        {user.name}{" "}
        {user.location && flagSvg && (
          <Flag
            country={getFlag(user.location.toLocaleLowerCase())}
            size="small"
          />
        )}
      </h1>
      <span>
        <FontAwesomeIcon icon="link" />{" "}
        {user.public_repos >= 4 ? "This User Is Still Active" : "This User Is No Longer Active"}
      </span>
      <p>{user.bio && user.bio}</p>
    </>
  );
};

export default ProfileHeader;
