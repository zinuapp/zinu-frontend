import { useContext, useState, useEffect, useRef, useCallback } from 'react';

import { AddressContainer } from '../AdressModal/AddressModalStyle';

import { Location } from '../../models/Location';

import { OpenStreetMapProvider } from 'leaflet-geosearch';

const AddressModal: React.FC = () => { 
    const [isFrom, setIsFrom] = useState(true);
    const [searchResults, setSearchResults] = useState([]);
    
   
    const [selectedFrom, setSelectedFrom ]= useState({x: 0, y: 0, label: ' '});
    const [ selectedTo, setSelectedTo ] = useState({x: 0, y: 0, label: ' '});
    
    const provider:any  = useRef();
    const searchRef:any  = useRef();
    

     useEffect(() => {
        initProvider();
    }, []);

    const onInputChanged = (e: { target: { value: any; }; }) => { 
    const input = e.target.value;
    provider.current.search({ query: input }).then((results: never[]) => {
      setSearchResults(() => results);
    });
  };


    const initProvider = () => {
    provider.current = new OpenStreetMapProvider({
      params: {
        'accept-language': "pt-br",
        countrycodes: "br",
      }
    });
  }

    const onLocationSelected = (selectedLocation: any) => {
        console.log(selectedLocation)
        if (selectedLocation && selectedLocation.label && selectedLocation.x && selectedLocation.y) {
            if (isFrom) {
                setSelectedFrom(() => selectedLocation);
                setIsFrom(() => false);
            } else {
                setSelectedTo(() => selectedLocation);
                setIsFrom(() => true);
          }
            setSearchResults(() => []);
            searchRef.current.value = '';
    }
  };
     
    return(
        <div>
            <AddressContainer>
                <div className='title'>
                    <div className='container'>
                        <p className='actual-address' onClick={() => setIsFrom(true)}>{selectedFrom && selectedFrom.label ? selectedFrom.label : 'Local de embarque'}</p>
                        <p className='dest-address' onClick={() => setIsFrom(false)}>{selectedTo && selectedTo.label ? selectedTo.label : 'Destino '}</p>
                    </div>
                </div>
                <div className='search-container'>
                    <input 
                        className='container-search'
                        type='text'
                        placeholder={isFrom ? 'Add a pickup location' : 'Enter your destination'}
                        onChange={onInputChanged}
                        ref={searchRef}
                    />
                    <div className='result'>
                        {
                            searchResults && searchResults.length !== 0 && searchResults.map((result: any, index ) => (
                                <div className='result-item' key={index} onClick={() => onLocationSelected(result)}>
                                    <div className='search_result-item'>
                                         <svg  viewBox="0 0 24 24" className="g2 ec db"><g transform="matrix( 1 0 0 1 2.524993896484375 1.0250244140625 )"><path fillRule="nonzero" clipRule="nonzero" d="M16.175 2.775C12.475 -0.925 6.475 -0.925 2.775 2.775C-0.925 6.475 -0.925 12.575 2.775 16.275L9.475 22.975L16.175 16.175C19.875 12.575 19.875 6.475 16.175 2.775ZM9.475 11.475C8.375 11.475 7.475 10.575 7.475 9.475C7.475 8.375 8.375 7.475 9.475 7.475C10.575 7.475 11.475 8.375 11.475 9.475C11.475 10.575 10.575 11.475 9.475 11.475Z" opacity="1"></path></g></svg>
                                    </div>
                                    <p className='search_result-label'>{result.label}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </AddressContainer>
        </div>
    )
}

export default  AddressModal