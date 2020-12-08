import React from "react"
import App from "./form"

const form = () => {
    return (

        <form className="form-group mt-5" onSubmit={handleSubmit}>
        <input
          className="form-control"
          ref={APP.inputRef}
          placeholder="Start typing what you need to do..."
        />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Add to List
        </button>
      </form>

    )
}

