const usedCommandRecently = new Set();

const isFiltered = (from) => {
    return usedCommandRecently.has(from);
};

const addFilter = (from) => {
    usedCommandRecently.add(from);
    setTimeout(() => {
        return usedCommandRecently.delete(from);
    }, 4500);// 4.5 sec is delay before processing next command;
}
const warnSet = new Set();

const SpamAdd = (from)=>{
warnSet.add(from);
    setTimeout(() => {
        return warnSet.delete(from);
    }, 7000);// 7 sec is delay before processing next command;
}

const UserSparmed = (from)=>{
return warnSet.has(from);
};

const userWarned = new Set();

const giveWarn = (from) => {
userWarned.add(from);
}

const isWarned = (from) => {
userWarned.has(from);
}

module.exports = {isFiltered,addFilter,SpamAdd,UserSparmed,userWarned,isWarned);
