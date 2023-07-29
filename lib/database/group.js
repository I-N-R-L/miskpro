const mongoose = require("mongoose")
//antilink db
const LinkSchema = new mongoose.Schema({
    id: {
        type: String
    },
    status: {
        type: String
    },
    jid: {
        type: String
    }
})
const linkDB = mongoose.model("linkDB", LinkSchema)
//pdm db
const pdmSchema = new mongoose.Schema({
    id: {
        type: String
    },
    status: {
        type: String
    },
    jid: {
        type: String
    }
})
const pdmDB = mongoose.model("pdmDB", pdmSchema)
//antiword Db
const WordSchema = new mongoose.Schema({
    id: {
        type: String
    },
    data: {
        type: String
    },
    jid: {
        type: String
    }
})
const WordDB = mongoose.model("WordDB", WordSchema)
//antiFake Db
const FakeSchema = new mongoose.Schema({
    id: {
        type: String
    },
    data: {
        type: String
    },
    jid: {
        type: String
    }
})
const fakeNumDB = mongoose.model("fakeNumDB", FakeSchema)
async function setAntiLink(jid, id) {
    await linkDB.find({
        jid,
        id
    }).then(async (link) => {
        if (!link[0]) {
            await new linkDB({
                id,
                status: 'true',
                jid
            }).save();
        }
    })
}
async function removeAntiLink(jid, id) {
    await linkDB.find({
        jid,
        id
    }).then(async (und) => {
        if (und) {
            await linkDB.deleteMany({
                jid: jid
            });
        }
    });
}
async function getAntiLink(jid, id) {
    return new Promise(async (resolve, reject) => {
        await linkDB.find({
            jid,
            id
        }).then(async (getList) => {
            if (getList[0]) {
                resolve(getList[0].status);
            } else {
                resolve('false')
            }
        })
    })
}
//anti Word FUNCTIONS
async function setAntiWord(jid, value, id) {
    await WordDB.find({
        jid,
        id
    }).then(async (link) => {
        if (!link[0]) {
            await new WordDB({
                id,
                data: value,
                jid
            }).save();
        } else {
            let values = await GetWords(jid, id);
            values = values + "," + value;
            await WordDB.update({
                id,
                jid
            }, {
                data: values
            })
        }
    })
}
async function setAnti(jid, value, id) {
    await WordDB.find({
        jid,
        id
    }).then(async (link) => {
        if (!link[0]) {
            await new WordDB({
                id,
                data: value,
                jid
            }).save();
        } else {
            await WordDB.update({
                id,
                jid
            }, {
                data: value
            })
        }
    })
}
async function removeAntiWord(jid, id) {
    await WordDB.find({
        jid,
        id
    }).then(async (und) => {
        if (und) {
            await WordDB.deleteMany({
                jid,
                id
            });
        }
    });
}
async function getListOfWord(id) {
    return new Promise(async (resolve, reject) => {
        await WordDB.find({
            id
        }).then(async (getList) => {
            if (getList) {
                resolve(getList);
            } else {
                resoleve('no data')
            }
        })
    })
}
async function GetWords(jid, id) {
    return new Promise(async (resolve, reject) => {
        await WordDB.find({
            jid,
            id
        }).then(async (getList) => {
            if (getList[0]) {
                getList.map((d) => {
                    let values = d.data;
                    resolve(values);
                })
            } else {
                resolve('no data')
            }
        })
    })
}
async function removeWord(jid, value, id) {
    let datas = await GetWords(jid, id);
    if (datas.includes(value + ",")) {
        datas = datas.replaceAll(value + ",", '');
        await setAnti(jid, datas, id)
    } else if (datas.includes("," + value)) {
        datas = datas.replaceAll("," + value, '');
        await setAnti(jid, datas, id)
    } else if (datas.includes(value)) {
        await removeAntiWord(jid, id);
    }
}

function withValue() {
    return !0
}
async function setpdm(jid, id) {
    await pdmDB.find({
        jid,
        id
    }).then(async (pdm) => {
        if (!pdm[0]) {
            await new pdmDB({
                id,
                status: 'true',
                jid
            }).save();
        }
    })
}
async function removePdm(jid, id) {
    await pdmDB.find({
        jid,
        id
    }).then(async (und) => {
        if (und) {
            await pdmDB.deleteMany({
                jid,
                id
            });
        }
    });
}
async function getPdm(jid, id) {
    return new Promise(async (resolve, reject) => {
        await pdmDB.find({
            jid,
            id
        }).then(async (getpdm) => {
            if (getpdm[0]) {
                resolve(getpdm[0].status);
            } else {
                resolve('false')
            }
        })
    })
}
async function setFakeNum(jid, value, id) {
    await fakeNumDB.find({
        jid,
        id
    }).then(async (link) => {
        if (!link[0]) {
            await new fakeNumDB({
                id,
                data: value,
                jid
            }).save();
        } else {
            let values = await GetFake(jid, id);
            values = values + "," + value;
            await fakeNumDB.update({
                id,
                jid
            }, {
                data: values
            })
        }
    })
}
async function setFake(jid, value, id) {
    await fakeNumDB.find({
        jid,
        id
    }).then(async (link) => {
        if (!link[0]) {
            await new fakeNumDB({
                id,
                data: value,
                jid
            }).save();
        } else {
            await fakeNumDB.update({
                id,
                jid
            }, {
                data: value
            })
        }
    })
}
async function removeFake(jid, id) {
    await fakeNumDB.find({
        jid,
        id
    }).then(async (und) => {
        if (und) {
            await fakeNumDB.deleteMany({
                jid,
                id
            });
        }
    });
}
async function getListofFake(id) {
    return new Promise(async (resolve, reject) => {
        await fakeNumDB.find({
            id
        }).then(async (getList) => {
            if (getList) {
                resolve(getList);
            } else {
                resoleve('no data')
            }
        })
    })
}
async function GetFake(jid, id) {
    return new Promise(async (resolve, reject) => {
        await fakeNumDB.find({
            jid,
            id
        }).then(async (getList) => {
            if (getList[0]) {
                getList.map((d) => {
                    let values = d.data;
                    resolve(values);
                })
            } else {
                resolve('no data')
            }
        })
    })
}
async function removeAFake(jid, value, id) {
    let datas = await GetFake(jid, id);
    if (datas.includes(value + ",")) {
        datas = datas.replaceAll(value + ",", '');
        await setFake(jid, datas, id)
    } else if (datas.includes("," + value)) {
        datas = datas.replaceAll("," + value, '');
        await setFake(jid, datas, id)
    } else if (datas.includes(value)) {
        await removeFake(jid, id);
    }
}
module.exports = {
    linkDB,
    WordDB,
    pdmDB,
    setAntiLink,
    removeAntiLink,
    getAntiLink,
    setAntiWord,
    removeAntiWord,
    getListOfWord,
    GetWords,
    removeWord,
    withValue,
    setpdm,
    removePdm,
    getPdm,
    setFakeNum,
    setFake,
    removeFake,
    getListofFake,
    GetFake,
    removeAFake
};
