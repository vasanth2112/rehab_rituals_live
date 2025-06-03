import "../Blogs/Blogs.scss";
import React from "react";
import { Chip, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import NavigateNext from "@mui/icons-material/NavigateNext";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Divider from "@mui/material/Divider";
import { BLOGS_CONTENT } from "../Blogs/BlogsListConstant.jsx";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";

export default function BlogsContainer() {
  const navigate = useNavigate();
  return (
    <div className="blogContainer" id="blogs">
      <div>
        <h1>Latest Blogs</h1>
      </div>
      <div className="blogContainer_content">
        {BLOGS_CONTENT.slice(-2).map((blog) => (
          <div className="blogcontent" key={blog.id}>
            <div className="blog_img">
              <img src={blog.cardImg}></img>
            </div>
            <div>
              <h2 className="clamp-2-lines">{blog.heading}</h2>
            </div>
            <div>
              <p className="clamp-3-lines">{blog.cardContent}</p>
            </div>
            <Divider variant="middle" />
            <div className="blogcontent_end">
              <div>
                <div>
                  <Chip
                    avatar={
                      <Avatar
                        alt={blog.author}
                        src={blog.profileImg}
                        sx={{ width: 32, height: 32 }}
                      />
                    }
                    label={blog.author.name}
                    variant="outlined"
                  />
                </div>
                <div className="dateOfPost">
                  <div>
                    <CalendarMonthIcon
                      fontSize="small"
                      sx={{ color: "rgb(102, 100, 100)", height: "15px" }}
                    />
                  </div>
                  <div>
                    <p>{blog.dateOfPost}</p>
                  </div>
                </div>
              </div>
              <div>
                <Button
                  className="readMoreBtn"
                  size="small"
                  endIcon={<NavigateNext />}
                  sx={{ textTransform: "none" }}
                  onClick={() =>
                    navigate(`/blog/allBlogs`, { state: { blog } })
                  }
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Button
          className="viewAllBtn"
          variant="contained"
          endIcon={<ReadMoreIcon />}
          onClick={() => {
            navigate(`/blog/allBlogs`, { state: { blog: BLOGS_CONTENT[0] } });
          }}
        >
          View All Blogs
        </Button>
      </div>
    </div>
  );
}
