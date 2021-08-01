import React, { useState } from "react";
import * as RiIcons from "react-icons/ri";
import {
  ActiveExportMenuContainer,
  ExportHeaderComponent,
  Colors,
} from "../../CommonStyle";

function ExportMenu() {
  const [activeExportMenu, setActiveExportMenu] = useState(false);
  return (
    <div>
      <ExportHeaderComponent
        onClick={() => setActiveExportMenu(!activeExportMenu)}
        activeExportMenu={activeExportMenu}
      >
        <RiIcons.RiDashboardLine fontSize="22px" color={Colors.PrimaryColor} />
      </ExportHeaderComponent>
      <ActiveExportMenuContainer activeExportMenu={activeExportMenu}>
        <ul
          style={activeExportMenu ? { display: "block", listStyle: "none" } : { display: "none" }}
        >
          <li style={{marginLeft: -20, marginTop: 5, display: "flex", justifyContent: "space-around", alignItems: "center"}}>Export Document <RiIcons.RiMailDownloadLine fontSize="15px" color={Colors.PrimaryColor} /></li>
          <li style={{marginLeft: -20, marginTop: 5, display: "flex", justifyContent: "space-around", alignItems: "center"}}>Export PDF <RiIcons.RiFileExcel2Line fontSize="13px" color={Colors.PrimaryColor} /></li>
          <li style={{marginLeft: -20, marginTop: 5, display: "flex", justifyContent: "space-around", alignItems: "center"}}>Export Tally <RiIcons.RiDownload2Fill fontSize="13px" color={Colors.PrimaryColor} /></li>
        </ul>
      </ActiveExportMenuContainer>
    </div>
  );
}

export default ExportMenu;
