import React from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as MdIcons from "react-icons/md";

function createData(orderId, orderDate, to, shipTo, shippingArea, amountPayable,source) {
  return {
    orderId,
    orderDate,
    to,
    shipTo,
    shippingArea,
    amountPayable,
    source,
    history: [
      {id:'ORL-01233',date:'05-07-2021',product:'Prince Pipes',brand:'Prince Pipes',tax:'₹1,500',total:'₹30,000'},
      {id:'ORL-01234',date:'05-07-2021',product:'Prince Pipes',brand:'Prince Pipes',tax:'₹1,500',total:'₹30,000'},
      {id:'ORL-01256',date:'05-07-2021',product:'Prince Pipes',brand:'Prince Pipes',tax:'₹1,500',total:'₹30,000'},
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow >
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <MdIcons.MdKeyboardArrowUp /> : <MdIcons.MdKeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>{row.orderId}</TableCell>
        <TableCell>{row.orderDate}</TableCell>
        <TableCell>{row.to}</TableCell>
        <TableCell>{row.shipTo}</TableCell>
        <TableCell>{row.shippingArea}</TableCell>
        <TableCell>{row.amountPayable}</TableCell>
        <TableCell>{row.source}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Line ID</TableCell>
                    <TableCell>Line Date</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Brand</TableCell>
                    <TableCell>Total Tax</TableCell>
                    <TableCell>Total Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.id}>
                      <TableCell>{historyRow.id}</TableCell>
                      <TableCell>{historyRow.date}</TableCell>
                      <TableCell>{historyRow.product}</TableCell>
                      <TableCell>{historyRow.brand}</TableCell>
                      <TableCell>{historyRow.tax}</TableCell>
                      <TableCell>{historyRow.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('OR-01200', '12-07-2021','Chennai Port', 'Agari Pipes Station', 'Mahara', '₹30,000', 'DMS'),
  createData('OR-01201','12-07-2021','Chennai Port', 'Agari Pipes Station', 'Mahara', '₹30,000', 'DMS'),
  createData('OR-01202', '12-07-2021','Chennai Port',  'Agari Pipes Station', 'Mahara', '₹30,000', 'DMS'),
  createData('OR-01203', '12-07-2021','Chennai Port', 'Agari Pipes Station', 'Mahara', '₹30,000','DMS'),
  createData('OR-01204', '12-07-2021','Chennai Port', 'Agari Pipes Station', 'Mahara', '₹30,000','DMS'),
  createData('OR-01204', '12-07-2021','Chennai Port', 'Agari Pipes Station', 'Mahara', '₹30,000','DMS'),
  createData('OR-01204', '12-07-2021','Chennai Port', 'Agari Pipes Station', 'Mahara', '₹30,000','DMS'),
  createData('OR-01204', '12-07-2021','Chennai Port', 'Agari Pipes Station', 'Mahara', '₹30,000','DMS'),
  createData('OR-01204', '12-07-2021','Chennai Port', 'Agari Pipes Station', 'Mahara', '₹30,000','DMS'),
  createData('OR-01204', '12-07-2021','Chennai Port', 'Agari Pipes Station', 'Mahara', '₹30,000','DMS'),
  createData('OR-01204', '12-07-2021','Chennai Port', 'Agari Pipes Station', 'Mahara', '₹30,000','DMS'),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell >Order ID</TableCell>
            <TableCell >Order Date</TableCell>
            <TableCell >To</TableCell>
            <TableCell >Ship To</TableCell>
            <TableCell >Shipping Area</TableCell>
            <TableCell >Amount Payable</TableCell>
            <TableCell >Source</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
