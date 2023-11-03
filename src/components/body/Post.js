import React from "react";
import styles from "@/styles/Home.module.css";
import { MdVerified } from "react-icons/md";
import Image from "next/image";
import { BsEmojiLaughing } from "react-icons/bs";

function Post() {
  //posts are stored in this array and is processed from backend to split the words in to action,subject,object for higher order utilisations.
  const posts = [
    {
      user: "Marina Valentine",
      verified: true,
      img: null,
      action: "replied to the topic",
      subject: "Welcome to the cosplayer group form in ",
      origin: "cosplayers group",
      time: "2 seconds ago",
      content: "Hello Everyone",
      comments: 2,
      share: 1,
      reactions: 1,
    },
    {
      user: "Marina Valentine",
      verified: true,
      img: "https://images.alphacoders.com/132/1328866.png",
      action: "posted",
      subject: "Picture",
      origin: null,
      time: "1 day ago",
      content: "www.animeamaze.com/mypage",
      comments: 0,
      share: 0,
      reactions: 3,
    },
  ];

  return (
    <>
      {posts.map((item, index) => {
        return (
          <div key={index} className={`${styles.main_p_cont}`}>
            <div className="row">
              <div className="col-1">
                <Image
                  src="/profile.svg"
                  alt="profile Logo"
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <div className={`col-11 mb-0 ${styles.post_container}`}>
                <div className="d-flex h-25">
                  <p className={`${styles.post_f1}`}>
                    {item.user}
                    {item.verified && (
                      <span>
                        <MdVerified className="text-info m-1" />
                      </span>
                    )}
                  </p>
                  {item.verified && (
                    <span className={`${styles.pro_member}`}>Pro Member</span>
                  )}
                  <p className={`${styles.post_f2}`}>{item?.action}</p>

                  {item?.subject.length < 10 && (
                    <>
                      <p className={`${styles.post_f1}`}>{item.origin}</p>
                      <p className={`${styles.post_f1}`}>{item.subject} </p>
                    </>
                  )}
                </div>
                <div>
                  {item?.subject.length >= 10 && (
                    <>
                      <p className={`${styles.post_f1}`}>
                        {item.subject}
                        {item.origin}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div>
              <p>{item?.content}</p>
              {item.img && (
                <Image
                  src={item.img}
                  alt="profile Logo"
                  width={380}
                  height={300}
                />
              )}
            </div>
            <div
              className={`row justify-content-between me-2 ms-2 ${styles.P_comments}`}
            >
              <div className="d-flex col-2">
                <BsEmojiLaughing className={`m-1 ${styles.p_emoji}`} />
                <p className={`${styles.p_font1}`}>{item.reactions}</p>
              </div>
              <div className="d-flex col-5 col-lg-4">
                <p className={`ms-1 me-1 ${styles.p_font1}`}>
                  {item.comments} comments
                </p>
                <p className={`me1-1 ms-1 ${styles.p_font1}`}>
                  {item.share} Shares
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Post;
