import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();

  return (
    <div>
      <p>{err.data}</p>
      <p>
        {err.status}: {err.statusText}
      </p>
    </div>
  );
}

export default Error;
