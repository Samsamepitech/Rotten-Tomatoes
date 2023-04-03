import "../../../style/admin/featuredInfo.css"
import { ArrowUpward } from "@material-ui/icons"

export default function featuredInfo() {
  return (
    <div className="featured"> 
        <div className="featuredItem">
            <span className="featuredTitle">
                Sales
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                    $2.255 
                </span>
            </div>
        <div className="featuredSub">Compared to last month : +$2.255 <span className="arrow"><ArrowUpward/> </span> </div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">
                Number of users
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                    36 
                </span>
            </div>
        <div className="featuredSub">Compared to last month: +36 <ArrowUpward/></div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">
                Taux de transfo user
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                    95%
                </span>
            </div>
        <div className="featuredSub">Compared to last month: +95% <ArrowUpward/></div>
        </div>
    </div>
  )
}