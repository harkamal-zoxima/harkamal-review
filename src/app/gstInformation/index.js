import React, { useEffect } from 'react'
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
    MainContainer,
    HeaderContainer,
    RouteTopicContainer,
    BreadcrumbLink,
    PageTopic,
    Colors,
    PageContent,
  } from "../../common/CommonStyle";

function GstInformation () {
  const themeContext = useContext(ThemeContext);

    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: Colors.SecondaryColorTranslucent,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
          borderRight: "1px solid rgba(224, 224, 224, 1)",
        },
      }))(TableCell);
    
      const StyledTableRow = withStyles((theme) => ({
        root: {
          "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);

      const useStyles = makeStyles({
        table: {
          minWidth: 700,
        },
      });
      const classes = useStyles();

    return (
        <MainContainer>
      <HeaderContainer>
        <RouteTopicContainer>
        <Breadcrumbs style={{color: themeContext.breadcrumbActiveColor}}>
            <BreadcrumbLink
              color="inherit"
              custom={{
                color: themeContext.breadcrumbActiveColor,
                fontFamily: themeContext.fontFamily,
                fontSize: "15px"
              }}
            >
              GST Information
            </BreadcrumbLink>
          </Breadcrumbs>
          <PageTopic>GST INFORMATION</PageTopic>
        </RouteTopicContainer>
      </HeaderContainer>
    <PageContent>

  <TableContainer component={Paper} style={{ width: "95%" }}>
    <Table className={classes.table} aria-label="customized table">

      <TableHead style = {{backgroundColor: Colors.AccentColor1}}>
        <StyledTableRow>
          <StyledTableCell>Sr No</StyledTableCell>
          <StyledTableCell>State</StyledTableCell>
          <StyledTableCell>Provisional Id</StyledTableCell>
          <StyledTableCell>Date of Filling</StyledTableCell>
          <StyledTableCell>ARN</StyledTableCell>
          <StyledTableCell>Link</StyledTableCell>
        </StyledTableRow>
      </TableHead>

      <TableBody>
          <StyledTableRow>
            <StyledTableCell>1</StyledTableCell>
            <StyledTableCell>Maharashtra</StyledTableCell>
            <StyledTableCell>27AAACP2319J1ZI</StyledTableCell>
            <StyledTableCell>06/06/2017</StyledTableCell>
            <StyledTableCell>AA270617028418Y</StyledTableCell>
            <StyledTableCell><button>Download</button></StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell>2</StyledTableCell>
            <StyledTableCell>Dadra Nagar & Haveli</StyledTableCell>
            <StyledTableCell>26AAACP2319J1ZK</StyledTableCell>
            <StyledTableCell>06/06/2017</StyledTableCell>
            <StyledTableCell>AA260617000131U</StyledTableCell>
            <StyledTableCell><button>Download</button></StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell>3</StyledTableCell>
            <StyledTableCell>Uttarakhand</StyledTableCell>
            <StyledTableCell>05AAACP2319J1ZO</StyledTableCell>
            <StyledTableCell>07/06/2017</StyledTableCell>
            <StyledTableCell>AA0506170032280Q</StyledTableCell>
            <StyledTableCell><button>Download</button></StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell>4</StyledTableCell>
            <StyledTableCell>Tamilnadu</StyledTableCell>
            <StyledTableCell>33AAACP2319J1ZP</StyledTableCell>
            <StyledTableCell>06/06/2017</StyledTableCell>
            <StyledTableCell>AA3306170266539</StyledTableCell>
            <StyledTableCell><button>Download</button></StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell>5</StyledTableCell>
            <StyledTableCell>Uttar Pradesh</StyledTableCell>
            <StyledTableCell>09AAACP2319J1ZG</StyledTableCell>
            <StyledTableCell>06/06/2017</StyledTableCell>
            <StyledTableCell>AA090617028285Z</StyledTableCell>
            <StyledTableCell><button>Download</button></StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell>6</StyledTableCell>
            <StyledTableCell>Odissa</StyledTableCell>
            <StyledTableCell>21AAACP2319J1ZU</StyledTableCell>
            <StyledTableCell>06/06/2017</StyledTableCell>
            <StyledTableCell>AA210617003960K</StyledTableCell>
            <StyledTableCell><button>Download</button></StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell>7</StyledTableCell>
            <StyledTableCell>West Bengal</StyledTableCell>
            <StyledTableCell>19AAACP2319J1ZF</StyledTableCell>
            <StyledTableCell>06/06/2017</StyledTableCell>
            <StyledTableCell>AA190617009479Q</StyledTableCell>
            <StyledTableCell><button>Download</button></StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell>8</StyledTableCell>
            <StyledTableCell>Bihar</StyledTableCell>
            <StyledTableCell>10AAACP2319J1ZX</StyledTableCell>
            <StyledTableCell>06/06/2017</StyledTableCell>
            <StyledTableCell>AA100617007572M</StyledTableCell>
            <StyledTableCell><button>Download</button></StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell>9</StyledTableCell>
            <StyledTableCell>Gujarat</StyledTableCell>
            <StyledTableCell>24AAACP2319J1ZO</StyledTableCell>
            <StyledTableCell>06/06/2017</StyledTableCell>
            <StyledTableCell>AA240617026265B</StyledTableCell>
            <StyledTableCell><button>Download</button></StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell>10</StyledTableCell>
            <StyledTableCell>Karnataka</StyledTableCell>
            <StyledTableCell>29AAACP2319J1ZE</StyledTableCell>
            <StyledTableCell>06/06/2017</StyledTableCell>
            <StyledTableCell>AA290617014736W</StyledTableCell>
            <StyledTableCell><button>Download</button></StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell>11</StyledTableCell>
            <StyledTableCell>Andra Pradesh</StyledTableCell>
            <StyledTableCell>37AAACP2319J2ZG</StyledTableCell>
            <StyledTableCell>06/06/2017</StyledTableCell>
            <StyledTableCell>AA100617007572M</StyledTableCell>
            <StyledTableCell><button>Download</button></StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell>12</StyledTableCell>
            <StyledTableCell>Kerala</StyledTableCell>
            <StyledTableCell>32AAACP2319J1ZR</StyledTableCell>
            <StyledTableCell>06/06/2017</StyledTableCell>
            <StyledTableCell>AA320617003981D</StyledTableCell>
            <StyledTableCell><button>Download</button></StyledTableCell>
          </StyledTableRow>
          
      </TableBody>

    </Table>
    </TableContainer>

    <TableContainer component={Paper} style={{ width: "95%", marginTop: "2%" }}>
    <Table className={classes.table} aria-label="customized table">

      <TableHead style = {{backgroundColor: Colors.AccentColor1}}>
        <StyledTableRow>
          <StyledTableCell>HSN Code</StyledTableCell>
          <StyledTableCell>Description</StyledTableCell>
          <StyledTableCell>Category</StyledTableCell>
          <StyledTableCell>GST%</StyledTableCell>
        </StyledTableRow>
      </TableHead>

      <TableBody>
          <StyledTableRow>
            <StyledTableCell>3971 23 90</StyledTableCell>
            <StyledTableCell width= "550px">Tubes, Pipes and hoses, and fittings therefor (for example, joints, elbows, flanges), of plastics - Other</StyledTableCell>
            <StyledTableCell>PVC Pipes (PVC & CPVC Pipes)</StyledTableCell>
            <StyledTableCell>18%</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell>3971 40 00</StyledTableCell>
            <StyledTableCell width= "550px">Tubes, Pipes and hoses, and fittings therefor (for example, joints, elbows, flanges), of plastics - Fittings</StyledTableCell>
            <StyledTableCell>PVC, CPVC & PPR Fittings</StyledTableCell>
            <StyledTableCell>18%</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell>3506 10 00</StyledTableCell>
            <StyledTableCell width= "550px">Prepared glues and other prepared adhesives, not elsewhere specified or included; products suitable for use as glues or adhesives, put up for retail sale as glues or adhesives, not exceeding a net weight of 1 kg.</StyledTableCell>
            <StyledTableCell>PVC Pipes (PVC & CPVC Pipes)</StyledTableCell>
            <StyledTableCell>18%</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell>3214 90 20</StyledTableCell>
            <StyledTableCell width= "550px">Glaziers' putty, grafting putty, resin cements, caulking compounds and others mastics; painters' filling; non-refractory surfacing preparations</StyledTableCell>
            <StyledTableCell>PVC Resin</StyledTableCell>
            <StyledTableCell>18%</StyledTableCell>
          </StyledTableRow>
          
      </TableBody>

    </Table>
    </TableContainer>
    
    </PageContent>
    </MainContainer>
  );
};
  
export default GstInformation;