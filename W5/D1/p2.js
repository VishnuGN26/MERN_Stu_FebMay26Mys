const items = {
    item1: "Laptop",
    item2: "srever",
    item3: "cloudAPI"
};
for(const [item,itemName] of Object.entries(items)){
    console.log(`${item}:${itemName}`);
}