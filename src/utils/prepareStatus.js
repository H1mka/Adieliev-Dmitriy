const prepareStatus = (date) => {
    const now = new Date(),
        completeDate = new Date(date);

    const minutes = Math.floor((now - completeDate) / (1000 * 60)),
        hours = Math.floor(minutes / 60),
        days = Math.floor(hours / 24),
        weeks = Math.floor(days / 7);

    let output = 'Just now';
    if (weeks > 0) {
        if (weeks === 1) output = `A week ago`;
        else output = `${weeks} weeks ago`;
    } else if (days > 0) {
        if (days === 1) output = `A week ago`;
        else output = `${days} days ago`;
    } else if (hours > 0) {
        if (hours === 1) output = `A hour ago`;
        else output = `${hours} hours ago`;
    } else if (minutes > 0) {
        if (minutes === 1) output = `One minute ago`;
        else output = `${minutes} minutes ago`;
    }
    return output;
};

export default prepareStatus;
