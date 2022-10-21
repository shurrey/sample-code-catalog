import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component'
import FilterBar from './components/filter-bar/filter-bar.component'
import './App.css';

const App = () => {

  const languages = [ 
    'All',
    'Android',
    'React',
    'Java',
    'Powershell',
    '.NET',
    'Node',
    'iOS',
    'Python',
    'ASPNET',
    'Angular',
    'cURL'
  ];

  const tags = [ 
    'All Tags',
    'UI Elements',
    'Salesforce',
    'Skills',
    'API',
    'SDK',
    'Webhooks',
    'CLI'
  ];

  const [lang_filter, setLangFilter] = useState([]);
  const [tag_filter, setTagFilter] = useState([]);
  const [samples, setSamples] = useState([]);
  const [filteredSamples, setFilteredSamples] = useState(samples);

  useEffect(() => {
    fetch('sample-code.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(samples){
        console.log(samples);
        samples.sort((a, b) => b.last_update.localeCompare(a.last_update));
        console.log(samples);
        setSamples(samples)
      });
  }, []);

  useEffect(() => {
    let newFilteredSamples;
    
    if ( lang_filter.length === 0 && tag_filter.length === 0) {
      newFilteredSamples = samples
    } else {
      newFilteredSamples = samples.filter((sample) => {
        return tag_filter.includes(sample.tags) || tag_filter.includes(sample.name) || lang_filter.includes(sample.language) || lang_filter.includes(sample.name);
      });
    }

    setFilteredSamples(newFilteredSamples);
  }, [samples, lang_filter, tag_filter]);

  const onLangFilterChange = (event) => {
    const value = event.target.value
    console.log("onFilterChange value => " + value);
    let newFilter;

    if (lang_filter.length === 0) {
      newFilter = [value];
    } else if (value === 'All' ) {
      newFilter = [];
    } else if (lang_filter.includes(value)) {
      newFilter = lang_filter.filter((item) => item !== value);
    } else {
      newFilter = lang_filter.concat(value);
    }

    setLangFilter(newFilter);
   
  };

  const onTagFilterChange = (event) => {
    const value = event.target.value
    console.log("onFilterChange value => " + value);
    let newFilter;

    if (tag_filter.length === 0) {
      newFilter = [value];
    } else if (value === 'All Tags' ) {
      newFilter = [];
    } else if (tag_filter.includes(value)) {
      newFilter = tag_filter.filter((item) => item !== value);
    } else {
      newFilter = tag_filter.concat(value);
    }

    setTagFilter(newFilter);
   
  };

  return (
    <div className="App">

        <h1 className='app-title'>Sample Code Catalog</h1>
        <div>
          <FilterBar onClick={onLangFilterChange} buttons={languages} filter={lang_filter} header="Languages" />
          <FilterBar onClick={onTagFilterChange} buttons={tags} filter={tag_filter} header="Tags" />
        </div>
        <CardList samples={filteredSamples} />

      </div>
  )

}

export default App;
