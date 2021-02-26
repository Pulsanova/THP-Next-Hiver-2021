
const getBuildingStages = (buildings) => {
    let lastMaxStages = 0;

    return buildings.reverse().filter((stages) => {
        if (stages > lastMaxStages) {
            lastMaxStages = stages;
            return true;
        }
        return false;
    }).reverse();
}

export default getBuildingStages;
