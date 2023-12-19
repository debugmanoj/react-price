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
      projectIcon: "fas fa-times",
      phone: "tex-muted",
      phoneIcon: "fas fa-times",
      subdomain: "text-muted",
      subdomainIcon: "fas fa-times",
      montlyStatus: "text-muted",
      monthlyStatusIcon: "fas fa-times",
    },
    {
      title: "Plus",
      monthPrice: "$9",
      user: "5 User",
      storage: "50GB Storage",
      project: "",
      projectIcon: "fas fa-check",
      phone: "",
      phoneIcon: "fas fa-check",
      subdomain: "",
      subdomainIcon: "fas fa-check",
      montlyStatus: "text-muted",
      monthlyStatusIcon: "fas fa-times",
    },
    {
      title: "Plus",
      monthPrice: "$9",
      user: "5 User",
      storage: "50GB Storage",
      project: "",
      projectIcon: "fas fa-check",
      phone: "",
      phoneIcon: "fas fa-check",
      subdomain: "",
      subdomainIcon: "fas fa-check",
      montlyStatus: "",
      monthlyStatusIcon: "fas fa-check",
    },
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {card.map((e, i) => {
            return <Card data={e} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
