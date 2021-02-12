import './index.scss';
import { API_BASE_URL } from 'config';
import Loading from 'components/Loading';
import useFetch from 'hooks/useFetch';
import StationItem from './Item';
import useSelection from './useSelection';

const PageStations = () => {
    const { isLoading, data: stations } = useFetch(`${API_BASE_URL}&sort=name&rows=20`);
    const { selectedStations, handleSelect } = useSelection();

    return (
        <div className="PageStations">
            <h1>Stations de Vélib à Paris</h1>
            {isLoading && <Loading />}
            {!isLoading && stations.length === 0 && (
                <p className="PageStations__no-data">
                    Aucune station pour le moment.
                </p>
            )}
            <ul className="PageStations__list">
                {stations.map(({ fields }) => (
                    <StationItem
                        data={fields}
                        key={fields.stationcode}
                        onToggleSelect={() => { handleSelect(fields.stationcode); }}
                        isSelected={selectedStations.includes(fields.stationcode)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default PageStations;
