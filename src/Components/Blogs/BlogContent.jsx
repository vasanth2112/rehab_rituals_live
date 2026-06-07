import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BLOGS_CONTENT } from "../Blogs/BlogsListConstant.jsx";
import "../Blogs/BlogContent.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import "../Blogs/Blogs.scss";
import { Chip, Button, Snackbar, Alert } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NavigateNext from "@mui/icons-material/NavigateNext";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import ShareIcon from "@mui/icons-material/Share";
import useScrollReveal from "../../useScrollReveal.js";

export default function BlogContent() {
  useScrollReveal();
  const location = useLocation();
  const navigate = useNavigate();

  // Extract blog ID from query parameters
  const queryParams = new URLSearchParams(location.search);
  const blogId = queryParams.get("id");

  // Lookup blog by state or URL ID, fallback to first blog
  let blog = location.state?.blog;
  if (!blog && blogId) {
    blog = BLOGS_CONTENT.find((b) => b.id === blogId);
  }
  if (!blog) {
    blog = BLOGS_CONTENT[0];
  }

  const currentBlogUrl = `${window.location.origin}/blog/allblogs?id=${blog.id}`;
  const shareUrl = encodeURIComponent(currentBlogUrl);
  const shareText = encodeURIComponent(`Check out this blog: ${blog.heading}`);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.heading,
          text: `Check out this blog: ${blog.heading}`,
          url: currentBlogUrl,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(currentBlogUrl);
        setSnackbarMessage("Blog link copied to clipboard!");
        setSnackbarOpen(true);
      } catch (err) {
        console.error("Could not copy text: ", err);
        setSnackbarMessage("Failed to copy link to clipboard.");
        setSnackbarOpen(true);
      }
    }
  };

  // Helper to render content bodies with paragraphs and lists
  const renderBody = (body) => {
    if (!body) return null;

    if (typeof body === "string") {
      return <p>{body}</p>;
    }

    return body.map((item, i) => {
      if (typeof item === "string") {
       return <p key={i} dangerouslySetInnerHTML={{ __html: item }} />;
      }
      if (item.type === "list") {
        return (
          <ul key={i}>
            {item.items.map((li, j) => (
              <li key={j}>{li}</li>
            ))}
          </ul>
        );
      }
      if (item.type === "table") {
        return (
          <table key={i} className="custom-table">
            <thead>
              <tr>
                {item.headers.map((header, hIndex) => (
                  <th key={`header-${hIndex}`}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {item.rows.map((row, rowIndex) => (
                <tr key={`row-${rowIndex}`}>
                  {row.map((cell, cellIndex) => (
                    <td key={`cell-${rowIndex}-${cellIndex}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
      }
      return null;
    });
  };

  return (
    <>
      <div className="blogContent">
        <div className="blogDetail reveal">
          <img className="head_img" src={blog.content.headerImage}></img>
          <h1>{blog.content.heading}</h1>
          {renderBody(blog.content.body)}

          {blog.content.sections?.map((section, i) => (
            <div key={i}>
              <h2>{section.heading}</h2>
              {renderBody(section.body)}

              {section.subSections?.map((sub, k) => (
                <div key={k} style={{ marginLeft: "10px" }}>
                  <h3>{sub.heading}</h3>
                  {renderBody(sub.body)}
                </div>
              ))}
            </div>
          ))}
          <div className="summary">
            <h2>Summary</h2>
            {blog.content.summary.map((point, i) => {
              if (point.type === "para") {
                return point.item.map((p, j) => <p key={`${i}-p-${j}`}>{p}</p>);
              }
              if (point.type === "list") {
                return (
                  <ul key={`ul-${i}`}>
                    {point.item.map((li, j) => (
                      <li key={`${i}-li-${j}`}>{li}</li>
                    ))}
                  </ul>
                );
              }
              if (point.type === "table") {
                return (
                  <table key={i} className="custom-table">
                    <thead>
                      <tr>
                        {point.headers.map((header, hIndex) => (
                          <th key={`header-${hIndex}`}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {point.rows.map((row, rowIndex) => (
                        <tr key={`row-${rowIndex}`}>
                          {row.map((cell, cellIndex) => (
                            <td key={`cell-${rowIndex}-${cellIndex}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                );
              }
              return null;
            })}
          </div>
          <div className="author_reference">
            <div className="author">
              <div>
                <img src={blog.author.profileImg} />
              </div>
              <div>
                <h3>Author</h3>
                <p>
                  <strong>Name : </strong>
                  {blog.author.name}
                </p>
                <p>
                  <strong>Designation : </strong> {blog.author.designation}
                </p>
                <p>
                  <strong>Workplace : </strong>
                  {blog.author.workplace}
                </p>
              </div>
            </div>
            {blog.content.references && blog.content.references.length > 0 && (
              <div className="reference">
                <h3>References</h3>
                <ul>
                  {blog.content.references.map(
                    (ref, i) => ref && <li key={i}>{ref}</li>
                  )}
                </ul>
              </div>
            )}

            <div>
              <div className="post">
                <p>Post By</p>
              </div>
              <div className="bottom">
                <div className="post_by">
                  <div>
                    <Chip
                      avatar={
                        <Avatar
                          alt="Author"
                          src={blog.posted.profileImg}
                          sx={{ width: 32, height: 32 }}
                        />
                      }
                      label={blog.posted.name}
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
                <div className="share">
                  {/* <div>
                    <p>Share</p>
                  </div> */}
                  <div className="socia_icons">
                    <button
                      onClick={handleShareClick}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        display: "flex",
                        alignItems: "center"
                      }}
                      title="Share / Copy Link"
                    >
                      <ShareIcon style={{ fontSize: "25px", color: "#000" }} />
                    </button>
                    <a
                      href="https://www.instagram.com/rehabrituals"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon
                        style={{ color: "#E1306C", fontSize: "25px" }}
                      />
                    </a>

                    {/* WhatsApp Share */}
                    <a
                      href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon
                        style={{ color: "#25D366", fontSize: "25px" }}
                      />
                    </a>

                    {/* Email Share */}
                    <a
                      href={`mailto:?subject=${shareText}&body=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <EmailIcon
                        style={{ color: "#D44638", fontSize: "25px" }}
                      />
                    </a>

                    {/* Facebook Share */}
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon
                        style={{ color: "#1877F2", fontSize: "25px" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomButtons">
          <div className="back_color">
            <Button
              className="backToHome"
              variant="contained"
              startIcon={<ArrowBackIcon className="arrowIcon" />}
              onClick={() => navigate(`/`)}
            >
              Back to Home
            </Button>
            <Button
              className="backToHome"
              variant="contained"
              startIcon={<ArrowDownwardIcon className="arrowIcon" />}
              onClick={() => {
                const element = document.getElementById("blogs");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" }); // smooth scroll
                }
              }}
            >
              View All Blogs
            </Button>
            <Button
              className="backToHome"
              variant="contained"
              startIcon={<ArrowUpwardIcon className="arrowIcon" />}
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                setTimeout(() => {
                  navigate(`/blog/allblogs?id=${blog.id}`, { state: { blog } });
                }, 300);
              }}
            >
              Back to Top
            </Button>
          </div>
        </div>
      </div>
      <div
        className="blogContainer"
        id="blogs"
        style={{
          backgroundColor: "#efeeee",
          margin: "0px",
          padding: "0px 0px 50px 0px",
        }}
      >
        <div>
          <h1 className="reveal">All Blogs</h1>
        </div>
        <div className="blogContainer_content">
          {BLOGS_CONTENT.map((blog, index) => (
            <div className={`blogcontent reveal reveal-scale reveal-delay-${(index % 3) + 1}`} key={blog.id}>
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
                          src={blog.posted.profileImg}
                          sx={{ width: 32, height: 32 }}
                        />
                      }
                      label={blog.posted.name}
                      variant="outlined"
                    />
                  </div>
                  <div className="dateOfPost">
                    <div>
                      <CalendarMonthIcon
                        fontSize="small"
                        sx={{ color: "rgb(102, 100, 100)", height: "18px" }}
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
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                      setTimeout(() => {
                        navigate(`/blog/allblogs?id=${blog.id}`, { state: { blog } });
                      }, 300); // wait 300ms (adjust as needed)
                    }}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
