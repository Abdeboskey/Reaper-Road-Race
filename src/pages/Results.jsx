import { useState } from 'react'
import { ScrollRestoration } from 'react-router-dom'

import Main from 'components/markup/Main'
import Section from 'components/markup/Section'
import H1 from 'components/markup/H1'
import H2 from 'components/markup/H2'
import H3 from 'components/markup/H3'
import P from 'components/markup/P'

import MoreathonOverall from 'assets/results/MoreathonOverall.json'
import RelayOverall from 'assets/results/RelayOverall.json'
import SingleLapOverall from 'assets/results/SingleLapOverall.json'
import MoreathonWomenOverall from 'assets/results/MoreathonWomenOverall.json'
import MoreathonMenOverall from 'assets/results/MoreathonMenOverall.json'
import MoreathonInlineWomen from 'assets/results/MoreathonInlineWomen.json'
import MoreathonInlineMen from 'assets/results/MoreathonInlineMen.json'
import MoreathonQuadWomen from 'assets/results/MoreathonQuadWomen.json'
import SingleLapWomenOverall from 'assets/results/SingleLapWomenOverall.json'
import SingleLapMenOverall from 'assets/results/SingleLapMenOverall.json'
import SingleLapInlineWomen from 'assets/results/SingleLapInlineWomen.json'
import SingleLapInlineMen from 'assets/results/SingleLapInlineMen.json'
import SingleLapQuadWomen from 'assets/results/SingleLapQuadWomen.json'
import SingleLapQuadMen from 'assets/results/SingleLapQuadMen.json'

const Results = () => {
  const [year, setYear] = useState("2023")
  const tableRowStyle = "border border-gray-100 text-center p-1"

  const createTable = (data) => {
    const rowsArray = []
    const valuesArray = []

    data.forEach((d) => {
      rowsArray.push(Object.keys(d));
      valuesArray.push(Object.values(d));
    })

    return (
      <div className="bg-gradient-to-b from-orange-300 rounded-lg overflow-auto my-8">
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
    )
  }

  const handleChange = (event) => setYear(event.target.value)

  return (
    <Main>
        <H1>Results</H1>
        <div className="text-black text-center">
          <label>
            Year:{" "}
            <select className="bg-orange-300 rounded-md" value={year} onChange={handleChange}>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </label>
        </div>
        <P center>Congratulations to all of our {year} Skaters!</P>
        <H3>Moreathon Overall</H3>
        {createTable(MoreathonOverall)}
        <H3>Relay Overall</H3>
        {createTable(RelayOverall)}
        <H3>11.5K Overall</H3>
        {createTable(SingleLapOverall)}
        <H3>Moreathon Women Overall</H3>
        {createTable(MoreathonWomenOverall)}
        <H3>Moreathon Men Overall</H3>
        {createTable(MoreathonMenOverall)}
        <H3>Moreathon Inline Women</H3>
        {createTable(MoreathonInlineWomen)}
        <H3>Moreathon Inline Men</H3>
        {createTable(MoreathonInlineMen)}
        <H3>Moreathon Quad Women</H3>
        {createTable(MoreathonQuadWomen)}
        <H3>11.5K Women Overall</H3>
        {createTable(SingleLapWomenOverall)}
        <H3>11.5K Men Overall</H3>
        {createTable(SingleLapMenOverall)}
        <H3>11.5K Inline Women</H3>
        {createTable(SingleLapInlineWomen)}
        <H3>11.5K Inline Men</H3>
        {createTable(SingleLapInlineMen)}
        <H3>11.5K Quad Women</H3>
        {createTable(SingleLapQuadWomen)}
        <H3>11.5K Quad Men</H3>
        {createTable(SingleLapQuadMen)}
      <ScrollRestoration />
    </Main>
  )
}

export default Results
