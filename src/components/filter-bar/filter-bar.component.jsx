import './filter-bar.styles.css';

const FilterBar = ({ onClick, buttons, filter, header }) => (
    <div className="filter-bar">
        <h3>{header}: </h3>
        {buttons.map((button, id) => {
            
            let className = 'button'
            if( ( filter.includes(button) && button !== 'All'&& button !== 'All Tags'  ) || (( button === 'All' || button === 'All Tags' ) && filter.length === 0 )) {
                className += ' active'
            }

            console.log('filter-bar => ' + filter, button, className);

            return (
                <button 
                    key={id}
                    className={className}
                    onClick={onClick}
                    value={button}
                >
                    {button}
                </button>
            )
        })}
    </div>
)

export default FilterBar;

/*

    //{ id: 0, text: 'All', status : 'Active' },
    { id: 1, text: 'Android', status : 'Active' },
    { id: 2, text: 'React', status : 'Active' },
    { id: 3, text: 'Java', status : 'Active' },
    { id: 4, text: 'Powershell', status : 'Active' },
    { id: 5, text: '.NET', status : 'Active' },
    { id: 6, text: 'Android', status : 'Active' },
    { id: 7, text: 'Node', status : 'Active' },
    { id: 8, text: 'iOS', status : 'Active' },
    { id: 9, text: 'Python', status : 'Active' },
    { id: 10, text: 'ASPNET', status : 'Active' },
    { id: 11, text: 'Angular', status : 'Active' },
    { id: 12, text: 'cURL', status : 'Active' },
    { id: 13, text: 'Apex', status : 'Active' },
    { id: 14, text: 'UI Elements', status : 'Active' },
    { id: 15, text: 'Salesforce', status : 'Active' },
    { id: 16, text: 'Skills', status : 'Active' },
    { id: 17, text: 'API', status : 'Active' },
    { id: 18, text: 'SDK', status : 'Active' },
    { id: 19, text: 'Webhooks', status : 'Active' },
    { id: 20, text: 'CLI', status : 'Active' },
  
  */