import "../Blogs/Blogs.scss";
import React from "react";
import { Chip, Button } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import NavigateNext from "@mui/icons-material/NavigateNext";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

export default function BlogsContainer() {
  return (
    <div className="blogContainer">
      <div>
        <h1>Blogs</h1>
      </div>
      <div className="blogContainer_content">
        <div className="blogcontent">
          <div className="blog_icon">
            <img src="./blogs/blogging.png"></img>
          </div>
          <div>
            <h2>Understanding Autism: Embracing Neurodiversity</h2>
          </div>
          <div>
            <p>
              In recent years, awareness of autism has grown tremendously — but
              there’s still much to learn, especially when it comes to true
              understanding and acceptance. Autism, formally known as Autism
              Spectrum Disorder (ASD), isn’t a one-size-fits-all condition.{" "}
            </p>
          </div>
          <div className="blogcontent_end">
            <div>
              <div>
                <Chip
                  icon={<FaceIcon />}
                  label="Reeba Shyrin"
                  variant="outlined"
                />
              </div>
              <div>
                <p>May 07, 2025</p>
              </div>
            </div>
            <div>
              <Button
                className="readMoreBtn"
                size="small"
                endIcon={<NavigateNext />}
                sx={{ textTransform: "none" }}
              >
                Read More
              </Button>
            </div>
          </div>
        </div>

        <div className="blogcontent">
          <div className="blog_icon">
            <img src="./blogs/blogging.png"></img>
          </div>
          <div>
            <h2>Understanding Autism: Embracing Neurodiversity</h2>
          </div>
          <div>
            <p>
              In recent years, awareness of autism has grown tremendously — but
              there’s still much to learn, especially when it comes to true
              understanding and acceptance. Autism, formally known as Autism
              Spectrum Disorder (ASD), isn’t a one-size-fits-all condition.{" "}
            </p>
          </div>
          <div className="blogcontent_end">
            <div>
              <div>
                <Chip
                  icon={<FaceIcon />}
                  label="Reeba Shyrin"
                  variant="outlined"
                />
              </div>
              <div>
                <p>May 07, 2025</p>
              </div>
            </div>
            <div>
              <Button
                className="readMoreBtn"
                size="small"
                endIcon={<NavigateNext />}
                sx={{ textTransform: "none" }}
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button className="viewAllBtn" variant="contained" endIcon={<ReadMoreIcon />}>
          View All Blogs
        </Button>
      </div>
    </div>
  );
}
