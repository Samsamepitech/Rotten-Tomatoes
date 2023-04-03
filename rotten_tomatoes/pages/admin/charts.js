import "../../../style/Adminstyle/chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector, Cell, } from 'recharts';



export default function Chart() {
    const dataNbrUser = [
        {
          name: 'January',
          "Active User": 0,

        },
        {
            name: 'February',
            "Active User": 100,
  
        },
        {
            name: 'March',
            "Active User": 50,
  
        },
        {
            name: 'April',
            "Active User": 250,
  
        },
        {
            name: 'Mai',
            "Active User": 300,
  
        },

      ];
      
      
  return (
    <div className="chart">
        <h3 className="chartTitle">
            User Analytics
        </h3>
        <ResponsiveContainer width="100%" aspect={4 / 1 }>
            <LineChart data={dataNbrUser}>
               <XAxis dataKey="name" stroke="#F7BE15"></XAxis>
               <Line type="monotone" dataKey="Active User" stroke="#F7BE15"></Line>
               <Tooltip/>
               <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
               <Legend/>
            </LineChart>
        </ResponsiveContainer>

    </div>
  )
}