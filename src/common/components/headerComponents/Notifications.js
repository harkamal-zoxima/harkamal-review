import React, { useState } from "react";
import * as MdIcons from "react-icons/md";
import { NotificationHeaderComponents,Colors } from "../../CommonStyle";

function Notifications() {
  const [activeNotification, setActiveNotification] = useState(false);

  return (
    <NotificationHeaderComponents activeNotification={activeNotification}>
      {activeNotification ? (
        <section style={{display: "flex", justifyContent: "left"}}>
          <MdIcons.MdNotifications
          fontSize="20px"
          color={Colors.PrimaryColor}
        />
        <div style={{height: 15, width: 23, backgroundColor: Colors.AccentColor2, borderRadius: 15, textAlign: "center", fontSize: 11, marginTop: 3, color: Colors.PrimaryColor}}><b>2</b></div>
        </section>
        ) : (
          <MdIcons.MdNotificationsNone
          fontSize="22px"
          color={Colors.PrimaryColor}
          onClick={() => setActiveNotification(true)}
        />
        )}
      
    </NotificationHeaderComponents>
  );
}

export default Notifications;
