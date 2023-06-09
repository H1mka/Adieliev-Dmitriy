const countAchievements = (completed = Array.prototype) => {
    const achiements = {};
    completed.forEach((item) => {
        achiements[item.type] ? (achiements[item.type] += 1) : (achiements[item.type] = 1);
    });
    return achiements;
};

export default countAchievements;
