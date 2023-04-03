import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import React from "react";

function Rate2() {

  const router = useRouter();
  const [vote_count, setVote_count2] = useState("");
  const onChange = (e) => {
    setVote_count2(e);
  };

    function onSubmit () {
    axios
      .post(`http://localhost:3040/movies/${id}`, { vote_count })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(id)
    }

  return (
    <>
      <div className="container col-md-6 offset-md-3">
        <div className="card text-white bg-danger mb-3 p-2">
          <form method='POST' className="form-inline">
              <label for="form">Rate movie :&nbsp;</label>
              <input
              onChange={(e) => onChange(e.target.value)}
                type="number"
                name="vote_count"
                min="0.5" max="10" step="0.5"
                placeholder="0.5"
                className="text-black"
              /> /10&nbsp;&nbsp;&nbsp;
            <button type="submit" className="btn btn-warning mb-2 btn-sm"  onClick={() => onSubmit()}>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Rate2;