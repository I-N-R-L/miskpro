const usedCommandRecently = new Set();
const userWarned = new Set();
const warnSet = new Set();
const quickMsg = new Set();
const groupSparmed = new Set();
const groupLongMsgSpam = new Set();


const isFiltered = (from) => {
	return usedCommandRecently.has(from);
};

const addFilter = (from) => {
	usedCommandRecently.add(from);
	setTimeout(() => {
		return usedCommandRecently.delete(from);
	}, 3000); // 3 sec is delay before processing next command;
}

const isGroupSparmed = (from) => {
	return groupSparmed.has(from);
};

const addGroupSparmed = (from) => {
	groupSparmed.add(from);
	setTimeout(() => {
		return groupSparmed.delete(from);
	}, 4500); // 4.5 sec is delay before processing next command;
}

const userGroupQuickMsgd = (from) => {
	return groupLongMsgSpam.has(from);
}
const addGroupQuickMsgd = (from) => {
	groupLongMsgSpam.add(from);
	setTimeout(() => {
		return groupLongMsgSpam.delete(from);
	}, 2500); // 2.5 sec is delay before processing next command;
}

const userQuickMsgd = (from) => {
	return quickMsg.has(from);
}
const addQuickMsgd = (from) => {
	quickMsg.add(from);
	setTimeout(() => {
		return quickMsg.delete(from);
	}, 2500); // 2.5 sec is delay before processing next command;
}

const SpamAdd = (from) => {
	warnSet.add(from);
	setTimeout(() => {
		return warnSet.delete(from);
	}, 7000); // 7 sec is delay before processing next command;
}

const UserSparmed = (from) => {
	return warnSet.has(from);
};

const giveWarn = (from) => {
	return userWarned.add(from);
}

const isWarned = (from) => {
	return userWarned.has(from);
}

module.exports = {
	isFiltered,
	addFilter,
	isGroupSparmed,
	addGroupSparmed,
	userQuickMsgd,
	addQuickMsgd,
	userGroupQuickMsgd,
	addGroupQuickMsgd,
	SpamAdd,
	UserSparmed,
	giveWarn,
	isWarned
};
