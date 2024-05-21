import { useState } from 'react'
import { ScrollRestoration } from 'react-router-dom'

import Main from 'components/markup/Main'
import Section from 'components/markup/Section'
import H1 from 'components/markup/H1'
import H2 from 'components/markup/H2'
import H3 from 'components/markup/H3'
import P from 'components/markup/P'

import results from 'assets/results/results.json'

const Results = () => {
  const [year, setYear] = useState("2024")
  const tableRowStyle = "border border-gray-100 text-center p-1"

  const createTables = (data) => {
    return data.categories.map((category) => {
      const rowsArray = []
      const valuesArray = []

      category.results.forEach((result) => {
        rowsArray.push(Object.keys(result));
        valuesArray.push(Object.values(result));
      })

      return (
        <div className="my-8">
          <H3>{year}{" "}{category.name}</H3>
          <div className="bg-gradient-to-b from-orange-300 rounded-lg overflow-auto">
            <table className="w-full text-black text-xs table-auto">
              <thead>
                <tr>
                  {rowsArray[0].map((rows, index) => {
                    return <th className="p-3" key={index}>{rows}</th>
                  })}
                </tr>
              </thead>
              <tbody>
                {valuesArray.map((value, index) => {
                  return (
                    <tr key={index}>
                      {value.map((val, i) => {
                        return <td key={i} className={tableRowStyle}>{val}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )
    })
  }

  const handleChange = (event) => setYear(event.target.value)

  return (
    <Main>
        <H1>Results</H1>
        <div className="text-black text-center">
          <label>
            Year:{" "}
            <select
              className="bg-orange-300 rounded-md"
              value={year}
              onChange={handleChange}
            >
              {Object.keys(results).map((value) => <option
              value={value}>{value}</option>)}
            </select>
          </label>
        </div>
        <P center>Congratulations to all of our {year} Skaters!</P>
        {createTables(results[year])}
      <ScrollRestoration />
    </Main>
  )
}

export default Results
