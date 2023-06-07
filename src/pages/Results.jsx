import { useState, useEffect } from 'react'
import { ScrollRestoration } from 'react-router-dom'

import Main from 'components/markup/Main'
import Section from 'components/markup/Section'
import H1 from 'components/markup/H1'
import H2 from 'components/markup/H2'
import P from 'components/markup/P'

import data from 'assets/csvjson.json'

const Results = () => {
  const [parsedData, setParsedData] = useState([])
  const [tableRows, setTableRows] = useState([])
  const [values, setValues] = useState([])

  useEffect(() => {
    const rowsArray = []
    const valuesArray = []

    data.forEach((d) => {
      rowsArray.push(Object.keys(d))
      valuesArray.push(Object.values(d))
    })

    console.log(data)
    
    setParsedData(data)
    setTableRows(rowsArray[0])
    setValues(valuesArray)
  }, [data])

  return (
    <Main>
      <Section>
        <H1>2023 Results</H1>
        <P center>
          Visit this page after the race to view the results of the event!
        </P>
        <div className="bg-gradient-to-b from-orange-300 rounded-lg my-8">
          <table className="w-full text-black text-base table-auto">
            <thead>
              <tr>
                {tableRows.map((rows, index) => {
                  return <th className="p-3" key={index}>{rows}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {values.map((value, index) => {
                return (
                  <tr key={index}>
                    {value.map((val, i) => {
                      return <td className="border-2 border-gray-100 text-center p-1" key={i}>{val}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Section>
      <ScrollRestoration />
    </Main>
  )
}

export default Results

// Men's Inline Moreathon
// Women's Inline Moreathon
// Men's Quad Moreathon
// Women's Quad Moreathon
// Men's Inline 11.5K
// Women's Inline 11.5K
// Men's Quad 11.5K
// Women's Quad 11.5K
// Inline Moreathon Relay
// Quad Moreathon Relay
