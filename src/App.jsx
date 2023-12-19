import React from "react";
import "./app.css";
import Card from "./component/Card";
function App() {
  let card = [
    {
      title: "Free",
      monthPrice: "$0",
      user: "Single User",
      storage: "5GB Storage",
      project: "text-muted",
      phone: "tex-muted",
      subdomain: "text-muted",
      montlyStatus: "text-muted",
    },
    {
      title: "Plus",
      monthPrice: "$9",
      user: "5 User",
      storage: "50GB Storage",
      project: "",
      phone: "",
      subdomain: "",
      montlyStatus: "text-muted",
    },
    {
      title: "Plus",
      monthPrice: "$9",
      user: "5 User",
      storage: "50GB Storage",
      project: "",
      phone: "",
      subdomain: "",
      montlyStatus: "",
    },
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {card.map((e, i) => {
           return  <Card data={e} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
