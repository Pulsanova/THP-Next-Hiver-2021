import { useReducer, useCallback } from 'react';
import selectionReducer from './reducer';

const useSelection = () => {
    const [selectedStations, setSelectedStations] = useReducer(selectionReducer, []);

    const handleSelect = useCallback((stationCode) => {
        if (selectedStations.includes(stationCode)) {
            setSelectedStations({ action: 'remove', identifier: stationCode });
        } else {
            setSelectedStations({ action: 'add', identifier: stationCode });
        }
    }, [selectedStations]);

    return { selectedStations, handleSelect };
};

export default useSelection;
