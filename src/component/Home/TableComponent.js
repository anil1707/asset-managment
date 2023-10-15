import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
  styled,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
} from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const TableComponent = ({ rows, selectedTab }) => {
  console.log(selectedTab);
  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }
  return (
    <Box>
      <TableContainer sx={{ maxHeight: "60vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Asset Type</StyledTableCell>
              <StyledTableCell align="left">Brand</StyledTableCell>
              <StyledTableCell align="left">Asset ID</StyledTableCell>
              <StyledTableCell align="left">Price</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left">status</StyledTableCell>
              <StyledTableCell align="left">Allocated To</StyledTableCell>
              <StyledTableCell align="left">Allcoation Date</StyledTableCell>
              <StyledTableCell align="left">Service Ticket</StyledTableCell>
              <StyledTableCell align="left">Last Update</StyledTableCell>
              <StyledTableCell align="left">Varinty End</StyledTableCell>
              <StyledTableCell align="left">Location</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.assetId}>
                <StyledTableCell align="left">{row.assetType}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.brand}
                </StyledTableCell>
                <StyledTableCell align="left">{row.assetId}</StyledTableCell>
                <StyledTableCell align="left">{row.price}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.description}
                </StyledTableCell>
                <StyledTableCell
                  sx={{
                    color:
                      row.status === "Deallocated" || row.status === "Defactive"
                        ? "red"
                        : row.status === "Available for allocation"
                        ? "green"
                        : row.status === "Allocated"
                        ? "orange"
                        : "",
                  }}
                  align="left"
                >
                  {row.status}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.allocatedTo}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.allocationDate}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.serviceTicket}
                </StyledTableCell>
                <StyledTableCell align="left">{row.lastUpdate}</StyledTableCell>
                <StyledTableCell align="left">{row.varintyEnd}</StyledTableCell>
                <StyledTableCell align="left" width={"5.5%"}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {row.location}

                    <div>
                      <MoreVertIcon
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? "composition-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                      />
                      <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement="bottom-end"
                        transition
                        disablePortal
                      >
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{
                              transformOrigin:
                                placement === "bottom-start"
                                  ? "top left"
                                  : "left bottom",
                            }}
                          >
                            <Paper>
                              <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                  autoFocusItem={open}
                                  id="composition-menu"
                                  aria-labelledby="composition-button"
                                  onKeyDown={handleListKeyDown}
                                >
                                  {/* <MenuItem onClick={handleClose}>
                                        De-allocate
                                      </MenuItem> */}
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </div>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableComponent;
