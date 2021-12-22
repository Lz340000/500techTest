import React from 'react';


const Grid = ({ config, data }) => (
      <table>
        <thead>
        <tr>
          {config.map(({title}) => {
            return <th key={title}>{title}</th>
          })}
        </tr>
        </thead>
        <tbody>
        {data.map(item=>{
          return  <tr key={item.imdbID}> 
            {config.map(({field, component})=>{
              const Comp = component;
              return <td key={`${item.imdbID}${field}`}>{component? <Comp data={item[field]}/>:item[field]}</td>
            })}
        </tr>
        })}
        </tbody>
      </table>

  );

export default Grid;