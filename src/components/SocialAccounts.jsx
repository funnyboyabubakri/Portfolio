import React from "react";
import "./../styles/SocialAccounts.css";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/adebayo-abubakri-808940380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  },
  {
    name: "GitHub",
    url: "https://github.com/funnyboyabubakri",
    img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/dev_abubakri",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968958.png", // X logo
  },
  {
    name: "Facebook",
    url: "https://facebook.com/adebayoabubakri",
    img: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@abubakri500",
    img: "https://cdn-icons-png.flaticon.com/512/3046/3046126.png",
  },
  {
    name: "Discord",
    url: "https://discord.com/users/adebayoabubakri",
    img: "https://cdn-icons-png.flaticon.com/512/2111/2111370.png",
  },
];


const SocialAccounts = () => {
  return (
    <div>
  <section className="SocialAccounts" id="social">
        <h1>My Social Accounts</h1>
        <div className="social-icons">
          <div className="social-row">
            {socialLinks.slice(0, 3).map((account) => (
              <div className="social-card" key={account.name}>
                <a href={account.url} target="_blank" rel="noopener noreferrer">
                  <img src={account.img} alt={account.name} className="social-img" />
                </a>
                <p>{account.name}</p>
              </div>
            ))}
          </div>
          <div className="social-row">
            {socialLinks.slice(3).map((account) => (
              <div className="social-card" key={account.name}>
                <a href={account.url} target="_blank" rel="noopener noreferrer">
                  <img src={account.img} alt={account.name} className="social-img" />
                </a>
                <p>{account.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialAccounts;