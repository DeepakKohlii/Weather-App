import { Grid } from "@mui/material";
import React from "react";
import SectionHeader from "./SectionHeader";

const Layout1 = ({ content, title, sx, mb, sectionSubHeader }) => {
  return (
    <Grid container sx={sx} alignContent="center" alignItems="center">
      <Grid item xs={12}>
        <SectionHeader title={title} mb={mb || "0"} />
        {sectionSubHeader || null}
      </Grid>

        {/* <div style={{width: '100%'}}> */}
        {content}
        {/* </div> */}
    </Grid>
  );
};

export default Layout1;
