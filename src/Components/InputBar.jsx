import React from "react"
import { useState } from "react"
import Button from "./Button"

const InputBar = ({ userQuery, setUserQuery }) => {
  return (
    <div className="w-[50%] text-center m-auto p-5">
      <input
        className="w-full border-2 border-orange-400 rounded-xl p-2 text-gray-700 bg-orange-50 text-lg"
        value={userQuery}
        onChange={e => setUserQuery(e.target.value)}
        placeholder="Search countries by name, city and languages"
        type="text"
      />
      <Button
        onClick={() =>
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
          })
        }
      >
        Go To Charts
      </Button>
    </div>
  )
}

export default InputBar
