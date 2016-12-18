import * as React from "react";

interface IEmpty {
}

export const Dashboard: React.StatelessComponent<IEmpty> = (props: IEmpty) => (
  <div className="adp-dashboard">
    <div className="container adp-dashboard-container">
      <div className="page-container"></div>
    </div>
  </div>
);
