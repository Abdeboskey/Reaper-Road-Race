import { useState, useEffect } from 'react'
import { ScrollRestoration } from 'react-router-dom'

import Main from 'components/markup/Main'
import Section from 'components/markup/Section'
import H1 from 'components/markup/H1'
import H2 from 'components/markup/H2'
import H3 from 'components/markup/H3'
import P from 'components/markup/P'

import rawData from 'assets/csvjson.json'

const Results = () => {
  const [categoryData, setCategoryData] = useState()
  const [overallCategories, setOverallCategories] = useState()
  const [tableRows, setTableRows] = useState([])
  const [values, setValues] = useState([])

  const tableRowStyle = "border-2 border-gray-100 text-center p-1"

  useEffect(() => {
    const rowsArray = []
    const valuesArray = []

   rawData.forEach((d) => {
      rowsArray.push(Object.keys(d))
      valuesArray.push(Object.values(d))
    })

    setOverallCategories(getOverallCategories())
    setCategoryData(getOrganizedCategories())
    setTableRows(rowsArray[0])
    setValues(valuesArray)
  }, [rawData])

  const getOverallCategories = () => {
    const overall = {
      "Moreathon Overall": [],
      "Moreathon Men's Overall": [],
      "Moreathon Women's Overall": [],
      "11.5 K Overall": [],
      "11.5 K Men's Overall": [],
      "11.5 K Women's Overall": [],
    }
     
    rawData.forEach((skater) => {
      if (skater['Race Type'] == 'Moreathon' && skater.Sex == 'Men') {
        overall["Moreathon Overall"].push(skater)
        overall["Moreathon Men's Overall"].push(skater)
      }

      if (skater['Race Type'] == 'Moreathon' && skater.Sex == 'Women') {
        overall["Moreathon Overall"].push(skater)
        overall["Moreathon Women's Overall"].push(skater)
      }
      
      if (skater['Race Type'] == '11.5 K' && skater.Sex == 'Men') {
        overall["11.5 K Overall"].push(skater)
        overall["11.5 K Men's Overall"].push(skater)
      }

      if (skater['Race Type'] == '11.5 K' && skater.Sex == 'Women') {
        overall["11.5 K Overall"].push(skater)
        overall["11.5 K Women's Overall"].push(skater)
      }
    })

    return overall
  }

  const getOrganizedCategories = () => {
    const organized = rawData.reduce((acc, skater) => {
      const key = skater['Race Type'] + " " + skater.Sex + "'s " + skater['Athlete Type']  
      
      if (!acc[key]) {
        acc[key] = [skater]
      } else {
        acc[key].push(skater)
      }
      
      return acc
    }, {})

    return organized
  }

  const createTables = (data) => {
    const categoryNames = Object.keys(data)
    const tableColumns = ['Name', 'Age', 'Team', 'City/State']  

    return categoryNames.map((categoryName, index) => {

      return (
        <div key={index}>
          <H3>{categoryName}</H3>
          <div className="bg-gradient-to-b from-orange-300 rounded-lg my-8">
            <table className="w-full text-black text-base table-auto">
              <thead>
                <tr>
                  {tableColumns.map((rows, index) => {
                    return <th className="p-3" key={index}>{rows}</th>
                  })}
                </tr>
              </thead>
              <tbody>
                {data[categoryName].map((skater, index) => {
                  return (
                    <tr key={index}>
                      <td className={tableRowStyle}>{skater['First Name'] + " " + skater['Last Name']}</td>
                      <td className={tableRowStyle}>{skater['Age']}</td>
                      <td className={tableRowStyle}>{skater['Team']}</td>
                      <td className={tableRowStyle}>{skater['City'] + ", " + skater['State']}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )
    })
  }

  return (
    <Main>
      {console.log('the stuff',categoryData)}
      {console.log('more stuff',overallCategories)}
      <Section>
        <H1>2023 Results</H1>
        {categoryData && createTables(categoryData)}
        {overallCategories && createTables(overallCategories)}
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
//
// I need to separate the skaters according to all of the unique combinations of category (Sex, Athlete Type, Race Type) and then sort each category by <Place>. 
//
// I will iterate through each skater, and check if their category combination is unique,
// If it is unique (ie does not exist yet), I will create a key and push the skater to that key.
// if it is not unique (ie already exists) I will push the skater to that key.
// I will then have an object with keys of all the existing combinations of category,
// where each key is an array of skater objects whose category combination matches that key.
//
// I need to create a table for each category
// I will iterate over the categoryData, and create a table for each
// for the tbody, i will iterate over the skaters and create a composite row for each one.
// Place | Time | first name + last name | age | team | City, State | Split
