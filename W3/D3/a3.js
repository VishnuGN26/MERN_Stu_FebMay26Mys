function mergeSettings(savedSettingsJSON, defaultSettings) {

    const savedSettings = JSON.parse(savedSettingsJSON);

    const mergedObject = {
        ...defaultSettings,
        ...savedSettings
    };

    const mergedJSON = JSON.stringify(mergedObject)
    return {
        mergedObject: mergedObject,
        mergedJSON: mergedJSON
    };
}

const defaultSettings = {
    theme: "light",
    notifications: true,
    fontSize: 14
};

const savedSettingsJSON = '{"theme":"dark","fontSize":16}';

const result = mergeSettings(savedSettingsJSON, defaultSettings);

console.log(result.mergedObject);
console.log(result.mergedJSON);