
/**
 * 2 - 1.43
 * 1 - 1.42
 * 0 - 1.41
 * -1 - invalid version
 */
const __GameVersion__ = mp.game.streaming.isModelValid(0x4ABEBF23) ? 2 : mp.game.streaming.isModelValid(0x46699F47) ? 1 : mp.game.streaming.isModelValid(0xA52F6866) ? 0 : -1;

const __Natives__ = {
    SET_ENTITY_ALPHA: ['0x6B7820A04F7672B8', '0x93271EC996EE94D2', '0x44A0870B7E92D7C0'], 
    RESET_ENTITY_ALPHA: ['0x646D2E88F7E1B20A', '0x2087B43C7787E236', '0x9B1E824FFBB7027A'], 
    GET_ENTITY_MODEL: ['0xE9559A12052415BE', '0x4F69FBD64CDF125B', '0x9F47B058362C84B5']
};

const proxyNatives = new Proxy(__Natives__, {
    get: (target, name, receiver) => __Natives__[name][__GameVersion__]
});

exports = proxyNatives;
