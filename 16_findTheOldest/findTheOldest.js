const findTheOldest = function(people) {
    return people.reduce((oldest, curr) => {
        const currAge = getAge(curr.yearOfBirth, curr.yearOfDeath);
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

        return currAge > oldestAge ? curr : oldest;
    }, people[0]);
};

const getAge = function(birth, death) {
    if (!death) {
        return (new Date().getFullYear()) - birth;
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
