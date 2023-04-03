// import "../../style/admin/home.css"
import FeaturedInfo from "./featuredInfo/FeaturedInfo"
import Chart from "./charts/Charts"
import WidgetSmall from "components/admin/WidgetSmall"
import WidgetLarge from "components/admin/WidgetLarge"
import axios from 'axios';
import { render } from "@testing-library/react"



export default function HomeAdmin() {
  
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
    
      <div className="homeWidgets">
          <WidgetSmall />
          <WidgetLarge />
        </div>
    </div>
   
  
  )
}