import React from "react";
import { useParams } from "react-router-dom";
import { BLOGS_CONTENT } from "../Blogs/BlogsListConstant.jsx";
import "../Blogs/BlogContent.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BlogContent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const blog = BLOGS_CONTENT.find((b) => b.id === id);

  if (!blog) return <div>Blog not found.</div>;

  // Helper to render content bodies with paragraphs and lists
  const renderBody = (body) => {
    if (!body) return null;

    if (typeof body === "string") {
      return <p>{body}</p>;
    }

    return body.map((item, i) => {
      if (typeof item === "string") {
        return <p key={i}>{item}</p>;
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
      return null;
    });
  };

  return (
    <div className="blogContent">
      <div className="blogDetail">
        <img src={blog.content.headerImage}></img>
        <h1>{blog.content.heading}</h1>
        {renderBody(blog.content.body)}

        {blog.content.sections?.map((section, i) => (
          <div key={i}>
            <h2>{section.heading}</h2>
            {renderBody(section.body)}

            {section.subSections?.map((sub, k) => (
              <div key={k} style={{ marginLeft: "20px" }}>
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
            return null;
          })}
        </div>
        <div className="author_reference">
          <div className="author">
            <div>
              <img src={blog.profileImg} />
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
          <div className="reference">
            <h3>References</h3>
            <ul>
              {blog.content.references.map((ref, i) => (
                <li key={i}>{ref}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
          <Button
            className="backToHome"
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(`/`)}
          >
            Back to Home
          </Button>
        </div>
    </div>
  );
}
