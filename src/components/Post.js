import {library as fontawesome} from "@fortawesome/fontawesome-svg-core"
import {faAngleDown, faComment, faEllipsisH, faHeart, faRetweet, faSquareCheck} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import React from "react"

import styled from "styled-components"

fontawesome.add(faSquareCheck, faAngleDown, faHeart, faComment, faRetweet, faEllipsisH)

const Post = ({data}) => {
  const {id, author, content, image, date, likes, comments, reposts} = data
  const {authorName, authorPhoto, authorNickname, isVerified} = author

  const authorLink = "#"

  return <PostWrapper className="post" key={id}>
    <div className="post_author_photo">
      <a href={`${authorLink}`}>
        <img src={authorPhoto} alt={`${authorName}`}/>
      </a>
    </div>

    <div className="post_main">
      <header>
        <div className="post_info">
          <a href={`${authorLink}`} className="post_info_author_name">{authorName}</a>
          <span className="post_info_author_verified">
            {isVerified ? <FontAwesomeIcon icon="fa-solid fa-square-check"/> : null}
          </span>
          <a href={`${authorLink}`} className="post_info_author_nickname">{authorNickname}</a>

          <div className="post_info_dot">&middot;</div>
          <div className="post_info_date_posted">{howMuchTimeHasPassedSinceDate(date)}</div>
        </div>

        <div className="post_wrap_arrow" onClick={showFullContent}>
          {isPostOverflown(image, content) ? <FontAwesomeIcon icon="fa-solid fa-angle-down"/> : null}
        </div>
      </header>

      <div className="post_content short">
        <div className="post_content_text">{content}</div>
        <div className="post_content_image">
          {image ? <img src={image} alt="post"/> : null}
        </div>
      </div>

      <div className="post_links">
        <div className="post_link post_link_like">
          <FontAwesomeIcon icon="fa-solid fa-heart"/>
          <span>{likes}</span>
        </div>
        <div className="post_link">
          <FontAwesomeIcon icon="fa-solid fa-comment"/>
          <span>{comments}</span>
        </div>
        <div className="post_link">
          <FontAwesomeIcon icon="fa-solid fa-retweet"/>
          <span>{reposts}</span>
        </div>
        <div className="post_link">
          <FontAwesomeIcon icon="fa-solid fa-ellipsis-h"/>
        </div>
      </div>
    </div>
  </PostWrapper>
}

function howMuchTimeHasPassedSinceDate(date) {
  const now = new Date()
  const postDate = new Date(date)
  const diff = now - postDate
  const diffInMinutes = diff / 1000 / 60
  const diffInHours = diffInMinutes / 60
  const diffInDays = diffInHours / 24
  const diffInWeeks = diffInDays / 7
  const diffInMonths = diffInWeeks / 4.3
  const diffInYears = diffInMonths / 12

  if (diffInMinutes < 1) return "just now"
  else if (diffInMinutes < 60) return `${Math.floor(diffInMinutes)} minutes ago`
  else if (diffInHours < 24) return `${Math.floor(diffInHours)} hours ago`
  else if (diffInDays < 7) return `${Math.floor(diffInDays)} days ago`
  else if (diffInWeeks < 4.3) return `${Math.floor(diffInWeeks)} weeks ago`
  else if (diffInMonths < 12) return `${Math.floor(diffInMonths)} months ago`
  else return `${Math.floor(diffInYears)} years ago`
}

function isPostOverflown(image, content) {
  return (image) || content.length > 700
}

function showFullContent(e) {
  e.target.closest(".post_main").querySelector(".post_content").classList.toggle("short")
}

const PostWrapper = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  max-width: 600px;
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #3b4a5a;
  border-radius: 10px;
  background-color: #15202b;

  .post_author_photo {
    width: 80px;
    min-width: 80px;
    margin-right: 10px;

    img {
      display: block;
      max-width: 100%;
      border-radius: 100%;
    }
  }

  .post_main {
    width: calc(100% - 90px);

    header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;

      .post_info {
        display: flex;
        color: #7f8f9c;

        a {
          text-decoration: none;
          color: inherit;
        }

        a, span, div {
          margin-right: 5px;
        }

        .post_info_author_name,
        .post_info_author_verified {
          font-weight: bold;
          color: white;
        }

        .post_info_dot {
          font-weight: bold;
        }
      }

      .post_wrap_arrow {
        color: #7f8f9c;
        cursor: pointer;
      }
    }

    .post_content {
      position: relative;
      overflow: hidden;
      height: max-content;
      //transition: all 2.3s ease; //not working :(

      &.short {
        max-height: 200px;
      }

      &.short:before {
        position: absolute;
        right: 0;
        left: 0;
        width: 100%;
        height: 200px;
        content: "";
        box-shadow: inset 0 -7px 9px -1px #15202b;
      }

      .post_content_text {
        margin-bottom: 5px;
        text-align: left;
        word-wrap: break-word;
        color: white;
      }

      .post_content_image img {
        display: block;
        max-width: 100%;
        border-radius: 15px;
      }
    }

    .post_links {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      padding: 0 20px;
      color: #7f8f9c;

      .post_link span {
        margin-left: 5px;
      }
    }
  }
`

export default Post