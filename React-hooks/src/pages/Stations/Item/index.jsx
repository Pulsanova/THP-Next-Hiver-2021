import './index.scss';

const StationItem = ({ isSelected, onToggleSelect, data }) => (
    <li className="StationItem">
        <h3 className="StationItem__name">{data.name}</h3>
        <p className="StationItem__code">
            #{data.stationcode}
        </p>
        <p className="StationItem__counts">
            {data.numbikesavailable} vélos restants, dont {data.ebike} électriques.
        </p>
        <input
            type="checkbox"
            checked={isSelected}
            onChange={onToggleSelect}
        />
    </li>
);

export default StationItem;
