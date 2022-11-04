import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import logo from "../assets/irons1.jpg";
import cobra from "../assets/cobra.jpg";
import callaway from "../assets/callaway.jpg";
import titelist from "../assets/titleist.png";

export default function ImgMediaCard(props) {
  return (
    <>
      <Card
        sx={{
          maxWidth: 290,
          height: 350,
          float: "right",
          marginRight: "140px",
        }}
        className="irons-card"
      >
        <CardMedia component="img" alt="irons" height="190" image={logo} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ paddingLeft: "20px" }}
          >
            Taylormade
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Shop the finest irons that Taylormade has to offer
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            href="./AllProducts"
            sx={{ paddingLeft: "20px" }}
          >
            View Clubs
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{ maxWidth: 290, height: 350, float: "right" }}
        className="golf-card"
      >
        <CardMedia component="img" alt="irons" height="190" image={callaway} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ paddingLeft: "20px" }}
          >
            Callaway
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The latest to join the callaway army in taylormade
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            href="./AllProducts"
            sx={{ paddingLeft: "20px" }}
          >
            View Clubs
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{ maxWidth: 290, height: 350, float: "right" }}
        className="bag-card"
      >
        <CardMedia component="img" alt="irons" height="190" image={cobra} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ paddingLeft: "20px" }}
          >
            Cobra
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Take a look at what Callaway has to offer today
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            href="./AllProducts"
            sx={{ paddingLeft: "20px" }}
          >
            View Clubs
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
