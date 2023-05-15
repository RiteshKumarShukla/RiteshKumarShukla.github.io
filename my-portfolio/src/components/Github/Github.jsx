import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";
import { Image } from "@chakra-ui/react";
const Github = () => {
  return (
    <div className="calender">
      <h1 className="title">Days I code</h1>
      <br />
      <div className="react-activity-calendar">
        <GitHubCalendar
          username="RiteshKumarShukla"
          style={{
            border: "1px solid #4db5ff",
            padding: "30px",
            borderRadius: "15px",
            width: "100%",
          }}
        />
      </div>
      <Image
        id="github-stats-card"
        width="80%"
        padding="0px"
        margin="10px"
        marginLeft="10%"
        border="1px solid #4db5ff"
        src="https://github-readme-stats.vercel.app/api?username=riteshkumarshukla&theme=transparent&hide_border=true&include_all_commits=false&count_private=false"
      />

      <Image
        id="github-streak-stats"
        width="80%"
        padding="0px"
        margin="10px"
        marginLeft="10%"
        border="1px solid #4db5ff"
        src="https://github-readme-streak-stats.herokuapp.com/?user=riteshkumarshukla&theme=transparent&hide_border=true"
      />

      <Image
        id="github-top-langs"
        width="80%"
        padding="0px"
        margin="10px"
        marginLeft="10%"
        border="1px solid #4db5ff"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=riteshkumarshukla&theme=transparent&hide_border=true&include_all_commits=false&count_private=false&layout=compact"
      />
    </div>
  );
};

export default Github;
